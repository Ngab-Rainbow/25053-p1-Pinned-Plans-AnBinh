import plansBriefManagement from "../JS/brief-plans-information.js"
import planNotesManagement from "../JS/plan-notes-management.js"
const rawCurrentUser = localStorage.getItem("currentAccount")

let planLinks = {}

if (rawCurrentUser) {
    const rawPlansLinks = localStorage.getItem("planLinks")
    const plansLinks = JSON.parse(rawPlansLinks)
    const pages = document.querySelectorAll(".page")
    for (const page of pages) {
        let verifyPage = page.getAttribute("class")
        if ((verifyPage.includes('guest'))) {
            page.style.display = 'none'
        } else {
            page.style.display = 'block'
        }
    }
    const rawCurrentPlan = localStorage.getItem("currentPlan")
    if (!rawCurrentPlan) {
        window.location.href = "../select-workplace/select-workplace.html"
    }
    const currentPlan = JSON.parse(rawCurrentPlan)

    const board = document.querySelector(".board")
    if (currentPlan.borderColor) {
        board.style.border = `10px solid ${currentPlan.borderColor}`
    } else {
        board.style.border = `none`
    }
    function isColor(value) {
        return CSS.supports("color", value);
    }
    if (isColor(currentPlan.background)) {
        board.style.backgroundColor = `${currentPlan.background}`
    } else {
        board.style.backgroundImage = `url(${currentPlan.background})`
        board.style.backgroundRepeat = `no-repeat`
        board.style.backgroundSize = `cover`
        board.style.backgroundPosition = `center`
    }
    switch (currentPlan.ratio) {
        case "1/1":
            board.style.height = "50rem"
            board.style.width = "50rem"
            break;
        case "4/3":
            board.style.height = "50rem"
            board.style.width = "37.5rem"
            break;
        case "3/4":
            board.style.height = "37.5rem"
            board.style.width = "50rem"
            break;
        case "2/3":
            board.style.height = `${100 / 3}rem`
            board.style.width = "50rem"
            break;
        case "3/2":
            board.style.height = "50rem"
            board.style.width = `${100 / 3}rem`
            break;
        default:
            break;
    }
    setInterval(saveNotes, 30000)


} else if (!rawCurrentUser) {
    const pages = document.querySelectorAll(".page")
    for (const page of pages) {
        let verifyPage = page.getAttribute("class")
        if ((verifyPage.includes('user'))) {
            page.style.display = 'none'
        } else {
            page.style.display = 'block'
        }
    }
    const rawPlanNotes = localStorage.getItem("currentPlanNotes")
    if (!rawPlanNotes) {
        const guestPlan = {
            ID: 'guest',
            notes: [

            ]
        }
        planLinks = {
            ID: 'guest',
            links: [
            ]
        }
        localStorage.setItem('currentPlanLinks', JSON.stringify(planLinks))
        localStorage.setItem('currentPlanNotes', JSON.stringify(guestPlan))
    }

}

const rawPlanNotes = localStorage.getItem("currentPlanNotes")
const planNotes = JSON.parse(rawPlanNotes)
const body = document.querySelector("body")
body.dataset.boardID = planNotes.ID
//display Notes
const displayNotes = () => {
    const rawPlanNotes = localStorage.getItem("currentPlanNotes")
    const planNotes = JSON.parse(rawPlanNotes)
    const renmantsNotes = document.querySelectorAll(".note")
    if (renmantsNotes) {
        renmantsNotes.forEach(note => note.remove())
    }

    planNotes.notes.forEach(note => {
        const noteContainer = document.createElement("div")
        noteContainer.classList.add("note")
        noteContainer.style = `
            width: ${note.width};
            height: fit-content;
            background-color: ${note.background};
            color: ${note.color};
            position: absolute;
            padding-top: 0.5rem;
            `

        if (note.pin.existence === 'yes') {
            const notePin = document.createElement('div')
            notePin.classList.add("pin")
            notePin.style.backgroundColor = note.pin.color
            noteContainer.appendChild(notePin)
        } else {
            const resizeArea = document.createElement('div')
            resizeArea.classList.add("resize-area")
            resizeArea.textContent = '>'
            noteContainer.appendChild(resizeArea)
            const resizeAll = document.createElement('div')
            resizeAll.classList.add("resize-all")
            noteContainer.appendChild(resizeAll)
        }
        note.text.forEach(text => {
            if (Object.hasOwn(text, 'title')) {
                const noteTitle = document.createElement("p")
                noteTitle.textContent = `${text.title}`
                noteTitle.style.fontSize = text.size
                noteTitle.classList.add("noteTitle")
                noteContainer.appendChild(noteTitle)
                return
            }
            if (Object.hasOwn(text, 'content')) {
                const noteContent = document.createElement("p")
                noteContent.textContent = `${text.content}`
                noteContent.style.fontSize = text.size
                noteContent.classList.add('noteContent')
                noteContainer.appendChild(noteContent)
                return
            }
        })
        if (note.status != "none") {
            const status = note.status
            const statusSign = document.createElement('div')

            statusSign.style.width = `fit-content`
            statusSign.style.height = `fit-content`
            switch (status) {
                case "needToDo":
                    statusSign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fa0606"><path d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5ZM310-310q-70-70-70-170 0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70q-100 0-170-70Zm130-310q-37-112-48.5-157.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 37-11.5 82.5T520-620h-80Zm-16.5 196.5Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5Z"/></svg>`
                    break;
                case "Doing":
                    statusSign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b4b100"><path d="M322.5-437.5Q340-455 340-480t-17.5-42.5Q305-540 280-540t-42.5 17.5Q220-505 220-480t17.5 42.5Q255-420 280-420t42.5-17.5Zm200 0Q540-455 540-480t-17.5-42.5Q505-540 480-540t-42.5 17.5Q420-505 420-480t17.5 42.5Q455-420 480-420t42.5-17.5Zm200 0Q740-455 740-480t-17.5-42.5Q705-540 680-540t-42.5 17.5Q620-505 620-480t17.5 42.5Q655-420 680-420t42.5-17.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
                    break;
                case "Finish":
                    statusSign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0d9201"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>`
                    break;
                default:
                    break;
            }
            statusSign.classList.add("status-sign")
            noteContainer.appendChild(statusSign)

        }
        document.querySelector('.board').appendChild(noteContainer)
        noteContainer.classList.add("note")
        noteContainer.dataset.id = `${note.noteID}`
        noteContainer.style.top = `${Number(note.y)}%`;
        noteContainer.style.left = `${Number(note.x)}%`

    })
    drawLine()
    contextMenuNote()
}
requestAnimationFrame(() => {
    setTimeout(() => {
        displayNotes();
    }, 0);
});

