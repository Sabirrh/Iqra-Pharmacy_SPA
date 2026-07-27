import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./components/Home";
import About from "./pages/About";
import HealthTips from "./pages/Health";
import Services from "./pages/Service";
import Contact from "./pages/Contact";

import Loaders from "./components/Loaders/Loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "health", element: <HealthTips /> },
      { path: "service", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Loaders onFinish={() => setLoading(false)} />
  ) : (
    <RouterProvider router={router} />
  );
}