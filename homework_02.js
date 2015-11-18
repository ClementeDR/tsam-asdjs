// somma elementi pos ...bla

function ex_1_F(myarray){
	var tot = 0;
	myarray.every( x => {
		if(x > 0){
			tot += x;
			
		}
		return x > 0;
		
		
	});
	return tot;
}


//function sum
function sum(myarray){
	var tot = 0;
	
	tot = myarray.reduce(function(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
	});
	return tot;
}


function f2(myarray){
		var temp = [];
		myarray.every( x => {
			if(x > 0){
				temp.push(x);
			}
			return x > 0;
		});
		return temp.reduce((acc, x) => acc + x, 0);
	
	
}
// il quattro fai un array e poi reduce
function range(n){
	a = [];
	for(var i = 0; i < n ; ++i){
		a[i] = i;
	}
	return a;
	
}

function ex_2_F(n){
	 return range(n).map(x => 2*x + 1).reduce((acc, x) => acc + x);
	 /*
	 x => 2*x + 1 significa 
	 function(x){ return 2 * x + 1;}
	 
	*/
	
}




//ex 3: media
function media(myarray){
	var tot;
	
	return tot = sum(myarray) / myarray.length;
}

function ex_3_F(myarray){
	return media(myarray);
}

// esercizio 4
function createExF(a, b){
	n = a - b;
	x = [];
	for(var i = a; i <= b ;i++){
		x[i] = i;
	}
	var tot = 0;
	tot = x.reduce(function(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
	});
	/*
	x.reduce((previousValue, currentValue, index, array) => previousValue + currentValue);*/
	
	return tot;
}

function ex_4_F(a, b){
	if(a < b)
		return createExF(a, b);
	else
		return createExF(b, a);
}

//esercizio 10
function replicate(num1, num2){
    vett = [];
    for(i = 0; i < num2; i++){
        vett.push(num1);
    }
    return vett;
}


function ex_10_F(a, b){
	var x = [];
	x = replicate(a, b);
	return 	x;
}

//esercizio 5 moltiplicazione
function mult(a, b){
	
	if( a >= 0){
		
	
		if( b == 0)
			return 0;
		else{
			var x = [];
			x = replicate(a, b);
			var tot = 0;
			tot = sum(x);
			return tot;
		}
	} else {
		return 0;
	}
	
}

function ex_5_F(a, b){
	return mult(a, b);
	
}

//esercizio 7 potenza
function pow(a, b){
	
	
	if(b == 0)
		return 1;
	else{
		if(a == 0)
			return 0;
		else {
			var x = [];
			x = replicate(a, b-1);
			x.forEach(x => a = mult(x, a));
			
			return a;
		}
	}
	
}

function ex_7_F(a, b){
	return pow(a, b);
}


//esercizio 11 filtro
function filtro(myarray){
	var pari = [];
	
	pari = myarray.filter(function fil(myarray){
		if(myarray%2 == 0)
			return myarray;
		
	});
	var disp = [];
	disp = myarray.filter(function fil(myarray){
		if(myarray%2 != 0)
			return myarray;
		
	});
	return disp.concat(pari);
	
}


function ex_11_F(myarray){
	return filtro(myarray);
	
}
