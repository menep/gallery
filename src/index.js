import "./styles/main.scss";
import sel from "./scripts/selectors";

let counter;
const imgCount = sel.imgs.length - 1;

// attach event listener to each img to open overlay
sel.imgs.forEach(img =>
  img.addEventListener("click", e => {
    sel.overlayCont.classList.remove("hidden");
    sel.overlayCont.classList.add("visible");
    counter = e.target.dataset.num;
    const src = `./img/image__${counter}.JPG`;
    sel.overlayImg.setAttribute("src", src);
    document.body.classList.add("noscroll");
  })
);

// click on prev button loads previous image in overlay
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

  sel.overlayImg.setAttribute("src", src);
});

// click on prev button loads next image in overlay
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

  sel.overlayImg.setAttribute("src", src);
});

window.addEventListener("keyup", e => {
  if (e.key === "Escape") {
    sel.overlayCont.classList.remove("visible");
    sel.overlayCont.classList.add("hidden");
    sel.overlayImg.setAttribute("src", ""); // unset image
    document.body.classList.remove("noscroll");
  }
  if (e.key === "ArrowLeft") {
    if (sel.overlayCont.classList.contains("visible")) {
      --counter;
      if (counter < 0) counter = imgCount;
      let counterStr;
      if (counter >= 0 && counter <= 9) {
        counterStr = `00${counter}`;
      } else if (counter >= 10 && counter <= 99) {
        counterStr = `0${counter}`;
      }

      const src = `./img/image__${counterStr}.JPG`;

      sel.overlayImg.setAttribute("src", src);
    }
  }
  if (e.key === "ArrowRight") {
    if (sel.overlayCont.classList.contains("visible")) {
      ++counter;
      if (counter > imgCount) counter = 0;
      let counterStr;
      if (counter >= 0 && counter <= 9) {
        counterStr = `00${counter}`;
      } else if (counter >= 10 && counter <= 99) {
        counterStr = `0${counter}`;
      }

      const src = `./img/image__${counterStr}.JPG`;

      sel.overlayImg.setAttribute("src", src);
    }
  }
});
