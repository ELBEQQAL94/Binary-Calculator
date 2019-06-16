// get res from DOM
const res = document.getElementById('res');

// get all buttons from DOM
const btn0   = document.getElementById('btn0');
const btn1   = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

// preventClickOperatorFirst
const preventClickOperatorFirst = text => {
    isEmpty = true;
    
    if(text === ''){
        isEmpty = true;
    } else {
        isEmpty = false; 
    };

    return isEmpty;

};

// disabled all operator buttons
const disabled = () => {
    btnSum.setAttribute('disabled', true);
    btnSub.setAttribute('disabled', true);
    btnMul.setAttribute('disabled', true);
    btnDiv.setAttribute('disabled', true);
};

const canceledDisabled = () => {
    btnSum.removeAttribute('disabled');
    btnSub.removeAttribute('disabled');
    btnMul.removeAttribute('disabled');
    btnDiv.removeAttribute('disabled');
};

const checkOperator = () => {
    if(res.innerHTML.endsWith('+') 
       || res.innerHTML.endsWith('-') 
       || res.innerHTML.endsWith('*') 
       || res.innerHTML.endsWith('/'))
    {
      return true;
    };
};

// print 0 and 1 in screen
btn0.onclick = function(){
    res.innerText += 0;
    canceledDisabled();
};

btn1.onclick = function(){
    res.innerText += 1;
    canceledDisabled();
};

// print operator 
btnSum.onclick = function(){
    // preventClickOperatorFirst
    if(preventClickOperatorFirst(res.innerText)){
        return null;
    };

    res.innerText += '+';

    disabled();
    
};

btnSub.onclick = function(){
    // preventClickOperatorFirst
    if(preventClickOperatorFirst(res.innerText)){
        return null;
    };

    res.innerText += '-';

    disabled();
};

btnMul.onclick = function(){
    // preventClickOperatorFirst
    if(preventClickOperatorFirst(res.innerText)){
        return null;
    };

    res.innerText += '+';

    disabled();
};

btnDiv.onclick = function(){
    // preventClickOperatorFirst
    if(preventClickOperatorFirst(res.innerText)){
        return null;
    };

    res.innerText += '/';

    disabled();
};

// clear input
btnClr.onclick = function(){
    res.innerText = null;
};

const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => Math.floor(a / b),
}

// calculate result
btnEql.onclick = function(){
    if(!checkOperator()){

        // split on word boundaries (e.g.between digits and symbols)
       const [op1, operator, op2] = res.innerText.split(/\b/);

      // use parseInt (base 2) to read string as binary integer
      const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];

     // perform the desired operation then convert result into a string (base 2)
     res.innerText = Number(ops[operator](n1,n2)).toString(2);

    };

};
