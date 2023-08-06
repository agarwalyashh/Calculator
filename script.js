const res = document.getElementById("res");
let operand="";
function show(button) {
    res.innerText+=button.value;
    calculation(res.innerText);
}
const clearResult=()=>
{
    res.innerText="";
}
function operate(button)
{
    res.innerText+=button.innerText;
    operand=button.innerText;
    calculation(res.innerText);
}
function equalto() {
    let result = calculation(res.innerText);
    console.log(result);
    let r = "";
    let i = 0;
    for (i = 0; i < result.length; i++) {
        let ch = result.charAt(i);
        if (ch != '+' && ch != '-' && ch != '*' && ch != '^' && ch != '%' && ch != '/') {
            r += ch;
        } else {
            break;
        }
    }
    let fh =(r);
    let sh = (result.slice(i + 1));
    console.log(fh, sh);
    if (result[i] == '+') {
        res.innerText = Number(fh) + Number(sh);
    }
    else if (result[i] == '-') {
        res.innerText = Number(fh) - Number(sh);
    }
    if (result[i] == '*') {
        res.innerText = Number(fh) * Number(sh);
    }
    if (result[i] == '/') {
        res.innerText = Number(fh) / Number(sh);
    }
    if (result[i] == '^') {
        res.innerText = Math.pow(Number(fh),Number(sh));
    }
    if (result[i] == '%') {
        res.innerText = Number(fh) % Number(sh);
    }
}

function calculation(res){
    let result=res;
    return result;
}