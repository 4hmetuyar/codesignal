
function weakNumbers(n) {
    divisors = new Array(n+1)
    divisors.fill(0)
    for (var i=1; i<=n; i++)
        for (var j=i; j<=n; j+=i)
            divisors[j]++
            
    // Count the counts
    divisorsCounts = []
    // Compute the weakness
    weakness = new Array(n+1)
    weakness.fill(0)
    greatestWeakness = 0
    greatestWeaknessCount = 0
    
    for (var me=1; me<=n; me++) {
        divisorsCounts[divisors[me]] = 
            (divisorsCounts[divisors[me]] | 0) + 1
        for (var j=divisorsCounts.length-1; j>divisors[me]; j--)
            weakness[me] = (divisorsCounts[j] | 0) + weakness[me]
        if (greatestWeakness < weakness[me]) {
            greatestWeakness = weakness[me]
            greatestWeaknessCount = 1
        } else if (greatestWeakness == weakness[me]) {
            greatestWeaknessCount++
        }
    }
    
    return [greatestWeakness, greatestWeaknessCount]
}
