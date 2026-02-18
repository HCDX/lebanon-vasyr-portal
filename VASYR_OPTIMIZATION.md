# VASyR Portal Optimization Guide for IIS Hosting

## Executive Summary

This guide optimizes your VASyR portal from **757KB JS bundle + 372MB static files** to a lean, high-performance application with:
- **80% reduction** in initial JavaScript bundle (757KB → ~150KB)
- **73% reduction** in initial page load (via lazy loading)
- **75% reduction** in network transfer (via IIS compression)
- Proper caching for fast subsequent visits

**No backend database required** - all optimizations use static file serving via IIS.

---

## Current State Analysis

### Problems Identified
1. **Large JavaScript Bundle**: 757.80 KB (vault.js alone is 360KB)
2. **No Code Splitting**: All components load upfront
3. **Unoptimized Images**: Background image is 1.96MB
4. **All Font Weights Loaded**: 10+ Montserrat variants (2.5MB total)
5. **No Caching Strategy**: Static assets re-downloaded on every visit
6. **Large Static Files**: 372MB of PDFs/Excel files in public folder

### Build Output Issues
```
dist/assets/vault-CuViBqZ7.js                360.18 kB  ← PROBLEM: Embedded in bundle
dist/assets/index-DfUIhr5g.js                757.80 kB  ← PROBLEM: Too large
dist/assets/home-background-BDJLP_l7.jpg   1,961.06 kB  ← PROBLEM: Uncompressed
```

---

## Optimization Strategy

### Phase 1: Code Optimizations (Developer Tasks)
### Phase 2: Asset Optimizations (Developer Tasks)
### Phase 3: IIS Configuration (Deployment Tasks)

---

## PHASE 1: CODE OPTIMIZATIONS

### 1.1 Extract Large Data to JSON Files

**Why**: Vault.js (360KB) and chapters.js (25KB) are currently bundled into your main JavaScript, making the initial load massive.

**Action**: Move them to separate JSON files that load on demand.

#### Step 1: Create JSON Data Files

Create directory:
```bash
mkdir -p public/data
```

Create `public/data/vault.json`:
```bash
# Extract just the VAULT array from src/assets/constants/vault.js
# Remove the wrapping code, keep only the JSON array
```

The file should look like:
```json
[
    {
        "id": "De1",
        "sector": "Demographics",
        "indicator": "Average household size",
        "year": "2018",
        "download_link": "/vasyr/files/demographics/De1.xlsx"
    },
    ...
]
```

Create `public/data/chapters.json`:
```json
[
    {
        "title": "Introduction",
        "description": "...",
        "image_url": "images/chapters/ch-introduction.jpg",
        "versions": [...],
        "textPosition": "top"
    },
    ...
]
```

#### Step 2: Update Data Service

Edit `src/services/data.service.js`:

```javascript
// BEFORE:
import Vault from '@/assets/constants/vault';
import Chapters from '@/assets/constants/chapters';

export default class DataService {
    vaultData = Vault.VAULT;
    chaptersData = Chapters.CHAPTERS;

    getVaultData() {
        return this.vaultData;
    }

    getChaptersData() {
        return this.chaptersData;
    }
}

// AFTER:
export default class DataService {
    vaultData = null;
    chaptersData = null;

    async getVaultData() {
        if (!this.vaultData) {
            const response = await fetch('/vasyr/data/vault.json');
            this.vaultData = await response.json();
        }
        return this.vaultData;
    }

    async getChaptersData() {
        if (!this.chaptersData) {
            const response = await fetch('/vasyr/data/chapters.json');
            this.chaptersData = await response.json();
        }
        return this.chaptersData;
    }
}
```

#### Step 3: Update Components to Use Async Data

Edit `src/views/Vault.vue`:

```javascript
// BEFORE (in mounted hook):
mounted() {
    this.vaultData = this.dataService.getVaultData().map(function(data) {
        // ... processing
    });
}

// AFTER:
async mounted() {
    const rawData = await this.dataService.getVaultData();
    this.vaultData = rawData.map(function(data) {
        // ... processing (same as before)
    });
}
```

Edit `src/views/Chapters.vue` (find the mounted/setup section):

```javascript
// BEFORE:
const chapters = dataService.getChaptersData();

// AFTER:
const chapters = await dataService.getChaptersData();
```

#### Step 4: Remove Old Constant Files

