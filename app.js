const generateBtn = document.getElementById("generate-btn");
const qrText = document.getElementById("qr-text");
const qrCodeDiv = document.getElementById("qr-code");

generateBtn.addEventListener("click", generateQRCode);

function generateQRCode() {
    const text = qrText.value;
    if (text.trim() !== "") {
        qrCodeDiv.innerHTML = ""; // Clear previous QR code
        const qrCode = new QRCode(qrCodeDiv, {
            text: text,
            width: 128,
            height: 128,
        });
    }
}

// QR Code Scanner
const scannerSection = document.getElementById("scanner");
const qrVideo = document.getElementById("qr-video");
const qrCanvas = document.getElementById("qr-canvas");
const qrCanvasContext = qrCanvas.getContext("2d");

function startScanner() {
    scannerSection.style.display = "block";

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            qrVideo.srcObject = stream;
            qrVideo.play();
            requestAnimationFrame(scan);
        })
        .catch(function (error) {
            console.error("Error accessing camera:", error);
        });
}

function scan() {
    if (qrVideo.readyState === qrVideo.HAVE_ENOUGH_DATA) {
        qrCanvas.width = qrVideo.videoWidth;
        qrCanvas.height = qrVideo.videoHeight;
        qrCanvasContext.drawImage(qrVideo, 0, 0, qrCanvas.width, qrCanvas.height);

        const imageData = qrCanvasContext.getImageData(0, 0, qrCanvas.width, qrCanvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
        });

        if (code) {
            alert("QR Code Scanned: " + code.data);
        }

        requestAnimationFrame(scan);
    } else {
        requestAnimationFrame(scan);
    }
}

// Initialize the scanner
startScanner();
