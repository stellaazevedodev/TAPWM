module.exports = function (app) {

    app.get('/informacao/professores', function (req, res) {

        const sql = require('mssql/msnodesqlv8');

        const sqlConfig = {

            server: 'localhost\\SQLEXPRESS',

            database: 'BD',

            driver: 'ODBC Driver 18 for SQL Server',

            options: {

                trustedConnection: true,
                encrypt: false,
                trustServerCertificate: true

            }

        };

        async function getProfessores() {

            try {

                const pool = await sql.connect(sqlConfig);

                const results = await pool.request()
                    .query('SELECT * FROM PROFESSORES');

                res.render('informacao/professores', {
                    profs: results.recordset
                });

            } catch (err) {

                console.log(err);

            }

        }

        getProfessores();

    });

}