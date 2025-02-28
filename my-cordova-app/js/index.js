document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    // Hide the "listening" status and show the "received" status
    document.querySelector('.listening').style.display = 'none';
    document.querySelector('.received').style.display = 'block';
    
    // Set up event listeners for our buttons
    document.getElementById('cameraButton').addEventListener('click', takePicture);
    document.getElementById('locationButton').addEventListener('click', getLocation);
}

// These functions will be implemented in the next section
function takePicture() {
    // We'll add camera functionality here
    console.log('Camera button clicked!');
}

function getLocation() {
    // We'll add geolocation functionality here
    console.log('Location button clicked!');
}