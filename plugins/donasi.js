let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *AXIS:* [083829386551]
┣➥ *Dana:* [-GADAK-]
┣➥ *Gopay:* [-GADAK-]
┣➥ *Ovo:* [-GADAK-]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6283829386551*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
