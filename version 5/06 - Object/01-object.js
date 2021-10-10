/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var o = new Object();

o.prop1 = true;
o.prop2 = 2;
o.prop3 = 'three';

console.log(JSON.stringify(o)); // {"prop1":true,"prop2":2,"prop3":"three"}

delete o.prop2;

console.log(JSON.stringify(o)); // {"prop1":true,"prop3":"three"}