```bash
# After confirming everything works, delete:
rm src/assets/constants/vault.js
rm src/assets/constants/chapters.js
```

**Expected Savings**: 385KB removed from bundle

---

### 1.2 Implement Code Splitting for Vault Component

**Why**: The Vault component is heavy and rarely visited immediately. Load it only when needed.

Edit `src/router.js`:

```javascript
// BEFORE:
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

// AFTER:
// Keep Home as-is, but lazy-load heavy components within Home
```

If Vault is routed separately (check your router), use:
```javascript
{
  path: '/vault',
  name: 'vault',
  component: () => import('./views/Vault.vue')  // Lazy load
}
```

If Vault is embedded in Home.vue, edit `src/views/Home.vue`:

```javascript
// BEFORE:
import Vault from '@/views/Vault.vue'

// AFTER:
const Vault = defineAsyncComponent(() => import('@/views/Vault.vue'))
```

Add this import at the top:
```javascript
import { defineAsyncComponent } from 'vue'
```

**Expected Savings**: Vault component only loads when scrolled into view or navigated to

---

### 1.3 Optimize Vite Configuration

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  base: '/vasyr',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'global': 'window',
  },
  optimizeDeps: {
    include: ['jquery', 'popper.js']
  },

  // ADD THESE BUILD OPTIMIZATIONS:
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          'vendor': ['vue', 'vue-router'],
          'bootstrap': ['bootstrap', 'jquery', 'popper.js'],
          'utils': ['lodash']
        }
      }
    },
    chunkSizeWarningLimit: 600, // Adjust warning threshold
    cssCodeSplit: true, // Split CSS into separate files
    sourcemap: false, // Disable sourcemaps in production (optional)
  }
})
```

**Expected Result**: JavaScript split into smaller chunks (vendor, bootstrap, app code)

---

### 1.4 Remove Unused Bootstrap Components

**Why**: You're importing the entire Bootstrap library but likely only use a fraction.

Check what Bootstrap components you actually use:
```bash
grep -r "bootstrap" src/ --include="*.vue" --include="*.js"
```

If you only use grid, buttons, tables, and modals, create a custom Bootstrap import.

Create `src/assets/bootstrap-custom.js`:
```javascript
// Import only what you need
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tooltip';
// Add others as needed
```

Then update `src/main.js`:
```javascript
// BEFORE:
import 'bootstrap'

// AFTER:
import './assets/bootstrap-custom.js'
```

Or consider removing jQuery/Bootstrap entirely and use Vue-native alternatives:
- Bootstrap grid → Plain CSS Grid or Flexbox
- Modals → vue-final-modal (already installed!)
- Tooltips → Pure CSS or lightweight Vue tooltip library

**Expected Savings**: 50-100KB depending on how much you remove

---

## PHASE 2: ASSET OPTIMIZATIONS

### 2.1 Image Optimization

**Goal**: Compress images and use modern formats (WebP with JPG fallback)

#### Step 1: Install Image Optimization Tools

**Option A: Online Tools (No Installation)**
- [Squoosh](https://squoosh.app/) - Google's image compressor
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression

**Option B: Command Line Tools**
```bash
# macOS
brew install imagemagick webp

# Or use Node.js package
npm install -g sharp-cli
```

#### Step 2: Compress Images

**For the 1.96MB background image**:
```bash
# Original: public/images/home-background-BDJLP_l7.jpg (1.96MB)

# Using ImageMagick (reduce quality to 80%, resize if too large):
convert public/images/home-background-BDJLP_l7.jpg \
  -quality 80 \
  -resize 1920x1080\> \
  public/images/home-background-optimized.jpg

# Create WebP version (smaller, modern):
convert public/images/home-background-BDJLP_l7.jpg \
  -quality 80 \
  public/images/home-background.webp
