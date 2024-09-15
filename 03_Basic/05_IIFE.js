// Immediately invoke Funcation Expression

(function chai() {
    //named iife
    console.log(`DB connected`);
})();

((name) => {
    // non name iife
    console.log(`DB connected tow ${name}`);

})("rajeev");

// ((name) => {
//     // non name iife
//     console.log(`DB connected tow ${name}`);

// })("rajeev");