let theText = ["Hi", "I", "Am", "Dylhan"];
let word = theText[0];
let i = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  background(220);
  fill(0, 0, 255)

//The text display
textSize(50);
text(word, 20, height/2)

// Change the value of word
word = theText[i];
i=i+1;
if(i>=theText.length){
  i=0;
}
console.log(i)


}
