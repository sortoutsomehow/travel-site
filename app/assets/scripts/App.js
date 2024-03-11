import '../styles/style.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StyckyHeader from './modules/StickyHeader'

let stickyHeader = new StyckyHeader
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu()

if (module.hot) {
    module.hot.accept()
}

