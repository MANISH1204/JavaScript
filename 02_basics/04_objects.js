//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "45Rohit"
tinderUser.name = "Rohit Sharma"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Rohit",
            lastName: "Sharma"
        }
    }
}


// console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);