function drawLine() {
    const rawPlanLinks = localStorage.getItem('currentPlanLinks')
    planLinks = JSON.parse(rawPlanLinks)
    const board = document.querySelector(".board");
    const activeLines = new Set();
    let newLine = false;
    if (planLinks.links) {
        planLinks.links.forEach(link => {
            const lineID = `${link.nID} ${link.dID}`;
            let nNote = board.querySelector(`[data-id="${link.nID}"]`)
            let dNote = board.querySelector(`[data-id="${link.dID}"]`)
            if (!nNote || !dNote) return
            activeLines.add(lineID)
            let drawLink = board.querySelector(`.line[data-id="${lineID}"]`);
            if (!drawLink) {
                drawLink = document.createElement('div')
                drawLink.dataset.id = lineID
                drawLink.classList.add('line')
                board.appendChild(drawLink)
                newLine = true
            }
            let nX = nNote.offsetLeft
            nX = nX / 16 + Number(nNote.style.width.split('rem')[0]) / 2
            let nY = nNote.offsetTop / 16
            nY += 0.3
            let dX = dNote.offsetLeft
            dX = dX / 16 + Number(dNote.style.width.split('rem')[0]) / 2
            let dY = dNote.offsetTop / 16
            dY += 0.3
            let lineLength = ((nX - dX) ** 2 + (nY - dY) ** 2) ** (1 / 2)
            let angle = Math.atan2(dY - nY, dX - nX)

            drawLink.style = `
                position: absolute;
                top: ${nY}rem;
                left: ${nX}rem;
                background-color: ${link.color};
                width: ${lineLength}rem;
                height:4px;
                transform: rotate(${angle}rad);
                transform-origin: left center;
            `
        })
    }
    board.querySelectorAll(".line").forEach(line => {
        if (!activeLines.has(line.dataset.id)) {
            line.remove()
        }
    });
    if (newLine) lineFunction()
}
let drawPending = false;

function scheduleDrawLine() {
    if (drawPending) return;

    drawPending = true;

    requestAnimationFrame(() => {
        drawPending = false;
        drawLine();
    });
}










//
const switchPosition = document.querySelector(".right-left")
switchPosition.addEventListener('click', () => {
    const switchBtn = document.querySelector('.position-btn')
    const currentPosition = document.querySelector('.current')
    const workplaceArea = document.querySelector('.workplace')
    const toolsBar = document.querySelector('.tools-bar')
    if (currentPosition.textContent === 'L') {
        switchBtn.style.left = '3.7rem'
        currentPosition.textContent = 'R'
        workplaceArea.style.gridTemplateColumns = '7fr 1fr'
        toolsBar.style.order = '1'
        return
    }
    if (currentPosition.textContent === 'R') {
        switchBtn.style.left = '0.05rem'
        currentPosition.textContent = 'L'
        workplaceArea.style.gridTemplateColumns = '1fr 7fr'
        toolsBar.style.order = '0'
        return
    }
})
const settingContainter = document.querySelector('.setting-container')
document.querySelector('.setting-btn').addEventListener('click', () => {
    settingContainter.style.top = '50%'
})
document.querySelector('.close-setting').addEventListener('click', () => {
    settingContainter.style.top = '-50%'
})

//////

