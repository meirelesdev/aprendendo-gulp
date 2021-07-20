let btnCalc = document.querySelector('#calc')
btnCalc.addEventListener('click', ()=>{
    let n1 = document.querySelector('#n1').value
    let n2 = document.querySelector('#n2').value
    let res = parseInt(n1) + parseInt(n2)
    if (res > 0){
        const divResult = document.querySelector('div.result')
        divResult.style.display = 'flex'
        divResult.innerHTML = res
    }
})
console.log(btnCalc)