import NavBar from "./UI/NavBar";
import Home from "../src/pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const straatNamen = [
  {name: "Nieboerweg", key: 1},
  {name: "Sportlaan", key: 2},
  {name: "Laan van Meerdervoort", key: 3},
  {name: "Grote Markt", key: 4},
  {name: "Nieboerweg", key: 5},
  {name: "Sportlaan", key: 6},
  {name: "Laan van Meerdervoort", key: 7},
  {name: "Grote Markt", key: 8},
  {name: "Nieboerweg", key: 9},
  {name: "Sportlaan", key: 10},
  {name: "Laan van Meerdervoort", key: 11},
  {name: "Grote Markt", key: 12},
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" replace />,
  },
  {
    path: "home",
    element: <Home straatNamen={straatNamen}/>,
  },
  {
    path: "login",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
