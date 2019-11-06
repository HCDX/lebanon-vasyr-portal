export default {
    scrollTo: function(selector, duration) {
        let vm = this;

        return new Promise(function(resolve) {
            let topMenuSize = document.querySelector('#nav').offsetHeight;
            let target = document.querySelector(selector);
            let targetPosition = target.offsetTop - topMenuSize;
            let startPosition = window.pageYOffset;
            let distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if(startTime === null) startTime = currentTime;
                let timeElapsed = currentTime - startTime;
                let step = vm.easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, step);
                if(timeElapsed < duration) { 
                    requestAnimationFrame(animation);
                } else {
                    resolve(true);
                }
            }
    
            requestAnimationFrame(animation);
        })
    },
    easeOut: function (t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    },
    isMobile: {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
        }
    }
}
