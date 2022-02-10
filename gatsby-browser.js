import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './src/aws-exports';
import Layout from './src/templates/Default-layout';

import './src/theme/cssReset.css';

import '@fontsource/overpass/400.css';
import '@fontsource/overpass/variable.css';
// [reference]: https://github.com/undercasetype/Fraunces
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/variable-full.css';

// configure the aws amplify sdk
Amplify.configure(awsConfig);

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
