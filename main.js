//FUNÇÃO DE INÍCIO
function incioCrud(){
  
  montarTabela(_DADOS.pistas_principal)


  document.getElementById('selectConcessionaria').addEventListener('change', function (){

    filterSelect('rodovia_uf','selectRodovia')
    filterSelect('sentido','selectSentido')

  })

  montarSelects('concessionaria','selectConcessionaria')

  document.querySelector('button').addEventListener('click',pesquisaSelect)

  document.getElementById('selectRodovia').setAttribute('disabled', '')
  document.getElementById('selectSentido').setAttribute('disabled', '')

  document.getElementById('selectConcessionaria').addEventListener('change',disabledSelect)
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

//FUNÇÃO CONSTRUTORA DOS SELECT
function montarSelects(propriedade, ID) {

  const arrDadosPista = _DADOS.pistas_principal
  let txtSelect = ''
  let accDado = []
  
  for (let i = 0; i < arrDadosPista.length; i++) {
    
    if (accDado.includes(arrDadosPista[i][propriedade]) === false){
  
      accDado.push(arrDadosPista[i][propriedade])
  
      txtSelect += `<option values="${accDado[accDado.length -1]}">${accDado[accDado.length -1]}</option>`
    } 
  }
  document.getElementById(ID).innerHTML = "<option selected>---</option>" + txtSelect
}

//FUNÇÃO FILTRO PARA MONTAR OS SELECTS DE RODOVIA E SENTIDO BASEADO NO INPUT DO SELECT DE CONCESSIONARIA
function filterSelect(propriedade, ID) {

  const arrDadosPista = _DADOS.pistas_principal
  const selectConcessionariaValor = document.getElementById('selectConcessionaria').value
  let txtSelect = ''
  let accDado = []

  for (let i = 0; i < arrDadosPista.length; i++) {
    
    if (accDado.includes(arrDadosPista[i][propriedade]) === false && selectConcessionariaValor === arrDadosPista[i].concessionaria){
  
      accDado.push(arrDadosPista[i][propriedade])
  
      txtSelect += `<option values="${accDado[accDado.length -1]}">${accDado[accDado.length -1]}</option>`
    } 
  }
  document.getElementById(ID).innerHTML = "<option selected>---</option>" + txtSelect
}

//FUNÇÃO QUE SERÁ CHAMADA NO CLICK DO BOTÃO PARA IMPRIMIR OS ITENS SELECIONADOS NA TELA
function pesquisaSelect() {
  
  let selectValorConcessionaria = document.getElementById('selectConcessionaria').value
  let selectValorRodovia = document.getElementById('selectRodovia').value
  let selectValorSentido = document.getElementById('selectSentido').value
  
  document.getElementById('tBodyRodovia').innerHTML = _DADOS.pistas_principal
  .filter( x => 
    ( selectValorConcessionaria === '---' || x.concessionaria === selectValorConcessionaria )
    && ( selectValorRodovia === '---' || x.rodovia_uf === selectValorRodovia )
    && ( selectValorSentido === '---' || x.sentido === selectValorSentido ))
    .map(x => 
      `<tr>
        <td>${x.concessionaria}</td>
        <td>${x.rodovia_uf}</td>
        <td>${x.sentido}</td>
        <td>${x.subtipo_de_pista}</td>
        <td>${x.numero_de_faixas}</td>
        <td>${x.km_m_inicial}</td>
        <td>${x.km_m_final}</td>
      </tr>` )
      .join("")
  

}

//FUNÇÃO QUE DESABILITA OU HABILITA OS SELECTS DE RODOVIA E SENTIDO BASEADO NO INPUT DO SELECT DE CONCESSIONÁRIA
function disabledSelect() {

  if (document.getElementById('selectConcessionaria').value === '---') {

    document.getElementById('selectRodovia').setAttribute('disabled', '')
    document.getElementById('selectSentido').setAttribute('disabled', '')
    
  } else {

    document.getElementById('selectRodovia').removeAttribute('disabled', '')
    document.getElementById('selectSentido').removeAttribute('disabled', '')
  
} 
  
}

incioCrud()