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
        menuButton.style.display = "none";
        menu.style.top = ".5rem";
        menu.style.right = ".5rem";
        menu.style.width = "10rem";
        menu.style.height = "6rem";
        menu.style.borderRadius = "15px"

        if (menu.querySelector('ul')) {
            return;
        }    
        
        menu.innerHTML = `<ul id="menuList">
        ${Links.map(link => `<li><a href="#${link.toLocaleLowerCase()}">${link}</a></li>`).join('')}
        </ul>`;
        
    }

    const revertMenuExpand = () => {
        menu.innerHTML = "";
        menu.appendChild(menuButton);
        menuButton.style.display = "inline";
        menu.style.top = ".7rem";
        menu.style.right = ".7rem";
        menu.style.width = "4rem";
        menu.style.height = "4rem";
        menu.style.borderRadius = "50%"

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