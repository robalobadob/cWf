//       ****  Task 4: TABBABLE  ****

const tabbable = document.createElement("section");
tabbable.setAttribute("id", "tab-section");
tabbable.innerHTML = `
    <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'tab-1')">Tab 1</button>
        <button class="tablinks" onclick="openTab(event, 'tab-2')">Tab 2</button>
    </div>

    <div id="tab-1" class="tabcontent">
        <div class="tab-content-left">
            <div class="tab-image-block">
                <img class="tab-img" src="#" alt="#">
            </div>
            <div class="tab-text-block">
                <h3 class="tab-header">Header 1</h3>
                <p class="tab-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti omnis ut saepe sapiente ratione eveniet labore iusto quidem velit nihil eius, officia deleniti, natus aut provident, ea autem assumenda.</p>
                <button class="tab-button">Say hello!</button>
            </div>
        </div>
        <div class="tab-content-right">
            <div class="tab-mini-hero-block">
                <img class="tab-mini-hero-img" src="#" alt="#">
            </div>
        </div>
    </div>

    <div id="tab-2" class="tabcontent">
        <div class="tab-content-left">
            <div class="tab-image-block">
                <img class="tab-img" src="#" alt="#">
            </div>
            <div class="tab-text-block">
                <h3 class="tab-header">Header 2</h3>
                <p class="tab-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque modi officiis deleniti, assumenda quo quisquam repudiandae expedita, odit aut cum autem distinctio doloribus provident eveniet numquam quaerat aliquam sint? Quod, sed consequatur. Ut rem nihil quas architecto eum laboriosam, provident quidem omnis suscipit? Sequi assumenda omnis necessitatibus tempora quod officiis.</p>
                <button class="tab-button">Say hello!</button>
            </div>
        </div>
        <div class="tab-content-right">
            <div class="tab-mini-hero-block">
                <img class="tab-mini-hero-img" src="#" alt="#">
            </div>
        </div>
    </div>
`;
const hero = document.querySelector(".careers-page-hero");
hero.append(tabbable);

// Add CSS
var sheet = document.createElement('style')
sheet.innerHTML = ``;
document.body.appendChild(sheet);