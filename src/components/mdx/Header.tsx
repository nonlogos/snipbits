import React from 'react';

export default function Header({ date, title }) {
	return (
		<header>
			<p className="blog-date">{date}</p>
			<h1>{title}</h1>
		</header>
	);
}
