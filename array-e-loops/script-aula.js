/*
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
*/

var videoGames = ['PS4', 'XBOX', '3DS'];
for(var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === 'XBOX') {
        break
    }
}

var frutas = ['banana', 'maca', 'pera']
frutas.forEach(function(fruta, index) {
    console.log(fruta, index)
})