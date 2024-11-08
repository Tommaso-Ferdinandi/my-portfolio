var source = document.querySelector("#motivo");
var displayValue = "Offerta di Lavoro";
var target = document.querySelector(".radio");

function displayWhenSelected(source, displayValue, target) {
    var selectedIndex = source.selectedIndex;
    if (source[selectedIndex].value === displayValue) {
        target.classList.remove("d-none");
    } else {
        target.classList.add("d-none");
    }
}
source.addEventListener("change", function () {
    displayWhenSelected(source, displayValue, target)
}, false);