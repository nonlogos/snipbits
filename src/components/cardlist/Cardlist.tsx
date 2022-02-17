import React from 'react';
import { Link } from 'gatsby';

import { StyledUl } from './cardlist.styles';
import Card from '../card/Card';

export default function Cardlist({ viewIndex, posts, icon, fill, type }) {
	const mapPost = (node) => {
		return (
			<li key={node.frontmatter.title}>
				<Card
					mainlink={node.slug}
					type={type}
					keywords={node.frontmatter.keywords}
					date={node.frontmatter.date}
					icon={icon}
					fill={fill}
				>
					<h2>
						<Link to={node.slug}>{node.frontmatter.title}</Link>
					</h2>
					<p>{node.excerpt}</p>
				</Card>
			</li>
		);
	};

	const mapBookmark = (node) => (
		<li key={node.id}>
			<Card mainlink={node.pageUrl} type={type} icon={icon} fill={fill}>
				<h2>
					<a href={node.pageUrl}>{node.title}</a>
				</h2>
				<p>{node.description}</p>
				<p>{node.pageUrl}</p>
			</Card>
		</li>
	);

	return (
		<StyledUl id={`panel-${viewIndex}`} role="tabpanel" tabIndex={0} aria-labelledby={`tab-${viewIndex}`}>
			{type && posts.length && (type === 'blogs' || type === 'snippets')
				? posts.map(mapPost)
				: type && posts.length && type === 'bookmarks'
				? posts.map(mapBookmark)
				: 'No result found'}
		</StyledUl>
	);
}
