import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import React from "react";
import AuthProvider from "./AuthProvider";
import "./App.css";
import "./pages/util.css";
import "@csstools/normalize.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  );
};

export default App;
