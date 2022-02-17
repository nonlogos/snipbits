import { useState } from 'react';

import { userFormSchema } from '../form/schema';
import { setDefaultFormValues } from '../form/helpers';

interface IFormValues {
	[key: string]: string;
}

export default function useForm() {
	const [formValues, setFormValues] = useState<IFormValues>(setDefaultFormValues(userFormSchema));
	const [errors, setErrors] = useState({});

	const validateField = (fieldName, ref) => {
		const fieldSchema = userFormSchema.filter((field) => field.name === fieldName);
		if (fieldSchema.length) {
			const {
				validation: { validate, options },
			} = fieldSchema[0];
			console.log('formValues', formValues, fieldName);
			const error = validate(formValues[fieldName], fieldName, options);
			if (error) {
				setErrors((errors) => ({ ...errors, [fieldName]: error }));
				ref && ref.current.focus();
			} else {
				const updateErrors = { ...errors };
				delete updateErrors[fieldName];
				setErrors((_) => updateErrors);
			}
		}
	};

	return { formValues, errors, setFormValues, validateField, userFormSchema };
}
