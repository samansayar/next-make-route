#!/usr/bin/env node
const prompt = require("prompt");
const fs = require('fs');
const log = require('log-beautify');

let root = 'app'
const path = `${process.cwd()}/${root}/`;
const argv = process.argv;

function MakeRoute({ route = '/dashboard' }) {
    try {
        if (!fs.existsSync(path)) {
            log.debug(`Create Directory ${root} was Successfully`);
            fs.mkdirSync(`${path}`);
        }
        var checkSlash = !route.startsWith('/') ?
            route :
            route.split('').slice(1, route.split('').length).join('');
        if (fs.existsSync(path + checkSlash)) return log.error('Not found 404 ❌')
        let splitpath = route.split('/');
        splitpath.map((item, index) => {
            fs.mkdir(`${path}/${route}`, { recursive: true }, err => {
                if (err) console.log(err);
            })
        })
        log.success('✅ create was been folder successfuly')
        return;
    } catch (error) {
        console.log("Error try catch", error)
        return;
    }
}

prompt.start();

prompt.get(['route'], function (err, result) {
    MakeRoute(result);
});

