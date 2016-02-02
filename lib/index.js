export default (file = 'coverage/lcov.info', options = {}) => (/* input */) => {
    return function coveralls(/* log */) {
        const pify = require('pify');
        const readFile = pify(require('fs').readFile);
        const handleInput = require('coveralls/lib/handleInput');

        return readFile(file, 'utf-8').then(data => {
            return new Promise((resolve, reject) => {
                handleInput(data, err => {
                    if (err) {
                        return reject(err);
                    }

                    resolve();
                }, options);
            });
        });
    };
};
