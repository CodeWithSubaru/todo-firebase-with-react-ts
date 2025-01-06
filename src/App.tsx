import Login from "./Pages/Auth/Login";
import All from "./Pages/Todo/All";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import useFirebase from "./hooks/useFirebase";
import Button from "./components/Button";

const App = () => {
  const { user, isLoading } = useFirebase();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-full bg-gray-900">
      <div className="flex justify-between px-4 py-3">
        <h1 className="text-white text-xl">Todo List</h1>
        <div>{user && <Button onClick={handleSignOut}>Sign Out</Button>}</div>
      </div>
      {isLoading && <p className="text-white">Loading...</p>}
      {!isLoading && !user && <Login />}
      {!isLoading && user && <All />}
    </div>
  );
};

export default App;
