'use strict'

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
		this.lastItem = 0;
		
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
    }
	pop() {
	this.length--;
	this.lastItem = this.data[this.length];
	delete this.data[this.length]
	return this.lastItem;
	}
}

function checkArray(){
    var arr = new MyArray();
    arr.push('a');
    arr.push('b');
    console.log(arr);
    console.log(arr.get(0));
	console.log(arr.pop());
	console.log(arr);	
}

checkArray();
