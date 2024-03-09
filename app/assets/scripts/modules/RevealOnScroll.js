import { throttle , debounce } from "lodash"


class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.thresholdPercent = thresholdPercent
        this.itemToReveal = els
        this.browserHeight = window.innerHeight
        this.hideInitialy()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(()=>{
            this.browserHeight = window.innerHeight
        }, 333))
    }


    calcCaller() {
        this.itemToReveal.forEach(el => {
            if (el.isReviald == false) {
                this.calculateIfScrolledTo(el)
            }
        })
    }
    calculateIfScrolledTo(el) {
        
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible")
                el.isReviald = true
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }

    }


    hideInitialy() {
        this.itemToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isReviald = false
        })

        this.itemToReveal[this.itemToReveal.length - 1].isLastItem = true
    }
}


export default RevealOnScroll