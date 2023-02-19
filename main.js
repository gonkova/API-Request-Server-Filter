let users = [];
function renderUsers(users) {
    let html = '<table border="1">';
    html += '<tr id="t"><td>Id</td><td>Name</td><td>Last name</td><td>Age</td><td>Salary</td></tr>';

    for (let i = 0; i < users.length; i++) {
        let u = users[i];
        html += '<tr>';
        html += `<td>${u.id}</td>`;
        html += `<td>${u.name}</td>`;
        html += `<td>${u.lastName}</td>`;
        html += `<td>${u.age}</td>`;
        html += `<td>${u.salary}</td>`;
        html += '</tr>';
    }

    html += '</table>';
    $('#container').html(html);
}

function init() {
    let settings = {
        url: 'https://old.blacatzacademy.com/api/users',
        type: 'GET',
        success: function (response) {
            users = response;
            renderUsers(users);
        },
    };

    $.ajax(settings);
}

const url = 'https://old.blacatzacademy.com/api/users';
function showId() {
    const id = $('#id').val();
    let promise = $.ajax({
        type: 'GET',
        url: `${url}?id=${id}`,
        success: function (response) {
            users = response;
            let user = users;

            renderUsers(users);
            $('#u-resolt').html(html);
        }
    });
}

$(function () {
    init();
});