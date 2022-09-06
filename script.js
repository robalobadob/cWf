// ****   Task 1: STICKY SIDEBAR   ****

// Make Sidebar Sticky
const sidebar = document.querySelector(".show-on-desktop-min");
sidebar.setAttribute("style", "position: sticky; top: 10em");


// ****   Task 2: MODAL   ****

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

// Add Modal to DOM
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
valueProp.classList.add("container");
valueProp.setAttribute("style", "margin: auto; padding: 0");
valueProp.innerHTML = `
    <section style="padding: 45px 50px; text-align: center">
        <h2 style="font-weight: bold">Value Propositions</h2>
        <div class="values-content-wrapper" style="display: flex; justify-content: space-around">
            <div class="values-content-block" style="margin: 0 30px; text-align: center; width: 25vw">
                <img class="values-img" style="height: 50px; width: auto" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/344/external-computer-free-time-wanicon-lineal-color-wanicon.png" alt="Computer Icon">
                <h3 class="values-header style="color: #444b4e; font-size: 20px; text-align: center; padding-top: 10px">Header 1</h3>
                <p class="values-content" style="color: font-size: 9px; text-align: justify; margin: 0 20px; padding: 10px: width: 100%">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus? Magnam a saepe dolorem ipsa cumque iste laudantium nulla perspiciatis incidunt in, sequi minus provident inventore amet fuga? Omnis, pariatur!</p>
            </div>
            <div class="values-content-block" style="margin: 0 30px; text-align: center; width: 25vw">
                <img class="values-img" style="height: 50px; width: auto" src="https://img.icons8.com/cute-clipart/344/truck.png" alt="Truck Icon">
                <h3 class="values-header" style="color: #444b4e; font-size: 20px; text-align: center; padding-top: 10px">Header 2</h3>
                <p class="values-content" style="color: font-size: 9px; text-align: justify; margin: 0 20px; padding: 10px: width: 100%">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et officiis vero, magnam mollitia inventore iste eaque suscipit placeat! Earum est ducimus vitae ratione! Maiores fuga, reiciendis debitis quae quo veniam.</p>
            </div>
            <div class="values-content-block" style="margin: 0 30px; text-align: center; width: 25vw">
                <img class="values-img" style="height: 50px; width: auto" src="https://img.icons8.com/bubbles/344/touchscreen-smartphone.png" alt="Phone Icon">
                <h3 class="values-header" style="color: #444b4e; font-size: 20px; text-align: center; padding-top: 10px">Header 3</h3>
                <p class="values-content" style="color: font-size: 9px; text-align: justify; margin: 0 20px; padding: 10px: width: 100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur autem quas quaerat saepe inventore alias odit porro rem ipsam. Et impedit repellendus a consequatur nobis veniam iste similique repudiandae?</p>
            </div>
        </div>
    </section>
`;

// Add to DOM
const leadership = document.querySelector(".col-12");
leadership.append(valueProp);




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