let x = 0;
let y = 300;
let currentPointRed = 0;
let currentPointGreen = 0;
const getDetails = () => {
    const fetchPromise = fetch('https://cws.auckland.ac.nz/gas/api/GameLog',
        {
            headers: {
                "Accept": "application/json"
            },
        }
    );

    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => drawDetails(data));
}


const drawDetails = (data) => {
    let redLine = '<path stroke="red" fill="none" d = "M ';
    let greenLine = '<path stroke="green" fill="none" d = "M ';
    const drawData = (data) => {
        redLine += x + " " + (y-(data.played)) + " L ";
        currentPointRed = x + " " + (y-(data.played));
        greenLine += x + " " + (y-(data.completed)) + " L ";
        currentPointGreen = x + " " + (y-(data.completed)) + " L ";
        x += 10;
    }
data.forEach(drawData);
greenLine += ` ${currentPointGreen} " /> <br>`;
redLine += ` ${currentPointRed} " />`;
const graph = document.getElementById("graph");
console.log(redLine)
//graph.innerHTML = redLine;
graph.innerHTML = redLine + greenLine;
}

getDetails()