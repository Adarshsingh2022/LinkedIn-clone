import React, { useEffect } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widget from "./Widget/Widget";
import Login from "./Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginuser, logoutuser, selectUser } from "./features/userSlice";
import auth from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      //already login
      if (userAuth) {
        dispatch(
          loginuser({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //logout
        dispatch(logoutuser());
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app_wrapper">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
