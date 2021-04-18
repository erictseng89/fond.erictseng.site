let specs = [
    {name: "squareXLarge", metricSize: "254mm x 305mm", imperialSize: "10in x 12in", pixels: "3000 x 3600", pieces: "301", price: "1000"},
    {name: "squareLarge", metricSize: "203mm x 305mm", imperialSize: "8in x 12in", pixels: "2400 x 3600", pieces: "240", price: "700"},
    {name: "squareMedium", metricSize: "127mm x 178mm", imperialSize: "5in x 7in", pixels: "1500 x 2100", pieces: "88", price: "350"},
    {name: "squareSmall",  metricSize: "102 x 152mm", imperialSize: "4in x 6in", pixels: "1200 x 1800", pieces: "60", price: "200"},
    {name: "circleSmall", metricSize: "152mm x 152mm", imperialSize: "6in x 6in", pixels: "2000 x 2000", pieces: "70", price: "300"},
    {name: "ovalHorizontal", metricSize: "203mm x 305mm", imperialSize: "8in x 10in", pixels: "3000 x 3600", pieces: "220", price: "800"},
    {name: "ovalVertical", metricSize: "305mm x 203mm", imperialSize: "10in x 8in", pixels: "3600 x 3000", pieces: "220", price: "800"},
    {name: "heartLarge", metricSize: "203mm x 203mm", imperialSize: "8in x 8in", pixels: "3000 x 3000", pieces: "200", price: "1000"},
    {name: "heartSmall", metricSize: "127mm x 127mm", imperialSize: "5in x 5in", pixels: "1800 x 1800", pieces: "120", price: "400"},    
    ];

let squareFrames = ["胡桃", "原木", "柚木"];
let circleFrames = ["淺胡桃", "蕭光黑", "原木"];
let ovalFrames = ["胡桃", "白瓷", "深胡桃"];
let heartFrames = ["白", "米白", "原木文青"];

const selected = document.querySelector('.selection');
selected.addEventListener('change', (event) => {
    // console.log("triggered");
    let chosen = event.target.value;
    // console.log(chosen);
    let index;
    specs.forEach( (a, i) => {
        if (a.name === chosen) {
            index = specs[i];
            // console.log(index);
        }
    });
    
    let printer = `
        大小: ${index.imperialSize}, ${index.metricSize}<br>
        需要畫素: ${index.pixels}<br>
        片數: ${index.pieces}<br>
        價格: ${index.price}`;

    document.getElementById("specsBox").innerHTML = printer;

    let printFrames = `<option selected disabled>選框</option>`;
    switch (true) {
        case chosen.includes("square"):
            squareFrames.forEach( (a) => {
                printFrames += `<option value="${a}">${a}</option>`;
            })
            break;
        case chosen.includes("circle"):
            circleFrames.forEach( (a) => {
                printFrames += `<option value="${a}">${a}</option>`;
            })
            break;
        case chosen.includes("oval"):
            ovalFrames.forEach( (a) => {
                printFrames += `<option value="${a}">${a}</option>`;
            })
            break;
        case chosen.includes("heart"):
            heartFrames.forEach( (a) => {
                printFrames += `<option value="${a}">${a}</option>`;
            })
            break;
    }
    document.getElementById("frameSelection").innerHTML = printFrames;

});

