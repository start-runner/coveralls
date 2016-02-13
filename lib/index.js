export default (options = {}) => (input) => {
    return function coveralls(log) {
        const handleInput = require('coveralls/lib/handleInput');

        return Promise.all(
            input.map(file => {
                return new Promise((resolve, reject) => {
                    handleInput(file.data, err => {
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
