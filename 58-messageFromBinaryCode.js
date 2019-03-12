function messageFromBinaryCode(code) {
  return code.match(/.{8}/g).reduce((a,b)=>a+String.fromCharCode(parseInt(b,2)),"")
}
