import { destroyCookie, parseCookies, setCookie } from "nookies";

class AuthService {
	constructor() {
		this.listners = new Set();
		this.ctx = null;
	}

	getToken() {
		const cookies = parseCookies(this.ctx);
		return cookies.token;
	}

	setToken(token) {
		setCookie(this.ctx, "token", token, {
			maxAge: 30 * 24 * 60 * 60,
			path: "/",
		});
		this.listners.forEach((listener) => listener(token));
	}

	removeToken() {
		destroyCookie(this.ctx, "token", {
			path: "/",
		});
		this.listners.forEach((listener) => listener(null));
	}

	listen(listener) {
		this.listners.add(listener);
		return () => this.listners.delete(listener);
	}

	setContext(ctx) {
		this.ctx = ctx;
	}

	resetContext() {
		this.ctx = null;
	}
}

export const authService = new AuthService();
