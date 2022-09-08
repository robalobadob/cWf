Hello Ukrit,

Here is the assessment completed, as requested, including the bonus points.

I have it broken into two sections.  One for the Leadership page (lines 10-332) and one for the Culture page (lines 338-546).

Everything should hopefully be delivered up to your standards, though there are obviously areas to finesse and improve.  With more time, I would have liked to more closely match up the new content with your current design schema but I think I got pretty close.  

I really enjoyed this.  Thank you for the opportunity.

Now, without further ado:



Copy and paste this into the developer console on https://www.widerfunnel.com/leadership/.

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



Copy and paste this into the developer console on https://www.widerfunnel.com/culture/.

//       ****  Task 4: TABBABLE  ****

// Create Tabbable Section
const tabbable = document.createElement("section");
tabbable.setAttribute("id", "tab-section");
tabbable.innerHTML = `
    <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'tab-1')" id="defaultOpen">This is the First New Tab...</button>
        <button class="tablinks" onclick="openTab(event, 'tab-2')">...And This is the Second New Tab</button>
    </div>

    <div id="tab-1" class="tabcontent">
        <div class="left-right-wrapper">
            <div class="tab-content-left">
                <div class="tab-image-block">
                    <img class="tab-img" src="https://img.icons8.com/external-others-inmotus-design/344/external-Tab-virtual-keyboard-others-inmotus-design-2.png" alt="Tab Icon">
                </div>
                <div class="tab-text-block">
                    <h3>Header 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque modi officiis deleniti, assumenda quo quisquam repudiandae expedita, odit aut cum autem distinctio doloribus provident eveniet numquam quaerat aliquam sint? Quod, sed consequatur. Ut rem nihil quas architecto eum laboriosam, provident quidem omnis suscipit? Sequi assumenda omnis necessitatibus tempora quod officiis.</p>
                    <button class="btn-blue">Say hello!</button>
                </div>
            </div>
            <div class="tab-content-right">
                <div class="tab-mini-hero-block">
                    <img class="tab-mini-hero-img" src="https://images.unsplash.com/photo-1606987482048-c6826204b417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="hero image">
                </div>
            </div>
        </div>
    </div>

    <div id="tab-2" class="tabcontent">
        <div class="left-right-wrapper">
            <div class="tab-content-left">
                <div class="tab-image-block">
                    <img class="tab-img" src="https://img.icons8.com/nolan/344/tab-key--v2.png" alt="A different Tab Icon">
                </div>
                <div class="tab-text-block">
                    <h3>Header 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti omnis ut saepe sapiente ratione eveniet labore iusto quidem velit nihil eius, officia deleniti, natus aut provident, ea autem assumenda.</p>
                    <button class="btn-blue">Say hello!</button>
                </div>
            </div>
            <div class="tab-content-right">
                <div class="tab-mini-hero-block">
                    <span class="hang-loose">🤙</span>
                </div>
            </div>
        </div>
    </div>
`;

// Add to DOM
const hero = document.querySelector(".careers-page-hero");
hero.append(tabbable);

// Add Tab Functionality
function openTab (event, tabNum) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className += "active";
}

// Open First Tab by Default
document.getElementById("defaultOpen").click();

// Add CSS
var sheet = document.createElement('style')
sheet.innerHTML = `/* TABBABLE */

.tab {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    width: 65%;
}

.tab button {
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    display: inline-block;
    font-family: 'Open Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    color: #00a5b8;
    transition: 0.3s;
}

.tab button:hover {
    padding-bottom: 2px;
    border-bottom: 2px solid #00a5b8;
}

.tab button.active {
    text-decoration: none;
    outline: 0;
}

.tabcontent {
    display: none;
    padding: 6px 12px;
    animation: fadeEffect 1s;
}

@keyframes fadeEffect {
    from {opacity: 0;}
    to {opacity: 1;}
}

.left-right-wrapper {
    display: flex;
}

.tab-content-left {
    display: flex;
    flex-direction: column;
    margin: 10px 15px;
    width: 50%;
}

.tab-image-block {
    width: 15%; 
    margin: 0 auto; 
    text-align: center;
}

.tab-img {
    display: block; 
    max-width: 50px; 
    height: auto; 
    width: auto; 
    position: relative; 
}

.tab-text-block h3 {
    margin: 0 0 30px;
}

.tab-text-block p {
    margin: 0 0 30px !important;
}

.tab-content-right {
    display: flex;
    margin: 10px 15px;
    width: 50%;
}

.tab-mini-hero-block {
    margin: auto; 
    text-align: center;
}

.tab-mini-hero-block span {
    font-size: 150px;
}

.hang-loose {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
}

@media screen and (max-width: 600px) {
    .left-right-wrapper {
        display: block;
    }

    .tab-content-left {
        width: 80vw;
    }

    .tab-content-right {
        width: 80vw;
        margin: 10px auto;
    }
}`;
document.body.appendChild(sheet);