    // داده‌های محصولات (مستقیماً از کد JSON که در HTML دارید)
    const productsData = {
        "featured": [
  {
    "id": 1,
    "brand": "adidas",
    "title": "Cartoon Astronaut T-shirt",
    "price": 78.99,
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
    "image": "./img/products/f3.jpg",
    "stars": 5,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 4,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 73.00,
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
    "image": "./img/products/f6.jpg",
    "stars": 1,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 7,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 59.00,
    "image": "./img/products/f7.jpg",
    "stars": 5,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 8,
    "brand": "adidas",
    "title": "Sport Performance T-shirt",
    "price": 91.00,
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
    "image": "./img/products/n1.jpg",
    "stars": 5,
    "category": "t-shirts",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 10,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 67.25,
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
    "image": "./img/products/n4.jpg",
    "stars": 3,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 13,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 89.00,
    "image": "./img/products/n5.jpg",
    "stars": 1,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  },
  {
    "id": 14,
    "brand": "nike",
    "title": "Sport Performance T-shirt",
    "price": 44.00,
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
    "image": "./img/products/n8.jpg",
    "stars": 4,
    "category": "sportswear",
    "description": "The Men's Fashion T-Shirt is a classic and timeless piece of clothing that is perfect for any occasion. It is made from a soft and comfortable material and is perfect for any season.It is made from a soft and comfortable material and is perfect for any season."
  }
]
};

// Product containers for other pages

const proContainer4 = document.querySelector(".pro-container4");

// All products for shop page
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
        card.onclick = () => window.location.href = `sprouduct.html?id=${product.id}`;

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
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        `;

        allproducts.appendChild(card);
    });
});


// Take 4 newArrivals for homepage
document.addEventListener('DOMContentLoaded', function () {
    const proContainer4 = document.querySelector(".pro-container4");

    if (!proContainer4) return;

    // کپی آرایه و شافل کردنش
    const shuffled = [...productsData.featured, ...productsData.newArrivals]
        .sort(() => Math.random() - 0.5);

    // انتخاب 4 محصول تصادفی
    const randomFour = shuffled.slice(0, 4);

    randomFour.forEach(product => {
        const card = document.createElement('div');
        card.className = "pro";
        card.onclick = () => window.location.href = `sprouduct.html?id=${product.id}`;

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
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        `;

        proContainer4.appendChild(card);
    });
});



// Image zoom effect
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

// Mobile menu functionality
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

// Preload images for better UX
function preloadImages() {
    const imageUrls = [
        './img/hero4.png',
        './img/button.png',
        './img/features/f1.png',
        './img/features/f2.png',
        './img/features/f3.png',
        './img/features/f4.png',
        './img/features/f5.png',
        './img/features/f6.png'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Start preloading when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}



   // گرفتن id از URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // المنت‌های HTML
    const mainImg = document.getElementById("mainImag");
    const smallImagesContainer = document.getElementById("smallImagesContainer");
    const productTitle = document.getElementById("productTitle");
    const productPrice = document.getElementById("productPrice");
    const productDesc = document.getElementById("productDesc");

    // پیدا کردن محصول با id
    const allProducts = [...productsData.featured, ...productsData.newArrivals];
    const product = allProducts.find(p => p.id === productId);


if (product) {
    // مقداردهی اطلاعات اصلی
    mainImg.src = product.image;
    productTitle.textContent = product.title;
    productPrice.textContent = `$${product.price}`;
    productDesc.textContent = product.description;

    // اضافه کردن select / input / button بدون حذف عناصر اصلی
    const detailsContainer = document.querySelector(".single-pro-details");

// اول extraUI رو بساز، محتوا رو بذار و به DOM اضافه کن
const extraUI = document.createElement("div");
extraUI.classList.add("extra-ui");

extraUI.innerHTML = `
  <br>
  <select>
    <option disabled selected>Select size</option>
    <option>XL</option>
    <option>XXL</option>
    <option>Small</option>
    <option>Large</option>
  </select>
  <input type="number" value="1" min="1" max="9">
  <button class="normal">Add To Cart</button>
`;

detailsContainer.appendChild(extraUI);


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

    


