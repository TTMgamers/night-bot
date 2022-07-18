let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• TOGAA BOTZ ( TaMs Bot )
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Toga Botz
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *AXIS:* [083829386551]
┣➥ *Dana:* [-GADAK-]
┣➥ *Gopay:* [-GADAK-]
┣➥ *Ovo:* [-GADAK-]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6283829386551*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ALAN BOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
