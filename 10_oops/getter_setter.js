

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email
    }

    set email(gmail){
        this._email = gmail
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}


const hi = new User('chai@gmail.com', 'tea123')
console.log(hi.password);

console.log(hi.email);

