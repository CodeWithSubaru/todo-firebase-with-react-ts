import { onAuthStateChanged, User, UserCredential } from "firebase/auth";
import { auth } from "@config/firebase";
import { useState, useEffect } from "react";

const useFirebase = () => {
  const [user, setUser] = useState<User | UserCredential | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      setLoading(false);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return { user, setUser, isLoading };
};

export default useFirebase;
