import NavBar from "./UI/NavBar";
import Home from "../src/pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const straatNamen = [
  "Nieboerweg",
  "Sportlaan",
  "Laan van Meerdervoort",
  "Grote Markt",
  "Bosjes van Poot",
  "Nieboerweg",
  "Sportlaan",
  "Laan van Meerdervoort",
  "Grote Markt",
  "Bosjes van Poot",
  "Nieboerweg",
  "Sportlaan",
  "Laan van Meerdervoort",
  "Grote Markt",
  "Bosjes van Poot",
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
