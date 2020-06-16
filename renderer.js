// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function payment() {
    paymentValue = (gasValue + elValue + kvValue + sec) / 2;
    $("#totalP").text(paymentValue);
}

const sec = 440;

let gasValue = 0;
$("#gas").change(function() {
    gasValue = Number($("#gas").val());
    payment();
});

let elValue = 0;
$("#el").change(function() {
    elValue = Number($("#el").val());
    payment();
});

let kvValue = 0;
$("#kv").change(function() {
    kvValue = Number($("#kv").val());
    payment();
});