const addingNote = document.querySelector(".adding")
addingNote.addEventListener("click", () => {
    const closeBtn = document.querySelector(".close")
    const createButton = document.querySelector('.confirm-create')
    const exitButton = document.querySelector(".exit")
    const updateButton = document.querySelector('.update')
    const resetButton = document.querySelector('.reset')
    const addBtn = document.querySelector('.add-content')
    addBtn.style.display = 'block'
    createButton.style.display = "inline-block"
    exitButton.style.display = 'inline-block'
    updateButton.style.display = 'none'
    resetButton.style.display = 'none'
    closeBtn.style.display = 'none'
    const noteGenerator = document.querySelector(".notes-generator")
    const isolationArea = document.querySelector('.isolation-area')
    noteGenerator.style.top = '50%'
    isolationArea.style.top = '0'
    const generateBackground = document.querySelector(".input-background")
    const generateColor = document.querySelector('.input-color')

    generateBackground.value = '#ffffff'
    generateColor.value = "#474747"
    const noteContent = document.querySelector('.note-content')
    noteContent.style.backgroundColor = `${generateBackground.value}`
    noteContent.style.color = `${generateColor.value}`
    generateBackground.onchange = () => {
        noteContent.style.backgroundColor = `${generateBackground.value}`
    }
    generateColor.onchange = () => {
        noteContent.style.color = `${generateColor.value}`
    }
    let generateTitleInput = document.createElement('textarea')
    generateTitleInput.classList.add("note-title-input")
    generateTitleInput.classList.add("input")
    generateTitleInput.setAttribute('placeholder', `Enter your note's title here`)

    let generateContentInput = document.createElement('textarea')
    generateContentInput.classList.add("note-content-input")
    generateContentInput.classList.add("input")
    generateContentInput.setAttribute('placeholder', `Enter your note's content here`)

    let previewTitle = document.createElement('p')
    previewTitle.classList.add("note-title")

    let previewContent = document.createElement('p')
    previewContent.classList.add('note-text')

    const recentNotesGenerator = new AbortController();

    selectTypeOfNote();
    let notePreview = document.querySelector('.note-content')
    addingInputs(generateTitleInput, previewTitle, generateContentInput, previewContent, notePreview, recentNotesGenerator.signal)
    inputToPreview(generateTitleInput, previewTitle, generateContentInput, previewContent)







    document.querySelector('.exit').onclick = () => {
        if (document.querySelector(".add-content")) { document.querySelector(".add-content").remove() }
        noteGenerator.style.top = '-50%'
        isolationArea.style.top = '-100%'
        const renmants = [document.querySelector('.note-title-input'), document.querySelector('.note-content-input'), document.querySelector(".note-title"), document.querySelector('.note-text')]
        for (const renmant of renmants) {
            if (renmant) {
                renmant.remove()
            }
        }
        noteContent.style.backgroundColor = `#ffffff`
        noteContent.style.color = `#474747`
        recentNotesGenerator?.abort()
        document.querySelector('.tTitle').style.display = "block"
        document.querySelector('.tText').style.display = "block"
        const add = document.createElement('button')
        add.classList.add("add-content")
        add.textContent = 'Add'
        document.querySelector('.note-content').appendChild(add)
    }
})

//
document.querySelector('.confirm-create').addEventListener("click", () => {
    const previewContent = document.querySelector('.note-text')
    const generateContentInput = document.querySelector('.note-content-input')
    const previewTitle = document.querySelector('.note-title')
    const generateTitleInput = document.querySelector('.note-title-input')
    let errorCount = 0
    if (!generateTitleInput && !generateContentInput) errorCount += 1
    if (((generateTitleInput) && (!generateTitleInput.value.trim()))) {
        generateTitleInput.style.border = `2px solid red`
        errorCount += 1
    }
    if ((generateContentInput) && (!generateContentInput.value.trim())) {
        generateContentInput.style.border = `2px solid red`
        errorCount += 1
    }
    if (errorCount > 0) {
        alertError("Initially, you have to write sm.th in all of your texts!")
        return
    }
    if (((generateTitleInput) && (generateTitleInput.value.trim()))) {
        generateTitleInput.style.border = `1px solid gray`
        previewTitle.textContent = `${generateTitleInput.value}`
        generateTitleInput.style.display = "none"
        previewTitle.style.display = 'block'
    }
    if ((generateContentInput) && (generateContentInput.value.trim())) {
        generateContentInput.style.border = `1px solid gray`
        previewContent.textContent = `${generateContentInput.value}`
        generateContentInput.style.display = "none"
        previewContent.style.display = 'block'
    }
    const text = []
    const titleAndContent = document.querySelectorAll(".input")
    titleAndContent.forEach(input => {
        if (input.classList.contains('note-content-input')) {
            text.push({ content: `${input.value}`, size: `${21 / 58}rem` })
            return
        }
        if (input.classList.contains('note-title-input'))
            text.push({ title: `${input.value}`, size: `${36 / 58}rem` })
        return
    })
    const addNote = document.querySelector('.add-content')
    if (addNote) addNote.remove()
    let notePreview = document.querySelector('.note-content')
    let heightNote = getComputedStyle(notePreview).height
    heightNote = parseFloat(heightNote)
    heightNote = `${heightNote * (7 / 29) / 16}rem`
    const generateBackground = document.querySelector(".input-background")
    const generateColor = document.querySelector('.input-color')
    let background = generateBackground.value
    let color = generateColor.value
    const generateNote = new planNotesManagement()
    generateNote.createNote(background, color, text, heightNote)
    window.location.href = "../function-page/function-page.html"

})





///


function selectTypeOfNote() {
    const menuTypes = document.querySelector('.kinds-of-text')
    if (menuTypes) {
        document.querySelector('.add-content').addEventListener('click', (progress) => {
            progress.stopPropagation()
            menuTypes.classList.add('typesActive')

        })
    }
    window.addEventListener("click", () => {
        menuTypes.classList.remove('typesActive')
    })
}
//
function addingInputs(generateTitleInput, previewTitle, generateContentInput, previewContent, notePreview, generatorSignal) {
    document.querySelector('.tTitle').addEventListener('click', () => {
        if (notePreview.querySelector(".note-title-input")) return console.log(notePreview.querySelector(".note-title-input"))
        const addNote = document.querySelector('.add-content')
        let tempAddNote = addNote;
        addNote.remove()
        notePreview.appendChild(generateTitleInput)
        document.querySelector('.tTitle').style.display = "none"
        if (document.querySelector('.tText').style.display != "none") {
            notePreview.appendChild(tempAddNote)
        }
        generateTitleInput.after(previewTitle);
    }, { signal: generatorSignal })
    document.querySelector('.tText').addEventListener('click', () => {
        if (notePreview.querySelector(".note-content-input")) return
        const addNote = document.querySelector('.add-content')
        let tempAddNote = addNote;
        addNote.remove()
        notePreview.appendChild(generateContentInput)
        document.querySelector('.tText').style.display = "none"
        if (document.querySelector('.tTitle').style.display != "none") {
            notePreview.appendChild(tempAddNote)
        }
        generateContentInput.after(previewContent);
    }, { signal: generatorSignal })
    return notePreview

}
function inputToPreview(generateTitleInput, previewTitle, generateContentInput, previewContent) {
    generateTitleInput.addEventListener("keydown", (keyboard) => {
        if (keyboard.key === "Enter") {
            previewTitle.textContent = `${generateTitleInput.value}`
            generateTitleInput.style.display = "none"
            previewTitle.style.display = 'block'
        }
    })
    previewTitle.addEventListener("click", () => {
        generateTitleInput.style.display = "block"
        previewTitle.style.display = 'none'
    })
    generateContentInput.addEventListener("keydown", (keyboard) => {
        if (keyboard.key === "Enter") {
            previewContent.textContent = `${generateContentInput.value}`
            generateContentInput.style.display = "none"
            previewContent.style.display = 'block'
        }
    })
    previewContent.addEventListener("click", () => {
        generateContentInput.style.display = "block"
        previewContent.style.display = 'none'
    })
}


