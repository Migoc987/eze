const { MessageEmbed } = require("discord.js"), 
fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    var embed = new MessageEmbed()
    .setAuthor(`🔹 Commande administratif`)
    .setColor(db.color)
    .setDescription(`Partie administratif du Bot, dont seul l'owner peux modifier / interagir avec les commandes de cette catégorie.
    
> [Liste des commandes](https://Orumaa.Bot)`)
.addField("`bot`", `[Alias:](http://Orumaa.bot) \`botinfo\`,\`abonnement\` \n - Affiche les informations de votre abonnement.`)
.addField("`setavatar`", `[Alias:](http://Orumaa.bot) \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `[Alias:](http://Orumaa.bot) \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`prefix`", `[Alias:](http://Orumaa.bot) \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`stream`", `[Alias:](http://Orumaa.bot) \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du Bot`)
.addField("`color`", `[Alias:](http://Orumaa.bot) \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du Bot.`)
message.channel.send(embed)
var embed2 = new MessageEmbed()
.setAuthor(`🔹 Gestion de serveur`)
.setColor(db.color)
.setDescription(`Partie Gestion de serveur, les personnes ayant les permissions administrateur sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://Orumaa.Bot)`)
.addField("`giveaway`", `[Alias:](http://Orumaa.bot) \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `[Alias:](http://Orumaa.bot) \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `[Alias:](http://Orumaa.bot) \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `[Alias:](http://Orumaa.bot) \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](http://Orumaa.bot) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `[Alias:](http://Orumaa.bot) \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminée)`)
.addField("`autorole`", `[Alias:](http://Orumaa.bot) \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)
message.channel.send(embed2)
var embed3 = new MessageEmbed()
.setAuthor(`🔹 Modération de serveur`)
.setColor(db.color)
.setDescription(`Partie Modération de serveur, les personnes ayant les rôles préfinis sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://Orumaa.Bot)`)
.addField("`mpanel`", `[Alias:](http://Orumaa.bot) \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs.`)
.addField("`mute`", `[Alias:](http://Orumaa.bot) \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `[Alias:](http://Orumaa.bot) \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `[Alias:](http://Orumaa.bot) \`b\` \n - Bannis la personne.`)
.addField("`unban`", `[Alias:](http://Orumaa.bot) \`ub\`\n - Débannir une personne`)
.addField("`nuke`", `[Alias:](http://Orumaa.bot) \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `[Alias:](http://Orumaa.bot) \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
message.channel.send(embed3)
var embed4 = new MessageEmbed()
.setAuthor(`🔹 Catégorie fun`)
.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://Orumaa.Bot)`)
.addField("`kiss`", `[Alias:](http://Orumaa.bot) \`❌\` \n - Fais un bisous.`)
.addField("`fight`", `[Alias:](http://Orumaa.bot) \`❌\` \n - Combat une personne`)
.addField("`hug`", `[Alias:](http://Orumaa.bot) \`❌\` \n - Fais un calin a une personne.`)
message.channel.send(embed4)
var embed5 = new MessageEmbed()
.setAuthor(`🔹 Catégorie utilitaires`)
.setColor(db.color)
.setDescription(`C'est des catégories utile au serveur, certains commande sont accesible a tout le monde.
    
> [Liste des commandes](https://Orumaa.Bot)`)
.addField("`vc`", `[Alias:](http://Orumaa.bot) \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur.`)
.addField("`la`", `[Alias:](http://Orumaa.bot) \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `[Alias:](http://Orumaa.bot) \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `[Alias:](http://Orumaa.bot) \`aide\` \n - Affiche la liste des commandes`)
.setFooter(`Orumaa Bot • Version: ${config.bot.version} • ⚠️ Ceci est une pre-release, cette version n'est pas stable`)
message.channel.send(embed5)
};


module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement OrumaaBot",
  };