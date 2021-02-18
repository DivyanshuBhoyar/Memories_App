import NavBar from "./components/NavBar";
import "./App.css";
import React from "react";
import { Button } from "grommet";
import { Google } from "grommet-icons";
import { auth } from "./firebase/config";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import MemoryPage from "./pages/MemoryPage";

function App() {
  let [user] = useAuthState(auth);

  return (
    <>
      <NavBar />
      {/* <AboutPage /> */}
      {user ? <MemoryPage /> : <SignIn />}
    </>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <div className="signIn-container">
        {" "}
        <Button
          label="Sign in"
          icon={<Google color="plain" size="medium" />}
          onClick={() => signInWithGoogle()}
        />
      </div>
    </>
  );
}

export default App;
