const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

// console.log(slides);

const app = new Vue({
    el: '#app',
    data: {
        slides,
        currentSlideIndex: 0,
    },
    methods: {
        showPrevThumb() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            } else {
                this.currentSlideIndex = this.slides.length - 1
            }
        },
        showNextThumb() {
            if (this.currentSlideIndex < slides.length - 1) {
                this.currentSlideIndex++;
            } else {
                this.currentSlideIndex = 0;
            }
        },
        imgTimer() {
            const timer = setInterval(() => {

                if (this.currentSlideIndex < slides.length - 1) {
                    this.currentSlideIndex++;

                } else {
                    clearInterval(timer);
                }
            }, 1000)
        }
    }

});