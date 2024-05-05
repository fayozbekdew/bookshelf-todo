//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement } from "./components";
import MainLayout from "./layout/MainLayout";
import { Error, Home, Login, SignUp } from "./page";
import { AddBook, FavoritList, MyAdded } from "./sections";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home  />,
          errorElement: <ErrorElement />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
          errorElement: <Error />,
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <Error />,
        },
        {
          path: "/createBook",
          element: <AddBook />,
          errorElement: <Error />,
        },
        {
          path: "/favoriteList",
          element: <FavoritList />,
          errorElement: <Error />,
        },
        {
          path: "/myadded",
          element: <MyAdded />,
          errorElement: <Error />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
      <>
        <RouterProvider router={routes} />
      </>
  );
}

