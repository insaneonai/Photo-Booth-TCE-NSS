import { FilesetResolver, FaceLandmarker } from '@mediapipe/tasks-vision';
import { Modal, Box, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import { 
    WhatsappShareButton, 
    WhatsappIcon,
    EmailShareButton, 
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,

 } from 'react-share';
import Webcam from 'react-webcam';

import { uploadImage, getObjectFitSize } from './helper';

export function PhotoBar() {
    const webcamRef = React.useRef(null);
    const [isPopupVisible, setIsPopupVisible] = React.useState(false);
    const [isPopupVisible2, setIsPopupVisible2] = React.useState(false);
    const [detector, setDetector] = React.useState(null);
    const canvasRef = React.useRef(null);
    const imageRef = React.useRef(null);
    const [frameAdded, setFrameAdded] = React.useState(false);
    const framedImageRef = React.useRef(null);
    const [imageURL, setImageURL] = React.useState(null);

    const shareHandler = async () => {
        setFrameAdded(true); 
        const imageURL = await uploadImage(framedImageRef.current)
        setImageURL(imageURL);
    };

    React.useEffect(() => {
        const initializeDetector = async () => {
            const filesetResolver = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
            );
            const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
                baseOptions: {
                    modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                    delegate: "GPU",
                },
                outputFaceBlendshapes: true,
                runningMode: "IMAGE",
                numFaces: 1,
            });
            setDetector(faceLandmarker);
        };
        initializeDetector();
    }, []);

    const detectFaces = React.useCallback(() => {
        if (!detector || !webcamRef.current) return;

        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            const image = new Image();
            image.src = imageSrc;
            image.onload = async () => {
                const predictions = await detector.detect(image).faceBlendshapes[0]?.categories;

                if (predictions) {
                    const score44 = predictions[44]?.score;
                    const score45 = predictions[45]?.score;

                    if (score44 > 0.8 && score45 > 0.8) {
                        imageRef.current = imageSrc;
                        webcamRef.current.stream.getTracks().forEach((track) => track.stop());
                        const canvas = canvasRef.current;
                        webcamRef.current.video.style.display = "none";
                        if (canvas) {
                            const context = canvas.getContext("2d");
                            canvas.width = image.width;
                            canvas.height = image.height;
                            context.drawImage(image, 0, 0, image.width, image.height);
                            document.getElementById("customize").style.display = "block";
                        } else {
                            console.error("Canvas reference is null.");
                        }
                    }
                }
            };

            image.onerror = (error) => {
                console.error("Image loading error:", error);
            };
        }
        requestAnimationFrame(detectFaces);
    }, [detector]);
    
    React.useEffect(() => {
        if (isPopupVisible && detector) {
            const animationFrameId = requestAnimationFrame(detectFaces);
            return () => cancelAnimationFrame(animationFrameId); // Clean up the animation frame
        }
    }, [isPopupVisible, detector , detectFaces]);

    const addFrameOne = () => {
        const canvas = document.getElementById("custom");
        const context = canvas.getContext("2d");
        const frame = new Image();
        const imageCapture = new Image();

        const dimensions = getObjectFitSize(
            true,
            800,
            600,
            canvas.width,
            canvas.height
          ); 
        
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        frame.src = "/public/frame1.jpg";
        imageCapture.src = imageRef.current;

        let frameLoaded = false;
        let imageCaptureLoaded = false;
        
        frame.onload = () => {
            frameLoaded = true;
            drawImage();
        };
        imageCapture.onload = () => {
            imageCaptureLoaded = true;
            drawImage();
        }

        const drawImage = () => {
            if (frameLoaded && imageCaptureLoaded) {
                context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
                context.drawImage(frame, 0, 0, canvas.width, canvas.height);
                context.drawImage(imageCapture, 297, 155, 230, 140);
                framedImageRef.current = canvas.toDataURL("image/png");
            }
        };

        const image = document.getElementById("capture");
        canvas.style.display = "block";
        image?.remove();
    }

    const addFrameTwo = () => {
        const canvas = document.getElementById("custom");
        const context = canvas.getContext("2d");
        const frame = new Image();
        const imageCapture = new Image();
        frame.src = "/public/frame2.jpg";
        imageCapture.src = imageRef.current;

        const dimensions = getObjectFitSize(
            true,
            800,
            600,
            canvas.width,
            canvas.height
          );
        
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        let frameLoaded = false;
        let imageCaptureLoaded = false;

        frame.onload = () => {
            frameLoaded = true;
            drawImage();
        }

        imageCapture.onload = () => {
            imageCaptureLoaded = true;
            drawImage();
        };

        const drawImage = () => {
            if (frameLoaded && imageCaptureLoaded) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(frame, 0, 0, canvas.width, canvas.height);
                context.drawImage(imageCapture, 300, 133, 195, 170);
                framedImageRef.current = canvas.toDataURL("image/png");
            }
        }

        const image = document.getElementById("capture");
        canvas.style.display = "block";
        image?.remove();


    }

    const addFrameThree = () => {
        const canvas = document.getElementById("custom");
        const context = canvas.getContext("2d");
        const frame = new Image();
        const imageCapture = new Image();
        frame.src = "/public/frame3.jpg";
        imageCapture.src = imageRef.current;

        const dimensions = getObjectFitSize(
            true,
            800,
            600,
            canvas.width,
            canvas.height
          );

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        let frameLoaded = false;
        let captureLoaded = false;

        frame.onload = () => {
            frameLoaded = true;
            drawImage();
        }

        imageCapture.onload = () => {
            captureLoaded = true;
            drawImage();
        }

        const drawImage = () => {
            if (frameLoaded && captureLoaded) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(frame, 0, 0, canvas.width, canvas.height);
                context.drawImage(imageCapture, 235, 150, 350, 175);
                framedImageRef.current = canvas.toDataURL("image/png");
            }
        }

        const image = document.getElementById("capture");
        canvas.style.display = "block";
        image?.remove();
    }

    const PopupCam = () => (
        <Modal
            open={isPopupVisible}
            sx={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClose={() => setIsPopupVisible(false)}
        >
            <Box sx={{ height: "80vh", width: "70vh", backgroundColor: "white", borderRadius: "1.5rem" }}>
                <Typography variant="h6" sx={{ fontFamily: "livvic", color: "black", margin: "0px", textAlign: "center", marginTop: "15px" }}>
                    Smile To capture the moment 😁!
                </Typography>
                <Webcam ref={webcamRef} id="webcam" style={{ height: "50vh", width: "100%" }} />
                <canvas ref={canvasRef} style={{ height: "50vh", width: "90%", margin: "20px"}}/>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button id="customize" sx={{ display: "none", alignItems: "center" }} onClick={() => { setIsPopupVisible(false); setIsPopupVisible2(true);}}>Customize 🖌️</Button>
                </Box>
            </Box>
        </Modal>
    );

    const PopupCam2 = () => (
        <Modal
            open={isPopupVisible2}
            sx={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClose={() => { setIsPopupVisible2(false); setFrameAdded(false); framedImageRef.current = null; imageRef.current = null; }}
        >
            <Box sx={{ height: "80vh", width: "90vh", backgroundColor: "white", borderRadius: "1.5rem", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <canvas id="custom" style={{ height: "50vh", width: "90%", margin: "20px", display: "none", objectFit: "contain", marginBottom: "0px"}}></canvas>
            {
                !frameAdded ?
                 <img id="capture" src={imageRef.current} style={{ height: "43vh", width: "90%", margin: "20px"}} /> 
                :
                <img id="capture" src={framedImageRef.current} style={{ height: "43vh", width: "90%", margin: "20px"}} />  
            }
            {
            !frameAdded &&
            <>
                <Typography sx={{fontFamily: "livvic", color: "black", paddingBottom: "15px", fontWeight: "600"}} variant='body'>
                    Choose a frame to customize your photo!
                </Typography>
                <Stack direction="row" gap={1}>
                <Button sx={{ fontFamily: "livvic", textAlign: "center", backgroundColor: "aliceblue", fontWeight: "900" }} onClick={addFrameOne}>
                    <img src="/public/frame1.jpeg" height="100px" width="80px" alt="Frame 1" />
                </Button>
                <Button sx={{ fontFamily: "livvic", textAlign: "center", backgroundColor: "aliceblue", fontWeight: "900" }} onClick={addFrameTwo}>
                    <img src="/public/frame2.jpg" height="100px" width="80px" alt="Frame 2" />
                </Button>
                <Button sx={{ fontFamily: "livvic", textAlign: "center", backgroundColor: "aliceblue", fontWeight: "900" }} onClick={addFrameThree}>
                    <img src="/public/frame3.jpg" height="100px" width="80px" alt="Frame 2" />
                </Button>
                </Stack>
            </>
            }
            <Button sx={{borderRadius: "1rem", display: frameAdded ? "none" : "block"}} onClick={shareHandler}>
                Share 🚀!
            </Button>
            {
                frameAdded && imageURL &&
                <Box sx={{ paddingTop: "10px", width: "100%", display: "flex", justifyContent: "center"}}>
                <Typography sx={{fontFamily: "livvic", color: "black", paddingRight: "15px"}} variant='h6'>
                    Share Now 🚀!
                </Typography>
                <Stack direction="row" padding="5px">
                    <EmailShareButton url={imageURL} subject="Check out this cool photo!" body="Hey! I just customized this photo using the NSS app!">
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <WhatsappShareButton url={imageURL} title="Check out this cool photo!" >
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <FacebookShareButton url={imageURL} quote="Check out this cool photo!">
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={imageURL} title="Check out this cool photo!">
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={imageURL} title="Check out this cool photo!">
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                </Stack>
                </Box>
            }
            {
                frameAdded && !imageURL &&
                <Typography sx={{fontFamily: "livvic", color: "black", paddingTop: "10px"}} variant='h6'>
                    Loading...
                </Typography>
            }
            </Box>
        </Modal>
    );

    return (
        <>
            {isPopupVisible && <PopupCam />}
            {isPopupVisible2 && <PopupCam2 />}
            <Box sx={{ height: "50vh", width: "60vh", backgroundColor: "white", borderRadius: "1.5rem" }}>
                <Stack direction="column" gap={2} sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                    <img src="/public/camera.gif" height="80%" width="80%" alt="Camera GIF" />
                    <Button
                        sx={{ fontFamily: "livvic", textAlign: "center", backgroundColor: "aliceblue", fontWeight: "900" }}
                        onClick={() => { setIsPopupVisible(true); }}
                    >
                        Click a photo to get started!
                    </Button>
                </Stack>
            </Box>
        </>
    );
}
