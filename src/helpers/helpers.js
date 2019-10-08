export default {
    scrollTo: function(selector, duration) {
        let topMenuSize = document.querySelector('#nav').offsetHeight;
        let target = document.querySelector(selector);
        let targetPosition = target.offsetTop - topMenuSize;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if(startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let step = easeOut(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, step);
            if(timeElapsed < duration) { 
                requestAnimationFrame(animation);
            }
        }

        function easeOut (t, b, c, d) {
            t /= d;
            t--;
            return c*(t*t*t + 1) + b;
        };

        requestAnimationFrame(animation);
    }
}
