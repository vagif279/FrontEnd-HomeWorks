function addRow() {
    const table = document.getElementById('myTable');
    const newRow = table.insertRow(-1);

    for (let i = 0; i < table.rows[0].cells.length; i++) {
        const cell = newRow.insertCell(i);
        cell.textContent = 'Новая ячейка '+i;
    }
}

function addColumn() {
    const table = document.getElementById('myTable');
    const columnIndex = table.rows[0].cells.length;

    for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].insertCell(columnIndex);
        cell.textContent = 'Новая ячейка '+i;
    }
}

function deleteRow() {
    const table = document.getElementById('myTable');
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function deleteColumn() {
    const table = document.getElementById('myTable');
    const columnIndex = table.rows[0].cells.length;

    if (columnIndex > 1) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}