//hex color variable
let currentHexColor = '';


document.getElementById('getColorButton').addEventListener('click', getColor);
//document.getElementById('makeNoiseButton').addEventListener('click', getNoise(currentHexColor));


async function getColor() {
    let response = await fetch('https://x-colors.yurace.pro/api/random');
    let data = await response.json();
    console.log(data);
    let hexColor = data.hex;
    let rgbColor = data.rgb;
    document.getElementById('colorBox').style.backgroundColor = hexColor;
    //set the paragraph text to the hex color
    document.getElementById('colorHex').innerText = data.hex;
    document.getElementById('colorRGB').innerText = data.rgb;
    
    currentHexColor = hexColor;
    console.log(currentHexColor);
    getNoise(currentHexColor);

    return hexColor;
}

async function getNoise(currentHexColor) {
    //console.log(currentHexColor);
    //take off the hashtag
    currentHexColor = currentHexColor.substring(1);
    console.log(currentHexColor);
    const noiseUrl = `https://php-noise.com/noise.php?hex=${currentHexColor}&json&base64`;
    fetch(noiseUrl)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        let noiseUri = data.uri;
        let noiseBase64 = data.base64;
        console.log(noiseUri);
        //console.log(noiseBase64);

        document.getElementById('noiseBox').style.backgroundImage = `url(${noiseBase64})`;
        //document.getElementById('noiseBox').style.backgroundImage = `url(${noiseUri})`;
    })
}


//https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json
// let r=0; //0-255
// let g=0;
// let b=0;
// let tiles=50; //0-50
// let tileSize=7; //0-20
// let borderWidth=0; //0-15
// let mode="brightness"; //brightness or around