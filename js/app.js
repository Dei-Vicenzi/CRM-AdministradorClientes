import { obtenerClientes, eliminarCliente } from './API.js';

(function() {
    const listado = document.querySelector('#listado-clientes');
    listado.addEventListener('click', confirmarEliminar);


    document.addEventListener('DOMContentLoaded', mostrarClientes);

    async function mostrarClientes() {
        const clientes = await obtenerClientes();
        
        clientes.forEach( cliente => {
            const { nombre, email, telefono, empresa, proyecto, id } = cliente;
            const row = document.createElement('tr');

            row.innerHTML += `

            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${nombre}
            </th>
            <td class="px-6 py-4 text-center">
            ${email}
            </td>
            <td class="px-6 py-4 text-center">
            ${telefono}
            </td>
            <td class="px-6 py-4 text-center">
            ${empresa}
            </td>
            <td class="px-6 py-4 text-center">
            ${proyecto}
            </td>
            <td class="flex justify-center gap-4 px-0 py-4 ">
                <a href="editar-cliente.html?id=${id}" class="font-medium text-lime-600 dark:text-blue-500 hover:underline">Edit</a>

                <a href="#" data-cliente="${id}" class="font-medium text-pink-600 dark:text-blue-500 hover:underline eliminar">Delete</a>
            </td>
            </tr>
            `;

            listado.appendChild(row);
        })
    }

   async function confirmarEliminar(e) {
        if( e.target.classList.contains('eliminar') ) {
            const clienteId = parseInt( e.target.dataset.cliente)
            console.log(clienteId);
            const confirmar = confirm('¿Deseas eliminar este cliente?');

            if(confirmar) {
                await eliminarCliente(clienteId)
            }

        }
    }

})();

