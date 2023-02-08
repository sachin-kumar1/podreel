import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

import { useDropzone } from "react-dropzone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    border: "1px dashed #ccc",
    borderRadius: 4,
    outline: "none",
    transition: "border .24s ease-in-out",
  },
  active: {
    borderColor: "#2196f3",
  },
  reject: {
    borderColor: "#ff1744",
  },
  accept: {
    borderColor: "#00e676",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ImagePanel = ({ image, setImage }) => {
  const classes = useStyles();

  const [crop, setCrop] = React.useState({
    unit: "%",
    width: 30,
    aspect: 16 / 9,
  });
  const [completedCrop, setCompletedCrop] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);

  const onDrop = React.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => setImage(reader.result));
    reader.readAsDataURL(file);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
  };

  const handleCrop = () => {
    if (completedCrop === null) return;
    const image = new Image();
    image.src = image;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const maxSize = Math.max(image.width, image.height);
      const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));
      canvas.width = safeArea;
      canvas.height = safeArea;
      ctx.translate(safeArea / 2, safeArea / 2);
      ctx.translate(-safeArea / 2, -safeArea / 2);
      ctx.drawImage(image, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg");
      setCroppedImage(dataUrl);
    };
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Image</Typography>
        </Grid>
        <Grid item xs={12}>
          <div {...getRootProps({ className: classes.root })}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          {image && (
            <ReactCrop
              crop={crop}
              src={image}
              onChange={handleCropChange}
              onComplete={handleCropComplete}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleCrop}>
            Crop Image
          </Button>
        </Grid>
        <Grid item xs={12}>
          {croppedImage && (
            <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImage} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ImagePanel;
