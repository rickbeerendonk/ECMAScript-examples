/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

'use strict';

// Previous:

try {
    throw 'Something went wrong';
} 
catch (err) {
    console.log('There was an error (traditional catch)');
}

// 2019 also allows:

try {
    throw 'Something went wrong';
} 
catch {
    console.log('There was an error (2019 catch)');
}