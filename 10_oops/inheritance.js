// 

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        
        super(username)
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`New Course addeed by ${this.username}`);
        
    }
}

const teacher = new Teacher('Chai', 'chai@teacher.com', '123')

console.log(teacher.addCourse());
console.log(teacher.logMe());

const masalaChai = new User('Masala-Chai')
masalaChai.logMe()
