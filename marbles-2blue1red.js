// Probability Calculation
// There are three bags of marbles X, Y, Z containing blue and red marbles
// X has 7 marbles - 3 blue 4 red
// Y has 9 marbles - 4 blue 5 red
// Z has 8 marbles - 4 blue 4 red
// If 1 marble is taken from each bag, what is the probability of ending up with 1 blue and 2 red
function gcd(x, y) {
    while (y != 0) {
        var z = x % y;
        x = y;
        y = z;
    }
    return x;
}

var SCALE = 7*9*12;
var S2 = SCALE**2;
var XB = 3*SCALE/7
var YB = 4*SCALE/9
var ZB = SCALE/2
var XR = SCALE - XB
var YR = SCALE - YB
var ZR = SCALE - ZB

var prob = XR*(YR*ZB+ZR*YB) + XB*YR*ZR
prob = prob/S2
d = gcd(prob,SCALE)

console.log(prob/d,'/',SCALE/d)
d = "ANSWER IS CORRECT!"
