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
    for(var i = 0; i < myarray.length; i++){
        if(myarray[i] % 2 == 0){
            oddStack.push(myarray[i]);
        }else{
            evenStack.push(myarray[i]);
        }
    }
    var result = new Stack();
    while(evenStack.arr.length != 0 && oddStack.arr.length != 0){
        result.push(evenStack.pop() * oddStack.pop());
    }
    var tot = 0;
    while(result.size() != 0){
        tot += result.pop();
    }
    return tot;

}

function ex_3(myarray){
    return multOddEven(myarray);
}
