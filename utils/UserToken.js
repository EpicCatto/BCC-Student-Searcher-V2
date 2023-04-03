class UserToken {
    constructor(username, token) {
        this.username = username;
        this.token = token;
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }
}

module.exports = {UserToken};