import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./components/RootLayout";
import HomePage from "./components/Home";
import SearchResults from "./components/SearchResults";
import ErrorPage from "./components/Error";
// import { searchQuery } from "./components/Home";

const router = createBrowserRouter([
  {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true,  element: <HomePage /> },
    { path: '/search', element: <SearchResults />}
  ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
