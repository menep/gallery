import "./styles/main.scss";

const imgs = document.querySelectorAll(".image");
const popupCont = document.querySelector(".popup__container");

imgs.forEach(img =>
  img.addEventListener("click", e => {
    popupCont.classList.remove("hidden");
    popupCont.classList.add("visible");
    const src = e.target.classList[1] + ".JPG";
    console.log(src);
    popupCont.style.backgroundImage = `url("./img/${src}")`;
    popupCont.style.backgroundSize = "cover";
    popupCont.style.backgroundPosition = "center";
  })
);

window.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    popupCont.classList.remove("visible");
    popupCont.classList.add("hidden");
  }
});
