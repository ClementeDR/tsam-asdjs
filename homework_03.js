Array.prototype.ex_3 = function (){
	return this.average();
/*
	var tot;	
	return tot = this.sum(this) / this.length;
*/
}

Array.prototype.average = function(){
	return this.sum(this) / this.length;

}



Array.prototype.sum = function (){
	var tot = 0;
	
	tot = this.reduce(function(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
	});
	return tot;
}


Array.prototype.ex_11 = function(){
	return this.filtro();

}

Array.prototype.filtro = function(){
	var pari = [];
	
	pari = this.filter(function (x){
		if(x%2 == 0)
			return x;
		
	});
	var disp = [];
	disp = this.filter(function (x){
		if(x%2 != 0)
			return x;
		
	});
	return disp.concat(pari);
	
}

Array.prototype.ex_1 = function(){
	return this.sumWhileNeg();
}

Array.prototype.sumWhileNeg = function (){
		var tot = 0;
		this.every( x => {
		if(x > 0){
			tot += x;
			
		}
		return x > 0;
		
		
	});
	return tot;
}
