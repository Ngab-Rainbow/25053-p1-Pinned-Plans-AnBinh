const testData = localStorage.getItem("accounts")
const testData2 = localStorage.getItem("usersData")
const testData3 = localStorage.getItem("plans")
const testData4 = localStorage.getItem("plansNotes")
const testData5 = localStorage.getItem("plansLinks")
import data from "../JS/mock-data.js";

if (!testData||!testData2||!testData3||!testData4||!testData5) {
    localStorage.setItem("accounts", JSON.stringify(data.accounts))
    localStorage.setItem("usersData", JSON.stringify(data.usersData))
    localStorage.setItem("plans", JSON.stringify(data.plans))
    localStorage.setItem('plansNotes',JSON.stringify(data.plansNotes))
    localStorage.setItem('plansLinks',JSON.stringify(data.plansLinks))
    localStorage.setItem("currentAccount","")
    localStorage.setItem("currentUserData","")
    localStorage.setItem("currentUserPlans","")
    localStorage.setItem("currentPlan","")
    localStorage.setItem("currentPlanNotes","")
    localStorage.setItem("currentPlanLinks",'')
}