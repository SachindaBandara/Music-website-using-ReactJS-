import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";
import upload from "../middleware/multer.js";

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColour = req.body.bgColour;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
    };

    const album = albumModel(albumData);
    await album.save();

    res.json({ success: true, message: "Album Added" });
  } catch (error) {
    res.json({ success: false });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    res.json({ success: true, albums: allAlbums });
  } catch (error) {
    res.json({ success: false });
  }
};

const removeAlbum = async (req, res) => {};

export { addAlbum, listAlbum, removeAlbum };
