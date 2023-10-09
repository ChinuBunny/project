const characteramountrange = document.getElementById('characteramountrange');
const characteramountnumebr = document.getElementById('characteramountnumebr');
const form=document.getElementById('passwordgeneratorform');
const includeuppercaseelement=document.getElementById('includeuppercase')
const includenumeberelement=document.getElementById('includenumbers')
const includesymbol=document.getElementById('includesymbols')
const passwordisplay=document.getElementById('passworddiplay')


const lowercasecode= arrayfromhightolow(97,122)
const uppercasecode=arrayfromhightolow(65,90)
const numbercode=arrayfromhightolow(48,57)
const symbolcode=arrayfromhightolow(33,47).concat(
    arrayfromhightolow(58,64)
).concat(
    arrayfromhightolow(91,96)

).concat(arrayfromhightolow(123,126)
)

characteramountnumebr.addEventListener('input', syncCharacterAmount);
characteramountrange.addEventListener('input', syncCharacterAmount);


form.addEventListener('submit',e=>{
    e.preventDefault()
    const includeuppercase=includeuppercaseelement.checked
    const includenumbers=includenumeberelement.checked
    const includesymbol1=includesymbol.checked
    const characteramount=characteramountnumebr.value
    const password=generapasswrod(characteramount,includeuppercase,includenumbers,includesymbol1)
    passwordisplay.innerText=password
});


function generapasswrod(characteramount,includeuppercase,includenumbers,includesymbol1)
{
    let charcode=lowercasecode
    if(includeuppercase)charcode=charcode.concat(uppercasecode)
if(includenumbers)charcode=charcode.concat(numbercode)
if(includesymbol1)charcode=charcode.concat(symbolcode)

const passwrodcahcater=[]

for(let i=0;i<characteramount;i++){
    const character=charcode[Math.floor(Math.random() * charcode.length)]
passwrodcahcater.push(String.fromCharCode(character))
}
return passwrodcahcater.join('')
    
}

function arrayfromhightolow(low,high)
{const array=[]
    for(let i=low;i<=high;i++)
    {
        array.push(i)

    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value;
    characteramountnumebr.value = value;
    characteramountrange.value = value;
}

