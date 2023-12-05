const wrapper = document.querySelector(".wrapper");
const columns = document.querySelector(".columns");
const items = Array.from(wrapper.querySelectorAll(".item"));
const divs = Array.from(document.querySelectorAll(".column"));
const activeClass = "js-active";

function manageView(e) {
	if (e.type === "click") {
		const target = e.target;
		const targetIndex = items.indexOf(target);
		const scrollAmount = targetIndex * target.offsetWidth;
		wrapper.scrollLeft = scrollAmount;
	} else {
		const scrollAmount = wrapper.scrollLeft;
		const halfWrapperWidth = wrapper.offsetWidth / 2;

		columns.classList.toggle(activeClass, scrollAmount > halfWrapperWidth);
		divs[0].classList.toggle(activeClass, scrollAmount <= halfWrapperWidth);
		divs[1].classList.toggle(activeClass, scrollAmount > halfWrapperWidth);
	}
}

wrapper.addEventListener("scroll", manageView);

items.forEach((div) => {
	div.addEventListener("click", manageView);
});
