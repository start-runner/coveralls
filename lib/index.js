export default (options = {}) => (input) => {
  return function coveralls(log) {
    const sendToCoveralls = require('coveralls').handleInput;

    return Promise.all(
      input.map((file) => {
        return new Promise((resolve, reject) => {
          sendToCoveralls(file.data, (error) => {
            if (error) {
              return reject(error);
            }

            log(file.path);

            resolve(file);
          }, options);
        });
      })
    );
  };
};
