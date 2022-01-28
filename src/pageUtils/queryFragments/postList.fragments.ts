import { graphql } from 'gatsby';

export const postNodeQuery = graphql`
	fragment nodeForPostList on Mdx {
		frontmatter {
			date(locale: "", formatString: "MM-DD-YYYY")
			title
			keywords
			description
		}
		fields {
			contentType
		}
		excerpt
		slug
	}
`;
