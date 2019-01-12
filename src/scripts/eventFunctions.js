import sel from "./selectors";

const showPreviousPhoto = data => {
  data.currentPhotoNumber--;
  if (data.currentPhotoNumber < 0)
    data.currentPhotoNumber = data.totalImageCount;
  let counterStr;
  if (data.currentPhotoNumber >= 0 && data.currentPhotoNumber <= 9) {
    counterStr = `00${data.currentPhotoNumber}`;
  } else if (data.currentPhotoNumber >= 10 && data.currentPhotoNumber <= 99) {
    counterStr = `0${data.currentPhotoNumber}`;
  }

  const src = `./img/image__${counterStr}.JPG`;
  sel.overlayImg.setAttribute("src", src);
};

const showNextPhoto = data => {
  ++data.currentPhotoNumber;
  if (data.currentPhotoNumber > data.totalImageCount)
    data.currentPhotoNumber = 0;
  let counterStr;
  if (data.currentPhotoNumber >= 0 && data.currentPhotoNumber <= 9) {
    counterStr = `00${data.currentPhotoNumber}`;
  } else if (data.currentPhotoNumber >= 10 && data.currentPhotoNumber <= 99) {
    counterStr = `0${data.currentPhotoNumber}`;
  }

  const src = `./img/image__${counterStr}.JPG`;

  sel.overlayImg.setAttribute("src", src);
};

const openOverlay = (e, data) => {
  sel.overlayCont.classList.remove("hidden");
  sel.overlayCont.classList.add("visible");
  data.currentPhotoNumber = e.target.dataset.num;
  const src = `./img/image__${data.currentPhotoNumber}.JPG`;
  sel.overlayImg.setAttribute("src", src);
  document.body.classList.add("noscroll");
};

export { showPreviousPhoto, showNextPhoto, openOverlay };
