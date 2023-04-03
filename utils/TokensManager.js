const {UserToken} = require('./UserToken');


class TokensManager {
    constructor() {
        this.tokens = [];
    }

    addToken(token) {
        this.tokens.push(token);
    }

    removeToken(token) {
        this.tokens = this.tokens.filter((t) => t !== token);
    }

    getToken(username) {
        const token = this.tokens.find((t) => t.username === username);
        if (token) {
            return token.token;
        }
        return null;
    }

    verifyToken(token) {
        return this.tokens.find((t) => t.token === token);
    }

    getTokens() {
        return this.tokens;
    }
    
    generageUser(){
        const username = "TestUser " + Math.random().toString(36).substring(2, 15);
        const token = this.generateToken();
        this.addToken(new UserToken(username, token));

        return {username, token};
    }
    generateToken() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    getUser(token) {
        const user = this.tokens.find((t) => t.token === token);
        if (user) {
            return user.username;
        }
        return null;
    }

    removeUser(username) {
        this.tokens = this.tokens.filter((t) => t.username !== username);
    }

    removeUserToken(username, token) {
        this.tokens = this.tokens.filter((t) => t.username !== username || t.token !== token);
    }

    removeUserTokens(username) {
        this.tokens = this.tokens.filter((t) => t.username !== username);
    }

    addTokenToUser(username, token) {
        this.removeUserTokens(username);
        this.addToken(new UserToken(username, token));
    }
}

const tokensManager = new TokensManager();

module.exports = tokensManager;