const adjustBoardBtn = document.querySelector('.adjust-board')
const adjustBoardContainer = document.querySelector('.generate-new-workplace')
adjustBoardBtn.onclick = () => {
    const rawCurrentPlan = localStorage.getItem('currentPlan')
    if (!rawCurrentPlan) {
        alertError('You need to log in or sign up to use this')
        return
    } else {
        inputAdjust(rawCurrentPlan)
        adjustBoardContainer.querySelector('.reset').onclick = () => {
            inputAdjust(rawCurrentPlan)
        }
    }


}

document.querySelector('.close-adjust-board').onclick = () => {
    adjustBoardContainer.style.top = `-50%`
}
function isColor(value) {
    return CSS.supports("color", value);
}

function inputAdjust(rawCurrentPlan) {
        let {currentBoard,previewBoard,trueRatio,rawRatio,borderChoices,inputBorder,backgroundChoices, inputBackgroundColor, inputBackgroundImage} = displayOGPreviewBoard(rawCurrentPlan)
        rawRatio.onchange = () => {
            trueRatio = rawRatio.value
            displayPreviewBoardRatio(trueRatio,previewBoard)
        }
        borderChoices.onchange = () => {
            if (borderChoices.value === 'None') {
                inputBorder.style.display = 'none'
                previewBoard.style.border = `none`
                return
            }
            if (borderChoices.value === 'Border') {
                inputBorder.style.display = 'block'
                previewBoard.style.border = `0.4rem solid ${inputBorder.value}`
                return
            }
        }
        inputBorder.onchange = () => {
            previewBoard.style.border = `0.4rem solid ${inputBorder.value}`
        }
        backgroundChoices.onchange = () => {
            if (backgroundChoices.value === 'Solid color') {
                previewBoard.style.backgroundImage = 'none'
                backgroundChoices.value = 'Solid color'
                previewBoard.style.backgroundColor = inputBackgroundColor.value
                inputBackgroundImage.style.display = 'none'
                inputBackgroundColor.style.display = 'block'

            } else {
                inputBackgroundColor.style.display = 'none'
                inputBackgroundImage.style.display = 'block'
                previewBoard.style.backgroundImage = `url(${inputBackgroundImage.value})`
                previewBoard.style.backgroundRepeat = `no-repeat`
                previewBoard.style.backgroundSize = `cover`
                previewBoard.style.backgroundPosition = `center`
            }
        }
        inputBackgroundColor.onchange = () => {
            previewBoard.style.backgroundColor = inputBackgroundColor.value
            currentBoard.background = inputBackgroundColor.value
        }
        inputBackgroundImage.onkeyup = () => {
            previewBoard.style.backgroundImage = `url(${inputBackgroundImage.value})`
            currentBoard.background = inputBackgroundImage.value
        }
    adjustBoardContainer.querySelector('.save-adjust-board').onclick = () => {
        currentBoard.ratio = trueRatio
        if (borderChoices.value==='None') {
            currentBoard.borderColor=''
        } else {
            currentBoard.borderColor=inputBorder.value
        }
        if (backgroundChoices.value==='Solid color') {
            currentBoard.background=inputBackgroundColor.value
        } else {
            currentBoard.background=inputBackgroundImage.value
        }
        const savePlan = new plansBriefManagement()
        savePlan.saveCurrentPlan(currentBoard)
        window.location.href = "../function-page/function-page.html"
    }
    return {currentBoard,previewBoard,trueRatio,rawRatio,borderChoices,inputBorder,backgroundChoices, inputBackgroundColor, inputBackgroundImage}
}
function displayOGPreviewBoard(rawCurrentPlan) {
    const currentBoard = JSON.parse(rawCurrentPlan)
    let trueRatio = currentBoard.ratio
    adjustBoardContainer.style.top = `50%`
    const previewBoard = document.querySelector('.preview-board')
    let rawRatio = document.querySelector('.ratio')
    let borderChoices = document.querySelector('.border-requirement')
    let inputBorder = document.querySelector('.border')
    const backgroundChoices = document.querySelector('.background-type')
    let inputBackgroundColor = document.querySelector('.background-color')
    let inputBackgroundImage = document.querySelector('.background-image')
    rawRatio.value=trueRatio
    displayPreviewBoardRatio(trueRatio,previewBoard)
    if (isColor(currentBoard.background)) {
        backgroundChoices.value = 'Solid color'
        previewBoard.style.backgroundColor = currentBoard.background
        inputBackgroundColor.value = currentBoard.background
        inputBackgroundImage.style.display = 'none'
        inputBackgroundColor.style.display = 'block'
        previewBoard.style.backgroundImage = ''
    } else {
        backgroundChoices.value = 'Image(demo)'
        inputBackgroundColor.style.display = 'none'
        inputBackgroundImage.style.display = 'block'
        inputBackgroundImage.value = currentBoard.background
        previewBoard.style.backgroundImage = `url(${currentBoard.background})`
        previewBoard.style.backgroundRepeat = `no-repeat`
        previewBoard.style.backgroundSize = `cover`
        previewBoard.style.backgroundPosition = `center`
    }
    if (currentBoard.borderColor) {
        borderChoices.value = 'Border'
        previewBoard.style.border = `0.4rem solid ${currentBoard.borderColor}`
        inputBorder.value = currentBoard.borderColor
        inputBorder.style.display = 'block';
    } else {
        borderChoices.value = `None`
        previewBoard.style.border = `none`
        inputBorder.style.display = 'none'
        inputBorder.value = ''
    }
    return {currentBoard,previewBoard,trueRatio,rawRatio,borderChoices,inputBorder,backgroundChoices,inputBackgroundColor,inputBackgroundImage}
}
function displayPreviewBoardRatio(trueRatio,previewBoard) {
    if (trueRatio === "1/1") {
                previewBoard.style.height = "25rem"
                previewBoard.style.width = "25rem"
                return;
            }
            if (trueRatio === "4/3") {
                previewBoard.style.height = "25rem"
                previewBoard.style.width = "18.75rem"
                return;
            }
            if (trueRatio === "3/4") {
                previewBoard.style.height = "18.75rem"
                previewBoard.style.width = "25rem"
                return;
            }
            if (trueRatio === "3/2") {
                previewBoard.style.height = "25rem"
                previewBoard.style.width = `${50 / 3}rem`
                return;
            }
            if (trueRatio === "2/3") {
                previewBoard.style.height = `${50 / 3}rem`
                previewBoard.style.width = "25rem"
                return;
            }
}








