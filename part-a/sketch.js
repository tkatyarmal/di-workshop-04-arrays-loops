function setup() {
    createCanvas(400, 400)
    background(200)
  }
  
function draw() {
    


drawGrid(25,18) 

function drawGrid (rowNum,colNum) {
    var x = 0;
    var y = 0;
    for(var i = 0; i < colNum; i++) {
        for (var j = 0; j < rowNum; j++)    {
            rect(x, y, 10, 10)
            x = x + 10;
        }
        y = y + 10
        x = 0
    } 
}











    






}