document.addEventListener('DOMContentLoaded', (event) => {
    /** @type {HTMLElement} */
    const menu = document.querySelector(".menu");
    /** @type {HTMLElement} */
    const menuButton = document.querySelector("#menuButton")

    const menuExpand = () => {
        menuButton.style.display = "none";
        menu.style.top = ".5rem";
        menu.style.right = ".5rem";
        menu.style.width = "10rem";
        menu.style.borderRadius = "15px"

        if (menu.querySelector('ul')) {
            return;
        }    
        
        let linkList = document.createElement("ul");
        let linkElement = document.createElement("li");
        let link = document.createElement("a");
        let linkText = document.createTextNode("");
        Links.forEach(item => {
            linkText = document.createTextNode(item);
            link.appendChild(linkText);
            link.href = `#${item.toLowerCase()}`;

            link.style.color = "white";

            linkElement.appendChild(link);
            linkList.appendChild(linkElement);

            link.addEventListener("click", disableMousOutAfterNavigation);

            linkElement = document.createElement("li");
            link = document.createElement("a");
            linkText = document.createTextNode("")
        });
        menu.appendChild(linkList);
    }

    const revertMenuExpand = () => {
        menu.innerHTML = "";
        menu.appendChild(menuButton);
        menuButton.style.display = "inline";
        menu.style.top = ".7rem";
        menu.style.right = ".7rem";
        menu.style.width = "4rem";
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


const Links = ["About", "Skills"];