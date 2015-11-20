function Stack(){
	 this.myarray = [];
	
}

// text
Stack.prototype.push = function (e){ return this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray(this.myarray.length - 1);}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}
function dec2bin (n){
	var stack = new Stack();
	
	
	do{
		stack.push(n%2);
		n = Math.floor(n /= 2);	
	}while(n > 0)
	
	return	stack.popall(callback);
	

	
}

Stack.prototype.popall = function (callback){ 
	
	var testo = "";
	while(!this.isEmpty()){
		testo += callback(this.pop());	
		
	}
	return testo;		
	
}

function callback(x){
	return x.toString();		
	
}


/*

popall = function(callback){
	while(!this.isempty()){
		callback(this.pop())
	}

}

nella dectobin
popall(function (e) binattString += e.tostring(););
*/

/*

function rec(remStack, n){
	if(n == 0){
		return remStack;
	}else{
		remStack.push(math.floor(n%2));
		return rec(remStack, math.floor(n/2));
	}

}

*/
