export default class User {
    constructor(username, password, email, firstName, lastName, role, token, id) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.token = token;
        this.id = id;
    }
}