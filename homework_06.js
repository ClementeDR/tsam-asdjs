function CircularQueue(n){
	this.myarray = new Array(n);
	this.coda = 0;
	this.testa = 0;
	var cap = n;
	var dim = 0;
	
		
	
}

CircularQueue.prototype.enqueue = function(e){
	if(this.dim == this.cap){
		return;
	}
	this.myarray[this.coda] = e;
	this.coda = (this.coda + 1) % this.cap;
	this.dim++;
	
}
CircularQueue.prototype.dequeue = function(){
	if(this.isEmpty()){
		return null;
	}
	var temp = this.myarray[this.testa];
	this.myarray[testa] = null;
	this.testa = (this.testa + 1) % this.cap;
	this.dim--;
	return temp;
}
CircularQueue.prototype.front = function(){
	return this.myarray[this.testa];
}
CircularQueue.prototype.isEmpty = function(){
	return this.size() == 0;

}

CircularQueue.prototype.size = function(){
	return this.dim;
}



