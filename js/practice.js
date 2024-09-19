const tableBody = document.getElementById('content-container');
const table = document.getElementById('table')
let counter = 1;
document.getElementById('task-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const inputField = document.getElementById('input-value').value;
    const tr = document.createElement('tr');
    const th = document.createElement('th')
    const td = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = 'delete'
    btn.classList.add('delete-btn');
    th.textContent = counter;
    td.innerText = inputField;
    tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(btn)
    tableBody.appendChild(tr);
    btn.onclick = function() {
        tableBody.removeChild(tr);
    }
    counter++;
    document.getElementById('input-value').value = '';
});
document.getElementById('clear-btn').addEventListener('click', function() {
    tableBody.remove() 
})