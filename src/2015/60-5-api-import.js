/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global System */
/* eslint no-undef:warn */

let featureSupported = false;

if (!featureSupported) {
  System.import('./60-4-default-export').then(
    console.log(square(4)) // 16
  );
}
