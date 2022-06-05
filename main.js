//FUÇÃO DE INÍCIO
function inicioCrud() {
  const arrDadosPista = _DADOS.pistas_principal

  montarTabela(arrDadosPista)

  montarSelectConcessionaria(arrDadosPista)

  $('#selectConcessionaria').on('change', function(e){
    if(e.currentTarget.value !== "---"){
      $( "#selectRodovia" ).prop( "disabled", false )
      $( "#selectSentido" ).prop( "disabled", false )
    }else{
      $( "#selectRodovia" ).prop( "disabled", true )
      $( "#selectSentido" ).prop( "disabled", true )
    }
  })

  $("#selectConcessionaria").on('change', function(e){

    montarSelects(e,'rodovia_uf',arrDadosPista,'#selectRodovia')

    montarSelects(e,'sentido',arrDadosPista,'#selectSentido')
  })

  $('button').on('click', pesquisaSelect)

  $('th').on('click', function(e){
    let arrFiltrado = filtrarPesquisa()
    let coluna = $(e.currentTarget).attr('coluna')
    let ordem = $(e.currentTarget).attr('ordenamento')

    if (ordem === 'decrescente') {
      $(e.currentTarget).attr('ordenamento','crescente')
      arrFiltrado = arrFiltrado.sort((a,b) => a[coluna] > b[coluna] ? 1 : -1)
    }else{
      $(e.currentTarget).attr('ordenamento','decrescente')
      arrFiltrado = arrFiltrado.sort((a,b) => a[coluna] < b[coluna] ? 1 : -1)
    }
    montarTabela(arrFiltrado)
  })

}

function montarTabela(arrDadosPista) {

  $('#tBodyRodovia').html(arrDadosPista.map(x => 
`<tr>
  <td>${x.concessionaria}</td>
  <td>${x.rodovia_uf}</td>
  <td>${x.sentido}</td>
  <td>${x.subtipo_de_pista}</td>
  <td>${x.numero_de_faixas}</td>
  <td>${x.km_m_inicial}</td>
  <td>${x.km_m_final}</td>
  <td class = "btn-acao">
    <button class="btn btn-sm btn-info"><i class="fa fa-edit"></i></button>
    <button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button>
  </td>
</tr>`).join(""))

}

function montarSelectConcessionaria(arrDadosPista) {

  $('#selectConcessionaria').html("<option selected>---</option>" + [...new Set(arrDadosPista.map(x => x.concessionaria))].map(function(x){
      return`<option values="${x}">${x}</option>`
     }).join(""))

}

function montarSelects(e, propriedade, arrDadosPista,id){
  
  let arr = arrDadosPista.filter( x => x.concessionaria === e.currentTarget.value)

  $(id).html("<option selected>---</option>" + [... new Set(arr.map(x => `<option values="${x[propriedade]}">${x[propriedade]}</option>` ))].join(" "))

}

function filtrarPesquisa(){
  let selectValorConcessionaria = $('#selectConcessionaria').val()
  let selectValorRodovia = $('#selectRodovia').val()
  let selectValorSentido = $('#selectSentido').val()

  return _DADOS.pistas_principal
  .filter( x => 
    ( selectValorConcessionaria === '---' || x.concessionaria === selectValorConcessionaria )
    && ( selectValorRodovia === '---' || x.rodovia_uf === selectValorRodovia )
    && ( selectValorSentido === '---' || x.sentido === selectValorSentido ))
}

function pesquisaSelect() {
  
  montarTabela(filtrarPesquisa())
 
 }

inicioCrud()