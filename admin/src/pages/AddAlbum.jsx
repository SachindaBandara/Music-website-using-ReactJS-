import React from "react";
import { assets } from "../assets/admin-assets/assets";

const AddAlbum = () => {
  return (
    <form className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex flex-col gap-4">
        <p>Upload image</p>
        <input type="file" id="image" accept="image/*" hidden />
        <label htmlFor="image">
          <img
            src={assets.upload_area}
            className="w-24 cursor-pointer"
            alt=""
          />
        </label>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input
          type="text"
          placeholder="Type here"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input
          type="text"
          placeholder="Type here"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p>Background Colour</p>
        <input type="color" />
      </div>

      <button
        className="text-base bg-black text-white py-2.5 px-14 cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddAlbum;
