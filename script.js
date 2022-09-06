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
const modal = document.createElement("modal");
modal.setAttribute("id", "sidebar-modal");
modal.classList.add("modal");
modal.setAttribute("style", "position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4); opacity: 0; visibility: hidden; transform: scale(1.1)");

// Create Modal Content
const modalContent = document.createElement("modal-content");
modalContent.classList.add("modal-content")
modalContent.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #ffffff; margin: 15% auto; padding: 1rem 1.5rem; border: 1px solid #444b4e; border-radius: 0.5rem");
modalContent.innerHTML = `  
    <div>
        <span class="close">&times;</span>
        <h1>Stuck in the Modal with You</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium incidunt consequuntur fugit necessitatibus libero dolores unde doloribus pariatur dignissimos debitis maiores, enim sequi fuga, quidem illo nam adipisci quo?</p>
    </div>
`;

// Button Functionality
var closeButton = document.getElementsByClassName("close")[0];
closeButton.setAttribute("style", "float: right; width: 1.5rem; line-height: 1.5rem; text-align: center; cursor: pointer; border-radius: 0.25rem; background-color: #444b4e")

// Open Modal
modalButton.onclick = function() {
    modal.style.display = "block";
}
// Close Modal by clicking X
closeButton.onclick = function() {
    modal.style.display = "none";
}
// Close Modal by clicking anywhere else in the window
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}