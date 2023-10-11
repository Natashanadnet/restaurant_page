import "./style.css";

function homeContent() {
  const contentCont = document.createElement("div");
  contentCont.classList.add("homeContent");
  const imgCont = document.createElement("div");
  imgCont.classList.add("img-cont");
  const textCont = document.createElement("div");
  textCont.classList.add("text-cont");
  const h1 = document.createElement("h1");
  h1.textContent = "Elevate Your Taste, One Burger at a Time.";
  const fakeText = document.createElement("p");
  fakeText.textContent =
    "Indulge in burger perfection. Our handcrafted patties are cooked to juicy perfection, topped with the freshest ingredients, and packed with flavor. Whether you crave classic simplicity or bold, fiery kicks, each bite is a taste of burger bliss. Give in to temptation and hit that order button. Satisfaction awaits!";
  fakeText.classList.add("fake-text");

  textCont.append(h1, fakeText);
  contentCont.append(imgCont, textCont);

  return contentCont;
}

export { homeContent };
