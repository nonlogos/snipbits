/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookmark = /* GraphQL */ `
  query GetBookmark($id: ID!) {
    getBookmark(id: $id) {
      id
      pageUrl
      title
      description
      faviconUrl
      ogImgUrl
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pageUrl
        title
        description
        faviconUrl
        ogImgUrl
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
