import { lazy, Suspense } from "react";
import { Footer } from "./components/Footer";
import { Product } from "./pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Midyat } from "./pages/Midyat";
import { AssyrianWIne } from "./pages/AssyrianWIne";
import { Assyrians } from "./pages/Assyrians";
import { Blog } from "./pages/Blog";
import { Prizes } from "./pages/Prizes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "/products", element: <Product /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/assyrian-wine", element: <AssyrianWIne /> },
  { path: "/midyat", element: <Midyat /> },
  { path: "/assyrians", element: <Assyrians /> },
  { path: "/blog", element: <Blog /> },
  { path: "/prizes", element: <Prizes /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
