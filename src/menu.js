import "./style.css";
import ham1 from "./img/ham1.jpg";
import ham2 from "./img/ham2.jpg";
import ham3 from "./img/ham3.jpg";
import ham4 from "./img/ham4.jpg";
import ham5 from "./img/ham5.jpg";
import ham6 from "./img/ham6.jpg";

function menuItem(name, description, price, img) {
  return { name, description, price, img };
}

function createMenu() {
  const menuImage1 = new Image();
  menuImage1.src = ham1;
  const menuImage2 = new Image();
  menuImage2.src = ham2;
  const menuImage3 = new Image();
  menuImage3.src = ham3;
  const menuImage4 = new Image();
  menuImage4.src = ham4;
  const menuImage5 = new Image();
  menuImage5.src = ham5;
  const menuImage6 = new Image();
  menuImage6.src = ham6;

  const item1 = menuItem(
    "Classic American Burger",
    "Our timeless Classic American Burger is a burger lover's dream. A juicy beef patty cooked to perfection, topped with melted cheddar cheese, crisp lettuce, ripe tomato, and tangy pickles, all nestled in a soft, toasted bun. It's a taste of nostalgia in every bite.",
    "12.99$",
    menuImage1
  );
  const item2 = menuItem(
    "Spicy Southwest Burger",
    "Heat up your taste buds with our Spicy Southwest Burger. Our succulent beef patty is adorned with fiery jalapeño slices, pepper jack cheese, crispy bacon, and a zesty chipotle mayo. It's a flavor-packed journey to the spicy side of life.",
    "13.99$",
    menuImage2
  );
  const item3 = menuItem(
    "Veggie Lover's Delight",
    " For our plant-based enthusiasts, the Veggie Lover's Delight offers a guilt-free feast. A delectable vegan patty piled high with avocado, sautéed mushrooms, fresh spinach, and our special vegan sauce. It's a burst of freshness in every bite.",
    "11.99$",
    menuImage3
  );
  const item4 = menuItem(
    "Ultimate BBQ Bacon Burger",
    "Indulge in the ultimate savory experience with our Ultimate BBQ Bacon Burger. Sink your teeth into a juicy beef patty smothered in smoky barbecue sauce, topped with crispy bacon, onion rings, and melted cheddar cheese. It's a symphony of sweet and smoky flavors that will leave you craving more.",
    "14.99$",
    menuImage4
  );

  const item5 = menuItem(
    "Mushroom Swiss Bliss Burger",
    "Elevate your burger experience with our Mushroom Swiss Bliss Burger. A succulent beef patty topped with a generous serving of sautéed mushrooms and creamy Swiss cheese. Served on a toasted brioche bun with a drizzle of truffle aioli, it's a burger that takes your taste buds on a gourmet journey.",
    "12.99$",
    menuImage5
  );

  const item6 = menuItem(
    "Hawaiian Luau Burger",
    "Transport your taste buds to a tropical paradise with our Hawaiian Luau Burger. Enjoy a juicy beef patty topped with grilled pineapple, crispy ham, Swiss cheese, and a tangy teriyaki glaze. It's a burst of sweet and savory flavors that'll make you feel like you're at a beachside luau.",
    "12.99$",
    menuImage6
  );
  const menu = [item1, item2, item3, item4, item5, item6];
  const menuCont = document.createElement("div");
  menuCont.classList.add("menu-content");

  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardImg.append(item.img);
    const cardTitle = document.createElement("h4");
    cardTitle.textContent = item.name;
    const cardDesc = document.createElement("p");
    cardDesc.textContent = item.description;
    cardDesc.classList.add("card-des");
    const price = document.createElement("p");
    price.textContent = item.price;
    price.classList.add("price");
    card.append(cardImg, cardTitle, cardDesc, price);
    menuCont.append(card);
  }
  menu.forEach((item) => {
    createCard(item);
  });
  return menuCont;
}

export { createMenu };
