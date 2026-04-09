// x = 1;

// var y = 2;

// function exemplo() {
//     var z = 3;
//     w = 4;
//     let i = 5;

//     x = x*10;
//     y = y*10;
//     return `x=${x} y=${y} z=${z} w=${w} i=${i}`;

// }
// alert(exemplo());
// alert(`x=${x} y=${y} w=${w}`); 

n=5;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        console.log(i, j);
    }
}