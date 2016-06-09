export function* seededRNG(seed) {
    while(true) {
        const sq = seed*seed;
        
        // note: the below steps are unnecessary, you could
        // just change your slice indices if sq has 7 digits
        // (i.e. sq < 10000000)
        
        let sqStr = sq.toString();
        while(sqStr.length < 8) {
            sqStr = `0${sqStr}`;
        }
        
        yield parseInt(sqStr.slice(2,6));
        
        seed += 1;
    }
}


export function completeGenerator(generator) {
    let next;
    do {
        next = generator.next();
    } while(!next.done);
}