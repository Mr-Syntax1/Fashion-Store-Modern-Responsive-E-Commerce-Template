    // داده‌های محصولات (مستقیماً از کد JSON که در HTML دارید)
    const productsData = {
        "featured": [
  {
    "id": 1,
    "brand": "adidas",
    "title": "Cartoon Astronaut T-shirt",
    "price": 78.99,
    "minQty": 1,
    "maxQty": 7,
    "image": "./img/products/f1.jpg",
    "stars": 5,
    "category": "t-shirts",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 2,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 65.23,
    "minQty": 1,
    "maxQty": 11,
    "image": "./img/products/f2.jpg",
    "stars": 3,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 3,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 75.21,
    "minQty": 1,
    "maxQty": 14,
    "image": "./img/products/f3.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 4,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 73.00,
    "minQty": 1,
    "maxQty": 12,
    "image": "./img/products/f4.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 5,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 81.99,
    "minQty": 1,
    "maxQty": 19,
    "image": "./img/products/f5.jpg",
    "stars": 2,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 6,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 92.32,
    "minQty": 1,
    "maxQty": 5,
    "image": "./img/products/f6.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 7,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 59.00,
    "minQty": 1,
    "maxQty": 17,
    "image": "./img/products/f7.jpg",
    "stars": 2,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 8,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 91.00,
    "minQty": 1,
    "maxQty": 22,
    "image": "./img/products/f8.jpg",
    "stars": 3,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  }
        ],

 "newArrivals": [
  {
    "id": 9,
    "brand": "nike",
    "title": "Premium Cotton T-shirt",
    "price": 81.85,
    "minQty": 1,
    "maxQty": 6,
    "image": "./img/products/n1.jpg",
    "stars": 3,
    "category": "t-shirts",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 10,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 67.25,
    "minQty": 1,
    "maxQty": 22,
    "image": "./img/products/n2.jpg",
    "stars": 2,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 11,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 56.99,
    "minQty": 1,
    "maxQty": 19,
    "image": "./img/products/n3.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 12,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 77.00,
    "minQty": 1,
    "maxQty": 13,
    "image": "./img/products/n4.jpg",
    "stars": 1,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 13,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 89.00,
    "minQty": 1,
    "maxQty": 20,
    "image": "./img/products/n5.jpg",
    "stars": 2,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 14,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 44.00,
    "minQty": 1,
    "maxQty": 11,
    "image": "./img/products/n6.jpg",
    "stars": 5,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 15,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 91.50,
    "minQty": 1,
    "maxQty": 9,
    "image": "./img/products/n7.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 16,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 53.25,
    "minQty": 1,
    "maxQty": 17,
    "image": "./img/products/n8.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  }
]
};

// ==== All products for shop page start ====

document.addEventListener('DOMContentLoaded', function () {
    const allproducts = document.querySelector(".all-products");


    // ترکیب هر دو آرایه
    const combined = [
        ...productsData.featured,
        ...productsData.newArrivals
    ];
    

    combined.forEach(product => {
    const card = document.createElement('div');
    card.className = 'pro';

    // کلیک روی خود کارت → برو به صفحه محصول
    card.onclick = (e) => {
        // اگر روی آیکون سبد خرید کلیک کرد، نره به صفحه محصول
        if (e.target.closest('.cart-link')) return;
        window.location.href = `sprouduct.html?id=${product.id}`;
    };

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <div class="des">
            <span>${product.brand}</span>
            <h5>${product.title}</h5>
            <div class="star">
                ${"★".repeat(product.stars)}${"☆".repeat(5 - product.stars)}
            </div>
            <h4>$${product.price}</h4>
        </div>
        <a class="cart-link">
            <i class="fal fa-shopping-cart cart"></i>
        </a>
    `;

    const cartLink = card.querySelector('.cart-link');
cartLink.addEventListener("click", () => {
    showToast(" ✅ Item added to your cart! ");
    setTimeout(() => {
        window.location.href = './cart.html';
    }, 1500);
});

function showToast(text) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = text;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2000);
}

    allproducts.appendChild(card);
});
});

// ==== All products for shop page end ====

// ==== Product containers for other pages start ====

document.addEventListener('DOMContentLoaded', function () {
    const proContainer4 = document.querySelector(".pro-container4");
    // کپی و شافل کل محصولات
    const shuffled = [...productsData.featured, ...productsData.newArrivals]
        .sort(() => Math.random() - 0.5);

    // انتخاب 4 محصول تصادفی
    const randomFour = shuffled.slice(0, 4);

    randomFour.forEach(product => {

        const card = document.createElement('div');
        card.className = "pro";

        // کلیک روی خود کارت → برو صفحه محصول
        card.onclick = (e) => {
            if (e.target.closest('.cart-link')) return;
            window.location.href = `sprouduct.html?id=${product.id}`;
        };

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.title}</h5>
                <div class="star">
                    ${"★".repeat(product.stars)}${"☆".repeat(5 - product.stars)}
                </div>
                <h4>$${product.price}</h4>
            </div>
            <a class="cart-link">
                <i class="fal fa-shopping-cart cart"></i>
            </a>
        `;

        // گرفتن دکمه سبد خرید
        const cartLink = card.querySelector('.cart-link');

        cartLink.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            showToast(" ✅ Item added to your cart! ");

            setTimeout(() => {
                window.location.href = './cart.html';
            }, 1500);
        });

        proContainer4.appendChild(card);
    });
});


