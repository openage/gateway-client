const tasksApi = require('../helpers/request-helper')('tasks')

exports.create = (model, context) => {
    return tasksApi.create(model, null, context)
}

exports.search = async (query, context) => {
    return tasksApi.search(query, null, context)
}

exports.get = async (id, context) => {
    return tasksApi.get(id, null, context)
}

exports.update = async (id, model, context) => {
    return tasksApi.update(id, model, null, context)
}