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
    },
    paginate: function(items, page, per_page) {
        var page = page || 1,
        per_page = per_page || 10,
        offset = (page - 1) * per_page,
       
        paginatedItems = items.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(items.length / per_page);

        let pagesToShow = [];

        if(total_pages < 5) {
            for(let i = total_pages; i > 0; i--) {
                pagesToShow.push(i);
            }
            pagesToShow.reverse();
        } else if(total_pages - page <= 4) {
            for(let i = total_pages; i > total_pages - 5; i--) {
                pagesToShow.push(i);
            }
            pagesToShow.reverse();
        } else if(total_pages - page >= total_pages - 5) {
            for(let i = 1; i < total_pages; i++) {
                if(pagesToShow.length === 5) {
                    break;
                }
                pagesToShow.push(i);
            }
        } else {
            for(let i = page; i < total_pages; i++) {
                if(pagesToShow.length === 5) {
                    break;
                }
                pagesToShow.push(i-2);
            }
        }

        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            pages_to_show: pagesToShow,
            data: paginatedItems
        }
    }
}
