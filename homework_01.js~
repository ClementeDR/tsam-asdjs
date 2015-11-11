/*Esercizio 1

Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore

negativo
*/

// ITERATIVA
function SumIter(vett){
    var sum = 0;
    
    for(i = 0; i < vett.length && vett[i] > 0; i++){
        sum = sum + vett[i];
        
    }
    return sum;
}

// RICORSIVA
function sumRic(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumRic(myarray.slice(1));
    }
}

// per il prof 
// iterativa
function ex_1_I(myarray){
	return SumIter(myarray);
}
//ricorsiva
function ex_1_R(myarray){
	return sumRic(myarray);
}
/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// ITERATIVA
function sumN(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 *i;
    }
    return tot;
}
//RICORSIVA
function sumNR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + sumNR(n-1);
    }
}



// per il prof
	// ITERATIVA
function ex_2_I(x) {
    return sumN(x);
}
// RICORSIVA
function ex_2_R(x) {
    return sumNR(x);
}


/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

// ITERATIVA
function media(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; i++) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}
//RICORSIVA
function mediaRic(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + mediaRic(myarray.slice(1));
    }
}

function ricMediaTot(myarray) {
    return mediaRic(myarray) / 10;
}

// per il prof
// ITERATIVA
function ex_3_I(x) {
    return media(x);
}
// RICORSIVA
function ex_3_R(x) {
    return ricMediaTot(x);
}


/*Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. 
Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/
// ITERATIVA
function sumInter(a, b) {
    var tot = 0;
    for(var i = a; i <= b; i++) {
        tot += i;
    }
    return tot;
}

function sumInterval(a, b) {
    if (a < b){
        return sumIntervalR(a, b);
    } else {
        return sumIntervalR(b, a);
    }
}
// RICORSIVA
function sumIntervalR(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalR(a + 1, b);
    }


}

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalR(a, b);
    } else {
        return sumIntervalR(b, a);
    }
}


// per il prof
// ITERATIVA
function ex_4_I(x, y) {
    return sumInterval(x, y);
}
//RICORSIVA
function ex_4_R(x, y) {
    return sumIntervalR(x, y);
}

/*Esercizio 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6*/
//ITERATIVA
function multIterativo(a, b){
    tot = 0;
     if(a >= 0 && b >= 0){
    for(i = 0; i < b; i++){
        tot = tot + a;
        }
}
    
    return tot;
    
}

//RICORSIVA
function multRic(a, b, totale){

	if(a == 0 || b == 0){
		return totale;
	} else{
		totale += b;
		return multRic(a - 1, b, totale);
	}
}

function s(a, b){
	totale = 0;
	if(a < b){
		return multRic(a, b, totale);
	} else {
		return multRic(b, a, totale);
	}
}

// per il prof
//ITERATIVA

function ex_5_I(a, b){
	return multIterativo(a, b);
}
// RICORSIVA
function ex_5_R(a, b){
	return s(a, b);
}


/*Esercizio 6

Si calcoli la bione e il resto della bione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2*/

//ITERATIVA
function divIte(a, b){
	q = 0;
    r = 0;
	v = [];
    if(a === 0 || b === 0){
		return "error";
    } else{
   for(i = a; i >= b; i -= b){
		q++;
		r = i - b;
					
    }
	v = [q,r];
    return (v);
    }
}

//RICORSIVA
function divRic(a, b, q){
    
    if(b === 0){
        
        return('error');
    }else{
        if(a >= b){
            r = a - b;
            q++;
            return divRic(a - b, b, q);
        } else {
			v = [q,r];
            return (v);
        }
    }

}
// per il prof
// ITERATIVA
function ex_6_I(a, b){
	return divIte(a, b);
}
//RICORSIVA
function ex_6_R(a, b){
	q = 0;
	return divRic(a, b, q);
}

/*Esercizio 7

Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli

operatori somma, sottrazione e della funzione mult.

Esempio:

pow(2, 3) => 8*/

// ITERATIVA

function powI(a, b){
	if(b === 0){
	return 1;
	} else {
		tota = 0;
		for(i = 0; i < b; i++){
			tota = tota + s(a, b);
		}
		return tota;
	}
	
}

//RICORSIVA
function powR(a,b){
    if(b === 0){
        return 1;
    } else {
        return (ex_5_R(a, powR(a, b - 1)));
    }
}

// per il prof
// ITERATIVA
function ex_7_I(a, b){
	return powI(a, b);
}
//RICORSIVA
function ex_7_R(a, b){
	return powR(a, b);
}

/*Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.*/
// ITERATIVA
function arrayMultidim(vett){
    n = Math.sqrt(vett.length);
    v1 = [n];
	v2 = [n];
    c = 0;
    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            v2[j] = vett[c];
			c++;
            
        }
		v1[i] = v2;
    }
	
    return v1;
}
//per il prof
function ex_8_I(vett){
	return arrayMultidim(vett);
}

/*Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A= {8, 5, 2}*/
// ITERATIVA
function revI(vett){
	temp = undefined;
	for(i = vett.length; i >= 0; i--){
		for(j = 0; j <  i - 1; j++){
			temp = vett[j];
			vett[j] = vett[j + 1];
			vett[j + 1] = temp;
		}
	}
	return vett;
}
// RICORSIVA
/*
function revR(vett){
	if(vett.length == 0){
		return vett[0];
	} else {
		return vett.push(revR(vett));
	}
}*/
//per il prof
// ITERATIVA
function ex_9_I(vett){
	return revI(vett);
}
// Ricorsiva
/*
function ex_9_R(vett){
	return revR(vett);
}*/
/*Esercizio 10

Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.

Esempio:

replicate(3, 4) => A= {3, 3, 3, 3}*/


// iterativa
function replicateIterativa(num1, num2){
    vett = [];
    for(i = 0; i < num2; i++){
        vett.push(num1);
    }
    return vett;
}


//ricorsiva
function replicateRicorsiva(vett, num1, num2){
    if(num2 != 0){
        vett.push(num1);
        return replicateRicorsiva(vett, num1, num2 - 1);
    } else {
        
        return vett;
    }
}


// per il prof
// iterativa
function ex_10_I(num1, num2){
	return replicateIterativa(num1, num2);
}
// RICORSIVA
function ex_10_R(num1, num2){
	vett = [];
	return replicateRicorsiva(vett, num1, num2);
}
/*Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}*/

//iterativa
function disParIterativ(vett){
    vettore = [];
    vettPari = [];
    for(i = 0; i < vett.length; i++){
        if(vett[i]%2 != 0){
            vettore.push(vett[i]);
        } else {
            vettPari.push(vett[i]);
        }
    }
    vector = vettore.concat(vettPari);
    return vector;
}

// per il prof
//iterativa
function ex_11_I(vett){
	return disParIterativ(vett);
}


