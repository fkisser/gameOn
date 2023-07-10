const d = document;
const overlay = d.querySelector(".overlay");

/************************/
/*********MENU***********/
/************************/
const menuBtn = d.querySelector(".menu-btn");
const navbar = d.querySelector(".navbar");

const openMenu = () => {
  navbar.classList.add("--slide-in");
  overlay.classList.add("--slide-in");
  cartMenu.classList.remove("--slide-in");
  menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  overlay.classList.remove("--d-none");
}

const closeMenu = () => {
  navbar.classList.remove("--slide-in");
  overlay.classList.remove("--slide-in");
  overlay.classList.add("--d-none");
  menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
}

const switchMenu = () => {
  if (navbar.classList.contains("--slide-in")) {
    closeMenu();
  } else {
    openMenu();
  }
}

/************************/
/********PRODUCTS********/
/************************/
const category = d.querySelector("#categories");
const productsContainer = d.querySelector(".products-container");
const addToCartBtn = d.querySelector(".add-btn");

const createProductTemplate = (product) => {
  const { id, title, description, price, quantity, url } = product;
  if (!quantity) {
    return `
            <div class="product">
              <div class="product-text">
                <h4 class="product-title">${title}</h4>
                <p class="product-desc">${description}</p>
                <p class="product-price">u$d ${price}</p>
              </div>
              <div class= "product-group">
                <div class="product-img">
                  <img src=${url} alt="${title}">
                </div>
              </div>
              <div class="add-btn" data-id="${id}">+<i class="fa-solid fa-cart-shopping"></i></div>
            </div>
      `;
  }
  else {
    return `
            <div class="product">
              <div class="product-text">
                <h4 class="product-title">${title}</h4>
                <p class="product-desc">${description}</p>
                <p class="product-price">u$d ${price}</p>
              </div>
              <div class= "product-group">
                <div class="product-img">
                  <img src=${url} alt="${title}">
                </div>
                <div class="item-handler">
                  <span class="product-quantity-btn minus" data-id="${id}">-</span>
                  <span class="item-product-quantity">${quantity}</span>
                  <span class="product-quantity-btn plus" data-id="${id}">+</span>
                </div>
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

const selectCategory = (value) => {
  const categories = [...category.children];
  categories.forEach((option) => {
    if (option.value === value)
      option.classList.add("selected");
    else
      option.classList.remove("selected");
  });
}

const updateProducts = () => {
  const filtered = filterProducts(category.value);
  selectCategory(category.value);
  renderProducts(filtered);
  saveProducts();
};

const saveProducts = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

const quantityPlus = (id) => {
  products = products.map((product) => {
    return product.id === id
      ? {
        ...product,
        quantity: product.quantity + 1
      }
      : product;
  });
}
const quantityMinus = (id) => {
  products = products.map((product) => {
    return product.id === id
      ? product.quantity === 0
        ? product
        : {
          ...product,
          quantity: --product.quantity
        }
      : product;
  });
}


const addToCart = (e) => {
  if (!e.target.classList.contains("add-btn") && !e.target.classList.contains("fa-cart-shopping")) return;
  let product;
  if (e.target.classList.contains("fa-cart-shopping")) {
    product = products.find((product) => Number(product.id) === Number(e.target.parentElement.dataset.id));
  } else {
    product = products.find((product) => Number(product.id) === Number(e.target.dataset.id));
  }
  quantityPlus(product.id);
  renderModal('info', 'El producto ha sido añadido al carrito');
  updateProducts();
  renderCart();
}

const productClick = (e) => {
  addToCart(e);
  quantityHandler(e);
}

const quantityHandler = (e) => {
  if (!e.target.classList.contains("plus") && !e.target.classList.contains("minus")) return;
  if (e.target.classList.contains("plus")) {
    quantityPlus(Number(e.target.dataset.id));
    renderModal('info', 'Se ha añadido una unidad del producto');
  }
  if (e.target.classList.contains("minus")) {
    if (products.find((elem) => elem.id === Number(e.target.dataset.id) && elem.quantity === 1)) {
      renderModal('delete', '¿Desea eliminar el elemento del carrito?', quantityMinus, Number(e.target.dataset.id));
    } else {
      quantityMinus(Number(e.target.dataset.id));
      renderModal('info', 'Se ha eliminado una unidad del producto');
    }
  }
  updateProducts();
  renderCart();
}

//                ///        |
//                  /C/A/R/T |
//                   //////  |
//                    O  O   |
let cart = products.filter((product) => product.quantity) || [];
const cartBtn = d.querySelector(".cart-btn");
const cartMenu = d.querySelector(".cart");
const cartContainer = d.querySelector(".cart-container");
const totalContainer = d.querySelector(".cart-total");
const buyBtn = d.querySelector(".buy-btn");
const clearBtn = d.querySelector(".clear-btn");
const cartBubble = d.querySelector(".cart-bubble");
const cartBackBtn = d.querySelector(".back-btn");

const openCart = () => {
  menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  navbar.classList.remove("--slide-in");
  overlay.classList.add("--slide-in");
  overlay.classList.remove("--d-none");
  cartMenu.classList.add("--slide-in");
}

const closeCart = () => {
  overlay.classList.add("--d-none");
  overlay.classList.remove("--slide-in");
  cartMenu.classList.remove("--slide-in");
}

const switchCart = () => {
  if (cartMenu.classList.contains("--slide-in")) {
    closeCart();
  } else {
    openCart();
  }
}


const createCartProduct = (product) => {
  cart = [
    ...cart,
    {
      ...product
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
        <span class="product-quantity-btn minus" data-id="${id}">-</span>
        <span class="item-product-quantity">${quantity}</span>
        <span class="product-quantity-btn plus" data-id="${id}">+</span>
      </div>
    </div>
  `
}

const disableElements = () => {
  cartContainer.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
  buyBtn.attributes.disabled = true;
  buyBtn.classList.add("--disabled");
  clearBtn.attributes.disabled = true;
  clearBtn.classList.add("--disabled");
  totalContainer.classList.add("--d-none");
}

const enableElements = () => {
  buyBtn.attributes.disabled = false;
  buyBtn.classList.remove("--disabled");
  clearBtn.attributes.disabled = false;
  clearBtn.classList.remove("--disabled");
  totalContainer.classList.remove("--d-none");
}

const renderCart = () => {
  cart = products.filter((product) => product.quantity) || [];
  cartQuantityRender();
  if (!cart.length) {
    disableElements();
    return;
  }
  cartContainer.innerHTML = cart.map(createCartProductTemplate).join("");
  enableElements();
  total();
};

const emptyCart = () => {
  products = products.map((product) => {
    return {
      ...product,
      quantity: 0
    }
  });
  updateProducts();
  renderCart();
}

const emptyCartBtn = () => {
  if (clearBtn.classList.contains("--disabled")) return;
  renderModal("confirm", "¿Realmente quieres vaciar el carrito?", emptyCart)
}

const buy = () => {
  emptyCart();
  cartContainer.innerHTML = `
  <h2>¡Gracias por tu compra!</h2>
  <p class="empty-msg">
    Nos comunicaremos a la brevedad. Puedes seguir comprando si gustas.
  </p>
  `;
}

const buyCartBtn = (e) => {
  if (buyBtn.classList.contains("--disabled")) return;
  renderModal("confirm", "¿Deseas continuar con tu compra?", buy);
}

const cartQuantityRender = () => {
  cartBubble.innerHTML = `
    ${cart.reduce((acc, elem) => acc + (elem.quantity), 0)}
  `;
}

//funcion total
const total = () => {
  totalContainer.innerHTML = `
    <p>Total:</p> <span class="total">u$d ${cart.reduce((acc, elem) => acc + (elem.price * elem.quantity), 0).toFixed(2)}</span>
  `;
}

/************************/
/*********MODALS*********/
/************************/
const dialog = d.querySelector('#dialog');

const clearDialog = () => {
  dialog.close();
  dialog.classList.remove('confirm', 'success', 'error', 'info');
  dialog.innerHTML = "";
}


const renderClear = (message, callback) => {
  if (dialog.open) {
    clearDialog();
  }
  dialog.classList.add('confirm');
  dialog.innerHTML = `
  <h2>${message}</h2>
  <div class="confirm-btns">
    <button id='no'>No</button>
    <button id='yes'>Si</button>
  </div>
  `
  dialog.showModal();
  dialog.addEventListener('click', (e) => {
    if (e.target.id === 'yes') {
      callback();
    }
    if (e.target.id === 'yes' || e.target.id === 'no') {
      clearDialog();
    }
  })
}


const renderDelete = (message, callback, data) => {
  if (dialog.open) {
    clearDialog();
  }
  dialog.classList.add('confirm');
  dialog.innerHTML = `
  <h2>${message}</h2>
  <div class="confirm-btns">
    <button id='no'>No</button>
    <button id='yes'>Si</button>
  </div>
  `;
  dialog.showModal();
  dialog.addEventListener('click', (e) => {
    if (e.target.id === 'yes') {
      callback(data);
    }
    if (e.target.id === 'yes' || e.target.id === 'no') {
      clearDialog();
    }
    updateProducts();
    renderCart();
  })
}

const renderInfo = (message) => {
  if (dialog.open) {
    clearDialog();
  }
  dialog.classList.add('info', 'success');
  dialog.innerHTML = `
  <p>${message}</p>
  `;
  dialog.showModal();
  setTimeout(() => {
    clearDialog();
  }, 1500);
}

const renderModal = (type, message, callback = undefined, data = undefined) => {
  if (type === 'confirm') {
    renderClear(message, callback);
  }
  if (type === 'delete') {
    renderDelete(message, callback, data);
  }
  if (type === 'info') {
    renderInfo(message);
  }
}

/************************/
/*******FORMULARIOS******/
/************************/
const form = d.getElementById("form");

const validate = (input) => {
  if (input.previousElementSibling && input.previousElementSibling.classList.contains("form-validation")) input.previousElementSibling.remove();
  const error = d.createElement("p");
  error.classList.add("form-validation");
  if (!input.value.trim()) {
    error.textContent = `${input.placeholder} no puede estar vacío`;
    input.before(error);
    return;
  }
  if (input.type === "text") {
    error.textContent = `${input.placeholder} no puede contener símbolos o números`;
    const regex = new RegExp("^([A-Za-zÁÄÉËÍÏÓÖÚÜÑÇáäéëíïóöúüñç]+(?: [A-Za-zÁÄÉËÍÏÓÖÚÜÑÇáäéëíïóöúüñç]+)*)$");
    if (!regex.test(input.value.trim())) {
      input.before(error);
    }
  }
  if (input.type === "email") {
    error.textContent = `${input.placeholder} debe tener un formato como: mail@dominio.com`;
    const regex = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$");
    if (!regex.test(input.value.trim())) {
      input.before(error);
    }
  }
}

const checkValidation = (e) => {
  validate(e.target);
}

const hasErrors = () => {
  return form.querySelector(".fields-container div p");
}

const validateAll = () => {
  const inputs = new Array(
    form.querySelector('#name'), form.querySelector('#lname'), form.querySelector('#email'), form.querySelector('#message')
  );
  inputs.forEach(input => { validate(input) });
}

const formSubmit = (e) => {
  e.preventDefault();
  validateAll();
  if (!hasErrors()) {
    renderModal("info", "Gracias por comunicarte! Nos contactaremos a la brevedad");
    form.reset();
  }
}

const init = () => {
  d.addEventListener('DOMContentLoaded', updateProducts);
  d.addEventListener('DOMContentLoaded', renderCart);
  category.addEventListener("change", updateProducts);
  cartBtn.addEventListener("click", switchCart);
  menuBtn.addEventListener("click", switchMenu);
  navbar.addEventListener("click", switchMenu);
  navbar.addEventListener("click", closeCart);
  cartBackBtn.addEventListener("click", switchCart);
  clearBtn.addEventListener("click", emptyCartBtn);
  buyBtn.addEventListener("click", buyCartBtn);
  productsContainer.addEventListener("click", productClick);
  cartContainer.addEventListener("click", productClick);
  form.addEventListener("submit", formSubmit);
  form.addEventListener("input", checkValidation);
  form.addEventListener("focusout", checkValidation);
  overlay.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeCart);
}
init();