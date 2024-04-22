class UserAuthService {
    constructor() {
        this.isLoggedIn = false;
        this.user = {
            name: '',
            email: '',
        };
    }

    getIsLogged() {
        return this.isLoggedIn;
    }

    getUser() {
        return { ...this.user };
    }

    setUser({ name, email }) {
        this.user = {
            name,
            email,
        };
        this.isLoggedIn = true;
    }

    logout() {
        this.user = {
            name: '',
            email: '',
        };
        this.isLoggedIn = false;

        localStorage.setItem('currentUser', null) //Wil be token
    }
}

const userAuthService = new UserAuthService()

export default userAuthService;