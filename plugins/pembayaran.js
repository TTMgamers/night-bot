let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *OVO*: ----
║│➸ *DANA*: ----
║│➸ *PULSA*:083829386551
║│➸ *GOPAY*: ----
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  THE BEST OF THE BEST
║  
║        
╠════════════════════
║ _*POWERED BY TOGA Botz*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 VIGEN SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(PEMBAYARAN)$/i
handler.command = new RegExp

module.exports = handler
 
