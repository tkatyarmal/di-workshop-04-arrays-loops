// var yOne = 20
// var yTwo = 100
// var yThree = 180
// var speedOne = 3
// var speedTwo = 3
// var speedThree = 3

var y = 20
var speed = 3

function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  background(200)


  // yOne = yOne + speedOne
  // if (yOne < 0 || yOne > height) {
  //   speedOne = speedOne * -1
  // }
  // rect(30, yOne, 20, 20)
  // race(20,3)

  // yTwo = yTwo + speedTwo
  // if (yTwo < 0 || yTwo > height) {
  //   speedTwo = speedTwo * -1
  // }
  // rect(60, yTwo, 20, 20)

  // yThree = yThree + speedThree
  // if (yThree < 0 || yThree > height) {
  //   speedThree = speedThree * -1
  // }
  // rect(90, yThree, 20, 20)


  race(y, speed)

 }

 function race()  {
  y = y + speed
    if (y < 0 || y > height) {
     speed = speed * -1
    }
    rect(30, y, 20, 20)
  }