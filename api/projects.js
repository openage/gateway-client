const projectsApi = require('../helpers/request-helper')('projects')


exports.create = (model, context) => {
    return projectsApi.create(model, context)
}

exports.search = async (query, context) => {
    return projectsApi.search(query, null, context)
}

exports.get = async (id, context) => {
    return projectsApi.get(id, null, context)
}