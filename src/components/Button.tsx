import React from 'react';
import styled from 'styled-components';

interface IButton {
	children: React.ReactNode;
	className?: string;
	action?: () => void;
	disabled: boolean;
}

const StyledButton = styled.button`
	--primary-color: var(--primary);
	--cancel-color: var(--text-2);
	--hover-text: var(--surface-1);
	border: 1.5px solid var(--primary-color);
	border-radius: var(--border-radius);
	color: var(--primary-color);
	line-height: 0;
	padding: 0;
	width: 100%;
	text-align: center;
	background-color: inherit;
	will-change: background-color, color;
	transition: background-color var(--transition), color var(--transition);
	&:hover:not([disabled]) {
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
	&.alert {
		border-color: red;
		color: red;
	}
`;

export default function Button({ children, className, action, disabled = false }: IButton) {
	return (
		<StyledButton className={className} onClick={action} disabled={disabled}>
			{children}
		</StyledButton>
	);
}
