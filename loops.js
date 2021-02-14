var a = '0' ;

while (a <= 100 ) {
    if ( a % 2 == 0)
    console.log (a) ;
    a++ ;
}

var b = '100'

while (b >= 0) {
    console.log (b)
    b-=3 ;
}

var c = 1

for (let c = 1 ; c < 100 ; c+=2 ) {
    console.log (c)
}

var d = 0

for ( let d = 0 ; d <=100 ; ) {
    if ((d % 3 == 0) && (d % 5 == 0)) {
        console.log ("HelloWorld") ;
    } else if (d % 3 == 0) {
        console.log ("Hello") ;
    } else if (d % 5 == 0) {
        console.log ("World") ;
    } else {
        console.log (d) ;
    } d++ ;
}