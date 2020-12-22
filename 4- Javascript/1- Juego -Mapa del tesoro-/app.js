const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};

console.log(target);

let $map = document.getElementById('mapa');
let $distance = document.getElementById('distancia');
let clicks = 0;

$map.addEventListener('click', function (e) {
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    clicks++;
    if(distance < 20) {
        alert(`Has encontrado el tesoro en ${clicks} clicks!!`);
        location.reload();
    }
});
