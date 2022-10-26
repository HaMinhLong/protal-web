/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";

// PROJECT IMPORT
import DialogPopUp from "components/Extended/DialogPopUp";
import { Box, Button, IconButton } from "@mui/material";

interface Props {
  open: boolean;
  images: string;
  handleChangeImage: (image: string) => void;
}

const END_POINT_IMAGE = process.env.REACT_APP_SERVER;

const PreviewImage = ({ open, images, handleChangeImage }: Props) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imagesState, setImagesState] = useState<any>([]);

  useEffect(() => {
    setImagePreview(
      images?.split(",").length > 0 ? images?.split(",")[0] : images
    );
    setImagesState(
      images
        ?.split(",")
        ?.map((image, index) => ({ id: `${image}-${index}`, image: image }))
    );
  }, [images]);

  useEffect(() => {
    setVisible(!visible);
  }, [open]);

  const closePopUp = () => {
    setVisible(!visible);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      imagesState,
      result.source.index,
      result.destination.index
    );

    setImagesState(items);
  };

  const closeAndSave = () => {
    let image = "";
    imagesState?.map((item, index) => {
      if (index === imagesState?.length - 1) image += item.image;
      else image += `${item.image},`;
    });
    handleChangeImage(image);
    closePopUp();
  };

  return (
    <DialogPopUp
      open={visible}
      title={`Preview Image`}
      handleClose={() => {
        closePopUp();
      }}
      styleBox={{ width: "1000px", minHeight: "550px" }}
      styleChildBox={{ p: "20px 30px" }}
      styleTitle={{ p: "10px 30px" }}
      showButtonCloseDialog
    >
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "450px",
            p: "0px 120px",
            background: "#d6d6d6",
            mb: "20px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              mr: "10px",
            }}
          >
            <img
              height="100%"
              width="100%"
              src={`${END_POINT_IMAGE}${imagePreview}`}
              alt={imagePreview}
            />
          </Box>
        </Box>
        <Box
          sx={{
            height: "100px",
            overflowX: "auto",
            overflowY: "hidden",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {imagesState?.map(({ id, image }, index) => (
                    <Draggable
                      key={id}
                      draggableId={id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              height: "100%",
                              width: "150px",
                              cursor: "pointer",
                              mr: "10px",
                              border: `3px solid ${
                                image === imagePreview ? "#2196f3" : "#d6d6d6"
                              }`,
                            }}
                          >
                            <img
                              onClick={() => setImagePreview(image)}
                              height="100%"
                              width="100%"
                              src={`${END_POINT_IMAGE}${image}`}
                              alt={image}
                            />
                            <IconButton
                              onClick={(e) => {
                                e.preventDefault();

                                setImagesState((currentImage) =>
                                  currentImage.filter(
                                    (item) => item.image !== image
                                  )
                                );
                              }}
                              size="small"
                              sx={{
                                position: "absolute",
                                top: "-5px",
                                right: "-5px",
                                zIndex: 10,
                              }}
                            >
                              <ClearIcon
                                fontSize="small"
                                color="error"
                                sx={{ width: "20px", height: "20px" }}
                              />
                            </IconButton>
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
        <Box sx={{ mt: "20px", display: "flex" }} justifyContent="flex-end">
          <Button
            sx={{ mr: "10px" }}
            size="small"
            variant="outlined"
            onClick={() => closePopUp()}
          >
            Hủy
          </Button>
          <Button
            size="small"
            variant="contained"
            endIcon={<SaveIcon />}
            onClick={() => {
              closeAndSave();
            }}
          >
            Lưu lại
          </Button>
        </Box>
      </Box>
    </DialogPopUp>
  );
};

export default PreviewImage;
