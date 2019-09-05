leerCookie('token');

function leerCookie(nombre) {
  lista = document.cookie.split(";")
  for (i in lista) {
    busca = lista[i].search(nombre)
    if (busca > -1) {token=lista[i]}
  }
  igual = token.indexOf("=")
  valor = token.substring(igual+1)
  return valor
  console.log(valor);
  }

function recibeAlert() {
axios.get('https://serene-shelf-99762.herokuapp.com/alerts', {
  headers: { 'Authorization': valor }
}).then(response => {
    createAlert(response.data);
    console.log(response.data[0])
  }).catch(function (error) {
  console.log(error);
});
}

function createAlert(data) {
  const alert = document.getElementById("alert");
  for (datos of data) { 
  alert.innerHTML += `
    <tr id="${datos.id}">
      <td id="bdelete-id">${datos.name}</td>
      <td id="bdelete-id">${datos.departure_city.name}</td>
      <td id="bdelete-id">${datos.destination_city.name}</td>
      <td id="bdelete-id">${datos.service_stars}</td>
      <td id="bdelete-id">${datos.price}</td>
      <td><button id="see">See</td>
      <td><button id="modify" onclick ="modifyAlert()">Mod</td>
      <td><button id="delete" onclick="deleteAlert(${datos.id})">Del</td>
    </tr>`
  }
  }

function deleteAlert(id) {
  const confirmation = confirm("Are you sure want delete????");

  if(confirmation !== true) return;
  
  axios.delete('https://serene-shelf-99762.herokuapp.com/alerts' + '/' + id, {
  headers: { 'Authorization': valor }
}).then(response => {
    const table = document.getElementById("alerts-table");
    const rowindex = document.getElementById(id).rowIndex;
    table.deleteRow(rowindex);
}).catch(function (error) {
  console.log(error);
});
}  

async function modifyAlert() {
  const { value: formValues } = await Swal.fire({
  title: 'Modify Alert',
  html:
    '<label>Nombre</label>' +
    '<input id="swal-input1" class="swal2-input">' +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
})

  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
} 
}


recibeAlert();

document.getElementById("boton").addEventListener("click", function() {
  window.history.back(1);
});

