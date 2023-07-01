const $numsigns = [...document.querySelectorAll('.numbers, .sign')];
const $clearButton = document.querySelector('.clear');
const $calculateButton = document.querySelector('.equals');
const $input = document.querySelector('#input')

let result = ""
let freeze = ""

$clearButton.addEventListener('click', clearResult)
$calculateButton.addEventListener('click', calculateResult)

function clearResult() {
    freeze = false;
    
    result = ""
    $input.value = "0"
}

$numsigns.forEach(($numsign)=> {
  $numsign.addEventListener('click', handlebuttonclick)
})

function handlebuttonclick(event) {
    if (freeze) {
        event.preventdefault()

        return
    }

  
    const value = event.target.value;

    if ($input.value === 0  && value ===0 ) {return
    }

    if (result.length === 0) {
        $input.value = ""
    }

  const operators = ['/','*','-','+']

  if (operators.includes(result[result.length - 1]) && operators.includes(value)) {
    $input.value = $input.value.replace(/.$/, value)
    result.value = $input.value.replace(/.$/, value)

    return
  }
  result +=value;
  $input.value += value;
}

function calculateResult() {
    try{
        $input.value = eval(result)
freeze = true()
    } catch (e) {
        $input.value = "error"
        setTimeout(() => {
            if (confirm("خطأ الكسول هههه")) {
                clearResult()
            }
        }, 1000)
    }
}
