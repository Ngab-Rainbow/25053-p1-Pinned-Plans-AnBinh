const accounts = [
    {name:"NguyenAnBinh",email:"wukong.dargon@gmail.com",password:"0708115625"},
    {name:"Nguyen Van A", email:"abc@gmail.com",password:"01234567890"},
    {name:"Co   be bandiem",email:"cbb@alo.com",password:"09012202600"},
    {name:"  Ke manhnhat The Goi",email:"eld@yahoo.gmai",password:"07055500120"}
]
const usersData =[
    {email:"wukong.dargon@gmail.com",nationality:"Vietnamese",age:17,gender:"Male",total:0,avatar:"https://placehold.net/avatar-5.png"},
    {email:"abc@gmail.com",nationality:"Vietnamese",age:31,gender:"Male",total:0,avatar:"https://placehold.net/avatar-2.svg"},
    {email:"cbb@alo.com",nationality:"French",age:13,gender:"Female",total:0,avatar:"https://placehold.net/avatar-3.png"},
    {email:"eld@yahoo.gmai",nationality:"Mars",age:100,gender:"Secret",total:0,avatar:"https://placehold.net/avatar-4.png"},
]

const plans = [
{ID: "wukong.dargon@gmail.com1", planName:"First plan", description: "Test plan 1", Date: "14/03/2026", background:"#FAEBD7", borderColor:"rgb(214, 126, 74)", ratio: "4/3", Updated:"24/05/2026"}, 
{ID: "wukong.dargon@gmail.com2", planName:"Second plan", description: "Test plan 2", Date: "27/07/2026", background:"#7FFFD4", borderColor:"#3A8D7C", ratio: "1/1", Updated:"18/09/2026"}, 
{ID: "abc@gmail.com1", planName:"I", description: "Oh yessss", Date: "05/01/2026", background:"#000000", borderColor:"rgb(119, 87, 214)", ratio: "3/4", Updated:"22/02/2026"}, 
{ID: "cbb@alo.com1", planName:"This is my plan", description: "Oh noooo", Date: "19/05/2026", background:"rgb(255, 214, 165)", borderColor:"#E28A5B", ratio: "3/2", Updated:"03/08/2026"}, 
{ID: "cbb@alo.com2", planName:"So this is it", description: "Hello anh em", Date: "02/09/2026", background:"#CDEBFF", borderColor:"rgb(71, 143, 190)", ratio: "4/3", Updated:"28/09/2026"}, 
{ID: "cbb@alo.com3", planName:"Finance", description: "Goodby everyone", Date: "23/11/2025", background:"rgb(221, 255, 200)", borderColor:"#6BA84A", ratio: "2/3", Updated:"17/04/2026"}, 
{ID: "cbb@alo.com4", planName:"Travel", description: "This is the last one", Date: "08/08/2026", background:"#FFE0F0", borderColor:"rgb(205, 92, 140)", ratio: "1/1", Updated:"14/09/2026"}, 
{ID: "eld@yahoo.gmai1", planName:"Business", description: "Yohohoho this is the bullestin plan!", Date: "31/12/2025", background:"rgb(255, 239, 168)", borderColor:"#D4A72C", ratio: "3/4", Updated:"11/03/2026"}, 
{ID: "eld@yahoo.gmai2", planName:"Project", description: "I don't think this will work", Date: "11/04/2026", background:"#D9D2FF", borderColor:"rgb(106, 90, 205)", ratio: "3/2", Updated:"30/06/2026"}, 
{ID: "eld@yahoo.gmai3", planName:"Investment", description: "Maybe it will work", Date: "16/06/2026", background:"rgb(198, 245, 230)", borderColor:"#3D9B7E", ratio: "4/3", Updated:"07/09/2026"}
]

