let itens = {nome: 'Heitor', sexo: 'M', peso: 62, engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

itens.engordar(2)
console.log(`${itens.nome} pesa ${itens.peso}`)