const log = (arg)=>console.log(arg);

class Stack{
constructor(){
    this.array=[]
}
push(data){
    this.array.push(data)
}
pop(){
    this.array.pop()
}
}

const arr = new Stack()
arr.push(0) ,log(arr)

arr.push(1),log(arr)

arr.push(2),log(arr)

arr.pop(),log(arr)