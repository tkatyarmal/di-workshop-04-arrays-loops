
var ys = [20, 100, 180]
var xs = [20, 60, 90]
var speeds = [3, 3, 3]


function setup() {
    createCanvas(400, 400)
    background(200)
}

function draw() {
    background(200)

    // ys[0
    // ] = ys[0
    // ] + speeds[0]
    // if (ys[0
    // ] < 0 || ys[0
    // ] > height) {
    //     speeds[0] = speeds[0] * -1
    // }
    // rect(30, ys[0
    // ], 20, 20)
    // race(20, 3)

    // ys[1] = ys[1] + speeds[1]
    // if (ys[1] < 0 || ys[1] > height) {
    //     speeds[1] = speeds[1] * -1
    // }
    // rect(60, ys[1], 20, 20)

    // ys[2] = ys[2] + speeds[2]
    // if (ys[2] < 0 || ys[2] > height) {
    //     speeds[2] = speeds[2] * -1
    // }
    // rect(90, ys[2], 20, 20)

    ballGame()
}

function ballGame() {
    for (var i = 0; i < speeds.length; i++) {
        ys[i] = ys[i] + speeds[i]
        if (ys[i] < 0 || ys[i] > height) {
            speeds[i] = speeds[i] * -1
        }
        rect(xs[i], ys[i], 20, 20)
    }
}



