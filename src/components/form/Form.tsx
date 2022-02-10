import React from 'react';
import styled from 'styled-components';

import Field from './Field';

export default function Form({ children, handleOnSubmit }) {
	return <form onSubmit={handleOnSubmit}>{children}</form>;
}

Form.field = Field;
