const date = new Date()
const day = String(date.getDate())
console.log(day)



document.querySelector(".workplace-selection").addEventListener("click", () => window.location.href = "../plans-management/plans-management.html")
let trueRatio = ""
const rawRatio = document.querySelector(".ratio")
const previewBoard = document.querySelector(".preview-board")
rawRatio.addEventListener("change", () => {
            trueRatio = rawRatio.value
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
        })



        
const typeOfBackground = document.querySelector(".background-type")
const backgroundColor = document.querySelector(".background-color")
backgroundColor.value = previewBoard.style.backgroundColor
backgroundColor.addEventListener("change", () => {
    previewBoard.style.background=`${backgroundColor.value}`
})
typeOfBackground.addEventListener("change", () => {
    const backgroundImage = document.querySelector(".background-image")
    if (typeOfBackground.value === "Image(demo)") {
        backgroundColor.style.display = "none"
        backgroundImage.style.display = "block"
        backgroundImage.addEventListener("keyup",()=> {
        previewBoard.style.backgroundImage = `url(${backgroundImage.value})`
        })
        return
    }
    if (typeOfBackground.value === "Solid color") {
        backgroundColor.style.display = "block"
        backgroundImage.style.display = "none"

        return
    }
})




const borderRequirement = document.querySelector(".border-requirement")
borderRequirement.addEventListener("change",()=> {
    const rawBorder = document.querySelector(".border")
    if (borderRequirement.value==="None") {
        rawBorder.style.display="none"
        previewBoard.style.border="none"
        return
    }
    if (borderRequirement.value==="Border") {
        rawBorder.style.display="block"
        previewBoard.style.border=`0.4rem solid ${rawBorder.value}`
        rawBorder.addEventListener("change",() => {
            previewBoard.style.border=`0.4rem solid ${rawBorder.value}`
        })
        return;
    }
})