// تابع Toast
function showToast(text) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = text;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2000);
}

// ==== Product containers for other pages end ====

// ==== Image zoom effect start ===

const bgImageEl = document.querySelector('#hero');

if (bgImageEl) {
    window.addEventListener('scroll', updateImage);
    
    function updateImage() {
        if (window.innerWidth <= 800) return;
    
        if (window.innerWidth <= 1150) {
            bgImageEl.style.backgroundSize = 150 + window.pageYOffset / 22 + "%";
        } else {
            bgImageEl.style.backgroundSize = 100 + window.pageYOffset / 22 + "%";
        }
    }
    
    // Initial call
    updateImage();
}
// ==== Image zoom effect end ====


// ==== Hamburger start ====
const bar = document.querySelector("#bar");
const nev = document.querySelector("#navbor");
const closeBtn = document.querySelector("#close");

if (bar && nev) {
    // Opening hamburger
    bar.addEventListener("click", () => {
        nev.classList.toggle("active");
    });
}

if (closeBtn && nev) {
    // Closing hamburger
    closeBtn.addEventListener("click", () => {
        nev.classList.remove("active");
    });
}

// Close menu when clicking outside on mobile
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 799 && nev && nev.classList.contains('active')) {
        const isClickInsideNav = nev.contains(event.target);
        const isClickOnBar = bar && bar.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnBar) {
            nev.classList.remove('active');
        }
    }
});

// Responsive check
function checkResponsive() {
    // Add any responsive checks here if needed
}
// Check on resize
window.addEventListener('resize', checkResponsive);

// Initial check
checkResponsive();

// ==== Hamburger end ====

// ==== Preload images for better UX start ====
function preloadAllImages() {
    const urls = new Set();

    // 1. همه تصاویر <img>
    document.querySelectorAll('img').forEach(img => {
        if (img.src) urls.add(img.src);
    });

    // 2. تصاویر پس‌زمینه CSS
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
        const bg = window.getComputedStyle(el).backgroundImage;
        const match = /url\(["']?(.+?)["']?\)/.exec(bg);
        if (match && match[1]) urls.add(match[1]);
    });

    // 3. بارگذاری تصاویر
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// شروع پیش‌بارگذاری وقتی DOM آماده شد
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadAllImages);
} else {
    preloadAllImages();
}
// ==== Preload images for better UX end ====