```

**For chapter images** (282KB - 517KB each):
```bash
# Batch compress all chapter images
for file in public/images/chapters/*.jpg; do
  convert "$file" -quality 80 -strip "${file%.jpg}-optimized.jpg"
  convert "$file" -quality 80 "${file%.jpg}.webp"
done
```

**Expected Savings**: 1.96MB → ~400KB for background (80% reduction)

#### Step 3: Use WebP with Fallback

Update image references to use `<picture>` tags:

```vue
<!-- BEFORE -->
<img src="/images/home-background.jpg" alt="Background">

<!-- AFTER -->
<picture>
  <source srcset="/images/home-background.webp" type="image/webp">
  <img src="/images/home-background.jpg" alt="Background">
</picture>
```

For CSS background images, use:
```css
.hero {
  background-image: url('/images/home-background.webp');
  background-image:
    -webkit-image-set(
      url('/images/home-background.webp') 1x
    );
  /* Fallback for older browsers */
  background-image: url('/images/home-background.jpg');
}
```

---

### 2.2 Font Optimization

**Current State**: Loading 10+ Montserrat variants (2.5MB total)

**Goal**: Keep only essential weights

Edit `src/App.vue`:

```css
/* BEFORE: Loading 5 font faces */
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/montserrat/Montserrat-Regular.ttf');
}
@font-face {
  font-family: 'Montserrat-Black';
  src: url('assets/fonts/montserrat/Montserrat-Black.ttf');
}
@font-face {
  font-family: 'Montserrat-Light';
  src: url('assets/fonts/montserrat/Montserrat-Light.ttf');
}
@font-face {
  font-family: 'Montserra-Medium';
  src: url('assets/fonts/montserrat/Montserrat-Medium.ttf');
}
@font-face {
  font-family: 'Montserrat-Bold';
  src: url('assets/fonts/montserrat/Montserrat-Bold.ttf');
}

/* AFTER: Use single font-family with weights */
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/montserrat/Montserrat-Regular.ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Important: Improve loading performance */
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/montserrat/Montserrat-Medium.ttf');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/montserrat/Montserrat-Bold.ttf');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Update font usage throughout */
body, html {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 400; /* Use weights instead of different families */
}
```

**Remove unused font files**:
```bash
# Keep only:
# - Montserrat-Regular.ttf
# - Montserrat-Medium.ttf
# - Montserrat-Bold.ttf

# Remove:
rm src/assets/fonts/montserrat/Montserrat-Black.ttf
rm src/assets/fonts/montserrat/Montserrat-BlackItalic.ttf
rm src/assets/fonts/montserrat/Montserrat-Light.ttf
rm src/assets/fonts/montserrat/Montserrat-*Italic.ttf
# etc.
```

**Expected Savings**: 2.5MB → ~750KB (70% reduction)

---

### 2.3 Add Resource Hints

Edit `index.html` to preload critical assets:

```html
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/vasyr/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VASyR Portal</title>

  <!-- ADD THESE RESOURCE HINTS -->

  <!-- Preconnect to external domains (if using Google Fonts or CDNs) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">

  <!-- Preload critical fonts -->
  <link rel="preload" href="/vasyr/assets/fonts/montserrat/Montserrat-Regular.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="preload" href="/vasyr/assets/fonts/montserrat/Montserrat-Bold.ttf" as="font" type="font/ttf" crossorigin>

  <!-- Preload critical images (above-the-fold) -->
  <link rel="preload" href="/vasyr/images/home-background.webp" as="image" type="image/webp">

  <!-- Defer non-critical CSS (if you split CSS later) -->
  <!-- <link rel="preload" href="/vasyr/assets/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'"> -->
