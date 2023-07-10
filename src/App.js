import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import { useEffect } from "react";
import { auth } from "./screens/firebase";
import { useStateValue } from "./Context/StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

auth.onAuthStateChanged((authUser)=> {
console.log('The user is >>>', authUser);
if (authUser) {
  //user just logged in
  dispatch({
    type: "SET_USER",
    user: authUser,
    });
  } else {
    //use is log out
    dispatch({
      type: "SET_USER",
      user: null,
      });
    }
// this will run when components load only
  });
  }, []);


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
