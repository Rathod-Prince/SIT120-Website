
new Vue({
    el: '#slider',
    data: {
        activeSlide: 1
    },
    computed: {
        styleObject: function() {
            const width = 0 - ((this.activeSlide - 1) * 33)
            return {
                transform: 'translateX(' + width + '%)'
            }
        }
    },
    methods: {
        changeSlide: function(num) {
            this.activeSlide = num
        },
        nextSlide: function() {
            if (this.activeSlide < 3) this.activeSlide++
        },
        prevSlide: function() {
            if (this.activeSlide > 1) this.activeSlide--
        }
    }
})