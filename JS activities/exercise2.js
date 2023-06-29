/* x=1.5  y=2
x=-1  y=-1
x=0.5  y=-2.5
x=10  y=4
x=2.5  y=3 */


let x=1.5
    y=2

if(x<0){ 
    ans=(x/y)*x+4;
} else if(y<0){ 
    ans=x-y;
} else if(x>y){ 
    let z=((x*5)/2)%y;
    ans=z;
} else { 
    let z=(x%5)*(2*y);
    ans=z;
}

console.log(ans)

let x1=-1
    y1=-1

if(x1<0){ 
    ans=(x1/y1)*x1+4;
} else if(y1<0){ 
    ans=x1-y1;
} else if(x1>y1){ 
    let z1=((x1*5)/2)%y1;
    ans=z1;
} else { 
    let z1=(x1%5)*(2*y1);
    ans=z1;
}

console.log(ans)

let x2=0.5
    y2=-2.5

if(x2<0){ 
    ans=(x2/y2)*x2+4;
} else if(y2<0){ 
    ans=x2-y2;
} else if(x2>y2){ 
    let z2=((x2*5)/2)%y2;
    ans=z2;
} else { 
    let z2=(x2%5)*(2*y2);
    ans=z2;
}

console.log(ans)



let x3=10
    y3=4

if(x3<0){ 
    ans=(x3/y3)*x3+4;
} else if(y3<0){ 
    ans=x3-y3;
} else if(x3>y3){ 
    let z3=((x3*5)/2)%y3;
    ans=z3;
} else { 
    let z3=(x3%5)*(2*y3);
    ans=z3;
}

console.log(ans)



let x4=2.5
    y4=3

if(x4<0){ 
    ans=(x4/y4)*x4+4;
} else if(y4<0){ 
    ans=x4-y4;
} else if(x4>y4){ 
    let z4=((x4*5)/2)%y4;
    ans=z4;
} else { 
    let z4=(x4%5)*(2*y4);
    ans=z4;
}

console.log(ans)