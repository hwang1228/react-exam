if (process.env.NODE_ENV === 'production') {
    module.exports = require('./BankStore.prod');
} else {
    module.exports = require('./BankStore.dev');
}


