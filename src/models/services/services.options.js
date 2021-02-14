const AdminBro = require('admin-bro');
const Services = require('./services.item');

const { after: photoAfterHook, before: photoBeforeHook } = require('../../actions/photo.hook');


const options = {
};

module.exports = {
    options,
    resource: Services,
};
