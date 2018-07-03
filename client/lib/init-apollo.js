import { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import AWSAppSyncClient from "aws-appsync";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  const client = new AWSAppSyncClient(
    {
      url: AWS_AppSync.graphqlEndpoint,
      region: AWS_AppSync.region,
      auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: AWS_AppSync.apiKey

        // Amazon Cognito Federated Identities using AWS Amplify
        //credentials: () => Auth.currentCredentials(),

        // Amazon Cognito user pools using AWS Amplify
        // type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        // jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      disableOffline: true
    },
    {
      cache: new InMemoryCache().restore(initialState || {}),
      ssrMode: true
    }
  );

  return client;
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
