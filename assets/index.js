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
const totalContainer = d.querySelector(".cart-total");
const buyBtn = d.querySelector(".buy-btn");
const clearBtn = d.querySelector(".clear-btn");
const cartBubble = d.querySelector(".cart-bubble");
const cartBackBtn = d.querySelector(".cart-back-btn");

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
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    navbar.classList.add("--slide-in");
    overlay.classList.add("--slide-in");
    overlay.classList.remove("--d-none");
    cartMenu.classList.remove("--slide-in");
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
}

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
      ? { ...product, quantity: product.quantity - 1 }
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
  try {
    quantityPlus(product.id);
    // showModal("El producto se ha añadido al carrito"); //CREAR LA FUNCION
  } catch (error) {
    // showError(error); //CREAR LA FUNCION
  }

}

const productClick = (e) => {
  addToCart(e);
  quantityHandler(e);

  //Actualizamos vista del carrito
  renderCart();

  //actualizamos vista de productos
  updateProducts();

}

//funcion quantity handler
const quantityHandler = (e) => {
  //segun el target del evento
  if (!e.target.classList.contains("plus") && !e.target.classList.contains("minus")) return;
  if (e.target.classList.contains("plus")) {
    quantityPlus(Number(e.target.dataset.id));
  }
  if (e.target.classList.contains("minus")) {
    if (cart.find((elem) => elem.id === Number(e.target.dataset.id) && elem.quantity === 1)) {
      if (!confirm("Desea eliminar el elemento del carrito?")) return;
    }
    quantityMinus(Number(e.target.dataset.id));
  }
}

//               //
// CARRITO         ////////
//                  //////
//                   O  O

let cart = products.filter((product) => product.quantity) || [];

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
  if (confirm("¿Está seguro que desea vaciar el carrito?")) {
    products = products.map((product) => {
      return {
        ...product,
        quantity: 0
      }
    });
    updateProducts();
    renderCart();
    switchCart();
  }
}

//funcion comprar => renderizar el modal de compra


//funcion burbuja
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

const init = () => {
  d.addEventListener('DOMContentLoaded', updateProducts);
  d.addEventListener('DOMContentLoaded', renderCart);
  category.addEventListener("change", updateProducts);
  cartBtn.addEventListener("click", switchCart);
  menuBtn.addEventListener("click", switchMenu);
  navbar.addEventListener("click", switchMenu);
  cartBackBtn.addEventListener("click", switchCart);
  productsContainer.addEventListener("click", productClick);
  clearBtn.addEventListener("click", emptyCart);
  cartContainer.addEventListener("click", productClick);
  //hasta acá anda bien
}
init();