
function showNavigationBar() {
    let temp = document.getElementById("NavigationBarTemp");
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}
document.getElementById("NavigationBar").innerHTML = showNavigationBar();