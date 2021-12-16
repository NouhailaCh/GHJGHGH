let toggle = document.getElementById('toglle');
let nav = document.getElementById("humb");
document.getElementById("toggle").addEventListener("click", function() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
});