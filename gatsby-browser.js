import React from 'react';
import Layout from './src/components/Default-layout';
// const React = require( 'react' );
// const Layout = require('./src/components/Default-layout');

import './src/theme/cssReset.css';

import '@fontsource/overpass/400.css';
import '@fontsource/overpass/variable.css';
// [reference]: https://github.com/undercasetype/Fraunces
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/variable-full.css';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
