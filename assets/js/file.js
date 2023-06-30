//sorting code here
const table = document.getElementById('sortTable');
const headers = table.querySelectorAll("th");
const rows = table.querySelectorAll("tr");

function searchTable() {
    let input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("sortTable");
    tr = document.getElementsByTagName('tr');
    let e = document.getElementById("opt");
    let value = e.value;
    let text = e.options[e.selectedIndex].text;

    console.log("value", value);
    console.log('text', text);
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[value];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";

            } else {
                tr[i].style.display = "none";
            }

        }
    }
}



headers.forEach((header, headerIndex) => {
    header.addEventListener("click", () => {
        sortColumn(headerIndex);
    });
});
//transform the content of given cell in given column
const transform = function (index, content) {
    //get the data type of the column
    const type = headers[index].getAttribute("type");
    switch (type) {
        case "number":
            return parseFloat(content);
        case "string":
        default:
            return content;
    }
};

//track sort directions
let directions = Array(headers.length).fill("");
console.log(directions);

function sortColumn(headersIndex) {
    //check the direction asc or desc
    const direction = directions[headersIndex] || "asc";
    const multiplier = direction == "asc" ? 1 : -1;
    changeIcon(direction, headersIndex);
    //lets make new instance of rows
    let arrayRows = Array.from(rows);
    arrayRows.shift();
    let newRows = Array.from(arrayRows);
    newRows.sort(function (rowA, rowB) {
        //get the contents of cells

        const cellA = rowA.querySelectorAll("td")[headersIndex].innerHTML;
        const cellB = rowB.querySelectorAll("td")[headersIndex].innerHTML;
        let a = transform(headersIndex, cellA);
        let b = transform(headersIndex, cellA);
        if (a > b) {
            return 1 * multiplier;

        } else if (a < b) {
            return -1 * multiplier;
        } else {
            return 0;
        }

    });

    // remove old rows
    let tbody = document.getElementsByTagName('tbody');
    rows.forEach((row, index) => {
        if (index != 0) {
            tbody[0].removeChild(row);
        }
    });

    // /append new row
    newRows.forEach((newRow) => {
        tbody[0].appendChild(newRow);

    });
    //reverse the direction
    directions[headersIndex] = direction === "asc" ? "desc" : "asc";
}

function changeIcon(direction, index) {
    //inactive all icons
    for (let i = 0; i < headers.length; i++) {
        headers[i].childNodes[1].className = "";
    }
    let className;
    if (direction == "desc") {
        headers[index].childNodes[1].className = "fa-solid fa-caret-down active";
    } else {
        headers[index].childNodes[1].className = "fa-solid fa-caret-up active";
    }
}