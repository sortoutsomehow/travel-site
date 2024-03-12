import '../styles/style.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StyckyHeader from './modules/StickyHeader'


let stickyHeader = new StyckyHeader
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu()
let modal
document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        if (typeof modal == "undefined"){
            import(/* webPackChunkName: modal*/'./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(()=> modal.openTheModal(), 20)
            }).catch(() => console.log("there was a problem with modal module"))
        }else{
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}

