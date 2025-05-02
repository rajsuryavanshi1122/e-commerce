const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/391928/01/sv01/fnd/IND/fmt/png/RS-X-Triple-Sneakers",
      },
      {
        code: "darkblue",
        img: "https://th.bing.com/th/id/OIP.ljTaYd-q0p186ZQPWrOkRAHaJ4?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://i.pinimg.com/736x/50/fe/4a/50fe4a1b59874972ebacb03caf79ec9b--authentic-jordan-shoes-authentic-jordans.jpg",
      },
      {
        code: "green",
        img: "https://th.bing.com/th/id/OIP.cRzC3ZAQ3_58mvFgx51A1AHaJ3?rs=1&pid=ImgDetMain",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://www.sneakerfiles.com/wp-content/uploads/2020/08/nike-blazer-mid-77-suede-light-smoke-grey-ci1172-004-release-date-info.jpg",
      },
      {
        code: "green",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/102a0b19-d3e7-4502-b363-d3e90048dbc8/sb-zoom-blazer-mid-skate-shoes-lCFcxG.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/190556/06/sv01/fnd/IND/fmt/png/NRGY-Comet-Running-Shoes",
      },
      {
        code: "lightgray",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379437/22/sv01/fnd/IND/fmt/png/Skyrocket-Lite-Running-Shoes",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309902/02/sv01/fnd/IND/fmt/png/Softride-Flex-Ease-In-Slip-On-Shoes",
      },
      {
        code: "black",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/398846/09/sv01/fnd/IND/fmt/png/Speedcat-OG-Sneakers",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});