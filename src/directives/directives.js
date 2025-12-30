export const tooltip = {
  mounted(el, binding) {
    window.$(el).tooltip({
      title: binding.value,
      placement: binding.arg,
      trigger: 'hover'
    })
  },
  unmounted(el) {
    window.$(el).tooltip('dispose')
  }
}