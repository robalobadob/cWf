// Sticky Sidebar
const sidebar = document.querySelector(".show-on-desktop-min");
sidebar.setAttribute("style", "position: sticky; top: 10em");

// Create Modal Button on Sidebar
const modalButton = document.createElement("button");
modalButton.classList.add("modal-button");
modalButton.innerHTML = "Click Here For A Modal!"
modalButton.setAttribute("style", "padding: 1rem 4rem; border: 1px solid #444b4e; border-radius: 0.5rem; font-size: 1rem; flex: 0 1 auto; background-color: rgb(0, 165, 184); cursor: pointer");
sidebar.append(modalButton);

// Create Modal
const modal = document.createElement("div");
modal.setAttribute("id", "sidebar-modal");
modal.classList.add("modal");
modal.setAttribute("style", "display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.6); transform: scale(1.1)");
console.log(modal.style.display);

const main = document.querySelector("main");
main.append(modal);

// Create Modal Content
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content")
modalContent.setAttribute("style", "position: relative; background-color: #ffffff; margin: 15% auto; padding: 1rem 1.5rem; border: 1px solid #444b4e; border-radius: 0.5rem; width: 75%");
modalContent.innerHTML = `
        <span class="close-button">&times;</span>
        <h1>Stuck in the Modal with You</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium incidunt consequuntur fugit necessitatibus libero dolores unde doloribus pariatur dignissimos debitis maiores, enim sequi fuga, quidem illo nam adipisci quo?</p>
`;
modal.append(modalContent);

// Close Button
var closeButton = modalContent.querySelector(".close-button");
closeButton.setAttribute("style", "float: right; width: 1.5rem; line-height: 1.5rem; text-align: center; cursor: pointer; font-size: 30px; font-weight: bold; border-radius: 0.25rem");

modalButton.onclick = function() {
    modal.style.display = "block";
}
console.log(modal.style.display);
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
console.log(modal.style.display);

function mobileModal(x) {
    if (x.matches) {
        modal.style.padding = "0px";
        modalContent.style.margin = "0px"
    }
};

var x = window.matchMedia("(max-width: 700px)").matches;
mobileModal(x);
x.addEventListener("change", mobileModal);

// modalButton.addEventListener("click", function() {
//     modal.style.display = "block";
//     console.log("clicked")
//     console.log(modal.style.display)
// });

// closeButton.addEventListener("click", function() {
//     modal.style.display = "none";
//     console.log("clicked")
//     console.log(modal.style.display)
// });

// background-color: #444b4e