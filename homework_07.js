function PriorityQueue(){
	var myarray = [];
	var PriorityItem{
		this.item;
		this.p;
		}
}
/*
function PriorityItem(value, priorit){
		this.item = value;
		this.p = priorit;
	}*/


PriorityQueue.prototype.enqueue = function (PriorityItem){
	/*this.myarray.forEach(this.myarray => if(this.myarray.p > PriorityItem.p){this.myarray.splice(1,0,PriorityItem); break;});
	return PriorityItem;
	*/
	var index = 0;
	this.myarray.every( this.myarray => if (this.myarray.p < PriorityItem.p) index++; return  this.myarray.p < PriorityItem.p;);
	this.myarray.splice(index, 0, PriorityItem);
	return PriorityItem;
}

	
	return PriorityItem;
}
PriorityQueue.prototype.dequeue = function(){
	if(this.isEmpty()){
		return false;
	}else{
		return this.myarray.pop();
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


