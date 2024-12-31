//bugSolution.js
// Solution: Explicitly set the ANDROID_SDK_ROOT environment variable, 
// overriding potential conflicts or incorrect path configurations.

const path = require('path');
const os = require('os');
const fs = require('fs');

function checkAndConfigureAndroidSDK() {
  const sdkRoot = process.env.ANDROID_SDK_ROOT || path.join(os.homedir(), '/Android/Sdk'); // Adjust default path if needed

  if (!fs.existsSync(sdkRoot)) {
    console.error(`Android SDK not found at ${sdkRoot}. Please verify your Android SDK installation and path.
     Manually set the ANDROID_SDK_ROOT environment variable if needed.`);
    process.exit(1);
  }

  console.log(`Using Android SDK from ${sdkRoot}`);
  process.env.ANDROID_SDK_ROOT = sdkRoot;
}

checkAndConfigureAndroidSDK();

// ...rest of your Expo project setup ...
// Ensure to run this script before the expo build command