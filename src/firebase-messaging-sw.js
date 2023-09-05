import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
console.log("my msg");
getToken(messaging, { vapidKey: 'BFCuBnQZ7YmTufEdGemZ_VX5VHgc2vH-v_8OpFFfP8kDtZdsDkryHrrTWHsvvJAmnJVRTyWfm-bPNyW4mcxSYCQ' }).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken);
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});