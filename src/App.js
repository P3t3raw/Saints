import React, { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const Home = React.lazy(() => import("./pages/home/Home"));
const Events = React.lazy(() => import("./pages/events/Events"));
const Youth = React.lazy(() => import("./pages/Ministries/Youth/Youth"));
const Children = React.lazy(() =>
  import("./pages/Ministries/Children/Children ")
);
const Kama = React.lazy(() => import("./pages/Ministries/Kama/Kama"));
const MothersUnion = React.lazy(() =>
  import("./pages/Ministries/MU/MothersUnion")
);
const PraiseTeam = React.lazy(() =>
  import("./pages/Ministries/PraiseTeam/PraiseTeam")
);
const Choir = React.lazy(() => import("./pages/Ministries/Choir/Choir"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Notices = React.lazy(() => import("./pages/Notices/Notices"));

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about-us",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/events",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Events />
            </Suspense>
          ),
        },
        {
          path: "/ministries",
          children: [
            {
              path: "/ministries/youth-ministry",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Youth />
                </Suspense>
              ),
            },
            {
              path: "/ministries/children-ministry",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Children />
                </Suspense>
              ),
            },
            {
              path: "/ministries/Kama",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Kama />
                </Suspense>
              ),
            },
            {
              path: "/ministries/MothersUnion",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <MothersUnion />
                </Suspense>
              ),
            },
            {
              path: "/ministries/PraiseTeam",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <PraiseTeam />
                </Suspense>
              ),
            },
            {
              path: "/ministries/Choir",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Choir />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "/notices",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Notices />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
