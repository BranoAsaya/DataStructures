
class Queue{
    constructor(){
     this.array = new Array
    }
    enqueue(data){
        this.array.unshift(data)
        
    }
    dequeue(){
        this.array.pop()
        
    }
}
const arr = new Queue()
const log = (arg)=>console.log(arg);
arr.enqueue(0)
log(arr)
arr.enqueue(1)
log(arr)
arr.enqueue(2)
log(arr)
arr.enqueue(3)
log(arr)
arr.dequeue()
log(arr)
arr.dequeue()
log(arr)
arr.dequeue()
log(arr)
