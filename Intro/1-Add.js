function add(param, ...otherParams) {    
    return param + (otherParams.length ? add(...otherParams) : 0);
}