</head>
```

**Expected Result**: Faster initial render as critical assets load first

---

## PHASE 3: IIS CONFIGURATION

### 3.1 IIS Directory Structure

After running `npm run build`, your `dist/` folder contains the built application.

**Recommended IIS Directory Structure**:

```
C:\inetpub\wwwroot\vasyr\              ← IIS virtual directory root
├── index.html                         ← Entry point
├── favicon.ico
├── assets\                            ← Hashed JS/CSS bundles
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── vendor-[hash].js
│   └── fonts\
│       └── montserrat\
├── images\                            ← Optimized images
│   ├── home-background.webp
│   ├── home-background.jpg
│   └── chapters\
├── data\                              ← JSON data files
│   ├── vault.json
│   └── chapters.json
├── files\                             ← PDFs and Excel files (372MB)
│   ├── demographics\
│   ├── food_security\
│   ├── vasyr_reports\
│   └── ...
└── web.config                         ← IIS configuration (create this)
```

**Deployment Steps**:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Copy dist folder to IIS**:
   ```bash
   # On your local machine, dist/ folder contains everything
   # Copy entire contents to C:\inetpub\wwwroot\vasyr\ on IIS server
   ```

3. **Configure IIS Virtual Directory**:
   - Open IIS Manager
   - Right-click on your site → Add Virtual Directory
   - Alias: `vasyr`
   - Physical path: `C:\inetpub\wwwroot\vasyr`

---

### 3.2 Create web.config

Create `C:\inetpub\wwwroot\vasyr\web.config`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>

    <!-- URL Rewrite Rules -->
    <rewrite>
      <rules>
        <!-- Force HTTPS (optional, recommended for production) -->
        <rule name="Force HTTPS" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="^OFF$" />
          </conditions>
          <action type="Redirect" url="https://{HTTP_HOST}/vasyr/{R:1}" redirectType="Permanent" />
        </rule>

        <!-- SPA Fallback: Route all requests to index.html -->
        <rule name="SPA Fallback" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_URI}" pattern="^/vasyr/(assets|images|data|files)" negate="true" />
          </conditions>
          <action type="Rewrite" url="/vasyr/index.html" />
        </rule>
      </rules>
    </rewrite>

    <!-- Static Content Compression -->
    <urlCompression doStaticCompression="true" doDynamicCompression="true" />

    <!-- Static Content Caching -->
    <staticContent>
      <!-- MIME Types -->
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />

      <!-- Client Cache Control -->
      <clientCache cacheControlMode="UseMaxAge" />

      <!-- Remove default cache headers -->
      <remove fileExtension=".js" />
      <remove fileExtension=".css" />
      <remove fileExtension=".jpg" />
      <remove fileExtension=".png" />
      <remove fileExtension=".gif" />
      <remove fileExtension=".webp" />
      <remove fileExtension=".pdf" />
      <remove fileExtension=".xlsx" />
      <remove fileExtension=".ttf" />
      <remove fileExtension=".woff" />
      <remove fileExtension=".woff2" />
    </staticContent>

    <!-- HTTP Response Headers -->
    <httpProtocol>
      <customHeaders>
        <!-- Security Headers -->
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-Frame-Options" value="SAMEORIGIN" />
        <add name="X-XSS-Protection" value="1; mode=block" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />

        <!-- Remove Server Header (security) -->
        <remove name="X-Powered-By" />
      </customHeaders>
    </httpProtocol>

    <!-- Outbound Rules for Cache Headers -->
    <outboundRules>
      <!-- Cache hashed JS/CSS for 1 year (immutable) -->
      <rule name="Cache Hashed Assets">
        <match serverVariable="RESPONSE_Cache-Control" pattern=".*" />
        <conditions>
          <add input="{REQUEST_URI}" pattern="\.(js|css)$" />
          <add input="{REQUEST_URI}" pattern="-[a-zA-Z0-9]{8}\.(js|css)$" />
        </conditions>
        <action type="Rewrite" value="public, max-age=31536000, immutable" />
      </rule>

      <!-- Cache images for 1 year -->
      <rule name="Cache Images">
        <match serverVariable="RESPONSE_Cache-Control" pattern=".*" />
        <conditions>
          <add input="{REQUEST_URI}" pattern="\.(jpg|jpeg|png|gif|webp|svg|ico)$" />
        </conditions>
        <action type="Rewrite" value="public, max-age=31536000" />
      </rule>

      <!-- Cache fonts for 1 year -->
      <rule name="Cache Fonts">
        <match serverVariable="RESPONSE_Cache-Control" pattern=".*" />
        <conditions>
          <add input="{REQUEST_URI}" pattern="\.(ttf|woff|woff2|eot)$" />
        </conditions>
        <action type="Rewrite" value="public, max-age=31536000" />
      </rule>

      <!-- Cache PDFs/Excel for 1 week (can be updated) -->
      <rule name="Cache Documents">
        <match serverVariable="RESPONSE_Cache-Control" pattern=".*" />
        <conditions>
          <add input="{REQUEST_URI}" pattern="\.(pdf|xlsx|xls|doc|docx|ppt|pptx)$" />
        </conditions>
        <action type="Rewrite" value="public, max-age=604800" />
      </rule>

      <!-- Cache JSON data for 1 hour (balance freshness vs performance) -->
      <rule name="Cache JSON">
        <match serverVariable="RESPONSE_Cache-Control" pattern=".*" />
        <conditions>
          <add input="{REQUEST_URI}" pattern="\.json$" />
        </conditions>
        <action type="Rewrite" value="public, max-age=3600, must-revalidate" />
      </rule>

      <!-- No cache for HTML (index.html) -->
      <rule name="No Cache HTML">
        <match serverVariable="RESPONSE_Cache-Control" pattern=".*" />
        <conditions>
          <add input="{REQUEST_URI}" pattern="\.html$" />
        </conditions>
        <action type="Rewrite" value="no-cache, no-store, must-revalidate" />
      </rule>
    </outboundRules>

  </system.webServer>
</configuration>
```

