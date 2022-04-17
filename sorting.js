//BubbleSort
//naviage throught the array, while comparing the current and next values
function bubbleSort(array) {

    for (let x = 0; x < array.length; x++) {

        for (let j = 0; j < (array.length - x - 1); j++) {

            if (array[j] > array[j + 1]) {
                const lesser = array[j + 1];
                array[j + 1] = array[j]
                array[j] = lesser;
            }

        }

    }

    return array
}

//SelectionSort or ProveMeWrong Algo
//Pick a number, then navigate across the array to 
//confirm if that was the least number.
function selectionSort(arr) {
    for (let i = 0; i < array.length; i++) {
        let indexOfMin = 0;
        for (let j = 0; j < array.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin != i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }

    }

    return arr;
}

//merge sort will consisit if two functions,
// a merge and an mergeSort function
function merge(left, right) {

    const results = []

    //this will continue until on of the arrays is empty
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        }

        if (left[0] > right[0]) {
            results.push(right.shift())
        }
    }

    return [...results, ...left, ...right]
}

function mergeSort(arr){

    //keep dividing until the lenght 
    //of the array become one

    if(arr.length === 1){
        return arr;
    }

    const centerPoint = Math.floor(arr.length / 2)
    leftArray = arr.slice(0,centerPoint)
    rightArray = arr.slice(centerPoint)

    return(merge(mergeSort(leftArray), mergeSort(rightArray)))

}