document.querySelector('.save').onclick = () => {
    if (!rawCurrentUser) {
        alertError('You need to log in or sign up to use this')
        return
    }
    saveNotes()
}

const modifiedNotes = new Set();
function saveNotes() {
    modifiedNotes.forEach(nID => {
        const note = document.querySelector(
            `.note[data-id="${CSS.escape(nID)}"]`
        );
    if (!note) {
        modifiedNotes.delete(nID)
    return
    }
        const saveAll = new planNotesManagement();
        const x = note.style.left.split("%")[0];
        const y = note.style.top.split("%")[0];
        const titleSize = note.querySelector(".noteTitle")?.style.fontSize;
        const contentSize = note.querySelector(".noteContent")?.style.fontSize;
        saveAll.saveCoordinates(nID, x, y, "");
        saveAll.updateNote2(nID, note.style.width, titleSize, contentSize);
        modifiedNotes.delete(nID);
    });
}
document.querySelector('.export').onclick = exportBoard


async function exportBoard() {
    const board = document.querySelector(".board");

    const canvas = await html2canvas(board, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        ignoreElements: button =>
            button.classList?.contains("resize-area") ||
            button.classList?.contains("resize-all")
    });

    const link = document.createElement("a");

    link.download = "Bulletin-Plan.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
}