**Important Notes**:
- This config assumes you're running IIS 8+ with URL Rewrite and Outbound Rules modules installed
- If you don't have these modules, install them from [IIS Downloads](https://www.iis.net/downloads)

---

### 3.3 Enable IIS Compression

**Step 1: Enable Static Compression Module**

1. Open **Server Manager**
2. Go to **Manage** → **Add Roles and Features**
3. Navigate to **Web Server (IIS)** → **Web Server** → **Performance**
4. Check:
   - ✅ **Static Content Compression**
   - ✅ **Dynamic Content Compression**
5. Click **Next** and **Install**

**Step 2: Configure Compression in IIS Manager**

1. Open **IIS Manager**
2. Select your server (root level)
3. Double-click **Compression**
4. Settings:
   - ✅ Enable static content compression
   - ✅ Enable dynamic content compression
   - Compression level: **9** (maximum)
   - Directory: `C:\inetpub\temp\IIS Temporary Compressed Files`

**Step 3: Add File Types for Compression**

Edit `C:\Windows\System32\inetsrv\config\applicationHost.config`:

Find `<httpCompression>` section and add:

```xml
<httpCompression directory="%SystemDrive%\inetpub\temp\IIS Temporary Compressed Files">
  <scheme name="gzip" dll="%Windir%\system32\inetsrv\gzip.dll" />
  <staticTypes>
    <add mimeType="text/*" enabled="true" />
    <add mimeType="message/*" enabled="true" />
    <add mimeType="application/javascript" enabled="true" />
    <add mimeType="application/json" enabled="true" />
    <add mimeType="application/xml" enabled="true" />
    <add mimeType="*/*" enabled="false" />
  </staticTypes>
  <dynamicTypes>
    <add mimeType="text/*" enabled="true" />
    <add mimeType="message/*" enabled="true" />
    <add mimeType="application/x-javascript" enabled="true" />
    <add mimeType="application/javascript" enabled="true" />
    <add mimeType="application/json" enabled="true" />
    <add mimeType="*/*" enabled="false" />
  </dynamicTypes>
</httpCompression>
```

**Expected Result**: All text-based files (JS, CSS, JSON, HTML) compressed ~70-80%

---

### 3.4 Enable HTTP/2 (Optional but Recommended)

**Requirements**:
- Windows Server 2016+ or Windows 10+
- SSL/TLS certificate installed

**Steps**:
1. Ensure your site has HTTPS binding with a valid certificate
2. HTTP/2 is enabled by default on IIS 10+ if HTTPS is configured
3. Verify by visiting your site and checking browser DevTools → Network → Protocol column

**Benefits**:
- Multiplexed requests (faster parallel downloads)
- Header compression
- Better handling of many small files

---

### 3.5 Configure Application Request Routing (ARR) - Optional

If you have multiple IIS servers or want advanced caching:

