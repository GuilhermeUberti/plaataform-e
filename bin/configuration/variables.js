const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://plataformadmin:fiatlux93@cluster0-lcvhq.mongodb.net/test?retryWrites=true&w=majority'
    }
}
module.exports = variables;