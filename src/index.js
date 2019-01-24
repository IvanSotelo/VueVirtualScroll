import VirtualScroll from './components/VirtualScroll'

export default {
  install (Vue) {
    Vue.component('virtual-scroll', VirtualScroll)
    Vue.mixin({
      // Add component lifecycle hooks or properties.
      created () {
        console.log('%c Created By Ivan Sotelo %c 1.0.0 ', 'background: #35495e; color: #fff', 'background: #60b883; color: #fff')
      }
    })
  }
}

export { VirtualScroll }
