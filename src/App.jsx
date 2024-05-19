import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Gemini from "./pages/Gemini";
import Layout from "./Layout";
import { AuthContextProvider } from "./AuthContext";
import Protected from "./Protected";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/gemini"
              element={
                <Protected>
                  <Gemini/>
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
