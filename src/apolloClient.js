import { 
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: 'https://kampusmerdeka-bayu.hasura.app/v1/graphql',
  headers: {
        'x-hasura-admin-secret' : 'jo09vHD1m89nilkIiwhAe22aJPBmjm0M7I9o924jlL5TXZZTTP6eFfrd2MfbJKSG'
  }
});

const wsLink = new WebSocketLink({
  uri: 'wss://kampusmerdeka-bayu.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
        headers: {
            'x-hasura-admin-secret' : 'jo09vHD1m89nilkIiwhAe22aJPBmjm0M7I9o924jlL5TXZZTTP6eFfrd2MfbJKSG'
        }
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;