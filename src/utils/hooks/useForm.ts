import { useState } from 'react';

import { userFormSchema } from '../form/schema';
import { setDefaultFormValues } from '../form/helpers';

export default function useForm() {
	const [formValues, setFormValues] = useState(setDefaultFormValues(userFormSchema));
	const [errors, setErrors] = useState({});

	const handleOnBlur = (e, ref) => {
		const fieldName = e.target.name;
		const fieldSchema = userFormSchema.filter((field) => field.name === fieldName);
		console.log('field', fieldSchema);
		if (fieldSchema.length) {
			const {
				validation: { validate, options },
			} = fieldSchema[0];
			const error = validate(fieldName, formValues[fieldName], options);
			if (error) {
				setErrors((errors) => ({ ...errors, [fieldName]: error }));
				ref.current.focus();
			} else {
				const updateErrors = { ...errors };
				delete updateErrors[fieldName];
				setErrors((_) => updateErrors);
			}
		}
	};

	return { formValues, errors, setFormValues, handleOnBlur, userFormSchema };
}
