import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from "expo-constants";
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: Constants.manifest.extra.uri,
  // Replace the IP address part with your own IP address!
  // uri: 'http://192.168.1.207:4000/graphql',
  //uri: 'http://192.168.1.33:4000/graphql',
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
