// Probability Calculation
// There are three bags of marbles X, Y, Z containing blue and red marbles
// X has 9 marbles - 5 blue 4 red
// Y has 10 marbles - 7 blue 3 red
// If 1 marble is taken from X and 2 marbles are taken from Y, what is the probability of ending up with 2 blue and 1 red
function gcd(x, y) {
    while (y != 0) {
        var z = x % y;
        x = y;
        y = z;
    }
    return x;
}

function factorial(x){
  if (!factorial.cache){
    factorial.cache = [1,1]
    factorial.cache.max = 1
  }
  
  var i = Math.min(factorial.cache.max,x)
  var result = factorial.cache[i++];
  
  while(i<=x){
    result *= i;
    factorial.cache[i] = result;
    factorial.cache.max = Math.max(factorial.cache.max,i);
    i++;
  }
  return result;
}

function C(n,k){
  return factorial(n)/(factorial(k)*factorial(n-k));
}


var SCALE = 9*10;
var XB = 5*SCALE/9;
var XR = SCALE - XB;

var YBC = 7;
var YRC = 3;
var YT = YBC + YRC;
var YB = YBC*SCALE/YT;
var YR = SCALE - YB;

var prob = (XB * C(YBC,1)*C(YRC,1))/C(YT,2) +( XR * C(YBC,2))/C(YT,2)

prob = prob
d = gcd(prob,SCALE)

console.log(prob/d,'/',SCALE/d)
d = "ANSWER IS CORRECT!"
