// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// Подключение списка активных модулей
import { _slideUp } from "./functions.js";
import { _slideDown } from "./functions.js";
import { _slideToggle } from "./functions.js";

const dropDowns = document.querySelectorAll('.dropdown');

if (dropDowns) {
	const dropdownBodys = document.querySelectorAll('.dropdown__body');

	for (let index = 0; index < dropDowns.length; index++) {
		const dropDown = dropDowns[index];
		let dropdownBody = dropDown.querySelector('.dropdown__body');
		let dropdownToggle = dropDown.querySelector('.dropdown__toggle');
		dropdownBody.hidden = true;
		if (isMobile.any()) {
			dropdownToggle.addEventListener("click", function (e) {
				let targetItem = dropdownToggle;

				dropDowns.forEach(item => {
					let dropDownBtn = item.querySelector('.dropdown__toggle');
					if (dropDownBtn !== targetItem) {
						dropDownBtn.classList.remove('_active');
						
					}
				});

				dropdownBodys.forEach(item => {
					if (item !== dropdownBody) {
						item.classList.remove('_open');
						_slideUp(item, 500)
					}
				});

				dropdownToggle.classList.toggle('_active');
				dropdownBody.classList.toggle('_open');
				_slideToggle(dropdownBody, 500)
			});
		} else {
			dropDown.addEventListener("mouseenter", function (e) {
				dropDown.classList.add('_hover');
				dropdownToggle.classList.add('_hover');
				dropdownBody.classList.add('_open');
				_slideDown(dropdownBody, 500);
			});
			dropDown.addEventListener("mouseleave", function (e) {

				dropdownToggle.classList.remove('_hover');
				dropdownBody.classList.remove('_open');
				_slideUp(dropdownBody, 500)
			});
		}
	}
};

const catalogMenu = document.querySelector('.catalog-header');
if (catalogMenu) {
	let catalogItems = catalogMenu.querySelectorAll('.catalog-header__item');
	let catalogWrappers = catalogMenu.querySelectorAll('.catalog-header__wrapper');
	for (let index = 0; index < catalogItems.length; index++) {
		const catalogItem = catalogItems[index];
		let catalogWrapper = catalogItem.querySelector('.catalog-header__wrapper');
		let catalogButton = catalogItem.querySelector('.catalog-header__toggle');
		if (isMobile.any()) {
			catalogItem.addEventListener("click", function (e) {
				let targetItem = catalogItem;

				catalogItems.forEach(item => {
					if (item !== targetItem) {
						item.classList.remove('_active-mobile');
					}
				});

				catalogWrappers.forEach(wrapper => {
					if (wrapper !== catalogWrapper) {
						wrapper.classList.remove('_open');
					}
				});

				catalogItem.classList.toggle('_active-mobile');
				catalogWrapper.classList.toggle('_open');
			});

		} else {
			catalogItem.addEventListener("mouseenter", function (e) {
				catalogItem.classList.add('_active');
				catalogButton.classList.add('_active');
				catalogWrapper.classList.add('_open');
			});
			catalogItem.addEventListener("mouseleave", function (e) {
				catalogItem.classList.remove('_active');
				catalogButton.classList.remove('_active');
				catalogWrapper.classList.remove('_open');
			});
		}
	}
}