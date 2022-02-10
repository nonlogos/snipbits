/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookmarkInput = {
  id?: string | null,
  pageUrl: string,
  title: string,
  description?: string | null,
  faviconUrl?: string | null,
  ogImgUrl?: string | null,
  owner?: string | null,
};

export type ModelBookmarkConditionInput = {
  pageUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  faviconUrl?: ModelStringInput | null,
  ogImgUrl?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBookmarkConditionInput | null > | null,
  or?: Array< ModelBookmarkConditionInput | null > | null,
  not?: ModelBookmarkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Bookmark = {
  __typename: "Bookmark",
  id: string,
  pageUrl: string,
  title: string,
  description?: string | null,
  faviconUrl?: string | null,
  ogImgUrl?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBookmarkInput = {
  id: string,
  pageUrl?: string | null,
  title?: string | null,
  description?: string | null,
  faviconUrl?: string | null,
  ogImgUrl?: string | null,
  owner?: string | null,
};

export type DeleteBookmarkInput = {
  id: string,
};

export type ModelBookmarkFilterInput = {
  id?: ModelIDInput | null,
  pageUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  faviconUrl?: ModelStringInput | null,
  ogImgUrl?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBookmarkFilterInput | null > | null,
  or?: Array< ModelBookmarkFilterInput | null > | null,
  not?: ModelBookmarkFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBookmarkConnection = {
  __typename: "ModelBookmarkConnection",
  items:  Array<Bookmark | null >,
  nextToken?: string | null,
};

export type CreateBookmarkMutationVariables = {
  input: CreateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type CreateBookmarkMutation = {
  createBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookmarkMutationVariables = {
  input: UpdateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkMutation = {
  updateBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookmarkMutationVariables = {
  input: DeleteBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type DeleteBookmarkMutation = {
  deleteBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookmarkQueryVariables = {
  id: string,
};

export type GetBookmarkQuery = {
  getBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookmarksQueryVariables = {
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarksQuery = {
  listBookmarks?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      id: string,
      pageUrl: string,
      title: string,
      description?: string | null,
      faviconUrl?: string | null,
      ogImgUrl?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookmarkSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBookmarkSubscription = {
  onCreateBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookmarkSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBookmarkSubscription = {
  onUpdateBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookmarkSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBookmarkSubscription = {
  onDeleteBookmark?:  {
    __typename: "Bookmark",
    id: string,
    pageUrl: string,
    title: string,
    description?: string | null,
    faviconUrl?: string | null,
    ogImgUrl?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
