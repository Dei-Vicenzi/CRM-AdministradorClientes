export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-yellow-100');
    if(!alerta) {
        const alerta = document.createElement('div');

        alerta.classList.add('flex', "p-4", "mt-4", "border-4", "border-orange-300", "mb-4", "text-sm", "text-yellow-700", "bg-yellow-100",  "rounded-lg", "dark:bg-gray-800", "dark:text-yellow-300", "text-center" );
    
        alerta.innerHTML = `
        <div>
        <span class="font-medium">${mensaje}</span>
        </div>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}