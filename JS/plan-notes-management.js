class planNotesManagement {
    constructor(planID) {
        this.planID = planID
    }
    generatePlanNotesData() {
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        const firstPlanNotesData = {
            ID: `${this.planID}`,
            notes: []
        }
        plansNotes.push(firstPlanNotesData)
        localStorage.setItem('plansNotes', JSON.stringify(plansNotes))
        localStorage.setItem('currentPlanNotes', JSON.stringify(firstPlanNotesData))
    }
    removePlanNotes(planID) {
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        const newPlansNotes = plansNotes.filter(planNotes => planNotes.ID != planID)
        localStorage.setItem('plansNotes', JSON.stringify(newPlansNotes))
        const rawCurrentPlanNotes = localStorage.getItem("currentPlanNotes")
        if (rawCurrentPlanNotes) {
            const currentPlanNotes = JSON.parse(rawCurrentPlanNotes)
            if (currentPlanNotes.ID === planID)
                localStorage.setItem('currentPlanNotes', '')
        }
    }
    setCurrentPlanNotes(planID) {
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        const currentPlanNotes = plansNotes.filter(plan => plan.ID === planID)
        localStorage.setItem('currentPlanNotes', JSON.stringify(currentPlanNotes[0]))
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const plansLinks = JSON.parse(rawPlansLinks)
        const currentPlanLinks = plansLinks.find(plan => plan.ID === planID)
        localStorage.setItem('currentPlanLinks',JSON.stringify(currentPlanLinks))
    }
    createNote(background, color, text, height) {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        const planNotes = JSON.parse(rawPlanNotes)
        let newNote = {
            noteID: '',
            x: '0',
            y: '0',
            background: `${background}`,
            color: `${color}`,
            text: text,
            width: '7rem',
            height: `${height}`,
            status: 'none',
            pin: { existence: '', color: "" },
        }
        if (!planNotes.notes.length) {
            newNote.noteID = '0'
        }
        if (planNotes.notes.length) {
            newNote.noteID = `${Number(planNotes.notes[planNotes.notes.length - 1].noteID) + 1}`
        }
        planNotes.notes.push(newNote)
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        if (planNotes.ID != 'guest') {
            const rawPlansNotes = localStorage.getItem("plansNotes")
            const plansNotes = JSON.parse(rawPlansNotes)
            plansNotes.forEach(plan => {
                if (plan.ID === planNotes.ID) {
                    plan.notes.push(newNote)
                    localStorage.setItem("plansNotes", JSON.stringify(plansNotes))
                    return
                }
            })
        }
    }
    saveCoordinates(ID, x, y,pin='yes') {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        const planNotes = JSON.parse(rawPlanNotes)
        planNotes.notes.forEach(note => {
            if (note.noteID === ID) {
                note.x = x;
                note.y = y;
                if (pin==='yes'){
                    note.pin.existence = "yes"
                    }
                return
            }
        })
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        plansNotes.forEach(plan => {
            if (plan.ID === planNotes.ID) {
                Object.assign(plan, planNotes)
                return
            }
        })
        localStorage.setItem("plansNotes", JSON.stringify(plansNotes))
        updatePlan()
    }
    unpinNote(ID) {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        const planNotes = JSON.parse(rawPlanNotes)
        planNotes.notes.forEach(note => {
            if (note.noteID === ID) {
                note.pin.existence = ""
                return
            }
        })
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        plansNotes.forEach(plan => {
            if (plan.ID === planNotes.ID) {
                Object.assign(plan, planNotes)
                return
            }
        })
        localStorage.setItem("plansNotes", JSON.stringify(plansNotes))
        updatePlan()
    }
    updateNote(ID, background, color, title, content) {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        const planNotes = JSON.parse(rawPlanNotes)
        planNotes.notes.forEach(note => {
            if (note.noteID === ID) {
                note.background = background
                note.color = color
                note.text.forEach(text => {
                    if (Object.hasOwn(text, 'title')) {
                        text.title = title
                        return
                    }
                    if (Object.hasOwn(text, 'content')) {
                        text.content = content
                        return
                    }
                })
            }
        })
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        plansNotes.forEach(plan => {
            if (plan.ID === planNotes.ID) {
                Object.assign(plan, planNotes)
                return
            }
        })
        localStorage.setItem("plansNotes", JSON.stringify(plansNotes))
        updatePlan()
    }
    updateNote2(ID, width, titleSize, contentSize) {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        const planNotes = JSON.parse(rawPlanNotes)
        planNotes.notes.forEach(note => {
            if (note.noteID === ID) {
                note.width = width
                note.text.forEach(text => {
                    if (Object.hasOwn(text, 'title')) {
                        text.size = titleSize
                        return
                    }
                    if (Object.hasOwn(text, 'content')) {
                        text.size = contentSize
                        return
                    }
                })
                return

            }
        })
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        plansNotes.forEach(plan => {
            if (plan.ID === planNotes.ID) {
                Object.assign(plan, planNotes)
                return
            }
        })
        localStorage.setItem("plansNotes", JSON.stringify(plansNotes))
        updatePlan()
    }
    updateNote3(ID,status) {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        const planNotes = JSON.parse(rawPlanNotes)
        planNotes.notes.forEach(note => {
            if (note.noteID === ID) {
                note.status=status
            }
        })
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        plansNotes.forEach(plan => {
            if (plan.ID === planNotes.ID) {
                Object.assign(plan, planNotes)
                return
            }
        })
        localStorage.setItem("plansNotes", JSON.stringify(plansNotes))        
        updatePlan()
    }
    linkNotes(nID, dID) {
        const rawPlanLinks = localStorage.getItem("currentPlanLinks")
        const planLinks = JSON.parse(rawPlanLinks)
        const planID = planLinks.ID
        let newLink = {nID: nID, dID: dID, color: '#530303'}
        planLinks.links.push(newLink)
        localStorage.setItem('currentPlanLinks',JSON.stringify(planLinks))
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const plansLinks = JSON.parse(rawPlansLinks)
        plansLinks.forEach(plan=>{
            if (plan.ID===planID) {
                Object.assign(plan,planLinks)
            }
        })
        localStorage.setItem("plansLinks", JSON.stringify(plansLinks))
        updatePlan()
        return planLinks
    }
    changeLineColor(nID,dID,color) {
        const rawPlanLinks = localStorage.getItem("currentPlanLinks")
        const planLinks = JSON.parse(rawPlanLinks)
        const planID = planLinks.ID
        planLinks.links.forEach(link=>{
            if (((link.nID===dID)||(link.nID===nID))&&((link.dID===nID)||(link.dID===dID))) {
                link.color=color
                return
            }
        })
        localStorage.setItem('currentPlanLinks',JSON.stringify(planLinks))
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const plansLinks = JSON.parse(rawPlansLinks)
        plansLinks.forEach(plan=>{
            if (plan.ID===planID) {
                Object.assign(plan,planLinks)
            }
        })
        localStorage.setItem("plansLinks", JSON.stringify(plansLinks))
    updatePlan()
    }
    removeLine(nID,dID) {
        const rawPlanLinks = localStorage.getItem("currentPlanLinks")
        let planLinks = JSON.parse(rawPlanLinks)
        const planID = planLinks.ID
        planLinks.links = planLinks.links.filter(link=>!(((link.nID===dID)||(link.nID===nID))&&((link.dID===nID)||(link.dID===dID))))
        localStorage.setItem('currentPlanLinks',JSON.stringify(planLinks))
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const plansLinks = JSON.parse(rawPlansLinks)
        plansLinks.forEach(plan=>{
            if (plan.ID===planID) {
                Object.assign(plan,planLinks)
            }
        })
        localStorage.setItem("plansLinks", JSON.stringify(plansLinks))
    updatePlan()
    }
    removeNote(ID) {
        const rawPlanNotes = localStorage.getItem("currentPlanNotes")
        let planNotes = JSON.parse(rawPlanNotes)
        const rawPlanLinks = localStorage.getItem("currentPlanLinks")
        let planLinks = JSON.parse(rawPlanLinks)
        planNotes.notes = planNotes.notes.filter(note=>note.noteID!=ID)
        planLinks.links=planLinks.links.filter(link=>(link.dID!=ID)&&(link.nID!=ID))
        localStorage.setItem('currentPlanLinks',JSON.stringify(planLinks))
        localStorage.setItem("currentPlanNotes", JSON.stringify(planNotes))
        const rawPlansNotes = localStorage.getItem("plansNotes")
        const plansNotes = JSON.parse(rawPlansNotes)
        plansNotes.forEach(plan => {
            if (plan.ID === planNotes.ID) {
                Object.assign(plan, planNotes)
                return
            }
        })
        localStorage.setItem("plansNotes", JSON.stringify(plansNotes))    
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const plansLinks = JSON.parse(rawPlansLinks)
        plansLinks.forEach(plan=>{
            if (plan.ID===planLinks.ID) {
                Object.assign(plan,planLinks)
            }
        })
        localStorage.setItem("plansLinks", JSON.stringify(plansLinks))
    updatePlan()
    }
}
function updatePlan() {
    const date = new Date()
    const day = String(date.getDate())
    const month = String(date.getMonth() + 1)
    const year = String(date.getFullYear())
    const updatedDate = `${day}/${month}/${year}`
    const rawCurrentPlan=localStorage.getItem('currentPlan')
    if (rawCurrentPlan) {
        const currentPlan = JSON.parse(rawCurrentPlan)
        currentPlan.Updated = updatedDate
        localStorage.setItem("currentPlan",JSON.stringify(currentPlan))
        const rawPlans = localStorage.getItem("plans")
        const plans= JSON.parse(rawPlans)
        plans.forEach(plan=>{
            if (plan.ID===currentPlan.ID) {
                Object.assign(plan,currentPlan)
            }
        })
        const rawCurrentPlans = localStorage.getItem("currentUserPlans")
        const currentPlans = JSON.parse(rawCurrentPlans)
        currentPlans.forEach(plan=>{
            if (plan.ID===currentPlan.ID) {
                Object.assign(plan,currentPlan)
            }
        })
        localStorage.setItem("plans",JSON.stringify(plans))
        localStorage.setItem("currentUserPlans",JSON.stringify(currentPlans))
    }

}

export default planNotesManagement;