import { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const signUp = async (user) => {
		const { username, password, email } = user;
		try {
			const { user } = await Auth.signUp({
				username,
				password,
				attributes: {
					email,
				},
			});
			console.log('signup user', user);
		} catch (e) {}
	};

	const signIn = async (username, password) => {
		try {
			const user = await Auth.signIn(username, password);
			return user;
		} catch (e) {
			console.error('error signing in', e);
			return { signInError: e.message };
		}
	};

	const signOut = async () => {
		try {
			await Auth.signOut();
		} catch (e) {
			console.error('error signing out', e);
		}
	};

	const checkUser = async () => {
		try {
			const { user } = await Auth.currentAuthenticatedUser();
			console.log('isAuthenticated', user);
		} catch (e) {
			console.error('error authenticating user', e);
		}
	};

	return { signUp, signIn, signOut, checkUser };
}
