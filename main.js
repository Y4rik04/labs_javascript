window.onload = function() {
    init();
};
  
function init() {
    const mainDiv = document.getElementById('main');

    // створюю хеддер, мейн, футтер
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    // встановлюю висоти
    header.style.height = '100px';
    main.style.height = '500px';
    footer.style.height = '100px';

    // колір фону
    header.style.backgroundColor = 'lightblue';
    main.style.backgroundColor = 'lightgreen';
    footer.style.backgroundColor = 'lightyellow';

    //створюю діви в панелях
    const leftPanel = document.createElement('div');
    const content = document.createElement('div');
    const rightPanel = document.createElement('div');

    // ширина
    leftPanel.style.width = '33%';
    content.style.width = '33%';
    rightPanel.style.width = '33%';

    // колір фону для панель
    leftPanel.style.backgroundColor = 'lightcoral';
    content.style.backgroundColor = 'lightpink';
    rightPanel.style.backgroundColor = 'lightskyblue';

    //додає діви лоадеру
    leftPanel.innerHTML = '<div class="loader"></div>';
    content.innerHTML = '<div class="loader"></div>';
    rightPanel.innerHTML = '<div class="loader"></div>';

    // додає внутрішнеі діви до мейн
    main.appendChild(leftPanel);
    main.appendChild(content);
    main.appendChild(rightPanel);

    // кнопки хеддер
    header.innerHTML = `
        <button onclick="displayContent('User Rating')">User Rating</button>
        <button onclick="displayContent('News')">News</button>
        <button onclick="displayContent('Contacts')">Contacts</button>
        <button onclick="displayContent('About')">About</button>
    `;

    // блок футтер
    footer.innerHTML = `
        <div id="currentUsers">Current users: 0</div>
        <div id="newUsers">New users: </div>
    `;

    mainDiv.appendChild(header);
    mainDiv.appendChild(main);
    mainDiv.appendChild(footer);

    // ховаю лоадер і вивід "Немає користувачів" через 1 секунду
    setTimeout(function() {
        const loaders = document.querySelectorAll('.loader');
        loaders.forEach(loader => {
            loader.style.display = 'none';
        });
        content.innerHTML = 'No users<br><button onclick="getUsers()">Get Users</button>';
    }, 1000);

    //  пошук і кнопка на лівій панелі через 1 секунду
    setTimeout(function() {
        leftPanel.innerHTML += '<input type="text" id="searchInput"><button onclick="searchTable()">Search</button>';
    }, 1000);

    // Відображення суми балів на правій панелі через 1 секунду
    setTimeout(function() {
        const users = getNewUsers();
        const sum = users.reduce((acc, curr) => acc + curr.score, 0);
        rightPanel.innerHTML += `Total score: ${sum}`;
    }, 1000);
}

function displayContent(contentName) {
    const contentDiv = document.querySelector('main > div:nth-child(2)');
    contentDiv.innerHTML = `<h2>${contentName}</h2>`;
}

function getUsers() {
    fetchUsers().then(users => {
        const contentDiv = document.querySelector('main > div:nth-child(2)');
        contentDiv.innerHTML = generateTable(users);
    });
}
//пошук таблиці
function searchTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tableRows = document.querySelectorAll('table tr');
    tableRows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        if (name.includes(searchInput)) {
            row.style.backgroundColor = 'yellow';
        } else {
            row.style.backgroundColor = '';
        }
    });
}
// генерація таблциі
function generateTable(users) {
    let table = '<table border="1"><tr><th>Delete</th><th>Last Name</th><th>First Name</th><th>Score</th></tr>';
    users.forEach(user => {
        table += `<tr><td><button onclick="deleteRow(this)">Delete</button></td><td>${user.lastname}</td><td>${user.firstname}</td><td>${user.score}</td></tr>`;
    });
    table += '</table>';
    return table;
}
//видалення стовпця
function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
