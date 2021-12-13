import { Route, Routes } from "react-router";
import Index from "./pages";
import Page404 from "./pages/404";
import Contact from "./pages/contact";
import DataTable from "./pages/dataTable";
import Faq from "./pages/faq";
import GeneralTable from "./pages/generalTable";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="general-table" element={<GeneralTable />} />
        <Route path="data-table" element={<DataTable />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
