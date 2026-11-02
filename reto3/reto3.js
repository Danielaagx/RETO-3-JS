const tablaUsuarios = document.getElementById("tablaUsuarios");
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log("Datos obtenidos correctamente");
    data.forEach(usuario => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.phone}</td>
            <td>${usuario.company.name}</td>`;
        tablaUsuarios.appendChild(fila);
    });
})
.catch(error => {
    console.error("Error:", error);
});