const Discord = require('discord.js');
const Token = require('./../Token/PL.json');
const config = require('./config.json');


const client = new Discord.Client();
client.login(Token['Token']);

function ping(message){message.reply('pong!');}


client.on('message', message => {
	if(message.channel.id = config.photoid)
	{
		if(message.attachments.size === 1)
		{
			message.react(config.Thubmbsup)
			message.react(config.Thubmbsdown)
			message.react(config.Feedback)
		}
		else if (message.attachments.size > 1 && config.multipleattchments == false)
		{
			if(message.author.bot == false)
			{
				message.delete();
				id = message.reply("Sending multiple attachments is prohibited").then(msg => {msg.delete({timeout:3000})});				
			}

		}
		else if (message.attachments.size < 1 && config.multipleattchments == false)
		{
			if(message.author.bot == false)
			{
				message.delete();
				id = message.reply("Sending text in this chat is prohibited").then(msg => {msg.delete({timeout:3000})});				
			}

		}
		//if(message.attachments.size > 1)
	}
	console.log(message.attachments.size)
	if(message.content.startsWith(config.prefix))
	{
		message.reply(message.channel);
	}
});

client.on('messageReactionAdd', (reaction, user, message) => {
    if(reaction.emoji.name === config.Feedback && user.bot == false) {
    	
    	//Reply
    	reaction.message.channel.send("You started at Thread in " + client.channels.cache.get(config.feedback).toString() + "go there and tell us your thoughts")
//message.guild.channels.cache.get('channelID').toString();
    	// Copy
    	channel = client.channels.cache.get(config.feedback);
        reaction.message.attachments.forEach(Attachment => {
        	channel.send(Attachment.url);
        })
    }
});


/*
Message {
	channel: TextChannel {
		type: 'text',
		deleted: false,
		id: '709753416938946583',
		name: 'Allgemein',
		rawPosition: 0,
		parentID: '709753416938946581',
		permissionOverwrites: Collection [Map] {},
		topic: null,
		lastMessageID: '791261893502828574',
		rateLimitPerUser: 0,
		lastPinTimestamp: null,
		guild: Guild {
			members: [GuildMemberManager],
			channels: [GuildChannelManager],
			roles: [RoleManager],
			presences: [PresenceManager],
			voiceStates: [VoiceStateManager],
			deleted: false,
			available: true,
			id: '709753416938946580',
			shardID: 0,
			name: "dessyboy's bot testing server",
			icon: '351eec2df868916f93b54a9f79d5e971',
			splash: null,
			discoverySplash: null,
			region: 'europe',
			memberCount: 9,
			large: false,
			features: [],
			applicationID: null,
			afkTimeout: 300,
			afkChannelID: null,
			systemChannelID: '709753416938946583',
			embedEnabled: undefined,
			premiumTier: 0,
			premiumSubscriptionCount: 0,
			verificationLevel: 'NONE',
			explicitContentFilter: 'DISABLED',
			mfaLevel: 0,
			joinedTimestamp: 1608721468783,
			defaultMessageNotifications: 'MENTIONS',
			systemChannelFlags: [SystemChannelFlags],
			maximumMembers: 100000,
			maximumPresences: null,
			approximateMemberCount: null,
			approximatePresenceCount: null,
			vanityURLCode: null,
			vanityURLUses: null,
			description: null,
			banner: null,
			rulesChannelID: null,
			publicUpdatesChannelID: null,
			preferredLocale: 'en-US',
			ownerID: '345276559038611466',
			emojis: [GuildEmojiManager]
		},
		messages: MessageManager {
			cacheType: [class LimitedCollection extends Collection],
			cache: [LimitedCollection [Map]],
			channel: [Circular]
		},
		nsfw: false,
		_typing: Map {}
	},
	deleted: false,
	id: '791261893502828574',
	type: 'DEFAULT',
	system: false,
	content: 'Hi',
	author: User {
		id: '345276559038611466',
		system: false,
		locale: null,
		flags: UserFlags { bitfield: 256 },
		username: 'dessyboy',
		bot: false,
		discriminator: '0009',
		avatar: '49b19156a3776694ba31e465271c1d45',
		lastMessageID: '791261893502828574',
		lastMessageChannelID: '709753416938946583'
	},
	pinned: false,
	tts: false,
	nonce: '791261898304651264',
	embeds: [],
	attachments: Collection [Map] {},
	createdTimestamp: 1608721936346,
	editedTimestamp: 0,
	reactions: ReactionManager {
		cacheType: [class Collection extends Collection],
		cache: Collection [Map] {},
		message: [Circular]
	},
	mentions: MessageMentions {
		everyone: false,
		users: Collection [Map] {},
		roles: Collection [Map] {},
		_members: null,
		_channels: null,
		crosspostedChannels: Collection [Map] {}
	},
	webhookID: null,
	application: null,
	activity: null,
	_edits: [],
	flags: MessageFlags { bitfield: 0 },
	reference: null
}
*/