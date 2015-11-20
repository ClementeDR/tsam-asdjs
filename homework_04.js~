function Stack(){
	 this.myarray = [];
	
}

// text
Stack.prototype.push = function (e){ return this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray(this.myarray.length - 1);}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
function dec2Bin (n){
	var stack = new Stack();
	
	
	do{
		stack.push(n%2);
		n = Math.floor(n /= 2);	
	}while(n > 0)
	
	var testo = "";
	do{
		
		testo += stack.pop().toString();
		
		
	}while(!stack.isEmpty())
	return testo;
	
}

Stack.prototype.popAll = function (callback){ 
	
	do{
		
		callback(this.pop());
		
	}while(!this.isEmpty())

}