// ==== find and get product url and make product page start ====

   // گرفتن id از URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // المنت‌های HTML
    const mainImg = document.getElementById("mainImag");
    const smallImagesContainer = document.getElementById("smallImagesContainer");
    const productTitle = document.getElementById("productTitle");
    const starsContainer = document.querySelector(".star");
    const productPrice = document.getElementById("productPrice");
    const productDesc = document.getElementById("productDesc");

    // پیدا کردن محصول با id ==
    const allProducts = [...productsData.featured, ...productsData.newArrivals];
    const product = allProducts.find(p => p.id === productId);


if (product) {
    // مقداردهی اطلاعات اصلی
    mainImg.src = product.image;
    productTitle.textContent = product.title;
    starsContainer.innerHTML = "★".repeat(product.stars) + "☆".repeat(5 - product.stars);
    productPrice.textContent = `$${product.price}`;
    productDesc.textContent = product.description;

    // اضافه کردن select / input / button بدون حذف عناصر اصلی
    const detailsContainer = document.querySelector(".single-pro-details");

// اول extraUI رو بساز، محتوا رو بذار و به DOM اضافه کن
const extraUI = document.createElement("div");
extraUI.classList.add("extra-ui");

extraUI.innerHTML = `
  <br>
  <div class="size-select">                
  <select>
    <option disabled selected>Select size</option>
    <option>XL</option>
    <option>XXL</option>
    <option>Small</option>
    <option>Large</option>
  </select>
<div class="quantity-wrapper">
  <span class="qty-btn qty-minus">−</span>
  <input type="number" class="qty-input" value="1" min="1" max="12">
  <span class="qty-btn qty-plus">+</span>
</div>

</div>
  <button class="normal">Add To Cart</button>
`;

detailsContainer.appendChild(extraUI);

// اضافه کردن alert برای صفحه جزعیات
const btn = extraUI.querySelector("button.normal");

btn.addEventListener("click", () => {
    showToast(" ✅ Item added to your cart! ");
    setTimeout(() => {
        window.location.href = './cart.html';
    }, 2000);
});


function showToast(text) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = text;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2500);
}

        // ساخت ۴ تصویر کوچک
        const imagesArray = [
            product.image,
            "./img/products/f2.jpg",
            "./img/products/f3.jpg",
            "./img/products/f4.jpg"
        ];

        imagesArray.forEach(img => {
            const div = document.createElement("div");
            div.classList.add("small-image-col");

            div.innerHTML = `
                <img src="${img}" width="100%" class="small-img">
            `;

            smallImagesContainer.appendChild(div);
        });

        // فعال کردن کلیک روی تصاویر کوچک
        const smallImgs = document.querySelectorAll(".small-img");
        smallImgs.forEach((small) => {
            small.addEventListener("click", () => {
                mainImg.src = small.src;
            });
        });
    } else {
        productTitle.textContent = "product not found!";
        productPrice.textContent = "please try open it in home page";
        productDesc.textContent = "";
    }
// ==== find and get product url and make product page end ====
    
// ==== quantity selector start ====
const minus = document.querySelector('.qty-minus');
const plus = document.querySelector('.qty-plus');
const input = document.querySelector('.qty-input');

// Set initial values
input.min = product.minQty;
input.max = product.maxQty;
input.value = product.minQty;

// Helper function to get valid quantity
const getValidQuantity = (value) => {
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    
    if (isNaN(value)) return min;
    if (value < min) return min;
    if (value > max) return max;
    return value;
};

// Update quantity with validation
const updateQuantity = (newValue) => {
    input.value = getValidQuantity(newValue);
};

// Event handlers
minus.addEventListener('click', () => updateQuantity(parseInt(input.value) - 1));
plus.addEventListener('click', () => updateQuantity(parseInt(input.value) + 1));

// Validate on manual input
input.addEventListener('input', () => updateQuantity(parseInt(input.value)));
input.addEventListener('blur', () => updateQuantity(parseInt(input.value)));

// Prevent invalid characters
input.addEventListener('keydown', (e) => {
    if (['e', 'E', '+', '-'].includes(e.key)) e.preventDefault();
});

// ==== quantity selector end ====
