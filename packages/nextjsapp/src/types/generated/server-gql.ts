import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type HackerMessage = {
  readonly __typename?: 'HackerMessage';
  readonly id: Scalars['Int'];
  readonly message: Scalars['String'];
  readonly timestamp: Scalars['String'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly saySomeHackerThing: HackerMessage;
  readonly saySomeHackerThings: ReadonlyArray<HackerMessage>;
};


export type QuerySaySomeHackerThingsArgs = {
  messageCount: Scalars['Int'];
};

export type SaySomeHackerThingQueryVariables = Exact<{ [key: string]: never; }>;


export type SaySomeHackerThingQuery = (
  { readonly __typename?: 'Query' }
  & { readonly saySomeHackerThing: (
    { readonly __typename?: 'HackerMessage' }
    & Pick<HackerMessage, 'id' | 'message' | 'timestamp'>
  ) }
);

export type SaySomeHackerThingsQueryVariables = Exact<{
  messageCount: Scalars['Int'];
}>;


export type SaySomeHackerThingsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly saySomeHackerThings: ReadonlyArray<(
    { readonly __typename?: 'HackerMessage' }
    & Pick<HackerMessage, 'id' | 'message' | 'timestamp'>
  )> }
);


export const SaySomeHackerThingDocument = gql`
    query SaySomeHackerThing {
  saySomeHackerThing {
    id
    message
    timestamp
  }
}
    `;

/**
 * __useSaySomeHackerThingQuery__
 *
 * To run a query within a React component, call `useSaySomeHackerThingQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaySomeHackerThingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaySomeHackerThingQuery({
 *   variables: {
 *   },
 * });
 */
export function useSaySomeHackerThingQuery(baseOptions?: Apollo.QueryHookOptions<SaySomeHackerThingQuery, SaySomeHackerThingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaySomeHackerThingQuery, SaySomeHackerThingQueryVariables>(SaySomeHackerThingDocument, options);
      }
export function useSaySomeHackerThingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaySomeHackerThingQuery, SaySomeHackerThingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaySomeHackerThingQuery, SaySomeHackerThingQueryVariables>(SaySomeHackerThingDocument, options);
        }
export type SaySomeHackerThingQueryHookResult = ReturnType<typeof useSaySomeHackerThingQuery>;
export type SaySomeHackerThingLazyQueryHookResult = ReturnType<typeof useSaySomeHackerThingLazyQuery>;
export type SaySomeHackerThingQueryResult = Apollo.QueryResult<SaySomeHackerThingQuery, SaySomeHackerThingQueryVariables>;
export const SaySomeHackerThingsDocument = gql`
    query SaySomeHackerThings($messageCount: Int!) {
  saySomeHackerThings(messageCount: $messageCount) {
    id
    message
    timestamp
  }
}
    `;

/**
 * __useSaySomeHackerThingsQuery__
 *
 * To run a query within a React component, call `useSaySomeHackerThingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaySomeHackerThingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaySomeHackerThingsQuery({
 *   variables: {
 *      messageCount: // value for 'messageCount'
 *   },
 * });
 */
export function useSaySomeHackerThingsQuery(baseOptions: Apollo.QueryHookOptions<SaySomeHackerThingsQuery, SaySomeHackerThingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaySomeHackerThingsQuery, SaySomeHackerThingsQueryVariables>(SaySomeHackerThingsDocument, options);
      }
export function useSaySomeHackerThingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaySomeHackerThingsQuery, SaySomeHackerThingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaySomeHackerThingsQuery, SaySomeHackerThingsQueryVariables>(SaySomeHackerThingsDocument, options);
        }
export type SaySomeHackerThingsQueryHookResult = ReturnType<typeof useSaySomeHackerThingsQuery>;
export type SaySomeHackerThingsLazyQueryHookResult = ReturnType<typeof useSaySomeHackerThingsLazyQuery>;
export type SaySomeHackerThingsQueryResult = Apollo.QueryResult<SaySomeHackerThingsQuery, SaySomeHackerThingsQueryVariables>;