function contextMenuNote() {
    const notes = document.querySelectorAll(".note")
    console.log(notes)
    notes.forEach(note => {
        note.addEventListener("contextmenu", (def) => {
            let selectedNote = {}
            def.preventDefault()
            let nID = note.dataset.id
            const rawNotes = localStorage.getItem("currentPlanNotes")
            const notes = JSON.parse(rawNotes)
            selectedNote = (notes.notes.filter(note => note.noteID === nID))[0]
            const menu = document.querySelector('.adjust-menu')
            if (selectedNote.pin.existence === "yes") {
                document.querySelector('.pin-note').style.display = "none"
                document.querySelector('.connect').style.display = "block"
                document.querySelector('.unpin-note').style.display = 'block'
            } else {
                document.querySelector('.pin-note').style.display = "block"
                document.querySelector('.connect').style.display = "none"
                document.querySelector('.unpin-note').style.display = 'none'
            }
            menu.style.left = `${def.clientX}px`
            menu.style.top = `${def.clientY}px`
            menu.classList.add('menu-active')
            const view = document.querySelector('.view')
            view.onclick = () => {
                const viewNote = document.querySelector('.view-note')
                viewNote.style.top = "50%"
                viewNote.style.backgroundColor = selectedNote.background
                viewNote.style.color = selectedNote.color
                const renmants = document.querySelectorAll(".verify")
                if (renmants) {
                    renmants.forEach(renmant => renmant.remove())
                }
                selectedNote.text.forEach(text => {
                    if (Object.hasOwn(text, 'title')) {
                        const title = document.createElement('p')
                        title.classList.add("note-title", "verify")
                        title.textContent = `${text.title}`
                        viewNote.appendChild(title)
                        return;
                    }
                    if (Object.hasOwn(text, 'content')) {
                        const content = document.createElement('p')
                        content.classList.add('note-text', "verify")
                        content.textContent = `${text.content}`
                        viewNote.appendChild(content)
                        return
                    }
                })
                document.querySelector('.close-view').addEventListener("click", () => {
                    viewNote.style.top = '-50%'
                })
            }
            const edit = document.querySelector('.edit')
            const closeBtn = document.querySelector('.close')
            edit.onclick = () => {
                const noteGenerator = document.querySelector(".notes-generator")
                const isolationArea = document.querySelector('.isolation-area')
                const createButton = document.querySelector('.confirm-create')
                const exitButton = document.querySelector(".exit")
                const updateButton = document.querySelector('.update')
                const resetButton = document.querySelector('.reset')
                const addBtn = document.querySelector('.add-content')
                addBtn.style.display = 'none'
                createButton.style.display = "none"
                exitButton.style.display = 'none'
                updateButton.style.display = 'inline-block'
                resetButton.style.display = 'inline-block'
                closeBtn.style.display = 'block'
                noteGenerator.style.top = '50%'
                isolationArea.style.top = '0'
                const generateBackground = document.querySelector(".input-background")
                const generateColor = document.querySelector('.input-color')
                generateBackground.value = selectedNote.background
                generateColor.value = selectedNote.color
                const noteContent = document.querySelector('.note-content')
                noteContent.style.backgroundColor = selectedNote.background
                noteContent.style.color = selectedNote.color
                generateBackground.addEventListener("change", () => {
                    noteContent.style.backgroundColor = `${generateBackground.value}`
                })
                generateColor.addEventListener('change', () => {
                    noteContent.style.color = `${generateColor.value}`
                })
                const changingTitle = document.createElement('textarea')
                const changingContent = document.createElement('textarea')
                selectedNote.text.forEach(text => {
                    if (Object.hasOwn(text, 'title')) {
                        changingTitle.classList.add('note-title-input')
                        changingTitle.value = text.title
                        noteContent.appendChild(changingTitle)
                        return
                    }
                    if (Object.hasOwn(text, 'content')) {
                        changingContent.classList.add('note-content-input')
                        changingContent.value = text.content
                        noteContent.appendChild(changingContent)
                        return
                    }
                })
                let previewTitle = document.createElement('p')
                previewTitle.classList.add("note-title")
                changingTitle.after(previewTitle)
                let previewContent = document.createElement('p')
                previewContent.classList.add('note-text')
                changingContent.after(previewContent)
                inputToPreview(changingTitle, previewTitle, changingContent, previewContent)
                updateButton.onclick = () => {
                    if (!changingTitle.value.trim() && !changingContent.value.trim()) {
                        changingContent.style.border = '2px solid red'
                        changingTitle.style.border = '2px solid red'
                        alertError("You can only leave one of the text areas blank!")
                        return
                    }
                    const updateNote = new planNotesManagement()
                    updateNote.updateNote(selectedNote.noteID, generateBackground.value, generateColor.value, changingTitle.value, changingContent.value)
                    noteGenerator.style.top = '-50%'
                    isolationArea.style.top = '-100%'
                    note.style.backgroundColor = generateBackground.value
                    note.style.color = generateColor.value
                    const title = note.querySelector('.noteTitle')
                    const content = note.querySelector('.noteContent')
                    if (title) {
                        title.textContent = changingTitle.value
                    }
                    if (content) {
                        content.textContent = changingContent.value
                    }
                    changingTitle.remove()
                    changingContent.remove()
                    previewTitle.remove()
                    previewContent.remove()
                }
                resetButton.onclick = () => {
                    noteContent.style.backgroundColor = selectedNote.background
                    noteContent.style.color = selectedNote.color
                    changingContent.style.border = '1px solid gray'
                    changingTitle.style.border = '1px solid gray'
                    selectedNote.text.forEach(text => {
                        if (Object.hasOwn(text, 'title')) {
                            changingTitle.value = text.title
                            changingTitle.style.display = "block"
                            previewTitle.textContent = text.title
                            previewTitle.style.display = "none"
                            return
                        }
                        if (Object.hasOwn(text, 'content')) {
                            changingContent.value = text.content
                            changingContent.style.display = "block"
                            previewContent.textContent = text.content
                            previewContent.style.display = "none"
                            return
                        }
                        changingContent.style.border = '1px solid gray'
                        changingTitle.style.border = '1px solid gray'
                    })
                }
                closeBtn.onclick = () => {
                    noteGenerator.style.top = '-50%'
                    isolationArea.style.top = '-100%'
                    changingTitle.remove()
                    changingContent.remove()
                    previewTitle.remove()
                    previewContent.remove()
                }
            }
            const linkBtn = document.querySelector(".connect")
            linkBtn.onclick = () => {
                const howToLink = document.createElement('p')
                howToLink.classList.add("how-to-link")
                howToLink.textContent = "Click the any notes to link"
                document.querySelector("body").appendChild(howToLink)
                const allNotes = [...document.querySelectorAll(".note")]
                let lastNotes = allNotes.filter(noteA => (noteA.dataset.id != nID) && (noteA.querySelector('.pin')))
                let rawCurrentPlanLinks = localStorage.getItem("currentPlanLinks")
                let currentPlanLinks = JSON.parse(rawCurrentPlanLinks)
                if (currentPlanLinks.links) {
                    currentPlanLinks.links.forEach(plan => {
                        if ((plan.nID === nID)) {
                            lastNotes = lastNotes.filter(noteA => (noteA.dataset.id != plan.dID))
                            return
                        }
                        if ((plan.dID === nID)) {
                            lastNotes = lastNotes.filter(noteA => (noteA.dataset.id != plan.nID))
                            return
                        }
                    })
                }
                lastNotes.forEach(dNote => {
                    dNote.classList.add('link-note')
                })
                note.classList.remove('link-note')
                lastNotes.forEach(dNote => {
                    dNote.onclick = () => {
                        const nNoteId = selectedNote.noteID
                        const dNoteID = dNote.dataset.id
                        const createLink = new planNotesManagement()
                        planLinks = createLink.linkNotes(nNoteId, dNoteID)
                        howToLink.remove()
                        lastNotes.forEach(note => {
                            note.classList.remove('link-note')
                            note.onclick = null
                        })
                        drawLine()
                    }
                })
                document.oncontextmenu = (mouse) => {
                    howToLink.remove()
                    mouse.preventDefault()
                    lastNotes.forEach(dNote => {
                        dNote.classList.remove('link-note')
                        dNote.onclick = null
                    })
                }

            }
            const pin = document.querySelector(".pin-note")
            pin.onclick = () => {
                const pin = document.createElement("div")
                pin.classList.add("pin")
                note.firstChild.before(pin)
                const save = new planNotesManagement()
                save.saveCoordinates(selectedNote.noteID, note.style.left.split('%')[0], note.style.top.split('%')[0])
                let titleSize, contentSize
                const noteTitle = note.querySelector('.noteTitle')
                if (noteTitle) titleSize = noteTitle.style.fontSize
                const noteContent = note.querySelector('.noteContent')
                if (noteContent) contentSize = noteContent.style.fontSize
                save.updateNote2(selectedNote.noteID, note.style.width, titleSize, contentSize)
                note.querySelector('.resize-area').remove()
                note.querySelector('.resize-all').remove()
            }
            const unpin = document.querySelector(".unpin-note")
            unpin.onclick = () => {
                note.firstChild.remove()
                const unpinNote = new planNotesManagement()
                unpinNote.unpinNote(selectedNote.noteID)
                const resizeArea = document.createElement('div')
                resizeArea.classList.add("resize-area")
                resizeArea.textContent = '>'
                const resizeAll = document.createElement('div')
                resizeAll.classList.add("resize-all")
                note.appendChild(resizeAll)
                note.appendChild(resizeArea)
                scaleNote(note)
                resizeAllBtn(note)
            }
            const status = document.querySelector('.set-status')
            status.onclick = () => {
                window.onclick = null
                setTimeout(() => {
                    window.onclick = closeMenu
                }, 1)
                const statusMenu = document.querySelector('.status')
                statusMenu.classList.add("menu-active")
                const choices = statusMenu.querySelectorAll('p')
                choices.forEach(statusChoice => {
                    statusChoice.onclick = () => {
                        const renmantStatusSign = note.querySelector('.status-sign')
                        if (renmantStatusSign) {renmantStatusSign.remove()}
                        const statusSign = document.createElement('div')
                        statusSign.style.width = `fit-content`
                        statusSign.style.height = `fit-content`
                        let choice = statusChoice.textContent
                        const updateStatus = new planNotesManagement()
                        if (choice === `Need to do`) {
                            selectedNote.status = 'needToDo'
                            saveNotes()
                            updateStatus.updateNote3(nID, selectedNote.status)
                            statusSign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fa0606"><path d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5ZM310-310q-70-70-70-170 0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70q-100 0-170-70Zm130-310q-37-112-48.5-157.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 37-11.5 82.5T520-620h-80Zm-16.5 196.5Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5Z"/></svg>`
                            statusSign.classList.add("status-sign")
                            note.appendChild(statusSign)
                            return
                        }
                        if (choice === `Doing`) {
                            selectedNote.status = 'Doing'
                            saveNotes()
                            updateStatus.updateNote3(nID, selectedNote.status)
                            statusSign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b4b100"><path d="M322.5-437.5Q340-455 340-480t-17.5-42.5Q305-540 280-540t-42.5 17.5Q220-505 220-480t17.5 42.5Q255-420 280-420t42.5-17.5Zm200 0Q540-455 540-480t-17.5-42.5Q505-540 480-540t-42.5 17.5Q420-505 420-480t17.5 42.5Q455-420 480-420t42.5-17.5Zm200 0Q740-455 740-480t-17.5-42.5Q705-540 680-540t-42.5 17.5Q620-505 620-480t17.5 42.5Q655-420 680-420t42.5-17.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
                            statusSign.classList.add("status-sign")
                            note.appendChild(statusSign)
                            return
                        }
                        if (choice === `Finish`) {
                            selectedNote.status = 'Finish'
                            saveNotes()
                            updateStatus.updateNote3(nID, selectedNote.status)
                            statusSign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0d9201"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>`
                            statusSign.classList.add("status-sign")
                            note.appendChild(statusSign)
                            return
                        }

                    }
                })
            }
            const removeBtn = document.querySelector('.remove')
            removeBtn.onclick = () => {
                const askAgain = document.createElement('div')
                askAgain.classList.add('ask-again')
                const question = document.createElement('p')
                question.classList.add('question')
                question.textContent = `Are you sure?`
                askAgain.appendChild(question)
                const yes = document.createElement('button')
                yes.classList.add("yes")
                yes.textContent = 'YES'
                const no = document.createElement('button')
                no.classList.add("no")
                no.textContent = `NO`
                askAgain.appendChild(no)
                askAgain.appendChild(yes)
                document.querySelector('body').appendChild(askAgain)
                no.onclick = () => {
                    askAgain.remove()
                }
                yes.onclick = () => {
                    const removeNote = new planNotesManagement()
                    removeNote.removeNote(selectedNote.noteID)
                    note.remove()
                    drawLine()
                    askAgain.remove()
                }

            }
        })
        moveNote2(note)
        scaleNote(note)
        resizeAllBtn(note)
        window.onclick = closeMenu
    })
    function closeMenu() {
        const menu = document.querySelector('.adjust-menu')
        menu.classList.remove('menu-active')
        const statusMenu = document.querySelector('.status')
        if (statusMenu.classList.contains('menu-active')) {
            statusMenu.classList.remove('menu-active')
        }
    }
}

