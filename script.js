document.addEventListener('DOMContentLoaded', (event) => {

    isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -1 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const scrollShift = () => {
        document.body.style.setProperty('--scroll', ((window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100).toString() + "%"))
    }

    window.addEventListener("scroll", scrollShift);

    /** @type {HTMLElement} */
    const menu = document.querySelector(".menu");
    /** @type {HTMLElement} */
    const menuButton = document.querySelector("#menuButton")

    const menuExpand = () => {
        if (menu.classList.contains("menuNormal")) menu.classList.remove("menuNormal");
        menu.classList.add("menuExpanded");

        if (menu.querySelector('ul')) {
            return;
        }

        menu.innerHTML = `<ul id="menuList">
        ${Links.map(link => `<li class="menuListElement"><a href="#${link.toLocaleLowerCase()}">${link}</a></li>`).join('')}
        </ul>`;

        const links = document.querySelectorAll('.menuListElement a');


        links.forEach(link => {
            const id = link.getAttribute('href').split("#")[1];
            const heading = document.getElementById(id);
            if (isInViewport(heading)) {
                link.parentElement.style.background = "white";
                link.style.color = "black";
            }
            link.addEventListener('click', function () {
                links.forEach(l => {
                    l.parentElement.style.background = "black";
                    l.style.color = "white";
                })

                link.parentElement.style.background = "white";
                link.style.color = "black";
            });

            links.forEach(link => {

                link.parentElement.style.background = "black";
                link.style.color = "white";

                const id = link.getAttribute('href').split("#")[1];
                const heading = document.getElementById(id);
                if (isInViewport(heading)) {
                    link.parentElement.style.background = "white";
                    link.style.color = "black";
                }
            });
        }, 160);
    }

    const revertMenuExpand = () => {
        if (menu.classList.contains("menuExpanded")) menu.classList.remove("menuExpanded")
        menu.classList.add("menuNormal");
        menu.innerHTML = "";
        menu.appendChild(menuButton);
        menuButton.style.display = "inline";
    }

    if (window.matchMedia("only screen and (max-width: 600px)").matches) {
        document.addEventListener('touchstart', function (event) {
            document.addEventListener('touchstart', function (event) {
                var isTouchInsideMenu = menu.contains(event.target);
                var isMenuExpanded = menu.classList.contains("menuExpanded");

                if (!isTouchInsideMenu && isMenuExpanded) {
                    revertMenuExpand();
                }
                if (isTouchInsideMenu && !isMenuExpanded) {
                    menuExpand();
                }
            });
        });
    } else {
        menu.addEventListener("mouseover", menuExpand);
        menu.addEventListener("mouseout", function (event) {
            if (menu.contains(event.relatedTarget)) {
                return;
            }
            revertMenuExpand();
        });
    }
});

const Links = ["Welcome", "About", "Skills", "Projects"];