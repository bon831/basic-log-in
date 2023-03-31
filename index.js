let dbUsers = [
    {
        username: "polo bon",
        password: "password",
        namw: "Bon Zi Qin",
        enail: "bon@utem.edu.my"
    },
    {
        username: "hoho",
        password: "123456",
        namw: "HoHo",
        enail: "hoho@utem.edu.my"
    },
    {
        username: "ako",
        password: "012345",
        namw: "Ako",
        enail: "ako@utem.edu.my"
    }
        
]

function login(username, password) {
    console.log("someone try to login with", username, password)
    // dbUsers.find(element => {
    //     console.log(element)
    // })

    let matched = dbUsers.find(element => element.username == username)
   //  console.log(matched) 

    if (matched) {
        if(matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        }
    } else {
        return "Username not found"
    }
}

// try to login
// login("polo bon", "password")

console.log(login("polo bon", "password"))
console.log(login("polo bon", "fuck"))


