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