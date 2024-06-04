import { RouterProvider, createBrowserRouter } from "react-router-dom"; //v6
// import { Routes, Route } from "react-router-dom"; //migrate from v5 to v6
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import PrivateOutlet from "./components/PrivateOutlet";

function App() {
  //v6 style

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <Header>
  //         <HomePage />
  //       </Header>
  //     ),
  //   },
  //   {
  //     path: "/login",
  //     element: (
  //       <Header>
  //         <Login />
  //       </Header>
  //     ),
  //   },
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <PrivateRoute>
  //         <Header>
  //           <Dashboard />
  //         </Header>
  //       </PrivateRoute>
  //     ),
  //   },
  // ]);

  //v6 style better nested

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Header>
          <HomePage />
        </Header>
      ),
    },
    {
      path: "/login",
      element: (
        <Header>
          <Login />
        </Header>
      ),
    },
    {
      path: "/*",
      element: (
        <Header>
          <PrivateOutlet />
        </Header>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* v6 style */}
      <div className="app">
        <RouterProvider router={router}></RouterProvider>
      </div>

      {/* migrate from v5 to v6 style */}
      {/* <div className="app">
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div> */}

      {/* migrate from v5 to v6 style better way */}

      {/* <div className="app">
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            
          </Route>
        </Routes>
      </div> */}
    </>
  );
}

export default App;
