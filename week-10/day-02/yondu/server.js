const server = require('./routes');
const port = 3000;

server.listen(port, () => {console.log('app is listening on port', port)});