function moveNote2(note) {
    const board = document.querySelector(".board")
    note.onpointerdown = getCurrentPosition
    let x, y
    function getCurrentPosition(mouse) {
        let nID = note.dataset.id
        const rawNotes = localStorage.getItem("currentPlanNotes")
        const notes = JSON.parse(rawNotes)
        const selectedNote = (notes.notes.filter(note => note.noteID === nID))[0]
        if (selectedNote.pin.existence != "yes") {
            x = mouse.clientX
            y = mouse.clientY
            document.onpointerup = stopMoving
            document.onpointermove = movingNote
        }
    }
    function movingNote(mouse) {
        let dX = (mouse.clientX - x) / board.clientWidth * 100
        let dY = (mouse.clientY - y) / board.clientHeight * 100
        x = mouse.clientX
        y = mouse.clientY
        let currentNoteTop = Number(note.style.top.split('%')[0])
        let currentNoteLeft = Number(note.style.left.split('%')[0])
        let updatedY = currentNoteTop + dY
        let updatedX = currentNoteLeft + dX
        if ((updatedX > 90)) {
            updatedX = 90
        }
        if ((updatedX < -4)) {
            updatedX = -4
        }
        if ((updatedY > 100)) {
            updatedY = 100
        }
        if ((updatedY < -2)) {
            updatedY = -2
        }
        note.style.top = `${updatedY}%`
        note.style.left = `${updatedX}%`
        scheduleDrawLine()
    }
    function stopMoving() {
        modifiedNotes.add(note.dataset.id);
        document.onpointerup = null
        document.onpointermove= null
        scaleNote(note)
    }
}
function scaleNote(note) {
    const board = document.querySelector(".board")
    const scaleIcon = note.querySelector('.resize-area')
    let x
    if (scaleIcon) {
        scaleIcon.onpointerdown = getCurrentX
    }
    function getCurrentX(mouse) {
        mouse.preventDefault()
        note.onpointerdown = null
        x = mouse.clientX
        document.onpointerup = finishResizing
        document.onpointermove = resizing
    }
    function resizing(mouse) {
        let dX = (mouse.clientX - x) / 16
        let currentWidth = Number(note.style.width.split('rem')[0])
        let updatedWidth = currentWidth + dX
        if (updatedWidth > 20) {
            updatedWidth = 20
        }
        if (updatedWidth < 7) {
            updatedWidth = 7
        }
        note.style.width = `${updatedWidth}rem`
        x = mouse.clientX
        scheduleDrawLine()
    }
    function finishResizing() {
        modifiedNotes.add(note.dataset.id);
        document.onpointerup = null;
        document.onpointermove = null;
        moveNote2(note)
    }
}
function resizeAllBtn(note) {
    const board = document.querySelector(".board")
    const resizeIcon = note.querySelector('.resize-all')
    const titleSize = note.querySelector('.noteTitle')
    const contentSize = note.querySelector('.noteContent')
    let x
    if (resizeIcon) {
        resizeIcon.onpointerdown = getCurrentX
    }
    function getCurrentX(mouse) {
        mouse.preventDefault()
        note.onpointerdown = null
        x = mouse.clientX
        document.onpointerup = finishResizing
        document.onpointermove = resizing
    }
    function resizing(mouse) {
        let dX = (mouse.clientX - x) / 16
        let currentWidth = Number(note.style.width.split('rem')[0])
        let updatedWidth = currentWidth + dX
        if (updatedWidth > 20) {
            updatedWidth = 20
        }
        if (updatedWidth < 7) {
            updatedWidth = 7
        }
        note.style.width = `${updatedWidth}rem`
        let currentTitle, currentContent
        if (titleSize) {
            currentTitle = Number(titleSize.style.fontSize.split('rem')[0])
            let updatedTSize = (currentTitle / currentWidth) * (updatedWidth)
            if (updatedTSize > 1.8) {
                updatedTSize = 1.8
            }
            if (updatedTSize < 0.63) {
                updatedTSize = 0.63
            }
            titleSize.style.fontSize = `${updatedTSize}rem`
        }
        if (contentSize) {
            currentContent = Number(contentSize.style.fontSize.split('rem')[0])
            let updatedCSize = (currentContent / currentWidth) * (updatedWidth)
            if (updatedCSize > 1) {
                updatedCSize = 1
            }
            if (updatedCSize < 0.35) {
                updatedCSize = 0.35
            }
            contentSize.style.fontSize = `${(updatedCSize)}rem`
        }
        x = mouse.clientX
        scheduleDrawLine()
    }
    function finishResizing() {
        modifiedNotes.add(note.dataset.id);
        document.onpointerup = null;
        document.onpointermove = null;
        moveNote2(note)
    }
}
function alertError(message) {
    const alert = document.createElement("div")
    alert.classList.add("alert")
    alert.textContent = `${message}!`
    document.querySelector('body').appendChild(alert)
    const alertBTN = document.createElement("button")
    alertBTN.classList.add('alert-btn')
    alertBTN.textContent = `OK`
    alert.appendChild(alertBTN)
    alertBTN.onclick = () => {
        alert.remove()
    }
}





