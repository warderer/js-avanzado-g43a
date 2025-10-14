export const displayAstronauts = (astronauts, htmlContainer) => {
    if (!astronauts || astronauts.length === 0) {
        htmlContainer.innerHTML = '<p>No hay astronautas en el espacio en este momento.</p>';
    }

    const astronautList = document.createElement('ul');
    astronauts.forEach(astronaut => {
        const listItem = document.createElement('li');
        listItem.textContent = `🧑‍🚀 ${astronaut.name} | 🚀 (${astronaut.craft})`;
        astronautList.appendChild(listItem);
    });

    htmlContainer.innerHTML = '';
    htmlContainer.appendChild(astronautList);
}