function writeCards(names, event) {
    let thankYou = [];
    for (let n = 0; n < names.length; n++) {
        thankYou.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`)
    }
    return(thankYou);
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}