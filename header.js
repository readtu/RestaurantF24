const header = document.createElement("div");
header.classList.add("header");
let path = location.href.substr(location.href.lastIndexOf("RestaurantF24") + 13).replace(/#[a-z0-9_]+/, "");
path = path.replace(/\/[a-z]+\.html/, "") + "/";
let pos = path.replace(/[a-z]+/g, "..").substr(1);
header.innerHTML = `
<img src="${pos}images/pearLogo.png" class="logo" onclick="location.href = '${pos}index.html';">
<div class="category">
	<a href="${pos}contact.html">Contact Us</a>
</div>
<div class="category">
	<a href="${pos}menu/desserts.html">Desserts</a>
	<div class="subpages">
		<a href="${pos}subpage0.html">Subpage 1-0</a>
		<a href="${pos}subpage1.html">Subpage 1-1</a>
		<a href="${pos}subpage2.html">Subpage 1-2</a>
	</div>
</div>
<div class="category">
	<a href="${pos}menu/entrees.html">Entrees</a>
	<div class="subpages">
		<a href="${pos}subpage0.html">Subpage 2-0</a>
		<a href="${pos}subpage1.html">Subpage 2-1</a>
		<a href="${pos}subpage2.html">Subpage 2-2</a>
	</div>
</div>
<div class="category">
	<a href="${pos}menu/pear.html">Fresh Pears</a>
	<div class="subpages">
		<a href="${pos}subpage0.html">Subpage 2-0</a>
		<a href="${pos}subpage1.html">Subpage 2-1</a>
		<a href="${pos}subpage2.html">Subpage 2-2</a>
	</div>
</div>
<div class="category">
	<a href="${pos}menu/special.html">Specials</a>
	<div class="subpages">
		<a href="${pos}menu/special.html#special0">Fancy Fantasy Pear</a>
		<a href="${pos}menu/special.html#special1">Pear Pie</a>
		<a href="${pos}menu/special.html#special2">Pear Cupcake</a>
		<a href="${pos}menu/special.html#special3">Jar 'o' Pear</a>
		<a href="${pos}menu/special.html#special4">Pear Paint</a>
		<a href="${pos}menu/special.html#special5">Pear Tower</a>
		<a href="${pos}menu/special.html#special6">Pear, Nut & Fruit Charcuterie Board</a>
	</div>
</div>
`;
document.body.appendChild(header);