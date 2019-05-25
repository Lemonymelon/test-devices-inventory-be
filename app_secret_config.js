const ENV = process.env.NODE_ENV || 'development';

const envAppSecret = process.env.APP_SECRET;

exports.APP_SECRET = ENV === 'production' ? envAppSecret : require('./config').APP_SECRET;

