// Declare Schema
const messageLogSchema = require('../schema/messageLogSchema')
const logSchema = require("../schema/messageLogSchema");

module.exports = {
    name: 'messageDelete',
    async execute(message) {
        if (message.content === "") {
            console.log("Empty Message");
        } else {
            if (message.partial) {
                message.fetch().then(fullMessage => {
                    new messageLogSchema({
                        author: message.author.tag,
                        authorId: message.author.id,
                        pfpUrl: message.author.avatar,
                        content: message.content,
                        createdAt: message.createdAt,
                        createdTimestamp: message.createdTimestamp
                    }).save()
                })
                    .catch(error => {
                        console.log('Something went wrong when fetching the message:', error);
                    });
            } else {
                console.log(message.content);
                new messageLogSchema({
                    author: message.author.tag,
                    authorId: message.author.id,
                    pfpUrl: message.author.avatar,
                    content: message.content,
                    createdAt: message.createdAt,
                    createdTimestamp: message.createdTimestamp
                }).save()
            }
            const logs = await messageLogSchema.find({});
            const numLogs = logs.length;

            if (numLogs < 10) {

            } else if (numLogs >= 20) {
                for (let d = 0; d < 5; d++) {
                    const logsToDelete = await messageLogSchema.find({}).sort({createdTimestamp: 1});
                    const oneLog = logsToDelete[0].createdTimestamp;
                    const query = { createdTimestamp: `${oneLog}` };
                    const deleteLog = await logSchema.deleteOne({query});
                    let deleted;

                    if (deleteLog.deletedCount === 1) {
                        deleted++;
                    } else {
                        console.log("Not deleted")
                    }
                }
            }
        }
    }
}