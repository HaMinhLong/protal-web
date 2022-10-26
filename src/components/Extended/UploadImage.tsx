/* eslint-disable jsx-a11y/img-redundant-alt */
// THIRD IMPORT
import { useState } from "react";
import { Box } from "@mui/material";

// ICONS IMPORT
import { AddAPhoto } from "@mui/icons-material";

// PROJECT IMPORT
import PreviewImage from "components/ModalPage/PreviewImage";
import { useDispatch } from "app/store";
import createNotification from "components/Extended/Notification";

// IMAGES IMPORT
import NoImage from "assets/images/page/no_image.png";

// STYLES IMPORT
import "assets/scss/uploadImage.scss";

const END_POINT_IMAGE = process.env.REACT_APP_SERVER;

interface Props {
  image: any;
  setFieldValue: any;
  field: string;
  multiple?: boolean;
}

const UploadImage = ({ image, setFieldValue, field, multiple }: Props) => {
  const dispatch = useDispatch();

  const [urlFile, setUrlFile] = useState("");
  const [visiblePreview, setVisiblePreview] = useState<boolean>(false);

  const handleImage = (e) => {
    const fileUpload = e.target.files[0];
    if (multiple) {
      const uploadFile = new FormData();
      uploadFile.append("image", fileUpload);
      dispatch({
        type: "image/upload",
        payload: uploadFile,
        callback: (res) => {
          if (res?.success) {
            const { results } = res;
            setFieldValue(field, image + `${image ? "," : ""}${results}`);
          } else {
            createNotification("error", res.message);
          }
        },
      });
    } else {
      if (fileUpload) {
        setUrlFile(URL.createObjectURL(fileUpload));
        setFieldValue(field, fileUpload);
      }
    }
  };

  const handleChangeImage = (image: string) => {
    setFieldValue(field, image);
  };

  return (
    <div className="upload-image">
      {multiple ? (
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            if (image?.split(",").length > 0 && image) {
              setVisiblePreview(!visiblePreview);
            }
          }}
        >
          <img
            src={
              !image
                ? NoImage
                : image?.split(",")?.length > 0
                ? `${END_POINT_IMAGE}${image?.split(",")[0]}`
                : `${END_POINT_IMAGE}${image}`
            }
            alt="preview"
          />
          {image?.split(",").length - 1 > 0 && (
            <div className="number-image">
              <p>+{image?.split(",").length - 1}</p>
            </div>
          )}
        </Box>
      ) : (
        <img src={urlFile || image || NoImage} alt="image website" />
      )}
      <input
        onChange={(e) => handleImage(e)}
        id="image"
        name="image"
        type="file"
      />
      <label className="icon-upload" htmlFor="image">
        <AddAPhoto />
      </label>
      <PreviewImage
        images={image}
        open={visiblePreview}
        handleChangeImage={handleChangeImage}
      />
    </div>
  );
};

export default UploadImage;
