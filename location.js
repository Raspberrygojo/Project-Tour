const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const iValue = parseInt(urlParams.get('I'), 10); 

const Data = [
  [
    "London",
    "A city where centuries-old architecture stands proudly beside modern skyscrapers, London is a captivating blend of history and innovation. From Buckingham Palace and Westminster Abbey to bustling markets and the West End theatres, it offers rich experiences, royal charm, and a cosmopolitan lifestyle."
  ],
  [
    "New York",
    "Dynamic, bold, and brimming with diversity, New York City pulses with unmatched energy. Whether it's the towering skyline of Manhattan, the cultural mosaic of boroughs, or the constant hum of creativity and ambition, this city redefines possibility at every corner, day or night."
  ],
  [
    "Houston, Texas",
    "Sprawling and spirited, Houston marries Southern hospitality with global reach. Known for its role in space exploration, world-class culinary scene, and a growing arts culture, it’s a city where innovation meets tradition under wide Texan skies and a welcoming community vibe."
  ]
];

document.getElementsByClassName("Name")[0].innerHTML = Data[iValue][0]
document.getElementsByClassName("Des")[0].innerHTML = Data[iValue][1]

if (Data[iValue][0] == "London") {
    document.getElementsByClassName("Image")[0].style.backgroundImage = "url('Images/alex-azabache-W1Y4Y_DBGKw-unsplash.jpg')";
}
if (Data[iValue][0] == "New York") {
    document.getElementsByClassName("Image")[0].style.backgroundImage = "url('Images/todd-quackenbush-USrZRcRS2Lw-unsplash.jpg')";
}
if (Data[iValue][0] == "Houston, Texas") {
    document.getElementsByClassName("Image")[0].style.backgroundImage = "url('Images/loik-marras-QPH1r-eIbto-unsplash.jpg')";
}


