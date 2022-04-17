//this implements FIFO
class Queue{
    
    constructor(){
        this.queueArray = []
    }

    //add to the queue
    add(data){
        this.queueArray.unshift(data)
    }

    //remove from the queue
    remove(data){
        return this.queueArray.pop()
    }

    //return the last element in the array
    peak(){
        return this.queueArray[this.queueArray.length -1]
    }
}

//implementing a weave using a queue
function weave(sourceOne, sourceTwo){
    const q = new Queue();

    while(sourceOne.peak() || sourceTwo.peak()){
        if(sourceOne.peak()){
            q.add(sourceOne.remove())
        }

        if(sourceTwo.peak()){
            q.add(sourceTwo.remove())
        }
    }

    return q;
}