// import React from 'react';
// import React, { useState, useEffect} from "react";

// //creating the button component;

// function functionality() {
//   const [userArray: [], setUserArray] = useState([]);

//   fetch('/api/user')
//     .then((response) => response.json())
//     .then((users) => {setUserArray(users)})//an array of users then maybe I can use this in randomizer function?}
//     .catch((error) => console.log(error));

//     function randomizer(userArray): Object {
//     let shuffledArray = []; //--will display the shuffled names
//     let usedIndexes = []; //---will keep track of already pushed elements

//       while (usedIndexes.length < userArray.length) {

//         let randomNumber = Math.floor(Math.random() * userArray.length);

//         if (!usedIndexes.includes(randomNumber: number)) {

//           shuffledArray.push(userArray[randomNumber]: Object);

//             usedIndexes.push(randomNumber: number);

//               return shuffledArray[0];
//         }
//       }
//       randomizer(userArray);
//     }
//   }

//     // let i = 0;
//     // while (i < userArray.length) {
//     //   let randomNumber: number = Math.floor(Math.random() * userArray.length);
//     //   if (!usedIndexes.includes(randomNumber)) {
//     //     shuffledArray.push(userArray[randomNumber]);
//     //     usedIndexes.push(randomNumber);
//     //     if (shuffledArray.length === 1) {

// /*this button will do a get request to our database and via this randomizer function should grab someone and have them as the matched secret Santa.

// SELECT * FROM usersTable
// WHERE attribute = 'primarykey'
// ORDER BY random()
// LIMIT 1

// */

// function Button() {
//   return <button onClick={functionality}>FindMySecretSanta</button>;
// }

// // export default Button;//can now be imported

// /*
// The Fisher Yates Method uses an array

// <button onclick="myFunction()">Try it</button>
// <p id="demo"></p>

// <script>
// const points //
// document.getElementById("demo").innerHTML = points;

// function myFunction() {
//   for (let i = points.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//     let k = points[i];
//     points[i] = points[j];
//     points[j] = k;
//   }
//   document.getElementById("demo").innerHTML = points;
// }
// </script>

// </body>
// </html>
// */

// export default Button;
// function forEach(arg0: (user: any) => void): any {
//   throw new Error('Function not implemented.');
// }
