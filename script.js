document.addEventListener('DOMContentLoaded', (event) => {

    const scrollShift = () =>  {
        document.body.style.setProperty('--scroll', ((window.scrollY / (document.body.offsetHeight - window.innerHeight)*100).toString() + "%"))
    }

    window.addEventListener("scroll", scrollShift);
    
    /** @type {HTMLElement} */
    const menu = document.querySelector(".menu");
    /** @type {HTMLElement} */
    const menuButton = document.querySelector("#menuButton")

    const menuExpand = () => {

        if(menu.classList.contains("menuNormal")) menu.classList.remove("menuNormal");
        menu.classList.add("menuExpanded");

        if (menu.querySelector('ul')) {
            return;
        }    
        
        menu.innerHTML = `<ul id="menuList">
        ${Links.map(link => `<li class="menuListElement"><a href="#${link.toLocaleLowerCase()}">${link}</a></li>`).join('')}
        </ul>`;
        
    }

    const revertMenuExpand = () => {
        if(menu.classList.contains("menuExpanded")) menu.classList.remove("menuExpanded")
        menu.classList.add("menuNormal");
        menu.innerHTML = "";
        menu.appendChild(menuButton);
        menuButton.style.display = "inline";
    }

    const disableMousOutAfterNavigation = () => {
        revertMenuExpand();
        menu.removeEventListener("mouseover");
    setTimeout(() => {
        menu.addEventListener("mouseover", menuExpand);
    }, 500);
    }

    menu.addEventListener("mouseover", menuExpand);
    //menuButton.addEventListener("mouseover", menuExpand);
    menu.addEventListener("mouseout", function(event) {
        if (menu.contains(event.relatedTarget)) {
            return;
        }    
        revertMenuExpand();
    });
    

});


const Links = ["Welcome", "About", "Skills", "Projects"];