import "./styles/main.scss";
import sel from "./scripts/selectors";

let counter;
const imgCount = sel.imgs.length - 1;

// attach event listener to each img to open popup
sel.imgs.forEach(img =>
  img.addEventListener("click", e => {
    sel.popupCont.classList.remove("hidden");
    sel.popupCont.classList.add("visible");
    counter = e.target.dataset.num;
    const src = `./img/image__${counter}.JPG`;
    sel.popupImg.setAttribute("src", src);
    document.body.classList.add("noscroll");
  })
);

// click on prev button loads previous image in popup
sel.prev.addEventListener("click", () => {
  --counter;
  if (counter < 0) counter = imgCount;
  let counterStr;
  if (counter >= 0 && counter <= 9) {
    counterStr = `00${counter}`;
  } else if (counter >= 10 && counter <= 99) {
    counterStr = `0${counter}`;
  }

  const src = `./img/image__${counterStr}.JPG`;

  sel.popupImg.setAttribute("src", src);
});

// click on prev button loads next image in popup
sel.next.addEventListener("click", () => {
  ++counter;
  if (counter > imgCount) counter = 0;
  let counterStr;
  if (counter >= 0 && counter <= 9) {
    counterStr = `00${counter}`;
  } else if (counter >= 10 && counter <= 99) {
    counterStr = `0${counter}`;
  }

  const src = `./img/image__${counterStr}.JPG`;

  sel.popupImg.setAttribute("src", src);
});

window.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    sel.popupCont.classList.remove("visible");
    sel.popupCont.classList.add("hidden");
    sel.popupImg.setAttribute("src", ""); // unset image
    document.body.classList.remove("noscroll");
  }
});
