// Get the video element
const video = document.getElementById("video");
// Get the code reader object from the library
const codeReader = new ZXing.BrowserMultiFormatReader();

// Function to start the camera and scan for barcodes
async function startCameraAndScan() {
  try {
    // Request permission to access the camera
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    // Set the video source to the camera stream
    video.srcObject = stream;

    // Start decoding from the video stream
    codeReader.decodeFromVideoElement(video, (result, error) => {
      if (result) {
        console.log("Barcode detected:", result.text);
      }
      if (error) {
        console.error("Barcode decoding error:", error);
      }
    });
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
}

// Call the function to start the camera and scan for barcodes
startCameraAndScan();
