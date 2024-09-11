const header = document.createElement("div");
header.classList.add("header");
header.innerHTML = `
<img src="pearLogo.png" class="logo" onclick="location.href = 'index.html';">
`;
document.body.appendChild(header);