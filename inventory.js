function addItem() {

    let product = document.getElementById("itemName").value;
    let quantity = document.getElementById("itemQty").value;

    if(product === "" || quantity === ""){
        alert("Please fill all fields");
        return;
    }

    let status =
        quantity < 10
        ? '<span class="low-stock">Low Stock</span>'
        : '<span class="in-stock">In Stock</span>';

    let table = document.getElementById("inventoryTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = product;
    row.insertCell(1).innerHTML = quantity;
    row.insertCell(2).innerHTML = status;
    row.insertCell(3).innerHTML =
        '<button onclick="removeItem(this)">Delete</button>';

    document.getElementById("itemName").value = "";
    document.getElementById("itemQty").value = "";
}

function removeItem(button){
    button.parentNode.parentNode.remove();
}