
function showNavigationBar() {
    let temp = document.getElementsByTagName("NavigationBar");
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}
document.getElementById("dat").innerHTML = showNavigationBar();