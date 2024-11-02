const mySym = Symbol("key12")

const JsUser = {
    name: "Manish",
    [mySym]: "Keey1111",
    "full name": "Manish badade",
    age: 18,
    location: "Pune",
    email: "manish.gmail.com",
    LastloginDays: ["Monday", "Tuesday"]
}

JsUser["full name"] = "Manish Prakash Badade"
console.log(JsUser)