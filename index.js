let dbUsers = [
    {
        username: "polo bon",
        password: "password",
        namw: "Bon Zi Qin",
        email: "bon@utem.edu.my"
    },
    {
        username: "hoho",
        password: "123456",
        namw: "HoHo",
        email: "hoho@utem.edu.my"
    },
    {
        username: "ako",
        password: "012345",
        namw: "Ako",
        email: "ako@utem.edu.my"
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

function register(newusername, newpassword, newname, newemail) {
    let matched = dbUsers.find(element => element.username == newusername) 

    if (matched) {
       return "username already exist in earth"
    } else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            name: newname,
            email: newemail
        })
        return "new account has been created"
    }
    
}
// try to login
// login("polo bon", "password")

// console.log(login("polo bon", "password"))
// console.log(login("polo bon", "halooo"))


// register
console.log(register("utem", "123456", "UTeM", "UTeM@student.edu.my"))
console.log(login("utem", "123456"))
