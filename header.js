const header = document.createElement("div");
header.classList.add("header");
let path = location.href.substr(location.href.lastIndexOf("RestaurantF24") + 13).replace(/#[a-z0-9_]+/, "");
path = path.replace(/\/[a-z]+\.html/, "") + "/";
let pos = path.replace(/[a-z]+/g, "..").substr(1);
header.innerHTML = `
<img src="${pos}images/pearLogo.png" class="logo" onclick="location.href = '${pos}index.html';" id="headerClickLinkThing">
<div class="category">
	<a href="${pos}contact.html">Contact Us</a>
</div>
<div class="category">
	<a href="${pos}menu/logistics.html">Logistics</a>
</div>
<div class="category">
	<a href="${pos}about.html">About Us</a>
</div>
<div class="category">
	<a href="${pos}menu/index.html">Menu</a>
	<div class="subpages">
		<a href="${pos}menu/desserts.html">Desserts</a>
		<a href="${pos}menu/entrees.html">Entrees</a>
		<a href="${pos}menu/pear.html">Fresh Pears</a>
		<a href="${pos}menu/special.html">Specials</a>
	</div>
</div>
`;
document.body.appendChild(header);
headerClickLinkThing.onmousedown = function (event) {
	if (event.button != 2) return;

	event.preventDefault();
	location.href = pos + "secret.html";
}