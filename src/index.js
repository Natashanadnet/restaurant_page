import "./style.css";
import { websiteBuilder } from "./website";

const uiControllers = (() => {
  websiteBuilder.build();
  const navBtn = document.querySelectorAll(".nav-links");

  navBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let pressedBtn = e.target.textContent;
      console.log(pressedBtn);
      websiteBuilder.changeContent(pressedBtn);
      websiteBuilder.removeContent();
      websiteBuilder.updateContent();
    });
  });
})();
