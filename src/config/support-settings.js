const supportConfig = {


    // Embed for the help desk
    embed: {
        title: "Help Desk",
        description: "Primary help desk. Need help? You came to the right place, to get started just use the select menu below!",
        //thumbnail: "image URL for thumbnail in top right corner",
        //image: "image URL for big image at bottom",
        //footer: "This is the small text at the bottom of the embed, it does not support markdown."
    },


    // The support settings
    support: {
        disableSupport: false, // Disables support
        createThread: false, // Creates a private thread. If you want to change how requestMessage and supportMessage work modify the strings in the support function in interactions.js
        supportRole: "1329490152170590240", // Role given to the user if extra support is requested
        requestMessage: "A support ticket has been created.", // If create thread is enabled then the created thread will be automatically added to the end of the default message.
        supportMessage: "Thank you for choosing Support Central as your support service, Please explain your issue in as much detail as possible and one of our staff members will be with you shortly. ",
        supportChannel: "1331657105815375872",
 

        selectMenuName: "Need help? We have you covered! ",
        supportOption: {
            name: "My question is not answered",
            description: "I require further support. ",
            emote: "❔"
        },


        loggingChannel: "1329489619112296500", // Channel for logging all questions and support status
        notificationRole: "1304976487358791701", // Role for staff
    },


    // Array of questions and answers for the help desk
    questions: [
        {
            question: "How do I claim roles?",
            questionDescription: "Information regarding roles in SC.",
            emote: "📜",
    
            answer: "To claim roles please go to the self-roles channel. You can earn other roles via activity, You can use /level in bot commands  to see your Arcane  level.",
            image: "",
            directSupport: false
        },
        {
            question: "Where do I go to appeal a punishment / report a staff member ?",
            questionDescription: "Information regarding appeals & staff reports.",
            emote: "<:SCAppealsReports:1317651417330356234>",
    
            answer: "You can join our [appeals server](https://discord.gg/QzQdHhbYdc), and read the information there. Please remember that we take staff reports very seriously, and ensure you have proof of Admin Abuse / staff member you wish to report.",
            //image: "",
            directSupport: false
        },
        {
            question: "How do I become a staff member ?",
            questionDescription: "",
            //emote: "<:SCStaff:1317651484137226260>",
    
            answer: "To join our staff team you must fill out the provided application for one of our departments, these can be found in the application channel.",
            //image: "",
            directSupport: false
        },
        {
            question: "How do I sponsor a giveaway ?",
            questionDescription: "Information regarding giveaways in Support Central.",
            emote: "💰",
    
            answer: "Please DM the HoPR or AHoPR with the amount & what you wish to fund the giveaway with, or click the button below.",
            //image: "",
            directSupport: true
        },
        {
            question: "How do I partner with the Support Central group ?",
            //questionDescription: "",
            //emote: "<:SCPartnership:1317674103963914381>",
    
            answer: "To become a partner, Your community must have a fair moderation system & good communication. Your server must have at least 15 users & must be one month old. If your community meets these requirements, please push the button below so we can talk further.",
            //image: "",
            directSupport: true
        },
        {
            question: "I have a suggestion / Would like to meet with a server admin. ",
            //questionDescription: "",
            //emote: "<:SCQ:1317651516588556298>",
    
            answer: "You can make any suggestion in the suggestions channel, for meetings with Executives & Administration, Please purchase it from the economy store.",
            //image: "",
            directSupport: false
        },  
	  {
            question: "How do I become a supporter ?",
            questionDescription: "Saekoboyy the dev was here :3",
            //emote: "<:SCSupporter:1317678135306747905>",
    
            answer: "The supporter role is reserved for server boosters only, if you wish to boost your contributions are really appreciated. ♥️",
            //image: "",
            directSupport: false
        },

    ]

}


module.exports = supportConfig



