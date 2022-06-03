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

  document.querySelectorAll("th").forEach( x => {
    x.addEventListener('click', function (e){
      var node = e.currentTarget;
      sortColumn(node.getAttribute("data-coluna"),node.attributes.id.value,node.innerText)
    });
  })
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
  
 montarTabela(filtrar())

}

function filtrar() {
  let selectValorConcessionaria = document.getElementById('selectConcessionaria').value
  let selectValorRodovia = document.getElementById('selectRodovia').value
  let selectValorSentido = document.getElementById('selectSentido').value
  
  return _DADOS.pistas_principal
  .filter( x => 
    ( selectValorConcessionaria === '---' || x.concessionaria === selectValorConcessionaria )
    && ( selectValorRodovia === '---' || x.rodovia_uf === selectValorRodovia )
    && ( selectValorSentido === '---' || x.sentido === selectValorSentido ))
    
  
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

//FUNÇÃO DE ORDENAÇÃO DE COLUNAS
function sortColumn(propriedade,ID,thNome){
  let arrDadosPista = filtrar()
  let atributoOrder = document.getElementById(ID)

  if (atributoOrder.hasAttribute('decrescente') === true) {
    document.getElementById(ID).removeAttribute('decrescente','')
    document.getElementById(ID).setAttribute('crescente','')
    document.getElementById(ID).innerHTML = `${thNome} <i class="fa-arrow-alt-circle-down fa-solid"></i>`
    
    arrDadosPista.sort(function (a, b) {
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
    
      return 0;
    });
    
  } else{
    document.getElementById(ID).removeAttribute('crescente','')
    document.getElementById(ID).setAttribute('decrescente','')
    document.getElementById(ID).innerHTML = `${thNome} <i class="fa-arrow-alt-circle-up fa-solid"></i>`

    arrDadosPista.sort(function (a, b) {
      if (a[propriedade] < b[propriedade]) {
        return 1;
      }
      if (a[propriedade] > b[propriedade]) {
        return -1;
      }
    
      return 0;
    });

  }

montarTabela(arrDadosPista)

}

incioCrud()