/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark($owner: String) {
    onCreateBookmark(owner: $owner) {
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
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark($owner: String) {
    onUpdateBookmark(owner: $owner) {
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
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark($owner: String) {
    onDeleteBookmark(owner: $owner) {
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
