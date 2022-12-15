let a = 3;
let b = 2;
let c = 1;

if (a > b) {
    if (a > c) {
        console.log("a nomor 1");
    } else {
        console.log("a nomor 2");
    }
} else {
    if (a > c) {
        console.log("a nomor 2");
    } else {
        console.log("a nomor 3");
    }
}

if (b > a) {
    if (b > c) {
        console.log("b nomor 1");
    } else {
        console.log("b nomor 2");
    }
} else {
    if (b > c) {
        console.log("b nomor 2");
    } else {
        console.log("b nomor 3");
    }
}
if (c > a) {
    if (c > b) {
        console.log("c nomor 1");
    } else {
        console.log("c nomor 2");
    }
} else {
    if (c > b) {
        console.log("c nomor 2");
    } else {
        console.log("c nomor 3");
    }
}