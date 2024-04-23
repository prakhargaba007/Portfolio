import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import MainPage from "./pages/MainPage";
import AuthenticationPage from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/signup",
        element: <AuthenticationPage />,
      },
    ],
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
