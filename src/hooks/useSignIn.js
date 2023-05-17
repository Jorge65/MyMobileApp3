import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
    const [signInMutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const { data } = await signInMutate({
        variables: { credentials: { username, password } }
      });
      return data
    };
    //console.log("...signIn...", signIn)
    return [signIn];
 
  };

export default useSignIn;
