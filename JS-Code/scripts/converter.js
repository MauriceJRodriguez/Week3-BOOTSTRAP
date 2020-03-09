function FtoC(){
    let f = document.getElementById("txtDegF");
    let c = document.getElementById("divDegC");
    let num = f.value;
    c.innerHTML = num + '&deg; =' + (num - 32)* 5/9 + '&deg;';
    
    document.body.style.backgroundColor = getColor(num);
}

function CtoF(){
    let c = document.getElementById("txtDegC");
    let f = document.getElementById("divDegF");
    let num = (c.value *9/5+32);
    f.innerHTML= num
    document.body.style.backgroundColor = getColor(num);
}

function getColor (fahr){
    if (fahr < 32){
        color = 'blue';
    } else if ( fahr > 32 && fahr < 88){
        color = 'yellow';
    } else {
        color='red';
    }
    return color;
}