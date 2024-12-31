# Expo CLI Android Build Failure: Android SDK Not Found

This repository demonstrates a bug in the Expo CLI where building an Android APK fails due to seemingly correct Android SDK configuration. The error message often lacks specificity, making debugging challenging.

## Bug Description

The build process fails, resulting in an error message related to the Android SDK not being found or misconfigured. This issue can occur even when the SDK is properly installed and environmental variables appear correctly set.

## Reproduction Steps

1. Clone this repository.
2. Install the necessary dependencies (refer to `package.json`)
3. Run `expo prebuild --platform android` (or `expo build:android`).
4. Observe the build failure.

## Solution

The provided solution in `bugSolution.js` illustrates a potential fix, primarily focusing on checking environment variables and ensuring the SDK location is accurately specified.  Additional solutions may be explored depending on your system's configuration and the exact error message encountered.