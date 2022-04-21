//FUNÇÃO DE INÍCIO
function incioCrud(){
  montarTabela(_DADOS.pistas_principal)
  montarSelect()
  document.querySelector('button').addEventListener('click',pesquisaSelect)
}

//READ
function montarTabela(arrDadosPista) {
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

//SELECT
function montarSelect() {

  selectBuilder('concessionaria','selectConcessionaria')
  selectBuilder('rodovia_uf','selectRodovia')
  selectBuilder('sentido','selectSentido')
/* let arrDadosPista = _DADOS.pistas_principal

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
 */
}

//CONSTRUTOR SELECT
function selectBuilder(propriedade, ID) {

  let arrDadosPista = _DADOS.pistas_principal
  let txtSelect = ''
  let accDado = []
  
  for (let i = 0; i < arrDadosPista.length; i++) {
    
    if (accDado.includes(arrDadosPista[i][propriedade]) === false){
  
      accDado.push(arrDadosPista[i][propriedade])
  
      txtSelect += 
  
        `<option values="${accDado[accDado.length -1]}">
          ${accDado[accDado.length -1]}
        </option>`
    } 
  }

  document.getElementById(ID).innerHTML = "<option selected>---</option>" + txtSelect

}


//FUNÇÃO QUE SERÁ CHAMADA NO CLICK DO BOTÃO PARA IMPRIMIR OS ITENS SELECIONADOS NA TELA
function pesquisaSelect() {
  let arrDadosPista = _DADOS.pistas_principal
  let accTxt = ''
  let selectValorConcessionaria = document.getElementById('selectConcessionaria').value
  let selectValorRodovia = document.getElementById('selectRodovia').value
  let selectValorSentido = document.getElementById('selectSentido').value

  if(selectValorConcessionaria !== '---' && selectValorRodovia === '---' && selectValorSentido === '---'){

    for (let i = 0; i < arrDadosPista.length; i++) {
      if (Object.is( selectValorConcessionaria , arrDadosPista[i].concessionaria) ==! false) {
  
        accTxt += 
        
        `<tr>
          <td>${arrDadosPista[i].concessionaria}</td>
          <td>${arrDadosPista[i].rodovia_uf}</td>
          <td>${arrDadosPista[i].sentido}</td>
          <td>${arrDadosPista[i].subtipo_de_pista}</td>
          <td>${arrDadosPista[i].numero_de_faixas}</td>
          <td>${arrDadosPista[i].km_m_inicial}</td>
          <td>${arrDadosPista[i].km_m_final}</td>
        </tr>`
        
      }

  }

  }else if (selectValorConcessionaria !== '---' && selectValorRodovia !== '---' && selectValorSentido === '---' ){

    for (let i = 0; i < arrDadosPista.length; i++) {
      if (Object.is( selectValorConcessionaria , arrDadosPista[i].concessionaria) ==! false && Object.is( selectValorRodovia , arrDadosPista[i].rodovia_uf) ==! false) {
  
        accTxt += 
        
        `<tr>
          <td>${arrDadosPista[i].concessionaria}</td>
          <td>${arrDadosPista[i].rodovia_uf}</td>
          <td>${arrDadosPista[i].sentido}</td>
          <td>${arrDadosPista[i].subtipo_de_pista}</td>
          <td>${arrDadosPista[i].numero_de_faixas}</td>
          <td>${arrDadosPista[i].km_m_inicial}</td>
          <td>${arrDadosPista[i].km_m_final}</td>
        </tr>`
        
      }

  }

  }else if (selectValorConcessionaria !== '---' && selectValorRodovia !== '---' && selectValorSentido !== '---'){

    for (let i = 0; i < arrDadosPista.length; i++) {
      if (Object.is( selectValorConcessionaria , arrDadosPista[i].concessionaria) ==! false && Object.is( selectValorRodovia , arrDadosPista[i].rodovia_uf) ==! false && Object.is( selectValorSentido , arrDadosPista[i].sentido) ==! false) {
  
        accTxt += 
        
        `<tr>
          <td>${arrDadosPista[i].concessionaria}</td>
          <td>${arrDadosPista[i].rodovia_uf}</td>
          <td>${arrDadosPista[i].sentido}</td>
          <td>${arrDadosPista[i].subtipo_de_pista}</td>
          <td>${arrDadosPista[i].numero_de_faixas}</td>
          <td>${arrDadosPista[i].km_m_inicial}</td>
          <td>${arrDadosPista[i].km_m_final}</td>
        </tr>`
        
      }

  }

  }else if(selectValorConcessionaria !== '---' && selectValorRodovia === '---' && selectValorSentido !== '---'){
    
    for (let i = 0; i < arrDadosPista.length; i++) {
      if (Object.is( selectValorConcessionaria , arrDadosPista[i].concessionaria) ==! false && Object.is( selectValorSentido , arrDadosPista[i].sentido) ==! false) {
  
        accTxt += 
        
        `<tr>
          <td>${arrDadosPista[i].concessionaria}</td>
          <td>${arrDadosPista[i].rodovia_uf}</td>
          <td>${arrDadosPista[i].sentido}</td>
          <td>${arrDadosPista[i].subtipo_de_pista}</td>
          <td>${arrDadosPista[i].numero_de_faixas}</td>
          <td>${arrDadosPista[i].km_m_inicial}</td>
          <td>${arrDadosPista[i].km_m_final}</td>
        </tr>`
        
      }

  }

  }else{

    arrDadosPista.forEach(a => accTxt += 

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

  }

  document.getElementById('tBodyRodovia').innerHTML = ''
  document.getElementById('tBodyRodovia').innerHTML = accTxt

  
}




incioCrud()