import Home from "../src/pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setinventory } from "./store/cartSlice";

const straatNamen = [
  { name: "Nieboerweg", key: 1, available: true },
  { name: "Sportlaan", key: 2, available: true },
  { name: "Laan van Meerdervoort", key: 3, available: false },
  { name: "Grote Markt", key: 4, available: true },
  { name: "Nieboerweg", key: 5, available: false },
  { name: "Sportlaan", key: 6, available: true },
  { name: "Laan van Meerdervoort", key: 7, available: true },
  { name: "Grote Markt", key: 8, available: false },
  { name: "Nieboerweg", key: 9, available: true },
  { name: "Sportlaan", key: 10, available: true },
  { name: "Laan van Meerdervoort", key: 11, available: true },
  { name: "Grote Markt", key: 12, available: false },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" replace />,
  },
  {
    path: "home",
    element: <Home straatNamen={straatNamen} />,
  },
  {
    path: "login",
    element: <Home />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setinventory(straatNamen))
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
