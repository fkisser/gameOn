const d = document,
  productsContainer = d.querySelector(".products-container"),
  category = d.querySelector("#categories"),
  cartBtn = d.querySelector(".cart-btn"),
  menuBtn = d.querySelector(".menu-btn");
const cartMenu = d.querySelector(".cart");
const navbar = d.querySelector(".navbar");
const overlay = d.querySelector(".overlay");

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
}


/*LÓGICA DEL CARRITO*/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};




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
    createCartProduct(product); //CREAR LA FUNCION
    showModal("El producto se ha añadido al carrito"); //CREAR LA FUNCION
  } else {
    cartQuantityPlus(product.id); //CREAR LA FUNCIÓN
    showModal("Se ha añadido una unidad al producto");
  }

  //Actualizamos vista del carrito
  renderCart(); //CREAR LA FUNCION
  //restamos una unidad al stock en el arreglo de productos
  updateStock(product.id); //CREAR LA FUNCIÓN
  //actualizamos vista
  updateProducts();
}

const init = () => {
  d.addEventListener('DOMContentLoaded', updateProducts);
  category.addEventListener("change", updateProducts);
  productsContainer.addEventListener("click", addToCart);
  cartBtn.addEventListener("click", switchCart);
  menuBtn.addEventListener("click", switchMenu);
}
init();