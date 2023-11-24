import './App.css';
import { AddUser, AllUsers, Rester, Navbar } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rester />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/all" element={<AllUsers />} />
          {/* <AllUsers />
        <AddUser>
        <Rester /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
