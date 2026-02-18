/**
 * Composable for handling asset URLs in Vite
 * Replaces require() for dynamic image imports
 */
export function useAssets() {
  const getImageUrl = (imagePath) => {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return new URL(`/src/assets/${cleanPath}`, import.meta.url).href;
  };

  return {
    getImageUrl
  };
}
