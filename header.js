const header = document.createElement("div");
header.classList.add("header");
header.innerHTML = `
<img src="pearLogo.png" class="logo" onclick="location.href = 'index.html';">
<div class="category">
	<a href="menu/desserts.html">Desserts</a>
	<div class="subpages">
		<a href="subpage0.html">Subpage 1-0</a>
		<a href="subpage1.html">Subpage 1-1</a>
		<a href="subpage2.html">Subpage 1-2</a>
	</div>
</div>
<div class="category">
	<a href="menu/entrees.html">Entrees</a>
	<div class="subpages">
		<a href="subpage0.html">Subpage 2-0</a>
		<a href="subpage1.html">Subpage 2-1</a>
		<a href="subpage2.html">Subpage 2-2</a>
	</div>
</div>
<div class="category">
	<a href="menu/pear.html">Fresh Pears</a>
	<div class="subpages">
		<a href="subpage0.html">Subpage 2-0</a>
		<a href="subpage1.html">Subpage 2-1</a>
		<a href="subpage2.html">Subpage 2-2</a>
	</div>
</div>
<div class="category">
	<a href="menu/special.html">Specials</a>
	<div class="subpages">
		<a href="subpage0.html">Subpage 2-0</a>
		<a href="subpage1.html">Subpage 2-1</a>
		<a href="subpage2.html">Subpage 2-2</a>
	</div>
</div>
`;
document.body.appendChild(header);