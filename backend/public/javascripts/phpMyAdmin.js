(function () {
    let mysql = require('mysql');

    let connection = mysql.createConnection({
        host: 'localhost',
        port: '8889',
        user: 'root',
        password: 'root',
        database: 'jobboard'
    });

    connection.connect(function(err) {
        if(err) throw err;
    });

    module.exports = connection;
})();