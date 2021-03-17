// Code your solutions in this file
function writeCards(namesArray, eventName) {
    const newArray = []
    for (let index = 0; index < namesArray.length; index++) {
        newArray.push(`Thank you, ${namesArray[index]}, for the wonderful ${eventName} gift!`)
    };
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    };
}