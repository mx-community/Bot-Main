import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//Owner
global.botNumber = ""
global.owner = [ "5493873655135", "5493873579805", "51959842633", "51957626299" ]

//Roles
global.suittag = ["5493873655135"] 
global.prems = []
global.mods = []

//Librerias
global.libreria = "mx-baileys"
global.vs = "^1.0.0"
global.nameqr = "ToruBot-MD"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.alanWasock = true

//Marcas
global.dev = "Alan.Js"
global.author = "@mx-community"
global.etiqueta = "@mx-support"
global.currency = "Monedas"
global.currency2 = "Puntos"
global.banner = "https://qu.ax/XPDQK.jpg"
global.catalogo = "https://qu.ax/EpMPK.jpg"

//Canales
global.ch = { ch1: "120363318353263389@newsletter" }

//Apis
global.APIs = {
lolhuman: {url: 'https://api.lolhuman.xyz/api', key: 'GataDiosV3'},
stellar: {url: 'https://api.stellarwa.xyz', key: 'GataDios'},
skizo: {url: 'https://skizo.tech/api', key: 'GataDios'},
alyachan: {url: 'https://api.alyachan.dev/api', key: null},
exonity: {url: 'https://exonity.tech/api', key: 'GataDios'},
ryzendesu: {url: 'https://api.ryzendesu.vip/api', key: null},
neoxr: {url: 'https://api.neoxr.eu/api', key: 'GataDios'},
davidcyriltech: {url: 'https://api.davidcyriltech.my.id', key: null},
dorratz: {url: 'https://api.dorratz.com', key: null},
siputzx: {url: 'https://api.siputzx.my.id/api', key: null},
vreden: {url: 'https://api.vreden.web.id/api', key: null},
fgmods: {url: 'https://api.fgmods.xyz/api', key: 'elrebelde21'},
popcat: {url: 'https://api.popcat.xyz', key: null}
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.greenBright("Update 'configXD.js'"))
import(`${file}?update=${Date.now()}`)
})

