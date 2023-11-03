import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Environment from "./pages/Environment";
import Colleagues from "./pages/Colleagues";
import Story from "./pages/Story";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <main className="pt-6">
          <Outlet />
        </main>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/select-environment", element: <Environment /> },
        { path: "/colleagues", element: <Colleagues /> },
        { path: "/story", element: <Story /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
