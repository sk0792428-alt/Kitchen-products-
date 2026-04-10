// script.js

// Sample E-commerce functionality for Product Display, Shopping Cart Management, Local Storage, and Checkout

// Product Display
const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 150, image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 200, image: 'image3.jpg' },
];

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h2>${product.name}</h2><img src='${product.image}' alt='${product.name}'/><p>Price: $${product.price}</p><button onclick=\"addToCart(${product.id})\">Add to Cart</button>`;
        productContainer.appendChild(productDiv);
    });
}

// Shopping Cart Management
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price}</p>`;
        cartContainer.appendChild(itemDiv);
    });
}

// Checkout Functionality
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Implement checkout logic here
    alert('Checkout successful!');
    cart = [];
    updateCart();
}

// Initialize
window.onload = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    displayProducts();
    displayCart();
};