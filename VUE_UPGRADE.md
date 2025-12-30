# Vue 3 Upgrade Plan for VASyR Portal

## Executive Summary

This document outlines the complete migration strategy from Vue 2.6.10 to Vue 3.x for the Lebanon VASyR Portal. The migration involves updating 12 Vue components, core dependencies, build tooling, and third-party plugins.

**Estimated Effort**: 3-5 days
**Risk Level**: Medium (due to third-party plugin dependencies)
**Recommended Approach**: Phased migration with comprehensive testing

> **⚠️ Important Update (v1.3)**: This migration guide uses **Options API throughout** for consistency and minimal changes. All examples use `this.$gtag.event()` (NOT Composition API). The vue-gtag v3 setup uses `import { createGtag }` with `tagId` parameter. Component code using `this.$gtag` requires **ZERO changes**.

---

## Table of Contents

1. [Package Updates](#1-package-updates)
2. [Breaking Changes Analysis](#2-breaking-changes-analysis)
3. [File-by-File Migration Guide](#3-file-by-file-migration-guide)
4. [Plugin Migration Strategy](#4-plugin-migration-strategy)
5. [Build Configuration Updates](#5-build-configuration-updates)
6. [Migration Phases](#6-migration-phases)
7. [Testing Strategy](#7-testing-strategy)
8. [Risk Assessment](#8-risk-assessment)

---

## 1. Package Updates

### 1.1 Core Dependencies

```json
{
  "dependencies": {
    "vue": "^3.4.0",           // FROM: ^2.6.10
    "vue-router": "^4.2.0",    // FROM: ^3.0.3
    "core-js": "^3.35.0",      // FROM: ^2.6.5
    "bootstrap": "^5.3.0",     // FROM: ^4.3.1 (optional upgrade)
    "jquery": "^3.7.1",        // FROM: ^3.5.0
    "lodash": "^4.17.21",      // FROM: ^4.17.19 (security update)
    "popper.js": "^2.11.8"     // FROM: ^1.15.0 (for Bootstrap 5)
  }
}
```

### 1.2 Vue Plugins - Migration Required

| Vue 2 Plugin | Status | Vue 3 Solution | Action Required |
|--------------|--------|----------------|-----------------|
| `vue-gtag@^1.16.1` | ✅ Upgrade available | `vue-gtag@^3.6.0` | Update to v3 (same package!) |
| `vue-images-loaded@^1.1.2` | ❌ Not compatible | Custom implementation or `@vueuse/core` | Rewrite |
| `vue-js-modal@^1.3.31` | ❌ Not compatible | `vue-final-modal@^4.5.0` | Replace |

**Important Note on vue-gtag**:
- ⚠️ **Do NOT use `vue-gtag-next`** - it was a temporary experimental package
- ✅ **Use `vue-gtag@^3.6.0`** - the official package now supports Vue 3 natively
- **Breaking change**: Import syntax changed from `import VueGtag` (default) to `import { createGtag }` (named)
- **Breaking change**: Config key changed from `config: { id: "..." }` to `tagId: "..."`
- The `this.$gtag` API remains unchanged in component code
- New composable `useGtag()` available for Composition API

### 1.3 Dev Dependencies

```json
{
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",        // NEW: Vite support
    "vite": "^5.0.0",                      // NEW: Build tool (optional, can keep Vue CLI)
    "@vue/cli-plugin-babel": "^5.0.8",     // FROM: ^3.11.0
    "@vue/cli-plugin-eslint": "^5.0.8",    // FROM: ^3.11.0
    "@vue/cli-service": "^5.0.8",          // FROM: ^4.5.0
    "@babel/eslint-parser": "^7.23.0",     // FROM: babel-eslint@^10.0.1
    "eslint": "^8.56.0",                   // FROM: ^5.16.0
    "eslint-plugin-vue": "^9.20.0",        // FROM: ^5.0.0
    "serialize-javascript": "^6.0.2"       // FROM: >=3.1.0
  }
}
```

**Note**: Can optionally migrate from Vue CLI to Vite for faster builds, but Vue CLI 5 supports Vue 3.

---

## 2. Breaking Changes Analysis

### 2.1 Vue 2 Patterns Found in Codebase

#### ✅ Instance API Usage

| Pattern | Files Affected | Migration Required |
|---------|----------------|-------------------|
| `this.$parent` | `TopMenu.vue` (line 65-69) | ✅ Replace with provide/inject or refs |
| `this.$modal` | `App.vue`, `Chapters.vue` | ✅ Replace with new modal plugin API |
| `this.$gtag` | `Main.vue`, `Chapters.vue` | ✅ Update main.js only - component code unchanged! |
| `data: () => ({})` | All components | ⚠️ Works but `data()` preferred |
| `v-on:click` | Multiple files | ⚠️ Works but `@click` preferred (consistency) |
| `v-bind:key` | Multiple files | ⚠️ Works but `:key` preferred (consistency) |

#### ✅ Global API Changes

| Vue 2 Code | Location | Vue 3 Replacement |
|------------|----------|-------------------|
| `new Vue({...})` | `main.js:17` | `createApp({...})` |
| `Vue.use(Router)` | `router.js:5` | Removed (no longer needed) |
| `Vue.directive()` | `directives.js:3` | `app.directive()` on app instance |
| `Vue.config.productionTip` | `main.js:10` | Removed (no longer exists) |

#### ✅ Router Changes

| Vue Router 3 | Location | Vue Router 4 |
|--------------|----------|--------------|
| `new Router({...})` | `router.js:11` | `createRouter({...})` |
| Missing `history` mode | `router.js` | Must specify `history: createWebHashHistory()` |

#### ✅ Directive Changes

- **Custom Directive**: `v-tooltip` in `directives.js` uses jQuery - needs lifecycle hook updates
- **v-images-loaded**: Third-party directive needs replacement

#### ✅ Component Event Emitters

- `Dialog.vue` uses `this.$emit('close')` - still works in Vue 3 but should define in `emits` option

---

## 3. File-by-File Migration Guide

### 3.1 Core Files

#### `package.json`

**Changes Required**:
1. Update all dependencies per section 1
2. Update scripts to remove `NODE_OPTIONS=--openssl-legacy-provider` (no longer needed in modern Node)
3. Update ESLint config for Vue 3

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",  // Changed
      "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "@babel/eslint-parser"  // Changed
    }
  }
}
```

---

#### `src/main.js`

**Current Code**:
```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import VueGtag from 'vue-gtag'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/directives/directives.js'

Vue.config.productionTip = false
Vue.use(VModal)

Vue.use(VueGtag, {
  config: { id: "G-6N8Q8GQ89F" }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

**Vue 3 Migration**:
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'  // New modal library
import 'vue-final-modal/style.css'
import { createGtag } from 'vue-gtag'  // v3: Named import, not default!
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

// Register directives
import { registerDirectives } from '@/directives/directives.js'
registerDirectives(app)

// Setup vue-gtag with global properties (needed for this.$gtag in Options API)
const gtag = createGtag({
  tagId: 'G-6N8Q8GQ89F'  // v3: Changed from config.id to tagId
})

// Use plugins
const vfm = createVfm()
app.use(vfm)
app.use(router)
app.use(gtag)

app.mount('#app')
```

**Note on vue-gtag v3 Installation Methods**:
- **`createGtag`** (used above): Enables `this.$gtag` in Options API components (what this project needs)
- **`configure`** (alternative): Smaller bundle but no global `$gtag` - only use if migrating all components to Composition API

---

#### `src/router.js`

**Current Code**:
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
```

**Vue 3 Migration**:
```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```

---

#### `src/directives/directives.js`

**Current Code**:
```javascript
import Vue from 'vue'

Vue.directive('tooltip', function(el, binding){
    $(el).tooltip({
        title: binding.value,
        placement: binding.arg,
        trigger: 'hover'
    })
})
```

**Vue 3 Migration**:
```javascript
export function registerDirectives(app) {
  // Vue 3 directive with lifecycle hooks
  app.directive('tooltip', {
    mounted(el, binding) {
      $(el).tooltip({
        title: binding.value,
        placement: binding.arg,
        trigger: 'hover'
      })
    },
    updated(el, binding) {
      $(el).tooltip('dispose')  // Clean up old tooltip
      $(el).tooltip({
        title: binding.value,
        placement: binding.arg,
        trigger: 'hover'
      })
    },
    unmounted(el) {
      $(el).tooltip('dispose')  // Cleanup
    }
  })
}
```

**Notes**:
- Vue 3 directives use `mounted`, `updated`, `unmounted` instead of `bind`, `update`, `unbind`
- Export function to register on app instance

---

### 3.2 Component Files

#### `src/App.vue`

**Changes Required**:

1. **Replace `vue-images-loaded` directive** (no longer compatible):

**Current Code**:
```vue
<template>
  <div id="main-container" v-images-loaded="loaded">
    <!-- content -->
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded'

export default {
  directives: {
    imagesLoaded
  },
  methods: {
    loaded() {
      this.allLoaded = true;
      // ...
    }
  }
}
</script>
```

**Vue 3 Migration** (Custom Implementation):
```vue
<template>
  <div id="main-container" ref="mainContainer">
    <!-- content -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const mainContainer = ref(null)
    const allLoaded = ref(false)
    const noScroll = ref(true)
    const loading = ref(true)
    const mounted = ref(false)

    const checkImagesLoaded = () => {
      const images = mainContainer.value.querySelectorAll('img')
      const promises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve()
        return new Promise(resolve => {
          img.addEventListener('load', resolve)
          img.addEventListener('error', resolve)
        })
      })

      return Promise.all(promises)
    }

    const loaded = () => {
      allLoaded.value = true
      if (mounted.value) {
        noScroll.value = false
        loading.value = false
      }
    }

    onMounted(() => {
      document.onreadystatechange = () => {
        if (document.readyState === "complete") {
          mounted.value = true

          if (allLoaded.value) {
            loading.value = false
            noScroll.value = false
          }
        }
      }

      checkImagesLoaded().then(() => {
        loaded()
      })
    })

    return {
      mainContainer,
      allLoaded,
      noScroll,
      loading,
      mounted
    }
  }
}
</script>
```

**OR** use `@vueuse/core` library:
```bash
npm install @vueuse/core
```

```vue
<script>
import { useImage } from '@vueuse/core'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    // Simpler approach with VueUse
    onMounted(() => {
      // Track all images
      const images = document.querySelectorAll('#main-container img')
      const loadPromises = Array.from(images).map(img =>
        new Promise(resolve => {
          if (img.complete) resolve()
          else {
            img.onload = resolve
            img.onerror = resolve
          }
        })
      )

      Promise.all(loadPromises).then(() => {
        // All images loaded
      })
    })
  }
}
</script>
```

2. **Update modal usage**:

**Current Code**:
```vue
<template>
  <modal :height="200" name="download-modal">
    <!-- content -->
  </modal>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$modal.hide('download-modal');
    }
  }
}
</script>
```

**Vue 3 Migration** (using `vue-final-modal`):
```vue
<template>
  <VueFinalModal
    v-model="showModal"
    class="modal-container"
    content-class="modal-content"
  >
    <div class="header">
      <div class="header-text">File Not Available</div>
      <div class="close-button" @click="closeModal">x</div>
    </div>
    <div class="content">
      <div class="content-text">
        This File is Currently Not Available, Coming Soon
      </div>
    </div>
  </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
import { ref } from 'vue'

export default {
  components: {
    VueFinalModal
  },
  setup() {
    const showModal = ref(false)

    const closeModal = () => {
      showModal.value = false
    }

    // Expose method to show modal (for child components)
    const openModal = () => {
      showModal.value = true
    }

    return {
      showModal,
      closeModal,
      openModal
    }
  }
}
</script>
```

**Note**: Need to provide modal control method to child components via `provide/inject` or event bus alternative.

---

#### `src/components/TopMenu.vue`

**Critical Change**: Replace `this.$parent` usage

**Current Code** (Lines 65-69):
```javascript
this.chaptersPosition = this.$parent.$el.querySelector('#chapters').offsetTop - 75;
this.mapsPosition = this.$parent.$el.querySelector('#maps').offsetTop - 75;
// etc...
```

**Problem**: `$parent` is discouraged in Vue 3 and component instance no longer has `$el` directly.

**Vue 3 Migration Options**:

**Option 1: Use document.querySelector** (simplest):
```javascript
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      setTimeout(() => {
        const chaptersPosition = document.querySelector('#chapters')?.offsetTop - 75
        const mapsPosition = document.querySelector('#maps')?.offsetTop - 75
        const reportPosition = document.querySelector('#reports')?.offsetTop - 75
        const toolsPosition = document.querySelector('#tools')?.offsetTop - 75
        const vaultPosition = document.querySelector('#vault')?.offsetTop - 75

        // Store in reactive refs
      }, 1000)
    })
  }
}
```

**Option 2: Provide/Inject Pattern** (more Vue-idiomatic):

In `App.vue`:
```javascript
import { provide, ref } from 'vue'

export default {
  setup() {
    const appElement = ref(null)
    provide('appElement', appElement)

    return { appElement }
  }
}
```

In `TopMenu.vue`:
```javascript
import { inject, onMounted } from 'vue'

export default {
  setup() {
    const appElement = inject('appElement')

    onMounted(() => {
      setTimeout(() => {
        if (appElement.value) {
          // Access DOM elements
        }
      }, 1000)
    })
  }
}
```

**Recommendation**: Use Option 1 (document.querySelector) since the app is a single-page with IDs.

---

#### `src/views/Main.vue`

**Changes Required**:
**NONE!** When using `createGtag` in main.js, `this.$gtag` works identically in Vue 3.

**Current Code**:
```javascript
export default {
  mounted() {
    this.$gtag.event('site_visit');
  },
  methods: {
    trackDownload() {
      this.$gtag.event('file_download_clicked', {
        file_name: 'VASyR 2024 Dashboard.pdf',
      });
    }
  }
}
```

**Vue 3 Migration** (NO changes needed!):
```javascript
export default {
  mounted() {
    this.$gtag.event('site_visit');  // Works exactly the same in vue-gtag v3!
  },
  methods: {
    trackDownload() {
      this.$gtag.event('file_download_clicked', {
        file_name: 'VASyR 2024 Dashboard.pdf',
      });
    }
  }
}
```

**Note**: This component requires ZERO code changes. The `this.$gtag` API is identical between v1 and v3 when using the `createGtag` installation method.

---

#### `src/views/Chapters.vue`

**Changes Required**:
1. Update modal show method (provide/inject from parent)
2. **NO changes needed for `this.$gtag`** - works identically!

**Current Code**:
```javascript
methods: {
  openDialog() {
    this.$modal.show('download-modal');
  },
  trackDownload(chapter, versionYear) {
    this.$gtag.event('file_download_clicked', {
      file_name: chapter.title + '-' + versionYear
    });
  }
}
```

**Vue 3 Migration**:

Since vue-js-modal doesn't work in Vue 3, we need to inject the modal control from App.vue. However, **we keep the Options API** for everything else.

In `App.vue` - Add provide for modal (see App.vue section for full code):
```javascript
// In App.vue setup() - provide modal control
provide('openDownloadModal', openDownloadModal)
```

In `Chapters.vue` - **Options API with inject**:
```javascript
export default {
  inject: ['openDownloadModal'],  // Inject modal control
  data() {
    return {
      dataService: new DataService(),
      chapters: []
    }
  },
  mounted() {
    this.chapters = this.dataService.getChaptersData();
  },
  methods: {
    openDialog() {
      this.openDownloadModal();  // Use injected function
    },
    trackDownload(chapter, versionYear) {
      this.$gtag.event('file_download_clicked', {  // NO change needed!
        file_name: chapter.title + '-' + versionYear
      });
    }
  }
}
```

**Key Points**:
- ✅ `this.$gtag.event()` works identically - NO changes
- ✅ Stays in Options API (minimal migration)
- ⚠️ Only modal control uses inject (unavoidable due to vue-final-modal)

---

#### `src/components/Dialog.vue`

**Changes Required**:
1. Define `emits` option (best practice)
2. Component is not currently used (can remove or update)

**Current Code**:
```javascript
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
```

**Vue 3 Migration**:
```javascript
export default {
  name: 'modal',
  emits: ['close'],  // Define emits
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
```

**Note**: This component appears unused (App.vue uses `vue-js-modal` instead). Consider removing or updating to use as base modal component.

---

#### Other View Components

The following files need minimal changes:
- `src/views/Home.vue` - No breaking changes, already using component composition
- `src/views/RoadMap.vue` - Standard component, update `data()` format if needed
- `src/views/Maps.vue` - Standard component
- `src/views/Reports.vue` - Standard component
- `src/views/Tools.vue` - Standard component
- `src/views/Vault.vue` - Standard component
- `src/components/TrainingTable.vue` - Standard component

**General updates for all**:
- Change `data: () => ({})` to `data() { return {} }` (optional, both work)
- Replace `v-on:` with `@` for consistency
- Replace `v-bind:` with `:` for consistency

---

### 3.3 Configuration Files

#### `vue.config.js`

**Current Code**:
```javascript
const webpack = require("webpack");

module.exports = {
  publicPath: '/vasyr',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
```

**Vue 3 Migration** (Vue CLI 5):
```javascript
const webpack = require("webpack");
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/vasyr',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']  // Or @popperjs/core for Bootstrap 5
      })
    ]
  }
})
```

**Note**: If upgrading to Bootstrap 5, change Popper import:
```javascript
Popper: ['@popperjs/core', 'default']
```

---

#### `babel.config.js`

**Current Code**:
```javascript
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```

**Vue 3 Migration**:
```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```

---

## 4. Plugin Migration Strategy

### 4.1 vue-js-modal → vue-final-modal

**Installation**:
```bash
npm uninstall vue-js-modal
npm install vue-final-modal@^4.5.0
```

**Key API Differences**:

| vue-js-modal (Vue 2) | vue-final-modal (Vue 3) |
|---------------------|------------------------|
| `this.$modal.show('name')` | `v-model="showModal"` (reactive ref) |
| `this.$modal.hide('name')` | `showModal.value = false` |
| `<modal name="...">` | `<VueFinalModal v-model="...">` |
| Global registration | Import per component or global |

**Migration Approach**:
1. Create modal state management (refs in parent component)
2. Use provide/inject to share modal controls across components
3. Update all `this.$modal` references

---

### 4.2 vue-gtag v1 → vue-gtag v3

**Installation**:
```bash
npm install vue-gtag@^3.6.0
# No need to uninstall - just update the version!
```

**Key Changes**:

| vue-gtag v1 (Vue 2) | vue-gtag v3 (Vue 3) | Notes |
|---------------------|---------------------|-------|
| `import VueGtag from 'vue-gtag'` | `import { createGtag } from 'vue-gtag'` | ⚠️ Named import required |
| `Vue.use(VueGtag, { config: { id: "..." }})` | `const gtag = createGtag({ tagId: "..." }); app.use(gtag)` | ⚠️ Changed config.id → tagId |
| `this.$gtag.event(...)` | `this.$gtag.event(...)` | ✅ Same! |
| N/A | `useGtag()` composable | NEW for Composition API |

**Migration Steps**:
1. Update package.json: `"vue-gtag": "^3.6.0"`
2. Run `npm install`
3. **Update `main.js`** with new import and initialization:
   ```javascript
   import { createGtag } from 'vue-gtag'

   const gtag = createGtag({
     tagId: 'G-6N8Q8GQ89F'  // Changed from config.id!
   })

   app.use(gtag)
   ```
4. **No component changes needed** - `this.$gtag.event()` API is identical in all Options API components!

**Two Installation Methods in v3**:

1. **`createGtag`** (use this for Options API projects):
   - Adds global `$gtag` to all components
   - Allows `this.$gtag.event(...)` in Options API
   - Larger bundle size

2. **`configure`** (lighter alternative):
   ```javascript
   import { configure } from 'vue-gtag'
   configure({ tagId: 'G-6N8Q8GQ89F' })
   ```
   - Smaller bundle size
   - No global `$gtag` - must use `useGtag()` composable
   - Only viable if migrating all components to Composition API

**Recommendation**: Use `createGtag` since this project uses Options API with `this.$gtag`.

**Migration Impact**:
- 🟢 **Main.vue**: Zero changes - `this.$gtag.event()` works identically
- 🟢 **Chapters.vue**: Zero changes to gtag code - `this.$gtag.event()` works identically
- ✅ All existing Options API code with `this.$gtag` continues to work without modification

**New Features in v3** (for future use):
- TypeScript support (fully rewritten in TS)
- Composition API composable: `useGtag()` (optional, not needed for this migration)
- New consent methods: `consent()`, `consentGrantedAll()`, `consentDeniedAll()`
- E-commerce tracking: `ecommerce()`
- ESM-only (modern build system)

---

### 4.3 vue-images-loaded → Custom Solution

**Option A: Custom Implementation** (lightweight, no dependencies)

Create `src/composables/useImagesLoaded.js`:
```javascript
import { ref, onMounted } from 'vue'

export function useImagesLoaded(containerRef) {
  const allLoaded = ref(false)

  const checkImagesLoaded = () => {
    if (!containerRef.value) return Promise.resolve()

    const images = containerRef.value.querySelectorAll('img')
    if (images.length === 0) {
      allLoaded.value = true
      return Promise.resolve()
    }

    const promises = Array.from(images).map(img => {
      if (img.complete) return Promise.resolve()

      return new Promise(resolve => {
        img.addEventListener('load', resolve, { once: true })
        img.addEventListener('error', resolve, { once: true })
      })
    })

    return Promise.all(promises).then(() => {
      allLoaded.value = true
    })
  }

  onMounted(() => {
    checkImagesLoaded()
  })

  return {
    allLoaded,
    checkImagesLoaded
  }
}
```

**Usage in App.vue**:
```vue
<script>
import { ref } from 'vue'
import { useImagesLoaded } from '@/composables/useImagesLoaded'

export default {
  setup() {
    const mainContainer = ref(null)
    const { allLoaded, checkImagesLoaded } = useImagesLoaded(mainContainer)

    return {
      mainContainer,
      allLoaded
    }
  }
}
</script>
```

**Option B: Use @vueuse/core** (recommended for future extensibility)

```bash
npm install @vueuse/core
```

Use built-in utilities like `useImage` or `onMounted` with image tracking logic.

---

### 4.4 Bootstrap 4 vs Bootstrap 5

**Current**: Bootstrap 4.3.1

**Options**:
1. **Keep Bootstrap 4**: Minimal changes, jQuery remains required
2. **Upgrade to Bootstrap 5**: Remove jQuery dependency for Bootstrap (but still needed for tooltips directive)

**Recommendation**: Keep Bootstrap 4 initially to reduce migration scope. Upgrade to Bootstrap 5 in a separate phase if desired.

---

## 5. Build Configuration Updates

### 5.1 Scripts Update

Remove `NODE_OPTIONS=--openssl-legacy-provider` (no longer needed with Vue CLI 5 / modern Node):

```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```

### 5.2 ESLint Configuration

Update parser and Vue plugin:

```json
{
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser",
      "requireConfigFile": false
    },
    "rules": {}
  }
}
```

### 5.3 Optional: Migrate to Vite

**Why**: Vite offers significantly faster dev server and builds.

**When**: Consider after Vue 3 migration is stable.

**How**:
1. Install Vite and plugins
2. Create `vite.config.js`
3. Update `index.html` structure
4. Update import paths

**Estimated Effort**: +1 day

---

## 6. Migration Phases

### Phase 1: Preparation (1 day)

**Tasks**:
1. ✅ Create feature branch: `git checkout -b feature/vue3-upgrade`
2. ✅ Backup current working state
3. ✅ Update `package.json` dependencies
4. ✅ Run `npm install` (expect errors/warnings)
5. ✅ Update dev dependencies and build tools
6. ✅ Fix any npm audit vulnerabilities

**Success Criteria**: Clean npm install with Vue 3 packages

---

### Phase 2: Core Framework Migration (1 day)

**Tasks**:
1. ✅ Update `main.js` to use `createApp()`
2. ✅ Update `router.js` to use `createRouter()`
3. ✅ Update `directives.js` to export registration function
4. ✅ Update `vue.config.js` and `babel.config.js`
5. ✅ Update ESLint configuration
6. ✅ Fix any TypeScript errors (if applicable)

**Testing**:
- ✅ `npm run serve` starts without errors
- ✅ Home page renders (even if broken)

---

### Phase 3: Plugin Migration (1 day)

**Tasks**:
1. ✅ Replace `vue-js-modal` with `vue-final-modal`
   - Update `App.vue` modal implementation
   - Create provide/inject for modal controls
   - Update `Chapters.vue` modal usage
2. ✅ Update `vue-gtag` to v3
   - Update `main.js` initialization only (use `createGtag` with `tagId`)
   - **Zero component changes** - all `this.$gtag.event()` calls work identically
3. ✅ Replace `vue-images-loaded`
   - Create custom composable OR install @vueuse/core
   - Update `App.vue` loading logic

**Testing**:
- ✅ Modal opens/closes correctly
- ✅ Google Analytics events fire (check browser console/GA dashboard)
- ✅ Loading screen disappears when images load

---

### Phase 4: Component Updates (1 day)

**Tasks**:
1. ✅ Update `TopMenu.vue` to remove `this.$parent` usage
2. ✅ Update `Dialog.vue` to add `emits` declaration
3. ✅ Update all components to use consistent syntax:
   - Replace `v-on:` → `@`
   - Replace `v-bind:` → `:`
   - Change `data: () => ({})` → `data() { return {} }`
4. ✅ Test each section:
   - Main/Home section
   - Chapters section
   - Maps section
   - Reports section
   - Tools section
   - Vault section

**Testing**:
- ✅ All sections render correctly
- ✅ Navigation scrolling works
- ✅ Downloads work
- ✅ External links work

---

### Phase 5: Testing & Bug Fixes (0.5-1 day)

**Tasks**:
1. ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
2. ✅ Mobile responsive testing
3. ✅ Accessibility testing (keyboard navigation, screen readers)
4. ✅ Performance testing (Lighthouse audit)
5. ✅ Fix any bugs discovered

**Testing Checklist**:
- [ ] Loading screen displays and hides correctly
- [ ] Top navigation highlights active section
- [ ] Smooth scrolling to sections works
- [ ] All chapter downloads work
- [ ] All report downloads work
- [ ] Maps link opens in new tab
- [ ] Tools section displays correctly
- [ ] Vault section displays correctly
- [ ] Modal shows when needed
- [ ] Google Analytics tracking works
- [ ] Bootstrap tooltips work (if used)
- [ ] Responsive design on mobile
- [ ] No console errors
- [ ] No accessibility violations

---

### Phase 6: Deployment (0.5 day)

**Tasks**:
1. ✅ Run production build: `npm run build`
2. ✅ Test production build locally
3. ✅ Update deployment documentation if needed
4. ✅ Deploy to staging environment
5. ✅ QA testing on staging
6. ✅ Deploy to production
7. ✅ Monitor for errors

**Rollback Plan**:
- Keep Vue 2 code in separate branch
- If critical issues, revert deployment
- Fix issues and redeploy

---

## 7. Testing Strategy

### 7.1 Unit Testing (Optional)

Since the project doesn't currently have unit tests, consider adding basic tests:

```bash
npm install --save-dev @vue/test-utils vitest
```

Create `vitest.config.js` and test key components.

**Priority Components to Test**:
1. `DataService` (data provider)
2. `helpers.js` (utility functions)
3. `TopMenu` navigation logic

---

### 7.2 Manual Testing Checklist

**Functional Testing**:
- [ ] Page loads without errors
- [ ] Loading animation displays correctly
- [ ] Navigation menu is fixed at top
- [ ] Clicking nav items scrolls to correct section
- [ ] Active nav item is highlighted
- [ ] All download links work
- [ ] External links open in new tab
- [ ] Modal displays when triggered
- [ ] Modal closes correctly
- [ ] Google Analytics events fire
- [ ] Parallax effect on main section (desktop)
- [ ] No parallax on mobile

**Visual Testing**:
- [ ] Fonts load correctly (Montserrat)
- [ ] Colors match design (CSS variables)
- [ ] Responsive breakpoints work
- [ ] Images load and display correctly
- [ ] Bootstrap grid works
- [ ] Button hover states work

**Performance Testing**:
- [ ] Page load time < 3s
- [ ] Lighthouse score > 90
- [ ] No layout shifts (CLS)
- [ ] Smooth animations

---

### 7.3 Browser Compatibility

**Test on**:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Mobile Chrome (Android)

---

## 8. Risk Assessment

### 8.1 High Risk Areas

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Modal system breaks** | Critical - affects user feedback | Keep fallback modal implementation; test thoroughly |
| **Google Analytics stops tracking** | High - lose analytics data | Test events in GA debug mode; verify in GA dashboard |
| **Loading screen never disappears** | Critical - blocks app usage | Add timeout fallback; test image loading logic |
| **Navigation scrolling breaks** | High - poor UX | Test on multiple devices/browsers; add error handling |
| **Third-party CDN resources fail** | Medium - fonts/icons missing | Add fallback for Google Fonts; consider self-hosting |

---

### 8.2 Medium Risk Areas

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Bootstrap/jQuery conflicts** | Medium - UI elements break | Keep Bootstrap 4; test all Bootstrap components |
| **Tooltip directive breaks** | Low-Medium - tooltips don't show | Test jQuery tooltip integration; add fallback |
| **Build size increases** | Low-Medium - slower load times | Run bundle analysis; optimize if needed |
| **IE11 support required** | High if needed | Vue 3 doesn't support IE11; clarify browser requirements |

---

### 8.3 Low Risk Areas

| Risk | Impact | Mitigation |
|------|--------|------------|
| **ESLint errors in legacy code** | Low - code quality | Run linter incrementally; fix critical issues only |
| **Accessibility regressions** | Low-Medium - WCAG compliance | Run accessibility audit; fix violations |
| **Performance degradation** | Low - Vue 3 is faster | Monitor bundle size and runtime performance |

---

### 8.4 Dependencies Risk

**Third-Party Packages**:
- `vue-images-loaded`: ❌ No Vue 3 support → **Must replace**
- `vue-js-modal`: ❌ No Vue 3 support → **Must replace**
- `vue-gtag`: ✅ Update to v3 (minimal changes, same API)
- `bootstrap`: ✅ Compatible
- `jquery`: ✅ Compatible
- `lodash`: ✅ Compatible
- `vue-router`: ⚠️ Major version change (3→4)

---

## 9. Post-Migration Opportunities

After successful Vue 3 migration, consider:

1. **Migrate to Composition API** (optional)
   - Better code organization
   - Improved TypeScript support
   - Better logic reuse
   - **For vue-gtag**: Can use `useGtag()` composable instead of `this.$gtag` for smaller bundle size
   - **Example migration**:
     ```javascript
     // Current Options API (works in Vue 3)
     export default {
       methods: {
         track() {
           this.$gtag.event('click')
         }
       }
     }

     // Future Composition API (optional optimization)
     import { useGtag } from 'vue-gtag'
     export default {
       setup() {
         const { event } = useGtag()
         const track = () => event('click')
         return { track }
       }
     }
     ```

2. **Add TypeScript** (optional)
   - Better IDE support
   - Catch errors at compile time

3. **Optimize Bundle Size**
   - Tree-shaking improvements
   - Lazy load components
   - Code splitting

4. **Improve Performance**
   - Add `<Suspense>` for loading states
   - Use `<Teleport>` for modals
   - Optimize images (WebP, lazy loading)

5. **Upgrade to Bootstrap 5**
   - Remove jQuery dependency (except tooltips)
   - Modern utility classes
   - Better customization

6. **Add Testing**
   - Unit tests with Vitest
   - E2E tests with Playwright
   - Visual regression tests

7. **Migrate to Vite**
   - Faster dev server (instant HMR)
   - Faster builds
   - Better DX

---

## 10. Rollback Plan

If critical issues are discovered post-deployment:

1. **Immediate Rollback** (< 5 minutes)
   ```bash
   git checkout master
   npm install
   npm run build
   # Deploy previous build
   ```

2. **Fix Forward** (if issues are minor)
   - Create hotfix branch
   - Fix specific issue
   - Test and redeploy

3. **Version Pinning** (prevent future issues)
   - Use exact versions in `package.json` (remove `^`)
   - Lock `package-lock.json` in git

---

## 11. Success Metrics

**Technical Metrics**:
- ✅ Zero console errors on page load
- ✅ All features work as before
- ✅ Lighthouse performance score ≥ 90
- ✅ Bundle size increase < 10%
- ✅ Page load time ≤ previous version

**Business Metrics**:
- ✅ GA events tracking correctly
- ✅ Download counts unchanged
- ✅ Bounce rate unchanged
- ✅ No user complaints

---

## 12. Timeline Summary

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| 1. Preparation | 1 day | None |
| 2. Core Framework | 1 day | Phase 1 |
| 3. Plugin Migration | 1 day | Phase 2 |
| 4. Component Updates | 1 day | Phase 3 |
| 5. Testing & Fixes | 0.5-1 day | Phase 4 |
| 6. Deployment | 0.5 day | Phase 5 |
| **Total** | **4.5-5 days** | - |

**Buffer**: Add 1-2 days for unexpected issues.

**Total Estimated Time**: 5-7 days

---

## 13. Questions to Answer Before Starting

1. **Browser Support**: Do we need IE11 support? (Vue 3 doesn't support IE11)
2. **Bootstrap Version**: Keep Bootstrap 4 or upgrade to Bootstrap 5?
3. **Build Tool**: Keep Vue CLI or migrate to Vite?
4. **Testing**: Should we add unit/E2E tests as part of migration?
5. **TypeScript**: Should we add TypeScript support?
6. **API Strategy**: Future plans to replace static data with API?

---

## 14. Additional Resources

**Official Documentation**:
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vue Router 4 Migration](https://router.vuejs.org/guide/migration/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

**Plugin Documentation**:
- [vue-final-modal](https://vue-final-modal.org/)
- [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag) (Official v3 docs)
- [vue-gtag GitHub](https://github.com/MatteoGabriele/vue-gtag)
- [@vueuse/core](https://vueuse.org/)

**Tools**:
- [Vue DevTools](https://devtools.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

---

## Appendix A: Complete Package.json After Migration

```json
{
  "name": "lebanon-vasyr",
  "version": "0.2.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "core-js": "^3.35.0",
    "bootstrap": "^4.6.2",
    "jquery": "^3.7.1",
    "lodash": "^4.17.21",
    "popper.js": "^1.16.1",
    "vue-gtag": "^3.6.0",
    "vue-final-modal": "^4.5.3",
    "@vueuse/core": "^10.7.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^5.0.8",
    "@vue/cli-plugin-eslint": "^5.0.8",
    "@vue/cli-service": "^5.0.8",
    "@babel/eslint-parser": "^7.23.3",
    "eslint": "^8.56.0",
    "eslint-plugin-vue": "^9.20.0",
    "serialize-javascript": "^6.0.2"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser",
      "requireConfigFile": false
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
}
```

---

## Appendix B: Quick Command Reference

```bash
# Create feature branch
git checkout -b feature/vue3-upgrade

# Backup current state
git branch backup/vue2-state

# Update dependencies
npm install

# Development
npm run serve

# Production build
npm run build

# Lint
npm run lint

# Check bundle size
npm run build -- --report

# Test specific browser
npm run serve -- --host 0.0.0.0 --port 8080
```

---

## Appendix C: Common Errors and Solutions

### Error: "Failed to resolve component"
**Cause**: Component not imported or registered
**Solution**: Check import statement and component registration

### Error: "$parent is undefined"
**Cause**: Removed in Vue 3
**Solution**: Use provide/inject or document.querySelector

### Error: "Cannot read property '$el' of undefined"
**Cause**: Component instance structure changed
**Solution**: Use refs or querySelector

### Error: "this.$modal is not a function"
**Cause**: vue-js-modal not compatible
**Solution**: Use vue-final-modal instead

### Error: "Module not found: Can't resolve 'vue-template-compiler'"
**Cause**: Vue 2 dependency
**Solution**: Remove from package.json, not needed in Vue 3

---

**Document Version**: 1.3
**Last Updated**: 2025-01-26
**Author**: Claude Code
**Status**: Ready for Implementation

**Changelog**:
- v1.3 (2025-01-26): **Consistency update** - All examples now use Options API with `this.$gtag.event()` for minimal migration. Removed Composition API alternatives. Clarified that gtag component code requires ZERO changes.
- v1.2 (2025-01-26): Corrected vue-gtag v3 import syntax - use `createGtag` (named import) with `tagId` parameter, per official docs
- v1.1 (2025-01-26): Corrected vue-gtag migration strategy - use vue-gtag v3 instead of vue-gtag-next
- v1.0 (2025-01-25): Initial version
