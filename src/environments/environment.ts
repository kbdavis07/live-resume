// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "gbastos-illustration@2x.png",
    name: "Brian Keith Davis",
    birth: "1981-01-28",
    email: "kbdavis0007@gmail.com",
    phone: "1.717.200.4936",
    location: "Fayetteville, PA 17222,USA"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyC2frVRAAltsVTmdwgFnATGHoVUzNHfzsM",
    authDomain: "live-resume-a575a.firebaseapp.com",
    databaseURL: "https://live-resume-a575a.firebaseio.com",
    projectId: "live-resume-a575a",
    storageBucket: "live-resume-a575a.appspot.com",
    messagingSenderId: "681076751855",
    appId: "1:681076751855:web:18bae3866ebfcc4fcd8a1a",
    measurementId: "G-00VXD77WNG"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
