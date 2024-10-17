import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";

const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />

      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
