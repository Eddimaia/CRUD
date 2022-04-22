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


/* function pesquisaSelect2() {
  
  let arrDadosPista = _DADOS.pistas_principal
  let accTxt = ''
  let selectValorConcessionaria = document.getElementById('selectConcessionaria').value
  let selectValorRodovia = document.getElementById('selectRodovia').value
  let selectValorSentido = document.getElementById('selectSentido').value
  let arrFiltrado = []

    arrFiltrado = arrDadosPista.filter( x => 
    ( selectValorConcessionaria === '---' || x.concessionaria === selectValorConcessionaria )
    && ( selectValorRodovia === '---' || x.rodovia_uf === selectValorRodovia )
    && ( selectValorSentido === '---' || x.sentido === selectValorSentido ))

    arrFiltrado.forEach(x => accTxt += 

      `<tr>
        <td>${x.concessionaria}</td>
        <td>${x.rodovia_uf}</td>
        <td>${x.sentido}</td>
        <td>${x.subtipo_de_pista}</td>
        <td>${x.numero_de_faixas}</td>
        <td>${x.km_m_inicial}</td>
        <td>${x.km_m_final}</td>
      </tr>`
  
      )


  document.getElementById('tBodyRodovia').innerHTML = accTxt

  
} */



incioCrud()