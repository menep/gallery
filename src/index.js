import "./styles/main.scss";
import sel from "./scripts/selectors";
import {
  showPreviousPhoto,
  showNextPhoto,
  openOverlay
} from "./scripts/eventFunctions";

const photoData = {
  currentPhotoNumber: 0,
  totalImageCount: sel.imgs.length - 1
};

// attach event listener to each img to open overlay
sel.imgs.forEach(img =>
  img.addEventListener("click", e => {
    openOverlay(e, photoData);
  })
);

// click on prev button loads previous image in overlay
sel.prev.addEventListener("click", () => {
  showPreviousPhoto(photoData);
});

// click on prev button loads next image in overlay
sel.next.addEventListener("click", () => {
  showNextPhoto(photoData);
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
      showPreviousPhoto(photoData);
    }
  }
  if (e.key === "ArrowRight") {
    if (sel.overlayCont.classList.contains("visible")) {
      showNextPhoto(photoData);
    }
  }
});
