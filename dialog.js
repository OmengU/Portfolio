const dialogs = {
    pLangs:{
        names:["C", "C++", "C#", "Java", "Python", "Javascript", "Sql"],
        points:[2, 3, 5, 4, 3, 4, 3],
    },
    webDev:{
        names:["Javascript", "Typescript", "Html/CSS", "React", "Lit", "Spring Boot", "Asp.net", "SignalR"],
        points:[4, 4, 5, 5, 4, 2, 5, 4],
    },
    langs:{
        names:["German", "English"],
        points:[6, 6],
    },
    other:{
        names:["Ms Office", "Adobe CC", "Networking", "Linux"],
        points:[5, 3, 3, 4],
    },
}

/** @type {HTMLElement} */
const dialog = document.querySelector("#dialog");

const showDialog = (dialogkey) => {
    if (typeof dialogkey !== 'string' && dialogs[key] === undefined) {
        console.error('Key is not valid');
        return;
    }

    dialog.innerHTML = `<div id="dialogContent">
                            <button class="btn" onclick="dialog.close()"><span id="closeIcon" class="icon"></span></button>
                            <div id="skillsDialogContainer">
                                <div>
                                    ${dialogs[dialogkey].names.map(name => `<p>${name}</p>`).join('')}
                                </div>
                                <div>
                                    ${dialogs[dialogkey].points.map(points => `<p>${`<span class="circleFilledIcon icon circleIcon"></span>`.repeat(points).concat(`<span class="circleOutlineIcon icon circleIcon"></span>`.repeat(6-points))}</p>`).join('')}
                                </div>
                            </div>
                        </div>`

dialog.onclick = (event) => {
    if (event.target === event.currentTarget) dialog.close();
}
dialog.showModal();

}