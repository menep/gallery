import "./styles/main.scss";
import sel from "./scripts/selectors";
import {
  showPreviousPhoto,
  showNextPhoto,
  openOverlay,
  closeOverlay
} from "./scripts/eventFunctions";

const photoData = {
  currentPhotoNumber: 0,
  totalImageCount: sel.imgs.length - 1
};

const initEventListeners = () => {
  // attach event listener to each img to open overlay
  sel.imgs.forEach(img =>
    img.addEventListener("click", e => {
      openOverlay(e, photoData);
    })
  );

  // click on buttons to load previous or next image in the overlay
  sel.prev.addEventListener("click", () => {
    showPreviousPhoto(photoData);
  });
  sel.next.addEventListener("click", () => {
    showNextPhoto(photoData);
  });

  sel.overlayCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay__container")) {
      closeOverlay();
    }
  })

  window.addEventListener("keyup", e => {
    if (e.key === "Escape") {
      closeOverlay();
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
};

window.onload = initEventListeners;