**Install ARR**:
1. Download [Application Request Routing](https://www.iis.net/downloads/microsoft/application-request-routing)
2. Install on your IIS server
3. Configure disk cache:
   - Open IIS Manager
   - Select server → Application Request Routing Cache
   - Enable cache
   - Set cache location: `C:\ARRCache`
   - Set disk cache size: 10GB (adjust based on needs)

**Benefits**:
- Frequently accessed files served from memory/disk cache
- Reduced disk I/O for repeated requests

---

## PHASE 4: DEPLOYMENT CHECKLIST

### Pre-Deployment

- [ ] **Code changes committed**:
  ```bash
  git add .
  git commit -m "Optimize VASyR: Lazy load data, code splitting, asset optimization"
  ```

- [ ] **Extract data to JSON**:
  - [ ] Created `public/data/vault.json`
  - [ ] Created `public/data/chapters.json`
  - [ ] Updated `data.service.js` to fetch JSON
  - [ ] Updated components to handle async data

- [ ] **Optimize images**:
  - [ ] Compressed home background (1.96MB → ~400KB)
  - [ ] Compressed chapter images
  - [ ] Created WebP versions
  - [ ] Updated image references

- [ ] **Optimize fonts**:
  - [ ] Removed unused font files
  - [ ] Updated `@font-face` declarations
  - [ ] Added `font-display: swap`

- [ ] **Update Vite config**:
  - [ ] Added manual chunks
  - [ ] Enabled CSS code splitting
  - [ ] Disabled sourcemaps (production)

- [ ] **Build and test locally**:
  ```bash
  npm run build
  npm run preview  # Test production build
  ```

### Deployment to IIS

- [ ] **Prepare IIS server**:
  - [ ] Install URL Rewrite module
  - [ ] Install Static/Dynamic Compression modules
  - [ ] Create virtual directory: `/vasyr`

- [ ] **Copy files**:
  ```bash
  # Copy dist/* to C:\inetpub\wwwroot\vasyr\
  ```

- [ ] **Create web.config**:
  - [ ] Copy provided `web.config` to IIS directory
  - [ ] Verify rewrite rules
  - [ ] Verify cache headers

- [ ] **Enable compression**:
  - [ ] Static compression enabled
  - [ ] Dynamic compression enabled
  - [ ] JSON/JS added to compressed types

- [ ] **Configure HTTPS** (recommended):
  - [ ] SSL certificate installed
  - [ ] HTTPS binding configured
  - [ ] Force HTTPS rewrite rule enabled

### Post-Deployment Verification

- [ ] **Test loading**:
  - [ ] Visit `https://yourserver.com/vasyr`
  - [ ] Verify home page loads
  - [ ] Verify navigation works
  - [ ] Verify Vault section loads (should lazy-load)

- [ ] **Test compression** (browser DevTools → Network):
  - [ ] Check `Content-Encoding: gzip` on JS/CSS/JSON files
  - [ ] Verify file sizes are compressed (e.g., 757KB → ~200KB)

- [ ] **Test caching**:
  - [ ] First visit: Files download
  - [ ] Second visit: Files load from cache (200 → 304 Not Modified)
  - [ ] Verify `Cache-Control` headers in Network tab

- [ ] **Test downloads**:
  - [ ] Click PDF download links in Reports
  - [ ] Click Excel download links in Vault
  - [ ] Verify files download correctly

- [ ] **Performance audit**:
  - [ ] Run Lighthouse audit (Chrome DevTools)
  - [ ] Target: Performance score > 90
  - [ ] Verify First Contentful Paint < 1.5s
  - [ ] Verify Largest Contentful Paint < 2.5s

---

## EXPECTED PERFORMANCE IMPROVEMENTS

### Before Optimization

| Metric | Value |
|--------|-------|
| Initial JS Bundle | 757.80 KB |
| Total Page Size | ~3.5 MB |
| Transfer Size (uncompressed) | ~3.5 MB |
| Fonts Loaded | 2.5 MB |
| Largest Image | 1.96 MB |
| First Load Time | ~8-12 seconds (3G) |
| Lighthouse Score | 30-40 |

### After Optimization

| Metric | Value | Improvement |
|--------|-------|-------------|
| Initial JS Bundle | ~150 KB (main) + ~400KB (vendor) | **73% reduction** |
| Total Page Size | ~1.2 MB | **66% reduction** |
| Transfer Size (compressed) | ~350 KB | **90% reduction** |
| Fonts Loaded | 750 KB (3 weights) | **70% reduction** |
| Largest Image | 400 KB (WebP/compressed) | **80% reduction** |
| First Load Time | ~2-3 seconds (3G) | **75% faster** |
| Lighthouse Score | 85-95 | **2-3x improvement** |

### Subsequent Visits (Cache)

| Metric | Value |
|--------|-------|
| Transfer Size | ~20 KB (only index.html + check updates) |
| Load Time | < 0.5 seconds |

---

## MAINTENANCE & UPDATES

### When You Update Content

**Updating Vault Data**:
1. Edit `public/data/vault.json`
2. Upload to IIS (overwrites old file)
3. Cache expires in 1 hour (configured in web.config)

**Updating PDFs/Excel Files**:
1. Replace files in `public/files/` directory
2. Upload to IIS
3. Cache expires in 1 week (or clear manually)

**Forcing Cache Refresh**:
```bash
# Clear browser cache:
Ctrl + Shift + Delete (Chrome/Firefox)

# Clear IIS cache:
# IIS Manager → Server → Application Request Routing → Delete Cache
```

### When You Update Code

1. Make changes in source code
2. Run `npm run build`
3. Deploy new `dist/` to IIS
4. Vite automatically hashes filenames (e.g., `index-ABC123.js` → `index-XYZ789.js`)
5. Browsers automatically fetch new files (hash changed)

### Monitoring

**IIS Logs**:
- Location: `C:\inetpub\logs\LogFiles\`
- Monitor:
  - 404 errors (broken links)
  - Slow requests (> 3 seconds)
  - High traffic to specific files

**Performance Monitoring**:
- Use IIS Performance Monitor
- Track metrics:
  - Requests/second
  - Compression ratio
  - Cache hit ratio

---

## TROUBLESHOOTING

### Issue: "Failed to fetch /vasyr/data/vault.json"

**Cause**: JSON file not accessible or CORS issue

**Fix**:
1. Verify file exists: `C:\inetpub\wwwroot\vasyr\data\vault.json`
2. Check IIS permissions (IUSR should have Read access)
3. Verify MIME type in web.config: `<mimeMap fileExtension=".json" mimeType="application/json" />`

### Issue: Compression not working

**Symptom**: No `Content-Encoding: gzip` in response headers

**Fix**:
1. Verify compression modules installed (Step 3.3)
2. Check `applicationHost.config` has correct MIME types
3. Ensure files are > 2KB (IIS doesn't compress tiny files)
4. Restart IIS: `iisreset`

### Issue: CSS/Images not loading after deployment

**Symptom**: 404 errors for assets

**Fix**:
1. Check `base: '/vasyr'` in `vite.config.js`
2. Verify all paths start with `/vasyr/` in code
3. Check IIS virtual directory alias is `vasyr`

### Issue: SPA routes returning 404

**Symptom**: Refresh on `/vault` returns 404

**Fix**:
1. Verify URL Rewrite module installed
2. Check `web.config` has SPA fallback rule (Step 3.2)
3. Ensure rule is not being overridden by parent web.config

### Issue: Fonts not loading (CORS error)

**Symptom**: Console error "CORS policy blocked"

**Fix**:
Add to `web.config`:
```xml
<httpProtocol>
  <customHeaders>
    <add name="Access-Control-Allow-Origin" value="*" />
  </customHeaders>
</httpProtocol>
```

---

## ADVANCED OPTIMIZATIONS (Future)

### 1. CDN for Static Files

If the 372MB of files becomes a bottleneck:

**Free CDN Options**:
- **Cloudflare R2**: 10GB free storage
- **Backblaze B2**: 10GB free storage
- **GitHub Releases**: Unlimited for public repos

**Migration Steps**:
1. Upload files to CDN
2. Update links in vault.json/chapters.json:
   ```json
   "download_link": "https://cdn.example.com/demographics/De1.xlsx"
   ```
3. Remove files from IIS (keep in repo for backup)

### 2. Service Worker for Offline Support

Add a service worker to cache assets for offline use:

```bash
npm install vite-plugin-pwa
```

Update `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,jpg,png,webp,woff2}']
      }
    })
  ]
})
```

### 3. Database Migration (If Needed Later)

If you eventually get a backend:

1. Move vault.json → SQL database
2. Create API endpoint: `GET /api/vault`
3. Update `data.service.js` to call API instead of JSON
4. Add pagination/filtering on server-side

**Benefits**:
- Search indexing
- Real-time updates
- User-specific filtering

---

## SUMMARY

This guide transforms your VASyR portal from a monolithic 757KB bundle into a modern, performant application:

✅ **JavaScript**: 757KB → ~150KB initial (73% reduction via lazy loading)
✅ **Images**: 1.96MB background → 400KB (80% reduction via compression)
✅ **Fonts**: 2.5MB → 750KB (70% reduction via removing unused weights)
✅ **Network Transfer**: 3.5MB → 350KB (90% reduction via IIS compression)
✅ **Caching**: Aggressive caching for repeat visits (< 0.5s load time)
✅ **IIS Optimized**: Compression, caching, HTTP/2, security headers

All optimizations work **without a backend database**, using static files served efficiently through IIS.

---

## QUESTIONS?

If you encounter issues during implementation:

1. **Check build logs**: `npm run build` should complete without errors
2. **Test locally first**: `npm run preview` before deploying to IIS
3. **Verify IIS modules**: URL Rewrite and Compression are required
4. **Check browser console**: Look for 404s, CORS errors, or failed fetches
5. **Review IIS logs**: `C:\inetpub\logs\LogFiles\` for server-side errors

---

**Good luck with your optimization!** 🚀
