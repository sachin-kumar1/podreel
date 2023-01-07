import React, { useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import Modal from 'react-modal';
import AvatarEditor from 'react-avatar-editor';

const ImagePanel = ({ addElementToCanvas }) => {
  const [file, setFile] = useState(null);

  const handleFileCHange = (e) => {
    const fileBlobURL = URL.createObjectURL(e.target.files[0]);
    setFile(fileBlobURL);
    setModalIsOpen(true);
  };

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState();
  const [aspect, setAspect] = useState(16 / 9);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    overlay: { zIndex: 9999999999 },
  };
  const imgRef = useRef(null);

  const [croppedImage, setCroppedImage] = useState('');
  return (
    <div>
      <input
        type={'file'}
        accept={'image/*'}
        onChange={(e) => {
          handleFileCHange(e);
        }}
      />
      <button
        onClick={async () => {
          await addElementToCanvas('image', {
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
                    '🚀 ~ file: ImagePanel.jsx:51 ~ ImagePanel ~ canvas',
                    canvas
                  );

                  const base64Canvas = canvas
                    .toDataURL('image/jpeg')
                    .split(';base64,')[1];
                  console.log(
                    '🚀 ~ file: ImagePanel.jsx:54 ~ ImagePanel ~ base64Canvas',
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
      </Modal>
    </div>
  );
};

export default ImagePanel;
