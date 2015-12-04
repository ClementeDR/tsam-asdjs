function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



function testArray(myarray) {
	return myarray.reduce((myarray, acc) => myarray + acc)
}

/* esercizio 1 */

function countNum(myarray, cont){
	if(myarray.length != 0) {
		if (myarray[0] == 5070) {
			return countNum(myarray.slice(1), cont + 1);
		} else {
			return countNum(myarray.slice(1), cont);
		}
	}
	return cont;

}

function ex_1(){
	return countNum(initialArray(), 0);
}

/* esercizio 2 */

function radice(myarray){

	return Math.sqrt(myarray.filter(function(myarray){
		if(myarray >= 0)
			return myarray;
	}).map(myarray => myarray * myarray).reduce((myarray,cont) => myarray + cont));
}

function ex_2(){
	return radice(initialArray());
}
/*
function ex_2I(){
	var tot = 0;
	var arr = initialArray();
	for(var i = 0; i < arr.length; i++){
		if(arr[i]  >= 0)
		tot = tot + (arr[i] * arr[i]);
	}
	return Math.sqrt(tot);
}
*/
/* esercizio 3 */
function Stack() {
	this.myarray = [];
}

Stack.prototype.push = function(e) {
	this.myarray.push(e);
}

Stack.prototype.pop = function() {
	return this.myarray.pop();
}

Stack.prototype.peek = function() {
	return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
	if (this.myarray.length == 0) {
		return true;
	} else {
		return false;
	}
}

function ex_3_stack(stringa) {
	var strin = stringa.split(' ');
	var V = new Stack();
	var S = new Stack();

	strin.forEach(function (x){

		switch(x){
			case "+":
				S.push(x);
				break;
			case "-":
				S.push(x);
				break;
			case "*":
				S.push(x);
				break;
			case "/":
				S.push(x);
				break;
			case "(":
				S.push(x);
				break;
			case ")":
				var second = parseInt(V.pop());
				var first = parseInt(V.pop());
				var op = S.pop();
				S.pop();
				switch (op){
					case "+":
						V.push(first + second);
						break;
					case "-":
						V.push(first - second);
						break;
					case "*":
						V.push(first * second);
						break;
					default:
						V.push(first / second);
						break;
				}
				break;
			default :
				V.push(parseInt(x));
				break;
		}
	});

	return V.pop();
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}
/* esercizio 4 */

function Node(it, lt, rt){
	this.items = it;
	this.left = lt;
	this.right = rt;
}
function BST(){
	this.root = null;
}

BST.prototype.addNode = function(currentNode, e){
	if(e < currentNode.items){
		if(currentNode.left == null){
			currentNode.left = new Node(e, null, null);
		}else{
			this.addNode(currentNode.left, e);
		}
	}else{
		if(currentNode.right == null){
			currentNode.right = new Node(e, null, null);
		}else{
			this.addNode(currentNode.right, e);
		}
	}
}


BST.prototype.add = function(e){
	if(this.root == null){
		this.root = new Node(e, null, null);
	}else{
		this.addNode(this.root, e);
	}
}

BST.prototype.addAllR = function(myarray){
	myarray.forEach((x) => this.add(x));
}

BST.prototype.addAll = function(){
	return this.addAllR(initialArray());
}



BST.prototype.search = function(currentNode){
	if(currentNode.right != null){
		return this.search(currentNode.right);
	}else{
		return currentNode.items;
	}

}


BST.prototype.searchMax = function(){
	if(this.root == null){
		return 0;
	}else{
		return this.search(this.root);
	}
}




