const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

//concatenation
// const result =
//   "The blog called " + title + " by " + author + " has " + likes + " likes ";

let result = `The called ${title} by ${author} has ${likes} likes`;

console.log(result);

//creating templates

let hmtl = `

<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes}likes</span>

`;

console.log(hmtl);
