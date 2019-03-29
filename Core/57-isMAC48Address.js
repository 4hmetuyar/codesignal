function isMAC48Address(inputString) {
    return /^(([A-Fa-f0-9]{2}[-]){5}[A-Fa-f0-9]{2}[,]?)+$/.test(inputString);
}
