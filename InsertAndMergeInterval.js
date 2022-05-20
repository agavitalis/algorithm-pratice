////insert interval
function insertInterval(arr, givenInterval){

    let results = [];

    for (let index = 0; index < arr.length; index++) {
       //consider some edge cases wher the interval given is less than the fist interval in the arrau
       if(givenInterval[1] < arr[i][0]){
            results.push(givenInterval)
            //copy everything from the index to the array
            results.push(...arr.slice(i)); 
            return results;
       }else if(givenInterval[0] > arr[i][1]){
            results.push(arr[i])
       }else{
           let min = Math.min(givenInterval[0], arr[i][0])
           let max = Math.max(givenInterval[1], arr[i][1])
           givenInterval = [min, max]
       }

    }

    //remeber that the last interval was never appended
    results.push(givenInterval)
    return results;
        
}

//this merges an overlapping interval
function MergeInterval(intervals){

    //sort the intervals
    intervals.sort((a,b)=>a[0] - b[0])

    //since its already sorted, add the first one as the base
    let output = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1]

        let lastSavedEnd = output[output.length -1][1];

        if(start <= lastSavedEnd){
            output[output.length - 1][1] = Math.max(end,lastSavedEnd)
        }else{
            output.push([start, end])
        }
        
    }

    return output
}
