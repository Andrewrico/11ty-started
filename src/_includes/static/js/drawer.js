
// DOM elements
const _drawer = document.getElementById("drawer");
const _backdrop = document.getElementById("drawer__backdrop");
const _opendrawer = document.getElementById("drawer__button-open");
const _closedrawer = document.getElementById("drawer__button-close");
const _navbarbrand = document.querySelector(".navbar__brand");

// open drawer if click button
_opendrawer.addEventListener('click', () => {
	_drawer.style.width = '400px';
	_drawer.style.opacity = '1';
	_backdrop.style.display = 'block';
	_navbarbrand.style.opacity = '0';
});

// close drawer if click button
_closedrawer.addEventListener('click', () => {
	_drawer.style.width = '0';
	_drawer.style.opacity = '0'; 
	_backdrop.style.display = 'none';
	_navbarbrand.style.opacity = '1';
});

// close drawer if click button
_backdrop.addEventListener('click', () => {
	_drawer.style.width = '0';
	_drawer.style.opacity = '0';
	_backdrop.style.display = 'none';
	_navbarbrand.style.opacity = '1';
});

// close drawer if width change
function if_viewport_width_change(add_media_query) {
	if (add_media_query.matches) {
		_drawer.style.width = '0';
		_drawer.style.opacity = '0';
		_backdrop.style.display = 'none';
		_navbarbrand.style.opacity = '1';
	}
}

// if width change add media query
const add_media_query = window.matchMedia("(min-width: 768px)");
if (matchMedia) {
	add_media_query.addListener(if_viewport_width_change);
	if_viewport_width_change(add_media_query);
};