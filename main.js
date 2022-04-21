let arr = _DADOS.pistas_principal
let a = []

function readCRUD() {
  for (let i = 0; i < arr.length; i++) {
    a +=
      '<tr>' +
      '<td>' +
      arr[i].concessionaria +
      '</td>' +
      '<td>' +
      arr[i].rodovia_uf +
      '</td>' +
      '<td>' +
      arr[i].sentido +
      '</td>' +
      '<td>' +
      arr[i].subtipo_de_pista +
      '</td>' +
      '<td>' +
      arr[i].numero_de_faixas +
      '</td>' +
      '<td>' +
      arr[i].km_m_inicial +
      '</td>' +
      '<td>' +
      arr[i].km_m_final +
      '</td>' +
      '</tr>'
  }

  document.getElementById('obj').innerHTML = a
}

readCRUD()