function lineFunction() {
    const lines = document.querySelectorAll(".line")
    if (lines) {
        lines.forEach(line => {
            let IDs = line.dataset.id.split(" ")
            line.oncontextmenu = (mouse) => {
                mouse.preventDefault()
                const menu = document.querySelector('.line-menu')
                menu.style.left = `${mouse.clientX}px`
                menu.style.top = `${mouse.clientY}px`
                menu.classList.add('menu-active')
                const inputColor = document.querySelector('.line-color')
                inputColor.value = line.style.backgroundColor
                inputColor.onclick = () => {
                    inputColor.onchange = () => {
                        line.style.backgroundColor = inputColor.value
                        const changeColor = new planNotesManagement()
                        changeColor.changeLineColor(IDs[0], IDs[1], inputColor.value)
                    }
                }
                document.querySelector('.remove-link').onclick = () => {
                    const removeLine = new planNotesManagement()
                    removeLine.removeLine(IDs[0], IDs[1])
                    menu.classList.remove('menu-active')
                    drawLine()
                }
                line.parentNode.onclick = () => {
                    menu.classList.remove('menu-active')
                }
            }
        })
    }
}
document.querySelector('.instruction').onclick=()=>{
        document.querySelector('.instruction-board').style.top=`50%`
    setTimeout(()=>{
        window.onclick = () =>{
            document.querySelector('.instruction-board').style.top=`-50%`
            window.onclick=null
        }
    },2)   
}