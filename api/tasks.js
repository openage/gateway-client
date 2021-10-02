const api = require('../helpers/request-helper')('tasks')

exports.search = async (query, context) => {
    return api.search(query, null, context)
}

exports.create = (model, context) => {
    if (!context.role || !context.user || !context.user.role) {
        return api.create(model, { path: 'guestTask' }, context)
    }
    return api.create(model, null, context)
}

exports.get = async (id, context) => {
    return api.get(id, null, context)
}

exports.update = async (id, model, context) => {
    return api.update(id, model, null, context)
}

exports.guestTask = (model, context) => {
    return api.create(model, { path: 'guestTask' }, context)
}