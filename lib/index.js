export default (options = {}) => (input) => {
    return function coveralls(log) {
        const sendToCoveralls = require('coveralls').handleInput;

        return Promise.all(
            input.map(file => {
                return new Promise((resolve, reject) => {
                    sendToCoveralls(file.data, err => {
                        if (err) {
                            return reject(err);
                        }

                        log(file.path);

                        resolve(file);
                    }, options);
                });
            })
        );
    };
};
