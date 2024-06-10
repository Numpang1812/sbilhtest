function createNewTables(){
    let tableId = 4;
    let table = document.createElement('table');
    table.style.display = 'table-row';
    table.id = 'dataTable' + tableId;
    for(let i = 0; i < 3; i++){
        tableId += 4;
    }
}

