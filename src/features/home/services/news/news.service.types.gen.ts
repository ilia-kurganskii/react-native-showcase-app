import * as Types from '../../../../types';

export type GetNewsQueryVariables = Types.Exact<{
  pageIndex: Types.Scalars['Int'];
}>;

export type GetNewsQuery = {
  readonly __typename?: 'Query';
  readonly storiesFeed: ReadonlyArray<{
    readonly __typename?: 'Post';
    readonly _id: string;
    readonly slug: string | null;
    readonly title: string | null;
    readonly coverImage: string;
    readonly author: {
      readonly __typename?: 'User';
      readonly name: string | null;
    } | null;
  } | null> | null;
};

export type GetNewsByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  hostName: Types.Scalars['String'];
}>;

export type GetNewsByIdQuery = {
  readonly __typename?: 'Query';
  readonly post: {
    readonly __typename?: 'PostDetailed';
    readonly _id: string;
    readonly slug: string | null;
    readonly title: string | null;
    readonly coverImage: string | null;
    readonly contentMarkdown: string | null;
    readonly author: {
      readonly __typename?: 'User';
      readonly name: string | null;
    } | null;
  } | null;
};
