import Home from "../src/pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import useHttp from "./workers/useHttp";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/straatnaamnfts",
    element: <Navigate to="home" replace />,
  },
  {
    path: "/straatnaamnfts/home",
    element: <Home />,
  },
  {
    path: "/straatnaamnfts/login",
    element: <Home />,
  },
]);

function App() {
  const [func1, fetchStraatNamen] = useHttp();
  fetchStraatNamen();

  useEffect(() => {

    if (!!window.ethereum) {

      window.ethereum.on("accountsChanged", (accounts) => {
        console.log("accounts changed: ", accounts[0]);
      });

      window.ethereum.on("chainChanged", (chainId) => {
        console.log(chainId);
      });
    } else {
      alert("please install the MetaMask extension in order to use this website")
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
