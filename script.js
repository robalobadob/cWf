//       ****   Task 1: STICKY SIDEBAR   ****

// Make Sidebar Sticky
const sidebar = document.querySelector(".show-on-desktop-min");
sidebar.classList.add("sticky-sidebar");


//       ****   Task 2: MODAL   ****

// Create Modal Button on Sidebar
const sidebarContent = document.querySelector(".show-on-desktop-min");
const modalButton = document.createElement("button");
modalButton.classList.add("btn-blue", "modal-button");
modalButton.innerHTML = "Click Here For A Modal!";
sidebarContent.append(modalButton);

// Create Modal Button on Tablet
const midContent = document.querySelector(".hide-on-desktop-min");
const modalButton2 = document.createElement("button");
modalButton2.classList.add("btn-blue", "modal-button");
modalButton2.innerHTML = "Click Here For A Modal!";
midContent.append(modalButton2);

// Select All Modal Buttons
const modalBtns = document.querySelectorAll(".modal-button")

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
modalBtns.forEach(function(e) {
    e.addEventListener("click", function() {
        modal.style.display = "block";
    })
})
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//       ****   Task 3: SECTION   ****

// Create Section
const valueProp = document.createElement("div");
valueProp.setAttribute("id", "value-props");
valueProp.classList.add("container", "values-container");
valueProp.innerHTML = `
    <section class="value-section">
        <h2>Value Propositions</h2>
        <hr>
        <div class="values-content-wrapper">
            <div class="values-content-block">
                <div class="values-image-block">
                    <img class="values-img" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/344/external-computer-free-time-wanicon-lineal-color-wanicon.png" alt="Computer Icon">
                </div>
                <div class="values-text-block">
                    <h3 class="values-header">Header 1</h3>
                    <p class="values-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus? Magnam a saepe dolorem ipsa cumque iste laudantium nulla perspiciatis incidunt in, sequi minus provident inventore amet fuga? Omnis, pariatur!</p>
                </div>
            </div>
            <div class="values-content-block">
                <div class="values-image-block">
                    <img class="values-img" src="https://img.icons8.com/cute-clipart/344/truck.png" alt="Truck Icon">
                </div>
                <div class="values-text-block">
                    <h3 class="values-header">Header 2</h3>
                    <p class="values-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus? Magnam a saepe dolorem ipsa cumque iste laudantium nulla perspiciatis incidunt in, sequi minus provident inventore amet fuga? Omnis, pariatur!</p>
                </div>
            </div>
            <div class="values-content-block">
                <div class="values-image-block">
                    <img class="values-img" src="https://img.icons8.com/bubbles/344/touchscreen-smartphone.png" alt="Phone Icon">
                </div>
                <div class="values-text-block">
                    <h3 class="values-header">Header 3</h3>
                    <p class="values-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus? Magnam a saepe dolorem ipsa cumque iste laudantium nulla perspiciatis incidunt in, sequi minus provident inventore amet fuga? Omnis, pariatur!</p>
                </div>    
            </div>
        </div>
    </section>
`;

// Add to DOM
const leadership = document.querySelector(".col-12");
leadership.append(valueProp);

// Add CSS
var sheet = document.createElement('style')
sheet.innerHTML = `/* SIDEBAR */

.sticky-sidebar {
    position: sticky;
    top: 10em;
}

/* MODAL */

.modal {
    display: none; 
    position: fixed; 
    z-index: 950; 
    padding-top: 100px; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.6); 
}

.modal-content {
    position: relative; 
    background-color: #ffffff; 
    margin: 15% auto; 
    padding: 5rem 6rem; 
    border: 1px solid #444b4e; 
    border-radius: 0.5rem; 
    width: 75%;
}

.modal-content h1 {
    margin: 0 0 30px;
}

.modal-content p {
    margin: 0 0 30px;
    width: 60%;
}

.close-button {
    float: right; 
    width: 1.5rem; 
    line-height: 1.5rem; 
    text-align: center; 
    cursor: pointer; 
    font-size: 30px; 
    font-weight: bold; 
    border-radius: 0.25rem
}

.close-button:hover {
    color: grey;
}

/* VALUES */

.values-container {
    margin: auto; 
    padding: 0;
}

.values-container section {
    padding: 45px 50px; 
    text-align: center;
}

.values-container h2 {
    font-weight: bold; 
    font-size: 28px;
    position: relative; 
    top: -15px;
}

.values-container hr {
    border: none; 
    border-top: 4px dotted grey; 
    position: relative; 
    top: 30px; 
    width: 70%; 
    margin: 0 auto; 
    z-index: 1
}

.values-content-wrapper {
    display: flex; 
    justify-content: space-around
}

.values-content-block {
    margin: 0 30px; 
    text-align: center; 
    width: 25vw
}

.values-image-block {
    width: 15%; 
    margin: auto; 
    text-align: center;
}

.values-img {
    display: block; 
    max-width: 50px; 
    height: auto; 
    width: auto; 
    position: relative; 
    z-index: 2;
}

.values-header {
    color: #444b4e; 
    font-size: 22px; 
    font-weight: bold; 
    text-align: center; 
    padding-top: 10px;
}

.values-content { 
    font-size: 16px; 
    text-align: center; 
    padding: 10px; 
    width: 100%;
}

/* 9th gen iPad px width */
@media screen and (max-width: 1080px) {
    .modal {
        padding-top: 0;
    }
    .modal-content {
        height: 100%;
        width: 100%;
        margin: 0;
        border: none;
        border-radius: 0;
    }

    .modal-box {
        margin: 0px;
    }

    .values-container section {
        padding: 40px;
    }

    .values-container hr {
        display: none;
    }

    .values-content-wrapper {
        display: block;
    }

    .values-content-block {
        display: flex;
        width: 100%;
        margin: 20px;
        padding-bottom: 25px;
    }

    .values-image-block {
        margin-left: 50px;
    }

    .values-img {
        max-width: 150px;
    }

    .values-text-block {
        margin: 0 90px 0 80px;
    }

    .values-content {
        padding: 10px 0;
        width: auto;
    }
}

@media screen and (max-width: 600px) {
    .values-content-block {
        display: block;
        margin: 0;
        padding: 5px;
        width: 100%;
    }

    .values-image-block {
        display: inline;
        margin: 0 auto;
    }

    .values-img {
        display: block;
        margin: 0 auto;
    }

    .values-text-block {
        margin: 0 0 30px; 
    }

    .values-header {
        text-align: center;
    }

    .values-content {
        margin: 0;
    }
}`;
document.head.appendChild(sheet);