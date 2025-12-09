// swiper-config.js - نسخه اصلاح‌شده و حرفه‌ای

const featuredSwiper = new Swiper('.featuredSwiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // مهم: حتی بعد از کلیک هم متوقف نشه
        reverseDirection: false,
    },
    speed: 800, // سرعت حرکت نرم‌تر
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,

    // افکت ورود از راست به چپ (حرفه‌ای)
    effect: 'slide', // می‌تونی 'coverflow' هم امتحان کنی اگر خواستی
    // اگر می‌خوای افکت سه‌بعدی بذاری، اینو فعال کن:
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 2.5,
    //     slideShadows: false,
    // },

    pagination: {
        el: '.featured-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
    },

    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 25 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
    },

    // important
    on: {
        init: function () {
            this.autoplay.start();
        },
    },
});

const arrivalsSwiper = new Swiper('.arrivalsSwiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    speed: 800,
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor: true,

    pagination: {
        el: '.arrivals-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.arrivals-next',
        prevEl: '.arrivals-prev',
    },

    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 25 },
        1200: { slidesPerView: 4, spaceBetween: 30 },
    },

    on: {
        init: function () {
            this.autoplay.start();
        },
    },
});

// بارگذاری محصولات + آپدیت اسلایدر بعد از لود
document.addEventListener('DOMContentLoaded', function () {
    const featuredContainer = document.querySelector(".pro-container-swiper");
    const arrivalsContainer = document.querySelector(".pro-container2-swiper");

    fetch("products.json")
        .then(res => res.json())
        .then(data => {
            // Featured Products
            if (featuredContainer) {
                data.featured.forEach(product => {
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';
                    slide.innerHTML = `
                        <div class="pro" onclick="window.location.href='sprouduct.html?id=${product.id}'">
                            <img src="${product.image}" alt="${product.title}" loading="lazy">
                            <div class="des">
                                <span>${product.brand}</span>
                                <h5>${product.title}</h5>
                                <div class="star">
                                    ${"★".repeat(product.stars)}${"☆".repeat(5 - product.stars)}
                                </div>
                                <h4>$${product.price}</h4>
                            </div>
                            <a href="#" class="cart"><i class="fal fa-shopping-cart"></i></a>
                        </div>
                    `;
                    featuredContainer.appendChild(slide);
                });
                featuredSwiper.update(); 
                featuredSwiper.autoplay.start(); 
            }

            // New Arrivals
            if (arrivalsContainer) {
                data.newArrivals.forEach(product => {
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';
                    slide.innerHTML = `
                        <div class="pro" onclick="window.location.href='sprouduct.html?id=${product.id}'">
                            <img src="${product.image}" alt="${product.title}" loading="lazy">
                            <div class="des">
                                <span>${product.brand}</span>
                                <h5>${product.title}</h5>
                                <div class="star">
                                    ${"★".repeat(product.stars)}${"☆".repeat(5 - product.stars)}
                                </div>
                                <h4>$${product.price}</h4>
                            </div>
                            <a href="#" class="cart"><i class="fal fa-shopping-cart"></i></a>
                        </div>
                    `;
                    arrivalsContainer.appendChild(slide);
                });
                arrivalsSwiper.update();
                arrivalsSwiper.autoplay.start();
            }
        })
});