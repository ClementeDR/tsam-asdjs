// esercizio 1a
function T(myarray){
    if(myarray.length == 0){
        return 10;
    }else{
        return 5 * myarray[0] + T(myarray.slice(1));
    }
}
function ex_1a(myarray){
    return T(myarray);
    //o(n)
}

// esercizio 1b
function oddElement(myarray){
    if(myarray.length == 0){
        return 0;
    }else{
        if(myarray[0] % 2 == 0){
            return myarray[0] * myarray[0] + oddElement(myarray.slice(1));
        }else{
            return oddElement(myarray.slice(1));
        }
    }
}
function ex_1b(myarray){
    return oddElement(myarray);
    //o(n)
}

// esercizio 2
function oddSquare(myarray){
   var c = myarray.filter(function(myarray){
        if(myarray%2 == 0)
            return myarray;
        });
    return c.map(c => c * c).reduce((c,d) => c+d);
}
function ex_2(myarray){
    return oddSquare(myarray); //o(n)
}

// esercizio 3
function multOddEven(myarray){
    function Stack(){
        this.arr = [];
    }
    Stack.prototype.push = function (e){ return this.arr.push(e);}
    Stack.prototype.pop = function (){return this.arr.pop();}
    Stack.prototype.peek = function (){return this.arr(this.arr.length - 1);}
    Stack.prototype.isEmpty = function (){return this.arr.length == 0;}
    Stack.prototype.size = function(){return this.arr.length;}

    var evenStack = new Stack();
    var oddStack = new Stack();
    myarray.forEach(myarray => {if(myarray % 2 == 0){ oddStack.push(myarray)} else {evenStack.push(myarray)}});
    var result = new Stack();
    while(evenStack.arr.length != 0 && oddStack.arr.length != 0){
        result.push(evenStack.pop() * oddStack.pop());
    }
    while(result.size() != 1){
        result.push(result.pop() + result.pop());
    }
    return result.pop();
}
function ex_3(myarray){
    return multOddEven(myarray);//o(n)
}


// esercizio 5

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


BST.prototype.existNode = function(currentNode, e){
    if(currentNode == null){
        return false;
    }
    if(currentNode.items == e){
        var x = currentNode.left.items;
        var y = currentNode.right.items;
        return nodo = new Node(currentNode.items, x, y);
    } else {
        if(e > currentNode.items){
            return this.existNode(currentNode.right, e);
        } else {
            return this.existNode(currentNode.left, e);
        }
    }
}
BST.prototype.existTree = function (){
    if(this.root == null){
        return false;
    }else{
        return true;
    }

}
BST.prototype.searchNode = function (e) {
    if(this.existTree()){
        return this.existNode(this.root, e);
    }else{
        return null;
    }
}
