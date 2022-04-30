fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => (productos = json));
fetch("https://fakestoreapi.com/products/category/jewelery")
  .then((res) => res.json())
  .then((json) => (produJoyeria = json));
fetch("https://fakestoreapi.com/products/category/electronics")
  .then((res) => res.json())
  .then((json) => (produElectronica = json));
fetch("https://fakestoreapi.com/products/category/men's%20clothing")
  .then((res) => res.json())
  .then((json) => (produHombre = json));
fetch("https://fakestoreapi.com/products/category/women's%20clothing")
  .then((res) => res.json())
  .then((json) => (produMujer = json));

let header = document.querySelector("header");
let carga = document.querySelector(".carga");
let hero = document.querySelector(".hero");
let iconito = document.querySelector(".iconito");
let heroAddCart = document.getElementById("heroAddCart");
let faGem = document.querySelector(".fa-gem");
let faTv = document.querySelector(".fa-tv");
let faPerson = document.querySelector(".fa-person");
let carrito = document.querySelector(".carrito");
let carritoSuma = document.querySelector(".carritoSuma");
let faPersonDress = document.querySelector(".fa-person-dress");
let faCartShopping = document.querySelector(".fa-cart-shopping");
let tituloDestacado = document.getElementById("tituloDestacado");
let precioDestacado = document.getElementById("precioDestacado");
let categorias = document.querySelector(".categorias");
let joyeria = document.querySelector(".joyeria");
let electronica = document.querySelector(".electronica");
let masculina = document.querySelector(".masculina");
let femenina = document.querySelector(".femenina");
let categoriasul = document.querySelector(".categoriasul");
let heroImg = document.getElementById("heroImg");
let heroPrecio = document.getElementById("heroPrecio");
let productosul = document.querySelector(".productosul");
let productosli = document.querySelector(".productosli");
let popup = document.querySelector(".popup");
let cerrarPopup = document.querySelector(".cerrarPopup");
let sumaprod = document.querySelector(".sumaprod");
let montoTotal = document.querySelector(".montoTotal");
let sumaul = document.querySelector(".sumaul");
let resultado = document.querySelector(".resultado");
let productosHero = document.querySelector(".productos");
let footer = document.querySelector("footer");

let cuentaCarrito = 0;

let productos = [];
let produJoyeria = [];
let produElectronica = [];
let produHombre = [];
let produMujer = [];
let enCarrito = [];

let numRandom = Math.floor(Math.random() * (20 - 1));
let imagenH;

iconito.addEventListener("click", () => {
  carritoSuma.style.display = "none";
  hero.style.display = "flex";
  categoriasul.style.display = "flex";
  categorias.style.display = "flex";
  productosul.style.display = "none";
});

setTimeout(function () {
  carga.style.display = "none";
  header.style.display = "block";
  hero.style.display = "flex";
  categoriasul.style.display = "flex";
  categorias.style.display = "flex";
  footer.style.display = "block";
  tituloDestacado.innerHTML = `${productos[numRandom].title}`;
  precioDestacado.innerHTML = `U\$D ${productos[numRandom].price}`;
  imagenH = productos[numRandom].image;
  heroImg.setAttribute("src", `${imagenH}`);
}, 3000);

faGem.addEventListener("click", () => {
  listarProductos("joyeria");
});
faTv.addEventListener("click", () => {
  listarProductos("electronica");
});
faPerson.addEventListener("click", () => {
  listarProductos("masculina");
});
faPersonDress.addEventListener("click", () => {
  listarProductos("femenina");
});

heroAddCart.addEventListener("click", () => {
  agregar(productos[numRandom].id);
});

joyeria.addEventListener("click", () => {
  listarProductos("joyeria");
});
electronica.addEventListener("click", () => {
  listarProductos("electronica");
});
masculina.addEventListener("click", () => {
  listarProductos("masculina");
});

femenina.addEventListener("click", () => {
  listarProductos("femenina");
});

faCartShopping.addEventListener("click", () => {
  if (cuentaCarrito == 0) {
    alert("You need to add items to your cart!");
  } else {
    hero.style.display = "none";
    categoriasul.style.display = "none";
    categorias.style.display = "none";
    carritoSuma.style.display = "block";
    productosHero.style.display = "none";
  }
});

function popupDetalle(id) {
  let modeloDetalle = `
  <div class="popupimg">
    <img
      src="${productos[id - 1].image}"
      alt=""
    />
  </div>
  <button onclick="cerrarVentana()" class="cerrarPopup"><i  class="fa-solid fa-rectangle-xmark"></i></button>
  <div class="popuptxt">
    <h4>${productos[id - 1].title}</h4>
    <i class="descripcionProducto"
      >${productos[id - 1].description}</i
    >
    <h5><span>Price: U$D </span>${productos[id - 1].price}</h5>
    <button onClick="agregar(${productos[id - 1].id})">Add to cart</button>
  </div>`;
  popup.innerHTML = modeloDetalle;
  popup.style.display = "flex";
  productosul.style.display = "none";
}

const cerrarVentana = () => {
  productosul.style.display = "flex";
  popup.style.display = "none";
};

