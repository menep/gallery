import sel from './selectors';

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

	const src = `./img/highres/scotland_highres_${counterStr}.JPG`;
	sel.overlayImg.setAttribute('src', src);
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

	const src = `./img/highres/scotland_highres_${counterStr}.JPG`;

	sel.overlayImg.setAttribute('src', src);
};

const openOverlay = (e, data) => {
	sel.overlayCont.classList.remove('hidden');
	sel.overlayCont.classList.add('visible');
	data.currentPhotoNumber = e.target.dataset.num;
	const src = `./img/highres/scotland_highres_${data.currentPhotoNumber}.JPG`;
	sel.overlayImg.setAttribute('src', src);
	document.body.classList.add('noscroll');
};

const closeOverlay = () => {
	sel.overlayCont.classList.remove('visible');
	sel.overlayCont.classList.add('hidden');
	sel.overlayImg.setAttribute('src', ''); // unset image
	document.body.classList.remove('noscroll');
};

const imgLazyLoading = () => {
	const images = document.querySelectorAll('.image');

	const config = {
		rootMargin: '0px 0px 50px 0px',
		threshold: 0,
	};

	let observer = new IntersectionObserver(function(entries, self) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				preloadImage(entry.target);
				self.unobserve(entry.target);
			}
		});
	}, config);

	images.forEach(image => {
		observer.observe(image);
	});
};

const preloadImage = img => {
	const number = img.getAttribute('data-num');
	img.style.backgroundImage = `url(./img/lowres/scotland_lowres_${number}.JPG)`;
};

export {
	showPreviousPhoto,
	showNextPhoto,
	openOverlay,
	closeOverlay,
	imgLazyLoading,
};
