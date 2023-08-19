// QR Code Generation
const generateBtn = document.getElementById('generate-btn');
const qrText = document.getElementById('qr-text');
const qrcode = new QRCode(document.getElementById('qrcode'), {});

generateBtn.addEventListener('click', () => {
    if (qrText.value) {
        qrcode.makeCode(qrText.value);
    }
});

// QR Code Scanning
const scanBtn = document.getElementById('scan-btn');
const qrVideo = document.getElementById('qr-video');
const qrResult = document.getElementById('qr-result');

scanBtn.addEventListener('click', () => {
    qrResult.innerHTML = 'Scanning...';
    qrVideo.style.display = 'block';

    const constraints = { video: { facingMode: 'environment' } };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            qrVideo.srcObject = stream;
            const qrCodeScanner = new QrScanner(qrVideo, result => {
                qrResult.innerHTML = `Scanned QR Code: ${result}`;
                qrCodeScanner.stop();
                qrVideo.style.display = 'none';
            });
            qrCodeScanner.start();
        })
        .catch(error => {
            qrResult.innerHTML = 'Error accessing camera.';
            console.error('Error accessing camera:', error);
        });
});
// QR Code Generation
const generateBtn = document.getElementById('generate-btn');
const qrText = document.getElementById('qr-text');
const qrcode = new QRCode(document.getElementById('qrcode'), {});

generateBtn.addEventListener('click', () => {
    if (qrText.value) {
        qrcode.makeCode(qrText.value);
    }
});

// QR Code Scanning
const scanBtn = document.getElementById('scan-btn');
const qrVideo = document.getElementById('qr-video');
const qrResult = document.getElementById('qr-result');

scanBtn.addEventListener('click', () => {
    qrResult.innerHTML = 'Scanning...';
    qrVideo.style.display = 'block';

    const constraints = { video: { facingMode: 'environment' } };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            qrVideo.srcObject = stream;
            const qrCodeScanner = new QrScanner(qrVideo, result => {
                qrResult.innerHTML = `Scanned QR Code: ${result}`;
                qrCodeScanner.stop();
                qrVideo.style.display = 'none';
            });
            qrCodeScanner.start();
        })
        .catch(error => {
            qrResult.innerHTML = 'Error accessing camera.';
            console.error('Error accessing camera:', error);
        });
});
