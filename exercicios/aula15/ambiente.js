var num = [5, 9, 1, 3, 7]
num.push(8)
num.sort()
console.log(num)
console.log(`O array possui ${num.length} posições.`)
console.log(`O primeiro elemento do array é: ${num[0]}.`)
var pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor não foi encontrado! Tente Novamente!')
}else{
    console.log(`O valor está na posição ${pos}`)
}
