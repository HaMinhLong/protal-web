// THIRD IMPORT
import { useState } from "react";

// ICONS IMPORT
import { AddAPhoto } from "@mui/icons-material";

// PROJECT IMPORT

// IMAGES IMPORT
import NoImage from "assets/images/page/no_image.png";

// STYLES IMPORT
import "assets/scss/uploadImage.scss";

interface Props {
  image: any;
  setFieldValue: any;
  field: string;
}

const UploadImage = ({ image, setFieldValue, field }: Props) => {
  const [urlFile, setUrlFile] = useState("");

  const handleImage = (e) => {
    const fileUpload = e.target.files[0];
    if (fileUpload) {
      setUrlFile(URL.createObjectURL(fileUpload));
      setFieldValue(field, fileUpload);
    }
  };

  return (
    <div className="upload-image">
      <img src={urlFile || image || NoImage} alt="image website" />
      <input
        onChange={(e) => handleImage(e)}
        id="image"
        name="image"
        type="file"
      />
      <label className="icon-upload" htmlFor="image">
        <AddAPhoto />
      </label>
    </div>
  );
};

export default UploadImage;