function listarProductos(item) {
  header.style.display = "none";
  footer.style.display = "none";
  productosul.innerHTML = "";
  hero.style.display = "none";
  categoriasul.style.display = "none";
  categorias.style.display = "none";
  carritoSuma.style.display = "none";
  productosHero.style.display = "flex";
  carga.style.display = "flex";
  productosul.style.display = "flex";

  switch (item) {
    case "joyeria":
      setTimeout(function () {
        for (var i = 0; i < produJoyeria.length; i++) {
          let modelo = `<li class="productosli">
          <img onclick="popupDetalle(${produJoyeria[i].id})"
            src="${produJoyeria[i].image}" title="Click for details."
            alt=""
          />
          <p onclick="popupDetalle(${produJoyeria[i].id})">${produJoyeria[i].title}</p>
          <p>U$D ${produJoyeria[i].price}</p>
          <button class="joyeria" onClick="agregar(${produJoyeria[i].id})">Add to cart</button>                
        </li>`;
          productosul.innerHTML += modelo;
        }
        carga.style.display = "none";
        header.style.display = "block";
        footer.style.display = "block";
      }, 1500);
      break;

    case "electronica":
      setTimeout(function () {
        for (var i = 0; i < produElectronica.length; i++) {
          let modelo = `<li class="productosli">
          <img onclick="popupDetalle(${produElectronica[i].id})"
            src="${produElectronica[i].image}" title="Click for details."
            alt=""
          />
          <p onclick="popupDetalle(${produElectronica[i].id})">${produElectronica[i].title}</p>
          <p>U$D ${produElectronica[i].price}</p>
          <button class="electronica" onClick="agregar(${produElectronica[i].id})">Add to cart</button>                
        </li>`;
          productosul.innerHTML += modelo;
        }
        carga.style.display = "none";
        header.style.display = "block";
        footer.style.display = "block";
      }, 1500);
      break;

    case "masculina":
      setTimeout(function () {
        for (var i = 0; i < produHombre.length; i++) {
          let modelo = `<li class="productosli">
          <img onclick="popupDetalle(${produHombre[i].id})"
            src="${produHombre[i].image}" title="Click for details."
            alt=""
          />
          <p onclick="popupDetalle(${produHombre[i].id})">${produHombre[i].title}</p>
          <p>U$D ${produHombre[i].price}</p>
          <button class="electronica" onClick="agregar(${produHombre[i].id})">Add to cart</button>                
        </li>`;
          productosul.innerHTML += modelo;
        }
        carga.style.display = "none";
        header.style.display = "block";
        footer.style.display = "block";
      }, 1500);
      break;

    case "femenina":
      setTimeout(function () {
        for (var i = 0; i < produMujer.length; i++) {
          let modelo = `<li class="productosli">
          <img onclick="popupDetalle(${produMujer[i].id})"
            src="${produMujer[i].image}" title="Click for details."
            alt=""
          />
          <p onclick="popupDetalle(${produMujer[i].id})">${produMujer[i].title}</p>
          <p>U$D ${produMujer[i].price}</p>
          <button class="electronica" onClick="agregar(${produMujer[i].id})">Add to cart</button>                
        </li>`;
          productosul.innerHTML += modelo;
        }
        carga.style.display = "none";
        header.style.display = "block";
        footer.style.display = "block";
      }, 1500);
      break;
  }
}

let loTiene = 0;
let enDonde = 0;
let cantidadArtic = [];
function agregar(id) {
  cuentaCarrito++;
  carrito.innerHTML = cuentaCarrito;
  let idFind = id + 1;
  loTiene = enCarrito.find((prod) => prod.id === idFind);
  if (loTiene) {
    enDonde = cantidadArtic.findIndex((produc) => produc.idArt === idFind);
    cantidadArtic[enDonde].cantidad = cantidadArtic[enDonde].cantidad + 1;
    let preciosACtualizado = Math.floor(
      cantidadArtic[enDonde].cantidad * productos[id - 1].price
    );
    let modeloActualizado = `
                            
                              <img
                                class="carritoImg"
                                src="${productos[id - 1].image}"
                                alt=""
                              />
                              <p class="carritoTitulo">
                              ${productos[id - 1].title}
                              </p>
                              <i class="fa-solid fa-trash-can">
                                <p class="cantidadProd">${
                                  cantidadArtic[enDonde].cantidad
                                }</p></i
                              >
                              <h3 class="carritoPrecio">U$D ${preciosACtualizado}</h3>
                            
                          `;
    let encontrarLi = document.getElementById(idFind);
    encontrarLi.innerHTML = modeloActualizado;
  } else {
    enCarrito.push(productos[id]);
    cantidadArtic.push({
      idArt: id + 1,
      cantidad: 1,
    });
    let modeloCarrito = `<li id="${id + 1}">
                          <img
                            class="carritoImg"
                            src="${productos[id - 1].image}"
                            alt=""
                          />
                          <p class="carritoTitulo">
                          ${productos[id - 1].title}
                          </p>
                          <i class="fa-solid fa-trash-can">
                            <p class="cantidadProd">1</p></i
                          >
                          <h3 class="carritoPrecio">U$D ${
                            productos[id - 1].price
                          }</h3>
                        </li>`;
    sumaul.innerHTML += modeloCarrito;
  }
  let cuenta = 0;
  let sumaTotal = document.querySelectorAll("li h3");
  sumaTotal = [...sumaTotal];
  for (var i = 0; i < sumaTotal.length; i++) {
    let texto = sumaTotal[i].innerHTML;
    let numero = texto.replace(/U\$D /g, "");
    cuenta = cuenta + Number(numero);
    montoTotal.innerHTML = "U$D " + Math.round(cuenta);
  }
}
