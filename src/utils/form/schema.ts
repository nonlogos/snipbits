import { textValidation, passwordValidation } from './validations';

export const userFormSchema = [
	{
		name: 'username',
		autoComplete: 'username',
		type: 'text',
		placeholder: 'Enter your username',
		isRequired: true,
		isInvalid: false,
		validation: {
			validate: textValidation,
			options: { required: true },
		},
	},
	{
		name: 'password',
		autoComplete: 'password',
		type: 'text',
		placeholder: 'Enter your password',
		isRequired: true,
		isInvalid: false,
		validation: {
			validate: passwordValidation,
		},
	},
];
