import { Route, Routes } from "react-router";
import Index from "./pages";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
