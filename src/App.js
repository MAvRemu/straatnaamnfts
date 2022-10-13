import Home from "../src/pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import useHttp from "./workers/useHttp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" replace />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "login",
    element: <Home />,
  },
]);

function App() {

  const [func1, fetchStraatNamen] = useHttp();
  fetchStraatNamen();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
