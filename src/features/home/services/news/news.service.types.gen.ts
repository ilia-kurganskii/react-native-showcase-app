import * as Types from '../../../../types';

export type GetNewsQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int'];
}>;

export type GetNewsQuery = {
  readonly __typename?: 'Query';
  readonly postCollection: {
    readonly __typename?: 'PostCollection';
    readonly items: ReadonlyArray<{
      readonly __typename?: 'Post';
      readonly title: string | null;
      readonly author: string | null;
      readonly date: any | null;
      readonly sys: { readonly __typename?: 'Sys'; readonly id: string };
      readonly thumbnail: {
        readonly __typename?: 'Asset';
        readonly url: string | null;
      } | null;
    } | null>;
  } | null;
};

export type GetNewsByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetNewsByIdQuery = {
  readonly __typename?: 'Query';
  readonly post: {
    readonly __typename?: 'Post';
    readonly title: string | null;
    readonly author: string | null;
    readonly date: any | null;
    readonly sys: { readonly __typename?: 'Sys'; readonly id: string };
    readonly thumbnail: {
      readonly __typename?: 'Asset';
      readonly url: string | null;
    } | null;
    readonly content: {
      readonly __typename?: 'PostContent';
      readonly json: any;
    } | null;
  } | null;
};
