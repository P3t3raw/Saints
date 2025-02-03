import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loading from "./components/Loading/Loading";

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
const TEE = React.lazy(() => import("./pages/Ministries/TEE/TEE"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Notices = React.lazy(() => import("./pages/Notices/Notices"));
const Sermons = React.lazy(() => import("./pages/Sermons/Sermons"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Fellowships = React.lazy(() => import("./pages/Fellowships/Fellowships"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Welfare = React.lazy(() => import("./pages/Welfare/Welfare"));

const LoadingWithDelay = ({ delay = 10000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading ? <Loading /> : null;
};

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
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about-us",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/events",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
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
                <Suspense fallback={<LoadingWithDelay delay={3000} />}>
                  <Youth />
                </Suspense>
              ),
            },
            {
              path: "/ministries/sunday-school",
              element: (
                <Suspense fallback={<LoadingWithDelay delay={3000} />}>
                  <Children />
                </Suspense>
              ),
            },
            {
              path: "/ministries/kama-ministry",
              element: (
                <Suspense fallback={<LoadingWithDelay delay={3000} />}>
                  <Kama />
                </Suspense>
              ),
            },
            {
              path: "/ministries/mothers-union",
              element: (
                <Suspense fallback={<LoadingWithDelay delay={3000} />}>
                  <MothersUnion />
                </Suspense>
              ),
            },
            {
              path: "/ministries/music-ministry",
              element: (
                <Suspense fallback={<LoadingWithDelay delay={3000} />}>
                  <PraiseTeam />
                </Suspense>
              ),
            },

            {
              path: "/ministries/tee",
              element: (
                <Suspense fallback={<LoadingWithDelay delay={3000} />}>
                  <TEE />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "/notices",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Notices />
            </Suspense>
          ),
        },
        {
          path: "/sermons",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Sermons />
            </Suspense>
          ),
        },
        {
          path: "/contact-us",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "programs/welfare",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Welfare />
            </Suspense>
          ),
        },
        {
          path: "programs/projects",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Projects />
            </Suspense>
          ),
        },

        {
          path: "programs/fellowships",
          element: (
            <Suspense fallback={<LoadingWithDelay delay={3000} />}>
              <Fellowships />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
