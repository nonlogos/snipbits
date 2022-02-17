import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import Form from '../components/form/Form';
import Button from '../components/Button';
import useForm from '../utils/hooks/useForm';
import useAuth from '../utils/hooks/useAuth';
import { mediaSizes } from '../theme/media';

const StyledMainContainer = styled.main`
	margin: var(--x10-spacing) var(--x4-spacing);
	@media screen and (min-width: ${mediaSizes.tab}px) {
		max-width: 60%;
		margin: var(--x10-spacing) auto;
		min-height: 40rem;
	}
	form {
		margin-top: 3rem;
	}
`;

export default function Login() {
	const { formValues, errors, setFormValues, validateField, userFormSchema } = useForm();
	const { signIn } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const [signInError, setSignInError] = useState(null);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormValues((values) => ({ ...values, [name]: value }));
	};

	const handleCancel = () => {
		// go back to previous page
		navigate(-1);
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		for (let key in formValues) {
			validateField(formValues[key], key);
		}
		if (Object.keys(errors).length < 1) {
			setIsLoading((_) => true);
			const { username, password } = formValues;
			const user = await signIn(username, password);
			console.log('user', user.message, typeof user.message);
			// handle login error
			if (user && user.signInError) {
				setSignInError(user.signInError);
			}
			setIsLoading((_) => false);
			// go back to previous page
			navigate(-1);
		}
	};

	return (
		<StyledMainContainer>
			<h1>Sign in</h1>
			{isLoading ? (
				<p>Please wait while we sign you in...</p>
			) : (
				<>
					{signInError && <p>{signInError}</p>}
					<Form handleOnSubmit={handleOnSubmit}>
						{userFormSchema.map((f) => (
							<Form.field
								key={f.name}
								name={f.name}
								autoComplete={f.autoComplete}
								type={f.type}
								value={formValues[f.name]}
								placeholder={f.placeholder}
								isRequired={f.isRequired}
								validate={validateField}
								handleOnChange={handleOnChange}
								error={errors[f.name]}
							/>
						))}
						<Button
							type="submit"
							className={Object.keys(errors).length > 0 ? 'alert' : ''}
							disabled={Object.keys(errors).length > 0}
						>
							Login
						</Button>
						<Button type="button" className="cancel" onClick={handleCancel}>
							Cancel
						</Button>
					</Form>
				</>
			)}
		</StyledMainContainer>
	);
}
