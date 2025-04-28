let ai1 = Math.floor(Math.random() * 6) + 1;
let ai2 = Math.floor(Math.random() * 6) + 1;
let la1 = document.getElementsByTagName('img')[0];
let la2 = document.getElementsByTagName('img')[1];
la1.setAttribute('src', 'images/dice' + ai1 + '.png');
la2.setAttribute('src', 'images/dice' + ai2 + '.png');
if (ai1 > ai2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!';
}
else if (ai1 < ai2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
}
else {
    document.querySelector('h1').innerHTML = 'Again!';
}