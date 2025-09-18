const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = {
        id: orderId++,
        status: 'En Proceso'
    };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

function processOrder(order) {
    // Simular diferentes etapas del pedido

    // Etapa 1: Preparando (después de 1 segundo)
    setTimeout(() => {
        order.status = 'Preparando';
        updateOrderStatus(order, order.status);
    }, 1000);

    // Etapa 2: Cocinando (después de 3 segundos total)
    setTimeout(() => {
        order.status = 'Cocinando';
        updateOrderStatus(order, order.status);
    }, 3000);

    // Etapa 3: Empacando (después de 5 segundos total)
    setTimeout(() => {
        order.status = 'Empacando';
        updateOrderStatus(order, order.status);
    }, 5000);

    // Etapa final: Completado (después de 6 segundos total)
    setTimeout(() => {
        order.status = 'Completado';
        updateOrderStatus(order, order.status);

        // Agregar un efecto visual cuando se complete
        const listItem = document.getElementById(`order-${order.id}`);
        if (listItem) {
            listItem.style.backgroundColor = '#d4edda';
            listItem.style.color = '#155724';
            listItem.style.fontWeight = 'bold';
        }
    }, 6000);
}