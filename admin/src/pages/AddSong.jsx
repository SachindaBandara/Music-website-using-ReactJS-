import React from "react";
import { assets } from "../assets/admin-assets/assets";

const AddSong = () => {
  return (
    <form className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload song</p>
          <input type="file" id="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              className="w-24 cursor-pointer"
              src={assets.upload_song}
              alt=""
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img
              className="w-24 cursor-pointer"
              src={assets.upload_area}
              alt=""
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="flex flex-col gap-25">
        <p>Album</p>
        <select className="bg-transparent outline-green-600 border-2 boder-gray-400 p-2.5 w-[150px]">
          <option value="none">None</option>
        </select>
      </div>

      <button
        className="text-base bg-black py-2.5 px-14 cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddSong;
