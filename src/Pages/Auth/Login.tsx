import { ChangeEvent, useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { PromiseFuncProps } from "../../types";
import useFirebase from "../../hooks/useFirebase";
import { FormInput } from "../../components/FormInput";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useFirebase();

  const handleSignInUser: PromiseFuncProps = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const authenticated = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(authenticated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignInGoogle: PromiseFuncProps = async () => {
    try {
      const authenticated = await signInWithPopup(auth, googleProvider);
      setUser(authenticated);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="block mx-auto mt-10 max-w-sm p-6 space-y-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSignInUser} className="space-y-5">
        <FormInput
          label="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
          placeholder="Email"
        />

        <FormInput
          label="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
          placeholder="********"
        />

        <Button>Sign In</Button>
      </form>
      <Button variant="secondary" onClick={handleSignInGoogle}>
        Sign In with Google
      </Button>
    </div>
  );
};

export default Login;
