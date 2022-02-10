import React, { useState } from 'react';
import styled from 'styled-components';

import Form from '../components/form/Form';
import useForm from '../utils/hooks/useForm';
import { mediaSizes } from '../theme/media';

const StyledMainContainer = styled.main`
	margin: var(--x10-spacing) var(--x4-spacing);
	@media screen and (min-width: ${mediaSizes.tab}px) {
		width: 60%;
		margin: var(--x10-spacing) auto;
		min-height: 40rem;
	}
	form {
		margin-top: 3rem;
	}
`;

const StyledButton = styled.button`
	--primary-color: var(--primary);
	--cancel-color: var(--text-2);
	--hover-text: var(--surface-1);
	border: 1px solid var(--primary-color);
	border-radius: var(--border-radius);
	color: var(--primary-color);
	margin-right: 0.5em;
	padding: 0.3em;
	min-width: 30%;
	text-align: center;
	background-color: inherit;
	will-change: background-color, color;
	transition: background-color var(--transition), color var(--transition);
	&:hover {
		background-color: var(--primary-color);
		color: var(--hover-text);
	}
	&.cancel {
		border-color: var(--cancel-color);
		color: var(--cancel-color);
		&:hover {
			background-color: var(--cancel-color);
			color: var(--hover-text);
		}
	}
`;

export default function Login() {
	const { formValues, errors, setFormValues, handleOnBlur, userFormSchema } = useForm();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormValues((values) => ({ ...values, [name]: value }));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
	};

	console.log('formValues', formValues);
	console.log('errors', errors);
	return (
		<StyledMainContainer>
			<h1>Login</h1>
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
						handleBlur={handleOnBlur}
						handleOnChange={handleOnChange}
						error={errors[f.name]}
					/>
				))}
				<StyledButton type="submit">Login</StyledButton>
				<StyledButton type="button" className="cancel">
					Cancel
				</StyledButton>
			</Form>
		</StyledMainContainer>
	);
}
