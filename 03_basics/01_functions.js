function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
}

//sayMyName()

function addTwoNumber(num1, num2){
    return (num1 + num2);
}

const result = addTwoNumber(2, 5)

//console.log(result);


function loginUserMessage(userName = "Anonymus"){
    if(!userName){
        console.log("Please enter a username")
        return
    }
    return (` ${userName} just logged in`)
}


console.log(loginUserMessage())