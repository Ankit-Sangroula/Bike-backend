import fs from "fs";

export const deleteImage = (path) => {
  fs.unlink(path, (err) => {
    if (err) console.log("Error deleting file:", err);
    else console.log("File deleted:", path);
  });
};