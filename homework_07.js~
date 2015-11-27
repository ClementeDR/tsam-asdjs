function PriorityQueue(){
	this.myarray = [];
	
	
}

function PriorityItem(it, p) {
    this.item = it;
    this.priorit = p;
	
}



PriorityQueue.prototype.enqueue = function (it, prio){
	
	var elemento = new PriorityItem(it, prio);
	
	if(this.isEmpty()){
		this.myarray.push(elemento);
		return this.myarray[0];
	}else {
		var flag = false;
		var index = 0;
		while(index < this.myarray.length && !flag){
			if(this.myarray[index].priorit < elemento.priorit){				
				this.myarray.splice(index, 0 , elemento);
				flag = true;
			}			
			index++;
		}		
		if(!flag){
			this.myarray.push(elemento);
		}	
	}	
}

	
PriorityQueue.prototype.dequeue = function(){
	if(this.isEmpty()){
		return false;
	}else{
		return this.myarray.shift();
	}
}
PriorityQueue.prototype.front = function(){
	return this.myarray[0];
}
PriorityQueue.prototype.isEmpty = function(){
	return this.size() == 0;

}

PriorityQueue.prototype.size = function(){
	return this.myarray.length;

}


