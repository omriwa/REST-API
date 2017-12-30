class User {
    username: string;
    address: string;
    pass: string;
    fName: string;
    lName: string;
    email:string;
    
    constructor(username,address,pass,fName,lName,email) {
        this.username = username;
        this.address = address;
        this.pass = pass;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
    }
    
    getUsername() {
        return this.username;
    }
    
    getAddress() {
        return this.address;
    }
    
    getPass() {
        return this.pass;
    }
    
    getFirstName() {
        return this.fName;
    }
    
    getLastName() {
        return this.lName;
    }
    
    getEmail() {
        return this.email;
    }
}

export default User;