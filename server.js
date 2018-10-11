const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
	//console.log(req.method, req.url);
	if (req.url === '/style.css') {
		res.end(fs.readFileSync('style.css', 'utf8'));
	} else {
		res.end(fs.readFileSync('index.html', 'utf8'));
	}
});

server.listen(process.env.PORT || 3000);
console.log('Server started');