const fs = require('fs');

global.prompt = function (message) {
    process.stdout.write(message);

    let input = '';
    const buffer = Buffer.alloc(1);

    while (true) {
        const bytes = fs.readSync(0, buffer, 0, 1, null);

        if (bytes === 0 || buffer[0] === 10) break;

        if (buffer[0] !== 13) {
            input += buffer.toString();
        }
    }

    return input;
};