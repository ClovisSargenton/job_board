class Request {
    constructor() {
        const mysql = require('mysql');

        this.cnx = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "jobboard"
        });
    }

    selectAll(table) {
        this.cnx.connect(err => {
            if (err) {
                throw err;
            }

            this.cnx.query(`SELECT * FROM ${table}`, (err, result) => {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                this.cnx.end(function (err) {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    selectById(table, id) {
        this.cnx.connect(err => {
            if (err) {
                throw err;
            }

            this.cnx.query(`SELECT * FROM ${table} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, (err, result) => {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                this.cnx.end(err => {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    del(table, id) {
        this.cnx.connect(err => {
            if (err) {
                throw err;
            }

            this.cnx.query(`DELETE FROM ${table} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, (err, result) => {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                this.cnx.end(err => {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    update(table, id, values) {
        this.cnx.connect(err => {
            if (err) {
                throw err;
            }

            this.cnx.query(`UPDATE ${table} SET ${values} WHERE ${'num' + table.charAt(0).toUpperCase() + table.substring(1)}=${id}`, (err, result) => {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste
                console.log('=======================');

                this.cnx.end(err => {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }

    create(table, values) {
        this.cnx.connect(err => {
            if (err) {
                throw err;
            }

            this.cnx.query(`INSERT INTO ${table} VALUES ${values}`, (err, result) => {
                if (err) {
                    throw err;
                }
                console.log('=======================');
                console.log(result); // doit être la liste

                console.log('=======================');
                for (res of result) {
                    console.log(res.Titre);
                }

                this.cnx.end(err => {
                    if (err) {
                        throw err;
                    }
                });
            });
        });
    }
}

const requests = new Request();

module.exports = requests;