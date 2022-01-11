import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

const MainStyles = styled.main`
	margin: 5rem auto;
	max-width: 90%;
`;

export default ({ children }) => (
	<MDXProvider>
		<MainStyles>{children}</MainStyles>
	</MDXProvider>
);
