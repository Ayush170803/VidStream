import { Provider, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Store from "./utils/Store";
import Head from "./Components/Head";
import Body from "./Components/Body";
import Maincontainer from "./Components/Maincontainer";
import WatchPge from "./Components/WatchPge";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

const Applayout = () => {
  return (
    <>
      <Head />
      <div id="bodyside">
      <Outlet />
      </div>
    </>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "main",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPge />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={Approuter} />
    </Provider>
  );
}

export default App;
