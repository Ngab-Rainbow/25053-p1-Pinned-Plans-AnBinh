
const accounts = [
  { name: "Mira Chen", email: "mira.chen@example.com", password: "Mira2026!Demo" },
  { name: "Leo Martin", email: "leo.martin@example.com", password: "Leo2026!Demo" },
  { name: "Sara Patel", email: "sara.patel@example.com", password: "Sara2026!Demo" },
  { name: "Noah Kim", email: "noah.kim@example.com", password: "Noah2026!Demo" },
];

const usersData = [
  { email: "mira.chen@example.com", nationality: "Singaporean", age: 26, gender: "Female", total: 2, avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Mira%20Chen" },
  { email: "leo.martin@example.com", nationality: "Canadian", age: 30, gender: "Male", total: 1, avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Leo%20Martin" },
  { email: "sara.patel@example.com", nationality: "Indian", age: 24, gender: "Female", total: 4, avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Sara%20Patel" },
  { email: "noah.kim@example.com", nationality: "South Korean", age: 29, gender: "Male", total: 3, avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Noah%20Kim" },
];

const plans = [
  { ID: "mira.chen@example.com1", planName: "Campus Robotics Challenge", description: "Design and test a small autonomous robot for a student challenge.", Date: "08/01/2026", background: "#F1F7FF", borderColor: "#3873A8", ratio: "4/3", Updated: "19/10/2026" },
  { ID: "mira.chen@example.com2", planName: "Language Learning Roadmap", description: "Build a realistic routine for learning conversational Spanish.", Date: "22/02/2026", background: "#FFF6EC", borderColor: "#DB8954", ratio: "1/1", Updated: "12/10/2026" },
  { ID: "leo.martin@example.com1", planName: "Home Recording Studio", description: "Create a compact recording space with clear vocal sound.", Date: "14/03/2026", background: "#F6F2FF", borderColor: "#7656B4", ratio: "3/4", Updated: "18/10/2026" },
  { ID: "sara.patel@example.com1", planName: "Balcony Herb Garden", description: "Grow useful herbs in a small, sunny outdoor space.", Date: "03/04/2026", background: "#F1FAE9", borderColor: "#66A347", ratio: "3/2", Updated: "22/10/2026" },
  { ID: "sara.patel@example.com2", planName: "Habit Tracker App", description: "Develop a lightweight mobile habit-tracking prototype.", Date: "27/04/2026", background: "#EAF5FF", borderColor: "#397DAA", ratio: "4/3", Updated: "17/10/2026" },
  { ID: "sara.patel@example.com3", planName: "Weekend Hiking Plan", description: "Organize a safe and enjoyable two-day hiking trip.", Date: "11/06/2026", background: "#FFF5E8", borderColor: "#BB7842", ratio: "2/3", Updated: "20/10/2026" },
  { ID: "sara.patel@example.com4", planName: "Community Art Workshop", description: "Host a beginner-friendly neighborhood drawing session.", Date: "05/07/2026", background: "#FFF0F6", borderColor: "#C76792", ratio: "1/1", Updated: "21/10/2026" },
  { ID: "noah.kim@example.com1", planName: "Reading Challenge 2026", description: "Track books and reflections throughout the year.", Date: "09/01/2026", background: "#F5F4ED", borderColor: "#8A815D", ratio: "3/4", Updated: "15/10/2026" },
  { ID: "noah.kim@example.com2", planName: "Photography Portfolio", description: "Curate a polished online portfolio of recent photographs.", Date: "16/03/2026", background: "#EDF7F7", borderColor: "#458B87", ratio: "3/2", Updated: "23/10/2026" },
  { ID: "noah.kim@example.com3", planName: "Café Pop-up Concept", description: "Plan a small weekend coffee-and-pastry pop-up.", Date: "01/08/2026", background: "#FFF2DD", borderColor: "#BA7D38", ratio: "4/3", Updated: "24/10/2026" },
];

const makeNote = (noteID, x, y, background, color, title, content, width, height, pinned) => ({
  noteID, x, y, background, color,
  text: [{ title, size: "0.64rem" }, { content, size: "0.38rem" }],
  width, height, status: "none",
  pin: { existence: pinned ? "yes" : "", color: pinned ? "#C77D26" : "" }
});

const plansNotes = [
  { ID: "mira.chen@example.com1", notes: [
    makeNote("0", "8.6208", "13.4021", "#E2EFFB", "#214C6B", "Choose the chassis", "Compare the frame materials and leave room for the battery.", "7rem", "8rem", true),
    makeNote("1", "53.4792", "17.0971", "#DFF5EF", "#255A4A", "Wire the sensors", "Connect the distance sensors and label each cable.", "7.5rem", "9rem", true),
    makeNote("2", "13.8954", "58.8603", "#E5F4DA", "#3E602C", "Calibrate the motors", "Tune wheel speeds so the robot travels straight.", "6.75rem", "10rem", false),
    makeNote("3", "55.0210", "64.3177", "#E5EAFE", "#344879", "Run the obstacle course", "Time three practice runs and record the errors.", "7.25rem", "8rem", true),
  ] },
  { ID: "mira.chen@example.com2", notes: [
    makeNote("0", "6.2213", "11.9476", "#FFF2C8", "#664D1C", "Set a weekly schedule", "Reserve four short study sessions each week.", "7.5rem", "9rem", true),
    makeNote("1", "53.1754", "11.1951", "#E2EFFB", "#214C6B", "Build a vocabulary list", "Collect practical phrases for everyday situations.", "6.75rem", "10rem", true),
    makeNote("2", "30.4465", "41.2885", "#DFF5EF", "#255A4A", "Listen every day", "Use short podcasts and repeat unfamiliar sentences.", "7.25rem", "8rem", false),
    makeNote("3", "12.0426", "68.4133", "#E5F4DA", "#3E602C", "Practice conversations", "Find a partner and focus on speaking naturally.", "7rem", "9rem", true),
    makeNote("4", "54.9145", "70.2733", "#E5EAFE", "#344879", "Review monthly progress", "Check listening and speaking improvements.", "7.5rem", "10rem", false),
  ] },
  { ID: "leo.martin@example.com1", notes: [
    makeNote("0", "13.4186", "15.1505", "#FBE8D8", "#76482E", "Measure the room", "Record wall dimensions and possible desk locations.", "6.75rem", "10rem", false),
    makeNote("1", "49.7195", "39.6667", "#FFF2C8", "#664D1C", "Plan acoustic treatment", "Reduce echoes with curtains and soft wall panels.", "7.25rem", "8rem", true),
    makeNote("2", "11.8072", "65.6577", "#E2EFFB", "#214C6B", "Test the microphone", "Compare recordings before purchasing extra equipment.", "7rem", "9rem", true),
  ] },
  { ID: "sara.patel@example.com1", notes: [
    makeNote("0", "8.5906", "14.3080", "#FCE9ED", "#743548", "Survey the sunlight", "Observe morning and afternoon light on the balcony.", "7.25rem", "8rem", true),
    makeNote("1", "54.9644", "13.5992", "#FBE8D8", "#76482E", "Select herbs", "Choose basil, mint, and rosemary for the available space.", "7rem", "9rem", true),
    makeNote("2", "11.1244", "60.4420", "#FFF2C8", "#664D1C", "Prepare containers", "Add drainage holes and a lightweight potting mix.", "7.5rem", "10rem", false),
    makeNote("3", "52.8152", "65.4362", "#E2EFFB", "#214C6B", "Plan watering", "Create a simple routine and check soil moisture.", "6.75rem", "8rem", true),
  ] },
  { ID: "sara.patel@example.com2", notes: [
    makeNote("0", "6.6266", "10.8368", "#F0E8FB", "#5B387E", "Define user stories", "List the main reasons someone would use the app.", "7rem", "9rem", true),
    makeNote("1", "55.7731", "9.7540", "#FCE9ED", "#743548", "Sketch onboarding", "Keep the first-run experience short and clear.", "7.5rem", "10rem", true),
    makeNote("2", "29.9545", "40.6108", "#FBE8D8", "#76482E", "Build a prototype", "Implement habit creation and daily check-ins.", "6.75rem", "8rem", false),
    makeNote("3", "8.0974", "67.0829", "#FFF2C8", "#664D1C", "Run usability tests", "Watch three people finish common tasks.", "7.25rem", "9rem", true),
    makeNote("4", "59.3075", "67.0836", "#E2EFFB", "#214C6B", "Prepare release notes", "Summarize new features and known limitations.", "7rem", "10rem", false),
  ] },
  { ID: "sara.patel@example.com3", notes: [
    makeNote("0", "9.0663", "11.4981", "#E5EAFE", "#344879", "Pick a trail", "Check length, difficulty, elevation, and access rules.", "7.5rem", "10rem", true),
    makeNote("1", "55.2871", "14.8904", "#F0E8FB", "#5B387E", "Check the forecast", "Review rain and temperature before departure.", "6.75rem", "8rem", true),
    makeNote("2", "12.2705", "58.7904", "#FCE9ED", "#743548", "Pack essentials", "Bring water, a map, snacks, and a first-aid kit.", "7.25rem", "9rem", false),
    makeNote("3", "55.0335", "65.9915", "#FBE8D8", "#76482E", "Arrange transport", "Confirm travel options and the return journey.", "7rem", "10rem", false),
  ] },
  { ID: "sara.patel@example.com4", notes: [
    makeNote("0", "6.8992", "11.3972", "#E5F4DA", "#3E602C", "Book the venue", "Find a bright room with tables and enough chairs.", "6.75rem", "8rem", true),
    makeNote("1", "52.8075", "16.1554", "#E5EAFE", "#344879", "Invite facilitators", "Ask local artists to lead short practical exercises.", "7.25rem", "9rem", true),
    makeNote("2", "12.0724", "60.4483", "#F0E8FB", "#5B387E", "Prepare supplies", "Count paper, pencils, erasers, and spare materials.", "7rem", "10rem", false),
    makeNote("3", "51.6175", "65.8045", "#FCE9ED", "#743548", "Open registration", "Set a realistic attendance limit and collect RSVPs.", "7.5rem", "8rem", true),
  ] },
  { ID: "noah.kim@example.com1", notes: [
    makeNote("0", "8.9479", "11.9664", "#DFF5EF", "#255A4A", "Choose a reading goal", "Set a monthly target that fits the schedule.", "7.25rem", "9rem", true),
    makeNote("1", "53.3720", "9.5132", "#E5F4DA", "#3E602C", "Make a reading list", "Mix fiction, history, and practical nonfiction.", "7rem", "10rem", false),
    makeNote("2", "31.5121", "41.1203", "#E5EAFE", "#344879", "Keep reading notes", "Write one takeaway after each completed chapter.", "7.5rem", "8rem", true),
    makeNote("3", "9.6601", "67.5848", "#F0E8FB", "#5B387E", "Review favorite books", "Pick a few titles to recommend to friends.", "6.75rem", "9rem", false),
    makeNote("4", "56.3378", "66.9427", "#FCE9ED", "#743548", "Celebrate milestones", "Mark the halfway point and year-end results.", "7.25rem", "10rem", false),
  ] },
  { ID: "noah.kim@example.com2", notes: [
    makeNote("0", "9.6826", "12.7812", "#E2EFFB", "#214C6B", "Select the best shots", "Choose strong photos with a consistent visual style.", "7rem", "10rem", true),
    makeNote("1", "52.5074", "16.5611", "#DFF5EF", "#255A4A", "Edit color balance", "Keep exposure and white balance consistent.", "7.5rem", "8rem", true),
    makeNote("2", "10.1022", "60.3278", "#E5F4DA", "#3E602C", "Write photo captions", "Describe the subject and the story behind each image.", "6.75rem", "9rem", false),
    makeNote("3", "54.4199", "64.7758", "#E5EAFE", "#344879", "Publish the gallery", "Check image loading and layout on different screens.", "7.25rem", "10rem", true),
  ] },
  { ID: "noah.kim@example.com3", notes: [
    makeNote("0", "10.1345", "11.8015", "#FFF2C8", "#664D1C", "Research foot traffic", "Visit possible locations during busy hours.", "7.5rem", "8rem", true),
    makeNote("1", "53.7230", "13.0768", "#E2EFFB", "#214C6B", "Test drink recipes", "Choose three reliable drinks and standardize portions.", "6.75rem", "9rem", false),
    makeNote("2", "29.5403", "38.4927", "#DFF5EF", "#255A4A", "Estimate costs", "Calculate ingredient, packaging, and rental expenses.", "7.25rem", "10rem", true),
    makeNote("3", "12.4104", "68.0606", "#E5F4DA", "#3E602C", "Design the signage", "Keep the menu readable from a distance.", "7rem", "8rem", false),
    makeNote("4", "57.7815", "66.3115", "#E5EAFE", "#344879", "Gather customer feedback", "Ask visitors what worked and what to improve.", "7.5rem", "9rem", true),
  ] },
];

const plansLinks = [
  { ID: "mira.chen@example.com1", links: [
    { nID: "0", dID: "1", color: "#347A92" },
    { nID: "1", dID: "2", color: "#8354AD" },
    { nID: "2", dID: "3", color: "#AC527E" },
    { nID: "0", dID: "3", color: "#4869B3" },
    { nID: "0", dID: "2", color: "#347A92" },
  ] },
  { ID: "mira.chen@example.com2", links: [
    { nID: "0", dID: "1", color: "#B66D41" },
    { nID: "1", dID: "2", color: "#347F60" },
    { nID: "2", dID: "3", color: "#9D7D30" },
    { nID: "3", dID: "4", color: "#B14D4D" },
    { nID: "0", dID: "4", color: "#B66D41" },
    { nID: "0", dID: "2", color: "#347F60" },
  ] },
  { ID: "leo.martin@example.com1", links: [
    { nID: "0", dID: "1", color: "#8354AD" },
    { nID: "1", dID: "2", color: "#AC527E" },
    { nID: "0", dID: "2", color: "#4869B3" },
  ] },
  { ID: "sara.patel@example.com1", links: [
    { nID: "0", dID: "1", color: "#347F60" },
    { nID: "1", dID: "2", color: "#9D7D30" },
    { nID: "2", dID: "3", color: "#B14D4D" },
    { nID: "0", dID: "3", color: "#B66D41" },
    { nID: "0", dID: "2", color: "#347F60" },
  ] },
  { ID: "sara.patel@example.com2", links: [
    { nID: "0", dID: "1", color: "#AC527E" },
    { nID: "1", dID: "2", color: "#4869B3" },
    { nID: "2", dID: "3", color: "#347A92" },
    { nID: "3", dID: "4", color: "#8354AD" },
    { nID: "0", dID: "4", color: "#AC527E" },
    { nID: "0", dID: "2", color: "#4869B3" },
  ] },
  { ID: "sara.patel@example.com3", links: [
    { nID: "0", dID: "1", color: "#9D7D30" },
    { nID: "1", dID: "2", color: "#B14D4D" },
    { nID: "2", dID: "3", color: "#B66D41" },
    { nID: "0", dID: "3", color: "#347F60" },
    { nID: "0", dID: "2", color: "#9D7D30" },
  ] },
  { ID: "sara.patel@example.com4", links: [
    { nID: "0", dID: "1", color: "#4869B3" },
    { nID: "1", dID: "2", color: "#347A92" },
    { nID: "2", dID: "3", color: "#8354AD" },
    { nID: "0", dID: "3", color: "#AC527E" },
    { nID: "0", dID: "2", color: "#4869B3" },
  ] },
  { ID: "noah.kim@example.com1", links: [
    { nID: "0", dID: "1", color: "#B14D4D" },
    { nID: "1", dID: "2", color: "#B66D41" },
    { nID: "2", dID: "3", color: "#347F60" },
    { nID: "3", dID: "4", color: "#9D7D30" },
    { nID: "0", dID: "4", color: "#B14D4D" },
    { nID: "0", dID: "2", color: "#B66D41" },
  ] },
  { ID: "noah.kim@example.com2", links: [
    { nID: "0", dID: "1", color: "#347A92" },
    { nID: "1", dID: "2", color: "#8354AD" },
    { nID: "2", dID: "3", color: "#AC527E" },
    { nID: "0", dID: "3", color: "#4869B3" },
    { nID: "0", dID: "2", color: "#347A92" },
  ] },
  { ID: "noah.kim@example.com3", links: [
    { nID: "0", dID: "1", color: "#B66D41" },
    { nID: "1", dID: "2", color: "#347F60" },
    { nID: "2", dID: "3", color: "#9D7D30" },
    { nID: "3", dID: "4", color: "#B14D4D" },
    { nID: "0", dID: "4", color: "#B66D41" },
    { nID: "0", dID: "2", color: "#347F60" },
  ] },
];

export default { accounts, usersData, plans, plansNotes, plansLinks };
