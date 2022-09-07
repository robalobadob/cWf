// ****   Task 1: STICKY SIDEBAR   ****

// Make Sidebar Sticky
const sidebar = document.querySelector(".show-on-desktop-min");
sidebar.classList.add("sticky-sidebar");


// ****   Task 2: MODAL   ****

// Create Modal Button on Sidebar
const modalButton = document.createElement("button");
modalButton.classList.add("modal-button");
modalButton.innerHTML = "Click Here For A Modal!"
sidebar.append(modalButton);

// Create Modal
const modal = document.createElement("div");
modal.setAttribute("id", "sidebar-modal");
modal.classList.add("modal");

// Add Modal to DOM
const main = document.querySelector("main");
main.append(modal);

// Create Modal Content
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content")
modalContent.innerHTML = `
        <span class="close-button">&times;</span>
        <h1>Stuck Here in the Modal with You</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium incidunt consequuntur fugit necessitatibus libero dolores unde doloribus pariatur dignissimos debitis maiores, enim sequi fuga, quidem illo nam adipisci quo?</p>
`;
modal.append(modalContent);

// Close Button
var closeButton = modalContent.querySelector(".close-button");

// Add Button Functionality
modalButton.onclick = function() {
    modal.style.display = "block";
}
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// ****   Task 3: SECTION   ****

// Create Section
const valueProp = document.createElement("div");
valueProp.setAttribute("id", "value-props");
valueProp.classList.add("container", "value-container");
valueProp.innerHTML = `
    <section class="value-section">
        <h2>Value Propositions</h2>
        <hr>
        <div class="values-content-wrapper">
            <div class="values-content-block">
                <div class="values-image-block">
                    <img class="values-img" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/344/external-computer-free-time-wanicon-lineal-color-wanicon.png" alt="Computer Icon">
                </div>
                <h3 class="values-header">Header 1</h3>
                <p class="values-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus? Magnam a saepe dolorem ipsa cumque iste laudantium nulla perspiciatis incidunt in, sequi minus provident inventore amet fuga? Omnis, pariatur!</p>
            </div>
            <div class="values-content-block">
                <div class="values-image-block">
                    <img class="values-img" src="https://img.icons8.com/cute-clipart/344/truck.png" alt="Truck Icon">
                </div>
                <h3 class="values-header">Header 2</h3>
                <p class="values-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et officiis vero, magnam mollitia inventore iste eaque suscipit placeat! Earum est ducimus vitae ratione! Maiores fuga, reiciendis debitis quae quo veniam.</p>
            </div>
            <div class="values-content-block">
                <div class="values-image-block">
                    <img class="values-img" src="https://img.icons8.com/bubbles/344/touchscreen-smartphone.png" alt="Phone Icon">
                </div>    
                <h3 class="values-header">Header 3</h3>
                <p class="values-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur autem quas quaerat saepe inventore alias odit porro rem ipsam. Et impedit repellendus a consequatur nobis veniam iste similique repudiandae?</p>
            </div>
        </div>
    </section>
`;

// Add to DOM
const leadership = document.querySelector(".col-12");
leadership.append(valueProp);




// Add CSS
var sheet = document.createElement('style')
sheet.innerHTML = ``;
document.body.appendChild(sheet);






// function mobileModal(x) {
//     if (x.matches) {
//         modal.style.padding = "0px";
//         modalContent.style.margin = "0px"
//     }
// };

// var x = window.matchMedia("(max-width: 700px)").matches;
// mobileModal(x);
// modal.addEventListener("change", mobileModal);



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