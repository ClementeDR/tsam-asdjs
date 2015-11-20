function Stack(){
	this.myarray = [];
	
}

//circularQueue(n) hom 06
//rpn(stringa) hom 05
//add  stack, pop, push 

Stack.prototype.push = function (e){ return this.myarray.push(e);}
Stack.prototype.pop = function (){return this.myarray.pop();}
Stack.prototype.peek = function (){return this.myarray(this.myarray.length - 1);}
Stack.prototype.isEmpty = function (){return this.myarray.length == 0;}

function rpn(stringa){
	var s = stringa.split(" ");
	var stack = new Stack();
	s.forEach(function (s){
		var x;
		var y;
		switch(s){
			case "+":
				y = stack.pop();
				x = stack.pop();
				stack.push(x + y);
			break;
			case "-":
				y = stack.pop();
				x = stack.pop();
				stack.push(x - y);
			break;
			case "*":
				y = stack.pop();
				x = stack.pop();
				stack.push(x * y);
			break;
			case "/":
				y = stack.pop();
				x = stack.pop();
				stack.push(x / y);
			break;
			default:
				stack.push(parseInt(s));
			break;
			
		}

	});
	return stack.pop();
}
