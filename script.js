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
modal.setAttribute("style", "display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); transform: scale(1.1)");

// Create Modal Content
const modalContent = document.createElement("modal-content");
modalContent.classList.add("modal-content")
modalContent.setAttribute("style", "background-color: #ffffff; margin: auto; padding: 1rem 1.5rem; border: 1px solid #444b4e; border-radius: 0.5rem; width: 80%");
modalContent.innerHTML = `  
    <div>
        <span class="close-button">&times;</span>
        <h1>Stuck in the Modal with You</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium incidunt consequuntur fugit necessitatibus libero dolores unde doloribus pariatur dignissimos debitis maiores, enim sequi fuga, quidem illo nam adipisci quo?</p>
    </div>
`;
modal.append(modalContent);

// Close Button
var closeButton = modalContent.querySelector(".close-button");
closeButton.setAttribute("style", "float: right; width: 1.5rem; line-height: 1.5rem; text-align: center; cursor: pointer; border-radius: 0.25rem; background-color: #444b4e");

modalButton.addEventListener("click", function() {
    modal.style.display = "block";
});
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// function windowOnClick (event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// modalButton.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);