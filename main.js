//READ
function readCrud() {
  let arrDadosPista = _DADOS.pistas_principal
  let accDadosTabela = ''

  arrDadosPista.forEach(a => accDadosTabela += 

    `<tr>
      <td>${a.concessionaria}</td>
      <td>${a.rodovia_uf}</td>
      <td>${a.sentido}</td>
      <td>${a.subtipo_de_pista}</td>
      <td>${a.numero_de_faixas}</td>
      <td>${a.km_m_inicial}</td>
      <td>${a.km_m_final}</td>
    </tr>`

    )

  document.getElementById('tBodyRodovia').innerHTML = accDadosTabela
}

readCrud()



//SELECT
function selectCrud() {
let arrDadosPista = _DADOS.pistas_principal

let txtSelectConcessionaria = ''
let accConcessionaria = []

let txtSelectRodovia = ''
let accRodovia = []

let txtSelectSentido = ''
let accSentido = []

//SELECT CONCESSIONARIA
for (let i = 0; i < arrDadosPista.length; i++) {
  
  if (accConcessionaria.includes(arrDadosPista[i].concessionaria) === false){

    accConcessionaria.push(arrDadosPista[i].concessionaria)

    txtSelectConcessionaria += 

      `<option values="${accConcessionaria[accConcessionaria.length -1]}">
        ${accConcessionaria[accConcessionaria.length -1]}
      </option>`
  } 
}


//SELECT RODOVIA
for (let i = 0; i < arrDadosPista.length; i++) {
  
  if (accRodovia.includes(arrDadosPista[i].rodovia_uf) === false){

    accRodovia.push(arrDadosPista[i].rodovia_uf)

    txtSelectRodovia += 

      `<option values="${accRodovia[accRodovia.length -1]}">
        ${accRodovia[accRodovia.length -1]}
      </option>`
  }
}

//SELECT SENTIDO
for (let i = 0; i < arrDadosPista.length; i++) {
  
  if (accSentido.includes(arrDadosPista[i].sentido) === false){

    accSentido.push(arrDadosPista[i].sentido)

    txtSelectSentido += 
    
      `<option values="${accSentido[accSentido.length -1]}">
        ${accSentido[accSentido.length -1]}
      </option>`
  } 
}

document.getElementById('selectConcessionaria').innerHTML = "<option selected>---</option>" + txtSelectConcessionaria
document.getElementById('selectRodovia').innerHTML = "<option selected>---</option>" + txtSelectRodovia
document.getElementById('selectSentido').innerHTML = "<option selected>---</option>" + txtSelectSentido

}

selectCrud()