var permArr = [], usedChars = []

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};


function cwCounts(words) {
    top = words[0]
    left = words[1]
    right = words[2]
    bottom = words[3]
    
    count = 0
    for(t4l=0; t4l<top.length-2; ++t4l) {
        for(l4t=0; l4t<left.length-2; ++l4t) {
            if(top[t4l] === left[l4t]) {
                //right has to be at least 2 spaces to the right of left
                for(t4r=t4l+2; t4r<top.length; ++t4r) {
                    for(r4t=0; r4t<right.length-2; ++r4t) {
                        if(top[t4r] === right[r4t]) {
                            //bottom has to be at least 2 spaces below top
                            for(l4b=l4t+2; l4b<left.length; ++l4b) {
                                if(l4b-l4t+r4t >= right.length)
                                    continue;
                                
                                for(b4l=0; b4l<bottom.length-2; ++b4l) {
                                    if(b4l+t4r-t4l >= bottom.length)
                                        continue;
                                    if(left[l4b] === bottom[b4l]) {
                                        count += bottom[t4r-t4l+b4l] === right[l4b-l4t+r4t]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return count
}

function crosswordFormation(words) {
    permute(words);
    
    count = 0
    for(perm of permArr)
        count += cwCounts(perm)
    return count
}
