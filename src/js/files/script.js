// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// Подключение списка активных модулей
import { _slideUp } from "./functions.js";
import { _slideDown } from "./functions.js";
import { _slideToggle } from "./functions.js";

const dropDowns = document.querySelectorAll('.dropdown');
// const dropDownBodys = document.querySelectorAll('.dropdown__body');
// for (let index = 0; index < dropDownBodys.length; index++) {
// 	const dropDownBody = dropDownBodys[index];
// 	dropDownBody.hidden = true;
// 	_slideUp(dropDownBody, 500)
// 	console.log(dropDownBody);
// }


if (dropDowns) {
	for (let index = 0; index < dropDowns.length; index++) {
		const dropDown = dropDowns[index];
		let dropdownBody = dropDown.querySelector('.dropdown__body');
		let dropdownToggle = dropDown.querySelector('.dropdown__toggle');
		dropdownBody.hidden = true;
		// console.log(dropdownBody);
		if (isMobile.any()) {
			dropDown.addEventListener("click", function (e) {
				console.log('hello');
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
