const rawPlans = localStorage.getItem("plans")
const plans = JSON.parse(rawPlans)
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
        const currentPlans = plans.filter(plan=>plan.ID.includes(this.email))
        localStorage.setItem("currentPlans",JSON.stringify(currentPlans))
    }
    createPlan() {
        
    }
}
export default plansBriefManagement;