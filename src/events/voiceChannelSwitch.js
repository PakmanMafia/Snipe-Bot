// Requirements
const { ltVc, vcChatRole } = require('../config.json');

// Code
module.exports = {
    name: 'voiceChannelSwitch',
    execute(member, oldChannel, newChannel) {
        if (newChannel == ltVc) {
            member.roles.add(vcChatRole)
        } else if (newChannel != ltVc) {
            member.roles.remove(vcChatRole)
        }
    }
}