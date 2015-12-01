function merge(a,b){
	var i = 0;
	var j = 0;
	var c = [];
	
	while(i < a.length && j < b.length){
		if(a[i] < b[j]){
			c.push(a[i]);
			i++;
		}else{
			c.push(b[j]);
			j++;
		}
		
	}

	return c.concat(a.slice(i)).concat(b.slice(j));
	
}


function mergesort(myarray){
	if(myarray.length == 1)
		return myarray;

	var mid = Math.ceil(myarray.length / 2);
	return merge(mergesort(myarray.slice(0, mid)), mergesort(myarray.slice(mid)));
}

