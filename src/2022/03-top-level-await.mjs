/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-top-level-await

const result = await Promise.resolve('Answer');
console.log(result);

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = await response.json();
console.log(posts);
