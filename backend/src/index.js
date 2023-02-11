const app = require('./app');
require('./conexion');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server is running on port ' + app.get('port'));
}

main();