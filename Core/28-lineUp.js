function lineUp(commands) {
    var correct = wrong = 12600;
    var result = 0;
    [...commands].map((item) => {
        correct += getCorrectDirection(item);
        wrong += getIncorrectDirection(item);
        if(correct%360 == wrong%360){
            result++;
        }
    })
    return result;

}


function getCorrectDirection(command){
    if(command == 'L') return 90;
    if(command == 'R') return -90;
    if(command == 'A') return 180;
}

function getIncorrectDirection(command){
    if(command == 'L') return -90;
    if(command == 'R') return 90;
    if(command == 'A') return 180;
}
