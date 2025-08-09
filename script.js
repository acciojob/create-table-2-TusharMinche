function createTable() {
    //Write your code here

	let table = document.getElementById("myTable");
	
	let numberOfRows = prompt("Input number of rows");
	numberOfRows = parseInt(numberOfRows);
	let numberOfCols = prompt("Input number of columns");
	numberOfCols = parseInt(numberOfCols);

	if(isNaN(numberOfRows) || isNaN(numberOfCols)) return;
	if(numberOfRows <= 0 || numberOfCols <= 0) {alert(); return;}

	for(let i = 0; i < numberOfRows; i++){
		let tr = document.createElement("tr");
		for(let j = 0; j < numberOfCols; j++){
			let td = document.createElement("td");
			td.textContent = `Row-${i} Column-${j}`;
			tr.append(td);
		}
		table.append(tr);
	}
}
