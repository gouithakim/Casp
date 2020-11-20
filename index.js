const Discord = require("discord.js");
const { emitKeypressEvents } = require("readline");

const Client = new  Discord.Client ();
const token = process.env.token;

const prefix = "!"

Client.on("ready", async => {
    console.log("bot opérationnel");
    Client.user.setStatus("online");
    Client.user.setActivity("Entrain de pratiquer le sport de chambre.")   
});

let casper = "717815556664852541";
let coyote = "438422444815024131";
let BallSup = [
    "Je suis d'accord avec toi maître.",
    "Je te dois le respect.",
    "Bien sûr bel étalon.",
    "Quel homme !",
    "C'est une excellente idée :)",
    "Je suis ton soumis.",
    "Souhaites-tu que je te fasse rire ?", 
    "Je t'en prie, donne moi un pseudo, et je me chargerait personnellement de son cas.",
    "Oui.",
    "Un plaisir de te voir me ping",
    "Tu es beau, comme d'hab.",
    "Coco dézil est mon gars sûr."
]






Client.on("message", function(message) {
    if(message.content === "Salut") {
        message.channel.send("Salut bg/blg !")
}
})
 
Client.on('message', function(message){
    if(!message.guild) return
    if(message.mentions.members.first() !== undefined){
        if(message.mentions.members.first().id === Client.user.id) {
            if(message.member.user.id === casper){
                message.channel.send(BallSup[Math.floor(Math.random() * BallSup.length)])
                return 
                    if(message.member.user.id === coyote){
                        message.channel.send(BallSup[Math.floor(Math.random() * BallSup.length)])
                        return
                        if(message.member.user.id === anso){
                            message.channel.send(BallSup[Math.floor(Math.random() * BallSup.length)])
                        }
                    }   
    }
}
}
})


Client.on('message', function(message){
    if(!message.guild) return
    if(message.mentions.members.first() !== undefined){
        if(message.mentions.members.first().id === Client.user.id) {
            if(message.member.user.id === coyote){
                message.channel.send(BallSup[Math.floor(Math.random() * BallSup.length)])
                return 
            }
        }
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Ping"){
        message.channel.send("Pong");
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Othmane"){
        message.channel.send("3azzi");
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Ilias"){
        message.channel.send("HMAAAR");
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Ghita"){
        message.channel.send("Nmila");
    }
});

Client.on("message", message => {
    if(message.author.bot) return;
    
    if(message.content == "Youssef"){
        message.channel.send("IS SUS");
    }
});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Lina"){
        message.channel.send("Sniti7a");
    }
});


 Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == "Hakim"){
        message.channel.send("Notre maître.");
    }
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "779098227299057664").send(member.displayName + "Vient d'arriver :)\nNous sommes désormais **" + member.guild.memberCount + "** sur le serveur")
    member.roles.add("778730392349966348"), then(mbr => {
        console.log("Rôle attribué avec succès.")
    }).catch(() => {
        console.log("Le rôle n'a pas pu être attribué.");
    });
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté :(");
    member.guild.channels.cache.find(channel => channel.id === "779098227299057664").send(member.displayName + "Nous a malheureusement quitté :'(")
});

Client.login("token");
