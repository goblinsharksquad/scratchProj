import React from 'react';

//creating the button component;

function functionality() {
  const userArray = [];

  fetch('/api/user')
    .then((response) => response.json())
    .then((users) =>
      forEach((user) => {
        userArray.push(user);
      })
    ) //an array of users then maybe I can use this in randomizer function?
    .catch((error) => console.log(error));

  function randomizer(userArray) {
    let shuffledArray = []; //--will display the shuffled names
    let usedIndexes = []; //---will keep track of already pushed elements

    let i = 0;
    while (i < userArray.length) {
      let randomNumber = Math.floor(Math.random() * userArray.length);
      if (!usedIndexes.includes(randomNumber)) {
        shuffledArray.push(userArray[randomNumber]);
        usedIndexes.push(randomNumber);
        if (shuffledArray.length === 1) {
          return shuffledArray[0];
        }
        //i++
      }
    }
  }
  randomizer();
}

/*this button will do a get request to our database and via this randomizer function should grab someone and have them as the matched secret Santa.

SELECT * FROM usersTable
WHERE attribute = 'primarykey'
ORDER BY random()
LIMIT 1


*/

function Button() {
  return <button onClick={functionality}>FindMySecretSanta</button>;
}

// export default Button;//can now be imported

/*
The Fisher Yates Method uses an array


<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
const points //
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  document.getElementById("demo").innerHTML = points;
}
</script>

</body>
</html>
*/

export default Button;
