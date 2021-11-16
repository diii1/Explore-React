import { 
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://kampusmerdeka-bayu.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'jo09vHD1m89nilkIiwhAe22aJPBmjm0M7I9o924jlL5TXZZTTP6eFfrd2MfbJKSG'
    }
});

export default client;