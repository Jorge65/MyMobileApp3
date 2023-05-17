import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from "expo-constants";

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.uri,
  // Replace the IP address part with your own IP address!
  // uri: 'http://192.168.1.207:4000/graphql',
  //uri: 'http://192.168.1.33:4000/graphql',
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
