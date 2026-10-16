const rawPlans = localStorage.getItem("plans")
const plans = JSON.parse(rawPlans)
import planNotesManagement from "../JS/plan-notes-management.js"
class  plansBriefManagement {
    constructor(email, planName, desc, date, background, border,ratio) {
        this.email=email
        this.planName=planName
        this.desc=desc
        this.date=date
        this.background=background
        this.border=border
        this.ratio=ratio
    }
    setUserPlans() {
        const currentUserPlans = plans.filter(plan=>plan.ID.includes(this.email))
        localStorage.setItem("currentUserPlans",JSON.stringify(currentUserPlans))
        const rawUsersData = localStorage.getItem("usersData")
        const rawUserData = localStorage.getItem("currentUserData")
        const usersData = JSON.parse(rawUsersData)
        const CurrentUserData = JSON.parse(rawUserData)
        CurrentUserData.total = currentUserPlans.length
        usersData.forEach( user=> {
            if (user.email === this.email) {
                user.total = currentUserPlans.length
                return;
            }
        });
        localStorage.setItem("currentUserData",JSON.stringify(CurrentUserData))
        localStorage.setItem("usersData",JSON.stringify(usersData))
    }
    createPlan() {
        const rawCurrentUserPlans = localStorage.getItem("currentUserPlans")
        let currentUserPlans =[]
        let index = 1
        if (rawCurrentUserPlans) {
            currentUserPlans= JSON.parse(rawCurrentUserPlans)
            if (currentUserPlans[0]) {
                const lastPlanId = currentUserPlans[currentUserPlans.length-1].ID
                index = Number(lastPlanId.match(/\d+$/)[0]) + 1
            }
        }
        const currentPlan = {ID:`${this.email}${index}`, planName:this.planName, description: this.desc, Date: this.date, background:this.background, borderColor:this.border, ratio: this.ratio}
        currentUserPlans.push(currentPlan)
        plans.push(currentPlan)
        localStorage.setItem("currentUserPlans",JSON.stringify(currentUserPlans))
        localStorage.setItem("plans",JSON.stringify(plans))
        localStorage.setItem("currentPlan",JSON.stringify(currentPlan))
        window.location.href = "../function-page/function-page.html"
        const rawUsersData = localStorage.getItem("usersData")
        const rawUserData = localStorage.getItem("currentUserData")
        const usersData = JSON.parse(rawUsersData)
        const CurrentUserData = JSON.parse(rawUserData)
        CurrentUserData.total = currentUserPlans.length
        usersData.forEach( user=> {
            if (user.email === CurrentUserData.email) {
                user.total = currentUserPlans.length
                return;
            }
        });
        localStorage.setItem("currentUserData",JSON.stringify(CurrentUserData))
        localStorage.setItem("usersData",JSON.stringify(usersData))
        const generateNotesData = new planNotesManagement(`${this.email}${index}`)
        const newPlanLinks = {ID:`${this.email}${index}`,links:[]}
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const plansLinks = JSON.parse(rawPlansLinks)
        plansLinks.push(newPlanLinks)
        localStorage.setItem('currentPlanLinks',JSON.stringify(newPlanLinks))
        localStorage.setItem("plansLinks",JSON.stringify(plansLinks))
        generateNotesData.generatePlanNotesData()
    }
    adjustPlanInfo(ID,name,desc,updatedDate) {
        const rawPlans = localStorage.getItem('plans')
        let plans = JSON.parse(rawPlans)
        const rawCurrentPlans = localStorage.getItem("currentUserPlans")
        let currentUserPlans = JSON.parse(rawCurrentPlans)
        plans.forEach(plan=> {
            if (plan.ID===ID) {
                plan.planName=name;
                plan.description=desc;
                plan.Updated=updatedDate
            }
        })
        currentUserPlans.map(plan=>{
                if (plan.ID===ID) {
                plan.planName=name;
                plan.description=desc;
                plan.Updated=updatedDate
            }
        })
        localStorage.setItem("plans",JSON.stringify(plans))
        localStorage.setItem("currentUserPlans",JSON.stringify(currentUserPlans))
    }
    removePlan(ID) {
        const rawPlans = localStorage.getItem('plans')
        let plans = JSON.parse(rawPlans)
        const rawCurrentPlans = localStorage.getItem("currentUserPlans")
        let currentUserPlans = JSON.parse(rawCurrentPlans)
        const newPlans = plans.filter(plan=>plan.ID!=ID)
        const newCurrentPlans = currentUserPlans.filter(plan=>plan.ID!=ID)
        localStorage.setItem("plans",JSON.stringify(newPlans))
        localStorage.setItem("currentUserPlans",JSON.stringify(newCurrentPlans))
        const rawCurrentPlan = localStorage.getItem("currentPlan")
        if (rawCurrentPlan) {
            const currentPlan = JSON.parse(rawCurrentPlan)
            if (currentPlan.ID===ID){
                localStorage.setItem("currentPlan",'')
            }
        }
        const removePlanNotes = new planNotesManagement()
        removePlanNotes.removePlanNotes(ID)
        const rawUsersData = localStorage.getItem("usersData")
        const rawUserData = localStorage.getItem("currentUserData")
        const usersData = JSON.parse(rawUsersData)
        const CurrentUserData = JSON.parse(rawUserData)
        CurrentUserData.total = newCurrentPlans.length
        usersData.forEach( user=> {
            if (user.email === CurrentUserData.email) {
                user.total = newCurrentPlans.length
                return;
            }
        });
        const rawPlansLinks = localStorage.getItem("plansLinks")
        const rawPlansNotes = localStorage.getItem("plansNotes")
        let plansLinks = JSON.parse(rawPlansLinks)
        plansLinks = plansLinks.filter(link=>link.ID!=ID)
        let plansNotes = JSON.parse(rawPlansNotes)
        plansNotes=plansNotes.filter(link=>link.ID!=ID)
        const rawCurrentLinks = localStorage.getItem("currentPlanLinks")
        if (rawCurrentLinks) {
            const currentLinks = JSON.parse(rawCurrentLinks)
                if (currentLinks.ID===ID) {
                    localStorage.setItem("currentPlanLinks",'')
                }
        }
        const rawCurrentNotes = localStorage.getItem("currentPlanNotes")
        if (rawCurrentNotes) {
            const currentNotes = JSON.parse(rawCurrentNotes)
            if (currentNotes.ID===ID) {
                localStorage.setItem('currentPlanNotes','')
            }
        }



        localStorage.setItem("plansLinks",JSON.stringify(plansLinks))
        localStorage.setItem("plansNotes",JSON.stringify(plansNotes))
        localStorage.setItem("currentUserData",JSON.stringify(CurrentUserData))
        localStorage.setItem("usersData",JSON.stringify(usersData))     

    }
    setCurrentPlan(ID) {
        const currentPlan = plans.filter(plan=>plan.ID===ID)
        localStorage.setItem("currentPlan",JSON.stringify(currentPlan[0]))
        const setPlanNotes = new planNotesManagement()
        setPlanNotes.setCurrentPlanNotes(ID)
    }
    saveCurrentPlan(plan) {
        localStorage.setItem('currentPlan',JSON.stringify(plan))
        const rawPlans = localStorage.getItem('plans')
        const plans = JSON.parse(rawPlans)
        plans.forEach(pPlan=>{
            if (pPlan.ID===plan.ID) {
                Object.assign(pPlan,plan)
            }
        })
        localStorage.setItem('plans',JSON.stringify(plans))
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
export default plansBriefManagement;