const plansNotes = [
    {
        ID: "wukong.dargon@gmail.com1",
        notes: [
            {
                noteID: "0", x: "50.3016", y: "9.3312",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Set a deadline", size: "0.6206896551724138rem"},
                    {content: "Choose a realistic due date, then leave time for a final review.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "1", x: "51.7259", y: "40.8976",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Review the first draft", size: "0.6206896551724138rem"},
                    {content: "Check the wording, fix mistakes, and note what needs improvement.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "2", x: "10.7721", y: "41.3886",
                background: "#E8F2C6", color: "#41551D",
                text: [
                    {title: "Write down initial ideas", size: "0.6206896551724138rem"},
                    {content: "Collect possible features and questions before choosing an approach.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "3", x: "27.2296", y: "69.3299",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Break work into smaller tasks", size: "0.6206896551724138rem"},
                    {content: "Divide the project into manageable steps and prioritize the essentials.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "", color: ""}
            }
        ]
    },
    {
        ID: "wukong.dargon@gmail.com2",
        notes: [
            {
                noteID: "0", x: "10.9063", y: "12.2592",
                background: "#E5E9FF", color: "#2D376A",
                text: [
                    {title: "Prepare the final version", size: "0.6206896551724138rem"},
                    {content: "Clean up the remaining details and confirm everything is ready.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "1", x: "58.2862", y: "70.4748",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Collect feedback", size: "0.6206896551724138rem"},
                    {content: "Ask a few people to test the work and share their suggestions.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "27.6549", y: "71.2963",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Build a simple prototype", size: "0.6206896551724138rem"},
                    {content: "Start with the core flow. Add extra features after testing it.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "3", x: "51.0912", y: "8.6237",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Confirm the project scope", size: "0.6206896551724138rem"},
                    {content: "Write down what is included and what can be postponed.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "4", x: "10.1899", y: "41.3157",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Test the important features", size: "0.6206896551724138rem"},
                    {content: "Try normal usage, empty inputs, and unexpected actions.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            }
        ]
    },
    {
        ID: "abc@gmail.com1",
        notes: [
            {
                noteID: "0", x: "6.6477", y: "11.1724",
                background: "#E8F2C6", color: "#41551D",
                text: [
                    {title: "Take a short break", size: "0.6206896551724138rem"},
                    {content: "Step away for a moment, then return with a fresh perspective.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "1", x: "61.5137", y: "68.3931",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Remember today's priorities", size: "0.6206896551724138rem"},
                    {content: "Focus on the most important task before handling small requests.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "54.1315", y: "42.3914",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Organize the workspace", size: "0.6206896551724138rem"},
                    {content: "Keep frequently used resources easy to find and remove clutter.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            }
        ]
    },
    {
        ID: "cbb@alo.com1",
        notes: [
            {
                noteID: "0", x: "26.4223", y: "68.8655",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Make a quick checklist", size: "0.6206896551724138rem"},
                    {content: "List today's tasks and mark each one when it is finished.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "1", x: "52.5654", y: "10.8609",
                background: "#E8F2C6", color: "#41551D",
                text: [
                    {title: "Start with the hardest task", size: "0.6206896551724138rem"},
                    {content: "Work on the most demanding part while your energy is high.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "58.6625", y: "70.3296",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Share progress with the team", size: "0.6206896551724138rem"},
                    {content: "Summarize completed work, current blockers, and next actions.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "3", x: "8.9623", y: "9.3768",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Record useful ideas", size: "0.6206896551724138rem"},
                    {content: "Save interesting suggestions so they are not forgotten.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "4", x: "9.6006", y: "38.9706",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Check the results", size: "0.6206896551724138rem"},
                    {content: "Compare the finished work with the original requirements.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            }
        ]
    },
    {
        ID: "cbb@alo.com2",
        notes: [
            {
                noteID: "0", x: "50.6749", y: "42.3957",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Test on different screens", size: "0.6206896551724138rem"},
                    {content: "Check narrow phone widths, tablets, and desktop layouts.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "1", x: "8.3389", y: "39.2918",
                background: "#E5E9FF", color: "#2D376A",
                text: [
                    {title: "Polish the details", size: "0.6206896551724138rem"},
                    {content: "Improve spacing, typography, transitions, and error messages.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "2", x: "25.4219", y: "68.2053",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Choose the color palette", size: "0.6206896551724138rem"},
                    {content: "Keep the background, borders, and text visually consistent.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "3", x: "48.6030", y: "9.2995",
                background: "#E5E9FF", color: "#2D376A",
                text: [
                    {title: "Publish the update", size: "0.6206896551724138rem"},
                    {content: "Make a backup, check the final build, and publish the changes.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            }
        ]
    },
    {
        ID: "cbb@alo.com3",
        notes: [
            {
                noteID: "0", x: "54.0568", y: "42.3988",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Check recurring expenses", size: "0.6206896551724138rem"},
                    {content: "Review subscriptions, bills, and other repeating costs.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "1", x: "10.4080", y: "11.3656",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Prepare a summary", size: "0.6206896551724138rem"},
                    {content: "Record income, expenses, and the balance for this month.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "8.7330", y: "40.7401",
                background: "#E8F2C6", color: "#41551D",
                text: [
                    {title: "Update the budget", size: "0.6206896551724138rem"},
                    {content: "Adjust the spending limits based on current priorities.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "3", x: "24.4326", y: "68.1452",
                background: "#FFE5D1", color: "#713916",
                text: [
                    {title: "Compare planned and actual costs", size: "0.6206896551724138rem"},
                    {content: "Identify differences between the budget and real spending.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "4", x: "49.8241", y: "8.7969",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Set aside savings", size: "0.6206896551724138rem"},
                    {content: "Decide on a savings goal and a contribution schedule.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            }
        ]
    },
    {
        ID: "cbb@alo.com4",
        notes: [
            {
                noteID: "0", x: "10.2654", y: "37.8007",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Prepare a packing list", size: "0.6206896551724138rem"},
                    {content: "Remember documents, clothes, chargers, and essentials.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "1", x: "8.5835", y: "12.3523",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "List places to visit", size: "0.6206896551724138rem"},
                    {content: "Group attractions by area to avoid unnecessary travel.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "26.0353", y: "68.5335",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Choose a destination", size: "0.6206896551724138rem"},
                    {content: "Compare the weather, travel costs, and available activities.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "3", x: "59.0653", y: "67.9063",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Research local transportation", size: "0.6206896551724138rem"},
                    {content: "Check airport connections and options for getting around.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            }
        ]
    },
    {
        ID: "eld@yahoo.gmai1",
        notes: [
            {
                noteID: "0", x: "8.2762", y: "9.8712",
                background: "#FFE5D1", color: "#713916",
                text: [
                    {title: "Set quarterly goals", size: "0.6206896551724138rem"},
                    {content: "Define a few measurable outcomes for the next three months.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "1", x: "26.8389", y: "71.3564",
                background: "#E5E9FF", color: "#2D376A",
                text: [
                    {title: "Identify customer needs", size: "0.6206896551724138rem"},
                    {content: "Talk to potential users about their biggest difficulties.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "51.5962", y: "9.4748",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Review the launch checklist", size: "0.6206896551724138rem"},
                    {content: "Verify the product, support information, and announcements.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "", color: ""}
            }
        ]
    },
    {
        ID: "eld@yahoo.gmai2",
        notes: [
            {
                noteID: "0", x: "49.7334", y: "42.7844",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Schedule a review", size: "0.6206896551724138rem"},
                    {content: "Set a time to check progress and resolve open questions.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "1", x: "26.0971", y: "67.3966",
                background: "#FCE0E7", color: "#682B43",
                text: [
                    {title: "Build the first version", size: "0.6206896551724138rem"},
                    {content: "Implement the essentials before adding optional improvements.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "9rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "2", x: "10.8278", y: "8.1472",
                background: "#E5E9FF", color: "#2D376A",
                text: [
                    {title: "Run the test cases", size: "0.6206896551724138rem"},
                    {content: "Record expected outcomes and investigate any failures.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "12rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "3", x: "58.9168", y: "70.9886",
                background: "#D9F4EA", color: "#164B3C",
                text: [
                    {title: "Document the changes", size: "0.6206896551724138rem"},
                    {content: "Write down what changed and why it was necessary.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            }
        ]
    },
    {
        ID: "eld@yahoo.gmai3",
        notes: [
            {
                noteID: "0", x: "8.1854", y: "10.3316",
                background: "#E5E9FF", color: "#2D376A",
                text: [
                    {title: "Write down assumptions", size: "0.6206896551724138rem"},
                    {content: "Separate known facts from estimates that need verification.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "1", x: "24.8822", y: "70.2186",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Study potential risks", size: "0.6206896551724138rem"},
                    {content: "Consider volatility, liquidity, and possible losses.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "11rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "2", x: "62.3214", y: "67.9767",
                background: "#FFE5D1", color: "#713916",
                text: [
                    {title: "Review diversification", size: "0.6206896551724138rem"},
                    {content: "Check whether the portfolio relies too heavily on one asset.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "yes", color: "#D99125"}
            },
            {
                noteID: "3", x: "8.2140", y: "38.9489",
                background: "#E9DEF7", color: "#563371",
                text: [
                    {title: "Set a long-term objective", size: "0.6206896551724138rem"},
                    {content: "Define the time horizon and the purpose of the investment.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "8rem", status: "none",
                pin: {existence: "", color: ""}
            },
            {
                noteID: "4", x: "50.4997", y: "11.2734",
                background: "#FFF0B3", color: "#44320C",
                text: [
                    {title: "Track performance periodically", size: "0.6206896551724138rem"},
                    {content: "Review progress on a schedule rather than reacting daily.", size: "0.3620689655172414rem"}
                ],
                width: "7rem", height: "10rem", status: "none",
                pin: {existence: "", color: ""}
            }
        ]
    }
];

const plansLinks =[
    {
        ID: "wukong.dargon@gmail.com1",
        links: [
            { nID: "0", dID: "1", color: "#530303" },
            { nID: "1", dID: "2", color: "#3A7D44" },
            { nID: "0", dID: "2", color: "#4678B5" },
            { nID: "0", dID: "3", color: "#B06747" },
            { nID: "1", dID: "3", color: "#8B5BB7" }
        ]
    },
    {
        ID: "wukong.dargon@gmail.com2",
        links: [
            { nID: "2", dID: "4", color: "#530303" },
            { nID: "0", dID: "1", color: "#4678B5" },
            { nID: "1", dID: "3", color: "#8B5BB7" },
            { nID: "3", dID: "4", color: "#3A7D44" },
            { nID: "0", dID: "2", color: "#B06747" }
        ]
    },
    {
        ID: "abc@gmail.com1",
        links: [
            { nID: "0", dID: "2", color: "#4678B5" },
            { nID: "0", dID: "1", color: "#530303" },
            { nID: "1", dID: "2", color: "#3A7D44" }
        ]
    },
    {
        ID: "cbb@alo.com1",
        links: [
            { nID: "0", dID: "2", color: "#530303" },
            { nID: "0", dID: "4", color: "#4678B5" },
            { nID: "4", dID: "3", color: "#3A7D44" },
            { nID: "3", dID: "1", color: "#8B5BB7" },
            { nID: "2", dID: "1", color: "#B06747" }
        ]
    },
    {
        ID: "cbb@alo.com2",
        links: [
            { nID: "0", dID: "1", color: "#8B5BB7" },
            { nID: "1", dID: "2", color: "#4678B5" },
            { nID: "2", dID: "3", color: "#3A7D44" },
            { nID: "3", dID: "0", color: "#B06747" }
        ]
    },
    {
        ID: "cbb@alo.com3",
        links: [
            { nID: "0", dID: "2", color: "#3A7D44" },
            { nID: "0", dID: "1", color: "#530303" },
            { nID: "1", dID: "3", color: "#4678B5" },
            { nID: "3", dID: "4", color: "#8B5BB7" },
            { nID: "4", dID: "2", color: "#B06747" }
        ]
    },
    {
        ID: "cbb@alo.com4",
        links: [
            { nID: "3", dID: "0", color: "#530303" },
            { nID: "3", dID: "1", color: "#4678B5" },
            { nID: "0", dID: "1", color: "#8B5BB7" },
            { nID: "1", dID: "2", color: "#3A7D44" },
            { nID: "2", dID: "3", color: "#B06747" }
        ]
    },
    {
        ID: "eld@yahoo.gmai1",
        links: [
            { nID: "0", dID: "1", color: "#8B5BB7" },
            { nID: "1", dID: "2", color: "#3A7D44" },
            { nID: "0", dID: "2", color: "#4678B5" }
        ]
    },
    {
        ID: "eld@yahoo.gmai2",
        links: [
            { nID: "1", dID: "2", color: "#530303" },
            { nID: "2", dID: "3", color: "#4678B5" },
            { nID: "0", dID: "1", color: "#3A7D44" },
            { nID: "0", dID: "3", color: "#8B5BB7" }
        ]
    },
    {
        ID: "eld@yahoo.gmai3",
        links: [
            { nID: "0", dID: "2", color: "#8B5BB7" },
            { nID: "0", dID: "1", color: "#530303" },
            { nID: "1", dID: "3", color: "#4678B5" },
            { nID: "3", dID: "4", color: "#3A7D44" },
            { nID: "4", dID: "2", color: "#B06747" }
        ]
    }
];

export default {accounts,usersData,plans,plansNotes,plansLinks}
