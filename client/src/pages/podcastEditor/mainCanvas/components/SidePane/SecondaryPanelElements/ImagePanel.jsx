import React, { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import Modal from "react-modal";
import AvatarEditor from "react-avatar-editor";
import UploadImage from "../../../../../../assets/image-upload-bro 1.svg";
import ImageUploading from "react-images-uploading";
import { AiFillCloseCircle } from "react-icons/ai";
import { ColorPicker } from "../../Tools";

const ImagePanel = ({ addElementToCanvas }) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 25;
  const [enableBorder, setEnableBorder] = useState(false);
  const [borderColor, setBorderColor] = useState("#000000");
  const [showBorderColorPicker, setShowBorderColorPicker] = useState(false);
  const [borderThickness, setBorderThickness] = useState(1);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleFileCHange = (e) => {
    const fileBlobURL = URL.createObjectURL(e.target.files[0]);
    setFile(fileBlobURL);
    setModalIsOpen(true);
  };

  // old upload and crop
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState();
  const [aspect, setAspect] = useState(16 / 9);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    overlay: { zIndex: 9999999999 },
  };
  const imgRef = useRef(null);

  const [croppedImage, setCroppedImage] = useState("");
  return (
    <div className="text-white w-full px-11 py-[33px]  ">
      <div className="absolute left-[555px]">
        {showBorderColorPicker && (
          <ColorPicker
            className="   "
            color={borderColor}
            setColor={setBorderColor}
          />
        )}
      </div>

      <div
        className=""
        onClick={async () => {
          // await addElementToCanvas("backgroundColor");
        }}
      >
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div
              style={isDragging ? { color: "red" } : undefined}
              {...dragProps}
            >
              <div className="flex w-full justify-center">
                <img src={UploadImage} className="w-[228px] h-[228px]  " />
              </div>
              <div className="px-10 text-center">
                Upload images to make your podreel, truly yours ✨
              </div>
              <div className="upload__image-wrapper flex flex-col ">
                <button
                  onClick={onImageUpload}
                  className="mt-[18px] text-xl cursor-pointer   bg-brandBlue py-[8px] text-center rounded"
                >
                  Upload Image
                </button>

                {/* <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="w-full text-center text-[11px] my-2">
        .jpg, .png and .svg files accepted
      </div>
      <div className="h-[1px] mt-[20px] mb-[20px] w-[100px] bg-white/50 mx-auto " />
      <div className="flex">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div>
              <div className="upload__image-wrapper flex items-center  ">
                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                {imageList.map((image, index) => (
                  <div key={index} className="image-item mx-2 relative">
                    <img
                      onClick={async () => {
                        await addElementToCanvas("image", {
                          src: image["data_url"],
                        });
                      }}
                      src={image["data_url"]}
                      className="w-[80px] h-[50px] cursor-pointer"
                    />
                    <AiFillCloseCircle
                      onClick={() => onImageRemove(index)}
                      className="absolute top-2 right-2 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
      {/* border */}
      <div className="  flex items-center text-lg mt-8 mb-3">
        <div>Border</div>
        <label class="inline-flex relative items-center mr-5 ml-4 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer "
            checked={enableBorder}
            readOnly
          />
          <div
            onClick={() => {
              setEnableBorder(!enableBorder);
              showBorderColorPicker && setShowBorderColorPicker(false);
            }}
            className="w-11 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-brandPurple  peer-checked:after:translate-x-full peer-checked:after:border-brandPurple  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-brandPurple after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPurple"
          ></div>
        </label>
      </div>
      {enableBorder && (
        <div>
          <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
            <div className="text-black">Thickness</div>
            <div className="w-full flex items-center justify-between">
              <input
                type="range"
                min="0"
                max="100"
                value={borderThickness}
                onChange={(e) => setBorderThickness(e.target.value)}
                className="   cursor-pointer w-4/5"
                id="myRange"
              />
              <input
                value={borderThickness}
                onChange={(e) => setBorderThickness(e.target.value)}
                className="border-1 text-black rounded-md  ml-4 w-[50px] text-center p-1"
              />
            </div>
          </div>
          <div className="text-lg mt-8 mb-3">Border Color</div>
          <div className="flex flex-col py-[20px] px-9 bg-white rounded-md">
            <div className="w-full flex">
              <div
                className={`w-10 h-10 rounded-full ml-3 mr-10 cursor-pointer `}
                style={{ backgroundColor: borderColor }}
                onClick={() => {
                  setShowBorderColorPicker(!showBorderColorPicker);
                }}
              />
              <input
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                className="border-1 text-black rounded-md w-[90px] px-2 py-2"
              />
            </div>
          </div>
        </div>
      )}

      {/* old upload code */}
      {/* <input
        type={"file"}
        accept={"image/*"}
        onChange={(e) => {
          handleFileCHange(e);
        }}
      />
      <button
        onClick={async () => {
          await addElementToCanvas("image", {
            src: croppedImage,
          });
        }}
      >
        UPLOAD
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div>
          {modalIsOpen && (
            <div>
              <AvatarEditor
                ref={imgRef}
                image={file}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
              />
              <button
                onClick={() => {
                  const canvas = imgRef.current.getImage();
                  console.log(
                    "🚀 ~ file: ImagePanel.jsx:51 ~ ImagePanel ~ canvas",
                    canvas
                  );

                  const base64Canvas = canvas
                    .toDataURL("image/jpeg")
                    .split(";base64,")[1];
                  console.log(
                    "🚀 ~ file: ImagePanel.jsx:54 ~ ImagePanel ~ base64Canvas",
                    base64Canvas
                  );

                  setCroppedImage(`data:image/png;base64,${base64Canvas}`);
                }}
              >
                SAVE
              </button>
              <img src={croppedImage} />
              <button
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </Modal> */}
    </div>
  );
};

export default ImagePanel;
