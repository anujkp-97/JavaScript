function SetUserName(username){
    this.username = username

    console.log("called");
    
}

function createUser(username, email, passwd){

    SetUserName.call(this,username),

    this.email = email
    this.passwd = passwd
}


const chai = new createUser('chai', 'chai@example.com', '1134')

console.log(chai);
