// ES 6 

class User{
    constructor(username, email, passwd ,address){
        this.username = username
        this.email = email
        this.address = address
        this.passwd = passwd
    }

    encryptPassword(){
        return `${this.passwd}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const u = new User('anuj','anuj@12gmail.com', '123@vc', 'Noida')
console.log(u.encryptPassword());

console.log(u.changeUsername());


// behind the scene



