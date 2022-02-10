export function textValidation(fieldName: string, fieldValue: string, options?: any) {
	try {
		if (!fieldName) {
			throw new Error('missing fieldName argument');
		}
		if (!fieldValue && fieldValue !== '') {
			throw new Error('missing fieldValue argument');
		}
		const value = fieldValue.trim();
		const { required, alphabetOnly, min, max } = options;
		if (required && !value) {
			return `${fieldName} is required`;
		}
		if (alphabetOnly && /[^a-zA-Z -]/.test(value)) {
			// regex match for any non alphabetic char
			return `invalid characters`;
		}
		if (min && value.length < min) {
			return `${fieldName} needs to have at least ${min} characters`;
		}
		if (max && value.length > max) {
			return `${fieldName} needs to have no more than ${max} characters`;
		}
		return null;
	} catch (e) {
		console.error(e);
	}
}

export function emailValidation(required, email) {
	try {
		if (!email) {
			throw new Error('missing email argument');
		}
		const emailValue = email.trim();
		if (required && !emailValue) {
			return 'An email is required';
		}
		if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
			return null;
		}
		return 'please enter a valid email';
	} catch (e) {
		console.error(e);
	}
}

export function passwordValidation(password) {
	try {
		if (!password) {
			throw new Error('missing password argument');
		}
		let errorStr = 'valid password needs to have at least ';
		const errorArr = [];
		if (!/[a-z]/.test(password)) {
			errorArr.push('one lowercase letter');
		}
		if (!/[A-Z]/.test(password)) {
			errorArr.push('one uppercase letter');
		}
		if (!/[0-9]/.test(password)) {
			errorArr.push('one number');
		}
		if (!/[\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`]/.test(password)) {
			errorArr.push('one special character');
		}
		if (/[\s]/.test(password)) {
			errorArr.push('cannot have whitespace');
		}
		if (password.length < 8) {
			errorArr.push('and with min 8 characters');
		}
		if (errorArr.length < 1) {
			return null;
		}
		return errorStr + errorArr.join(', ');
	} catch (e) {
		console.error(e);
	}
}
