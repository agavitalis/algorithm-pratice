function BinarySearchIterative(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let midpoint = left + ((right - left) / 2)
        if (arr[midpoint] == x) {
            return true;
        } else if (x < midpoint) {
            right = midpoint - 1
        } else {
            left = midpoint + 1
        }
    }

    return false;
}


function binarySearchRecursive(arr, x, left, right) {
    if(left > right){
        return false;
    }  

    let midpoint = (left + right ) / 2

    if(arr[midpoint] == x){
        return true;
    }else if(x < array[mid]){
        return binarySearchRecursive(arr, x, left, mid - 1)
    }else{
        return binarySearchRecursive(arr, x. mid + 1, right)
    }
}


function callBinarySearchRecursive(){
    binarySearchRecursive(arr, x, 0, arr.length - 1)
}


function linearSearch(array, x){
    ///iterate throught the numbers until you arrive at the value
    for (let index = 0; index < array.length; index++) {
        if(array[index] == x){
            return true;
        }
    }

    return false
}