#!/usr/bin/env node

const prompt = require("prompt");

prompt.start();
prompt.get(['route'], function (err, result) {
    console.error('Command-line input received:');
    console.table(result);
});

