function Stack(){
	 this.myarray = [];
	
}

Stack.prototype.push = function (e){ return this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray(this.myarray.length - 1);}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
Stack.prototype.decToBin = function (n){
	
	
	
	do{
		this.push(n%2);
		n = Math.floor(n /= 2);	
	}while(n > 0)
	
	var testo = "";
	do{
		
		testo += this.pop().toString();
		
		
	}while(!this.isEmpty())
	return testo;
	
}

Stack.prototype.popAll = function (callback){ 
	
	do{
		
		callback(this.pop());
		
	}while(!this.isEmpty())

}

