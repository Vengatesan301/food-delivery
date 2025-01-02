// import React, { lazy, Suspense, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// //import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider, Outlet ,useLocation} from "react-router-dom";
// import UserContext from "./utils/UserContext";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Cart from "./components/Cart";
// import Login from "./components/Login"
//  import SignUp from "./components/SignUp"

// //import Grocery from "./components/Grocery";

// // Chunking
// // Code Splitting
// // Dynamic Bundling
// // lazy Loading
// // on demand loading
// // dynamix imoprt

// const Grocery = lazy(() => import("./components/Grocery"));

// const About = lazy(() => import("./components/About"));

// const AppLayout = () => {
//   const [userName, setUserName] = useState();
//   const location = useLocation();

//   //authentication
//   useEffect(() => {
//     // Make an API call and send username and password
//     const data = {
//       name: "Vengatesan",
//     };
//     setUserName(data.name);
//   }, []);
//   const shouldShowHeader = location.pathname !== "/" && location.pathname !== "/signup";
//   return (
//     <Provider store={appStore}>
//       <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
//         <div className="app">
//           {/* <Header /> */}
//           {shouldShowHeader && <Header />}
//           <Outlet />
//         </div>
//       </UserContext.Provider>
//     </Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Login/>,
//       },
//       {
//         path: "/signup",
//         element: <SignUp/>,
//       },
     
//       {
//         path: "/home",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/restaurants/:resId",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);




import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// Lazy-loaded components
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Simulating an API call
    const fetchUser = async () => {
      const data = { name: "Vengatesan" }; // Replace with your API call
      setUserName(data.name);
    };
    fetchUser();
  }, []);

  // Conditionally show header for specific routes
  const shouldShowHeader = !["/", "/signup"].includes(location.pathname);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* {shouldShowHeader && <Header />} */}
            <Header />
         
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // Public routes
      // { path: "/", element: <Login /> },
      // { path: "/signup", element: <SignUp /> },

      // Protected or main routes
      { path: "/home", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
