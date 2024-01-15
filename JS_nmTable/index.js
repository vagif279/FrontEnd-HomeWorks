function createTable(n, m) {
    const table = document.createElement('table');

    for (let i = 0; i < n; i++) {
        const row = table.insertRow();

        for (let j = 0; j < m; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row ${i + 1}, Cell ${j + 1}`;
        }
    }

    document.body.appendChild(table);
}

//Creation of the table
createTable(3, 4); //values for 'n' and 'm'