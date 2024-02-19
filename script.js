if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(() => {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#videoPreview"),
          constraints: {
            width: 300,
            height: 600,
            facingMode: "environment",
          },
        },
        decoder: {
          readers: ["ean_reader"], // specify the barcode types you want to scan (e.g., EAN)
        },
      });

      // Start the scanner
      Quagga.start();

      // Event listener for successful barcode scan
      Quagga.onDetected(function (data) {
        alert("Barcode detected: " + data.codeResult.code);
        // You can perform additional actions here, such as fetching product information or displaying it on the UI
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Configure QuaggaJS
