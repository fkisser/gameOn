const d = document,
  productsContainer = d.querySelector(".products-container"),
  category = d.querySelector("#categories"),
  cartBtn = d.querySelector(".cart-btn"),
  menuBtn = d.querySelector(".menu-btn");
const cartMenu = d.querySelector(".cart");
const navbar = d.querySelector(".navbar");
const overlay = d.querySelector(".overlay");
const cartContainer = d.querySelector(".cart-container");
const addToCartBtn = d.querySelector(".add-btn");

const switchCart = () => {
  if (cartMenu.classList.contains("--slide-in")) {
    overlay.classList.add("--d-none");
    overlay.classList.remove("--slide-in");
    cartMenu.classList.remove("--slide-in");
  } else {
    overlay.classList.add("--slide-in");
    overlay.classList.remove("--d-none");
    cartMenu.classList.add("--slide-in");
    navbar.classList.remove("--slide-in");
  }
}

const switchMenu = () => {
  if (navbar.classList.contains("--slide-in")) {
    navbar.classList.remove("--slide-in");
    overlay.classList.remove("--slide-in");
    overlay.classList.add("--d-none");
  } else {
    navbar.classList.add("--slide-in");
    overlay.classList.add("--slide-in");
    overlay.classList.remove("--d-none");
    cartMenu.classList.remove("--slide-in");
  }
}

const createProductTemplate = (product) => {
  const { id, title, description, price, quantity, url } = product;
  if (Number(quantity)) {
    return `
            <div class="product">
              <div class="product-text">
                <h4 class="product-title">${title}</h4>
                <p class="product-desc">${description}</p>
                <div class="product-nums">
                  <p class="product-price">u$d ${price}</p>
                  <p class="product-quantity">Stock: ${quantity}</p>
                </div>
              </div>
              <div class="product-img">
                <img src=${url} alt="${title}">
              </div>
              <div class="add-btn" data-id="${id}">+<i class="fa-solid fa-cart-shopping"></i></div>
            </div>
      `;
  } else {
    return `
            <div class="product">
              <div class="product-text">
                <h4 class="product-title">${title}</h4>
                <p class="product-desc">${description}</p>
                <div class="product-nums">
                  <p class="product-price">u$d ${price}</p>
                  <p class="product-quantity color-red bold">Sin stock</p>
                </div>
              </div>
              <div class="product-img">
                <img src=${url} alt="${title}">
              </div>
            </div>
      `;
  }
};

const renderProducts = (filtered) => {
  productsContainer.innerHTML = "";
  productsContainer.innerHTML += filtered
    .map(createProductTemplate)
    .join("");
};

const filterProducts = (category) => {
  if (category === "all") return products;
  else return products.filter((product) => product.category === category)
}

const updateProducts = () => {
  const category = d.querySelector("#categories").value;
  const filtered = filterProducts(category);
  renderProducts(filtered);
  saveProducts();
}

const saveProducts = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

/*LÓGICA DEL CARRITO*/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartQuantityPlus = (id) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
}
const cartQuantityMinus = (id) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
}

const createCartProduct = (product) => {
  cart = [
    ...cart,
    {
      ...product,
      quantity: 1
    }
  ]
}

const createCartProductTemplate = (cartProduct) => {
  const { id, title, price, quantity, url } = cartProduct;
  return `
    <div class="cart-item">
      <div class="item-data">
        <div class="item-img">
          <img src="${url}" alt="producto del carrito" />
        </div>
        <div class="item-text">
          <h3 class="item-title">${title}</h3>
          <span class="item-price">$${(price * quantity).toFixed(2)}</span>
        </div>
      </div>
      <div class="item-handler">
        <span class="product-quantity-btn" data-id="${id}">-</span>
        <span class="item-product-quantity">${quantity}</span>
        <span class="product-quantity-btn" data-id="${id}">+</span>
      </div>
    </div>
  `
}

const renderCart = () => {
  if (!cart.length) {
    cartContainer.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  cartContainer.innerHTML = cart.map(createCartProductTemplate).join("");
  saveCart();
};

const productStockPlus = (id) => {
  products = products.map((product) => {
    return product.id === id
      ? { ...product, quantity: product.quantity + 1 }
      : product;
  });
}
const productStockMinus = (id) => {
  products = products.map((product) => {
    return product.id === id
      ? { ...product, quantity: product.quantity - 1 }
      : product;
  });
}

const addToCart = (e) => {
  if (!e.target.classList.contains("add-btn") && !e.target.classList.contains("fa-cart-shopping")) return;
  let product;
  if (e.target.classList.contains("fa-cart-shopping")) {
    product = products.find((product) => product.id === Number(e.target.parentElement.dataset.id));
  } else {
    product = products.find((product) => product.id === Number(e.target.dataset.id));
  }
  let cartProduct = cart.find((elem) => elem.id === product.id);
  if (!cartProduct) {
    createCartProduct(product);
    // showModal("El producto se ha añadido al carrito"); //CREAR LA FUNCION
  } else {
    cartQuantityPlus(product.id);
    // showModal("Se ha añadido una unidad al producto");
  }
  //Actualizamos vista del carrito
  renderCart();
  //restamos una unidad al stock en el arreglo de productos
  productStockMinus(product.id);
  //actualizamos vista
  updateProducts();

}

const init = () => {
  d.addEventListener('DOMContentLoaded', updateProducts);
  d.addEventListener('DOMContentLoaded', renderCart);
  category.addEventListener("change", updateProducts);
  productsContainer.addEventListener("click", addToCart);
  cartBtn.addEventListener("click", switchCart);
  menuBtn.addEventListener("click", switchMenu);
  addToCartBtn.addEventListener("click", addToCart);
}
init();