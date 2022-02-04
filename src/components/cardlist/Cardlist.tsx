import React from 'react';
import { Link } from 'gatsby';

import { StyledUl } from './cardlist.styles';
import Card from '../card/Card';

export default function Cardlist({ viewIndex, posts, icon, fill }) {
	const mapNode = (node) => (
		<li key={node.frontmatter.title}>
			<Card
				mainlink={node.slug}
				type={node.fields.contentType}
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

	return <StyledUl viewIndex={viewIndex}>{posts.map(mapNode)}</StyledUl>;
}
