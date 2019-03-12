function growingPlant(upSpeed, downSpeed, desiredHeight) {
 if(desiredHeight <= upSpeed)
        return 1;
    return Math.floor((desiredHeight - upSpeed - 1) / (upSpeed - downSpeed)) + 2;
}
