const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://plataformadmin:fiatlux93@cluster0-lcvhq.mongodb.net/test?retryWrites=true&w=majority'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|013f890e35d1b7f5e45f21e60f7863d6'
    }
}
module.exports = variables;