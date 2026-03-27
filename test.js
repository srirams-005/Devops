const add = require("./index");

if (add(2,3) === 5) { //intentionally wrong
    console.log("Test Passed");
} else {
    console.log("Test Failed");
    process.exit(1);
}