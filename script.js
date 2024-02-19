// Get the video element
const video = document.getElementById("video");

// Function to start the camera
async function startCamera() {
  try {
    // Request permission to access the camera
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    // Set the video source to the camera stream
    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
}

// Call the function to start the camera
startCamera();
