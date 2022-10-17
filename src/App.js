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
    console.log("useEffect is running");
    console.log(window.ethereum.isMetaMask);

    if (window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        console.log("accounts changed: ", accounts[0]);
      });

      window.ethereum.on("chainChanged", (chainId) => {
        console.log(chainId);
      });
    } else {
      console.log("please install the MetaMask extension");
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
