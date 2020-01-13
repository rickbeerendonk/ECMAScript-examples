/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-top-level-await

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = response.json();

console.log(posts);
