alert("hello something something hello bnunny bunny hello bumping bumping hello honey bunny honey bunny")


const is_everything_okay = document.querySelector(".is_everything_okay")

const rand = Math.random()

if (rand <= 0.5) {
  console.log("You Doomed Us All!!")
  is_everything_okay.textContent = "You Doomed Us All!!"
} else {
  console.log("I Believe that everything is okay atleast FOR NOW.")
  is_everything_okay.textContent = "I Believe that everything is okay atleast FOR NOW."
}

