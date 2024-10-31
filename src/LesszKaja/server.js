"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = app;
var express_1 = require("express");
var path_1 = require("path");
var url_1 = require("url");
var engine_1 = require("@nguniversal/common/engine");
var common_1 = require("@angular/common");
var body_parser_1 = require("body-parser");
var mysql_1 = require("mysql");
var cors_1 = require("cors");
function app() {
    var server = (0, express_1.default)();
    var serverDistFolder = (0, path_1.dirname)((0, url_1.fileURLToPath)(import.meta.url));
    var browserDistFolder = (0, path_1.resolve)(serverDistFolder, '../browser');
    var indexHtml = (0, path_1.join)(serverDistFolder, 'index.server.html');
    var commonEngine = new engine_1.CommonEngine();
    server.set('view engine', 'html');
    server.set('views', browserDistFolder);
    // Middleware
    server.use((0, cors_1.default)());
    server.use(body_parser_1.default.json());
    // MySQL connection
    var db = mysql_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'your_database'
    });
    db.connect(function (err) {
        if (err) {
            console.error('Database connection failed:', err.stack);
            return;
        }
        console.log('Connected to database.');
    });
    // Registration endpoint
    server.post('/register', function (req, res) {
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
        var query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, password], function (err, result) {
            if (err) {
                res.status(500).send('Error registering user');
            }
            else {
                res.status(200).send('User registered successfully');
            }
        });
    });
    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get('*.*', express_1.default.static(browserDistFolder, {
        maxAge: '1y'
    }));
    // All regular routes use the Angular engine
    server.get('*', function (req, res, next) {
        var protocol = req.protocol, originalUrl = req.originalUrl, baseUrl = req.baseUrl, headers = req.headers;
        commonEngine
            .render({
            documentFilePath: indexHtml,
            url: "".concat(protocol, "://").concat(headers.host).concat(originalUrl),
            publicPath: browserDistFolder,
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: baseUrl }],
        })
            .then(function (html) { return res.send(html); })
            .catch(function (err) { return next(err); });
    });
    return server;
}
