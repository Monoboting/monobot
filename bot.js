const Discord = require('discord.js');
const client = new Discord.Client();

//translator
const fs = require("fs");


// Get the text file and load it into a variable.
var lbclasserc = fs.readFileSync("./lbClassic.txt", "utf8");
//const sol = '';
//const solArr = [];
//const solNum = 0;
//const senrd = false;
//const term = 0;
//const senrderng = false;
//<:glock1:471414267711586314> <:glock2:471414260354777090> <:glock3:471414244089397258> <:glock4:471414263458562058>
const berllz = {
	0 : "<:YellowBall:463752476730851328>",
	1 : "<:WhiteBall:463752474512326657>",
	2 : "<:SkyBlueBall:463752476362014731>",
	3 : "<:RednBlueBall:463752479247564800>",
	4 : "<:RedBall:463752476177334273>",
	5 : "<:PurpleBall:463752475934195743>",
	6 : "<:PolarBall:463752478496784384>",
	7 : "<:OrangeBall:463752475791327233>",
	8 : "<:LimeBall:463380371262930945>",
	9 : "<:LightPinkBall:463752475657371701>",
	10 : "<:LightGrayBall:463752477410590722>",
	11 : "<:InvertedBall:463752473308561418>",
	12 : "<:InfraYellowBall:463752479046369310>",
	13 : "<:InfraredBall:463752478031347714>",
	14 : "<:GreenBall:463752472909840404>",
	15 : "<:GrassyBall:463752476919726093>",
	16 : "<:DarkPinkBall:463752471035117578>",
	17 : "<:DarkGrayBall:463752470712287253>",
	18 : "<:DarkBlueBall:463752470925934592>",
	19 : "<:CoolBall:463752467616628737>",
	20 : "<:BrownBall:463752466945671224>"
};
const berllzNerm = {
	0 : "Yellow Ball",
	1 : "White Ball",
	2 : "Sky Blue Ball",
	3 : "Red n Blue Ball",
	4 : "Red Ball",
	5 : "Purple Ball",
	6 : "Polar Ball",
	7 : "Orange Ball",
	8 : "Lime Ball",
	9 : "Light Pink Ball",
	10 : "Light Gray Ball",
	11 : "Inverted Ball",
	12 : "Infra Yellow Ball",
	13 : "Infrared Ball",
	14 : "Green Ball",
	15 : "Grassy Ball",
	16 : "Dark Pink Ball",
	17 : "Dark Gray Ball",
	18 : "Dark Blue Ball",
	19 : "Cool Ball",
	20 : "Brown Ball"
};
const lerters = {
	0 : "<:A_:518484803729752064>",
	1 : "<:B:518484803792797696>",
	2 : "<:C:518484803847323656>",
	3 : "<:D:518484803495002113>",
	4 : "<:E_:518593677766033429>",
	5 : "<:F:518484804103176192>",
	6 : "<:G:518484804178804736>",
	7 : "<:H:518484804493115429>",
	8 : "<:I:518484804149313536>",
	9 : "<:J:518484803734208514>",
	10 : "<:K:518484803897524262>",
	11 : "<:L:518484803830415373>",
	12 : "<:M:518484803927146547>",
	13 : "<:N:518484803994124307>",
	14 : "<:O:518484804220747796>",
	15 : "<:P:518484803914301478>",
	16 : "<:Q:518484804510154772>",
	17 : "<:R:518484803830546434>",
	18 : "<:S:518484804199645185>",
	19 : "<:T:518484804178673664>",
	20 : "<:U:518484804384325632>",
	21 : "<:V:518484804031741952>",
	22 : "<:W:518484804094656515>",
	23 : "<:X:518484803981672486>",
	24 : "<:Y:518484804321411107>",
	25 : "<:Z:518484803105062923>",
	26 : "<:1:518484800190021632>",
	27 : "<:2:518484800504594443>",
	28 : "<:3:518484800869236747>",
	29 : "<:4:518484801758691338>",
	30 : "<:5:518484802068938753>",
	31 : "<:6:518484803226435584>",
	32 : "<:7:518484803348070427>",
	33 : "<:8:518484803473899541>",
	34 : "<:9:518484803629219841>",
	35 : "<:0:518484800667910154>",
	36 : "<:plus:518590861446217749>",
	37 : "<:period:518590860988907530>",
	38 : "<:percentage:518590861961986069>",
	39 : "<:minus:518590861064536093>",
	40 : "<:multiply:518590861651738627>", 
	41 : "<:lessthan:518592119699537950>",
	42 : "<:hashtag:518590862196867082>",
	43 : "<:greaterthan:518592120068505600>",
	44 : "<:forwardslash:518590861609664532>", 
	45 : "<:exclamationmark:518590861861322770>",
	46 : "<:divide:518590861706133534>", 
	47 : "<:backslash:518590861618184192>", 
	48 : "<:asteriskk:518590860414418945>",
	49 : "<:and:518592119401611282>"
};
const custermberllz = {
1 : "<:cyanglow:472470483187662849>",
2 : "<:greenandyellow:472470483606962176>",
3 : "<:redyellowduo:472470484227850240>",
4 : "<:leprasball:472473214858166282>",
5 : "<:LimeBall:472604665440239616>",
6 : "<:TwoHealthBars:472603868526673930>",
7 : "<:NowKiss:472604666014990337>",
8 : "<:Volvox:472775593650421761>",
9 : "<:Emerald:472775374514683920>",
10 : "<:MagneticBall:472877231077720074>",
11 : "<:BlueYarnBall:472878239107252274>",
12 : "<:SolarBall:472878238050549780>",
13 : "<a:PixelFire:472877228427051018>",
14 : "<:DiscordBall:472605819054325761>",
15 : "<:DiscBall:475374760017264641>",
16 : "<a:spin:475375364630249472>",
17 : "<:4GBall:475711204661395457>",
18 : "<:EBall:475711206825394209>",
19 : "<:HappyBall:475711725539295262>",
20 : "<:ArtBall:478412295438073857>",
21 : "<:FlexTape:479675041622130750>", 
22 : "<:owo:479674067981434917>",
23 : "<:Atomic:479675178570350592>", 
24 : "<:DeMonotised:479674048142376989>"
};
const custermberllzNerm = {
1 : "Cyan Glow Ball - ChaotiC",
2 : "Green and Yellow Ball - ChaotiC",
3 : "Red-Yellow-Duo Ball - ChaotiC",
4 : "Lepras Ball - DJ Lapras",
5 : "Lime Ball - Woomy on a vroomy",
6 : "Two Health Bars Ball - SSeptic",
7 : "Now Kiss Ball - SSeptic",
8 : "Volvox Ball - Volvox",
9 : "Emerald Ball - Volvox",
10 : "Magnetic Ball - buckbuckchick",
11 : "Blue Yarn Ball - buckbuckchick",
12 : "Solar Ball - WindMasterv1",
13 : "Pixel Fire Ball - YeetOrBeYeeten",
14 : "Discord Ball - Jek",
15 : "Disk Ball - buckbuckchick",
16 : "Spin Ball - SSeptic",
17 : "4G Ball - MicaelPlays",
18 : "E Ball - Weet-bix",
19 : "Happy Ball - G0LEM",
20 : "Art Ball - Lafocade",
21 : "Flex Tape Ball - SSeptic", 
22 : "OwO Ball - SSeptic",
23 : "Atomic Ball - buckbuckchick", 
24 : "DeMonotised - Everyone Else"
};
//Game
const berllzg = {
    0 : "<:YellowBall:463752476730851328>",
    1 : "<:WhiteBall:463752474512326657>",
    2 : "<:SkyBlueBall:463752476362014731>",
    3 : "<:RednBlueBall:463752479247564800>",
    4 : "<:RedBall:463752476177334273>",
    5 : "<:PurpleBall:463752475934195743>",
    6 : "<:PolarBall:463752478496784384>",
    7 : "<:OrangeBall:463752475791327233>",
    8 : "<:LimeBall:463380371262930945>",
    9 : "<:LightPinkBall:463752475657371701>",
    10 : "<:LightGrayBall:463752477410590722>",
    11 : "<:InvertedBall:463752473308561418>",
    12 : "<:InfraYellowBall:463752479046369310>",
    13 : "<:InfraredBall:463752478031347714>",
    14 : "<:GreenBall:463752472909840404>",
    15 : "<:GrassyBall:463752476919726093>",
    16 : "<:DarkPinkBall:463752471035117578>",
    17 : "<:DarkGrayBall:463752470712287253>",
    18 : "<:DarkBlueBall:463752470925934592>",
    19 : "<:CoolBall:463752467616628737>",
    20 : "<:BrownBall:463752466945671224>"
};
const berllzNermg = {
    0 : "Yellow Ball",
    1 : "White Ball",
    2 : "Sky Blue Ball",
    3 : "Red n Blue Ball",
    4 : "Red Ball",
    5 : "Purple Ball",
    6 : "Polar Ball",
    7 : "Orange Ball",
    8 : "Lime Ball",
    9 : "Light Pink Ball",
    10 : "Light Gray Ball",
    11 : "Inverted Ball",
    12 : "Infra Yellow Ball",
    13 : "Infrared Ball",
    14 : "Green Ball",
    15 : "Grassy Ball",
    16 : "Dark Pink Ball",
    17 : "Dark Gray Ball",
    18 : "Dark Blue Ball",
    19 : "Cool Ball",
    20 : "Brown Ball"
};
var hs = "";
var merxPlayerz = {
    0 : " ",
    1 : " ",
    2 : " "
};
var merxPlayerzLerf = {
    0 : 3,
    1 : 3,
    2 : 3
};
var merxTerm = {
    0 : 0,
    1 : 0,
    2 : 0
};
var merxPlayerzBool = {
    0 : false,
    1 : false,
    2 : false
};
var ranNermg = {
    0 : 0,
    1 : 0,
    2 : 0
};
var streakNum = {
    0 : 0,
    1 : 0,
    2 : 0
};
var testmsguser = "";
var testmsgid = "";
var tersterng = false;
var boolquerz = false;
var auth = "";
var querzNerm = 0;
//

client.on('ready', ()  =>{
    //console.log('I am ready!');
    client.user.setStatus("Online");
    client.user.setActivity("m!help|Monogolf")
});

client.on('message', message => {
    if(message.content == 'm!help'){
        message.author.send({embed: {
		color: 3447003,
        author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
        },
        title: "COMMANDS:",
        description: "•m!info\n•m!commands\n•m!solve [pack] [level]\n•m!game start\n•m!emote [text]\n•m!rule [number]\n•m!rps [r/p/s]\n•m!protip [number]\n•m!meme\n•m!ball",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
	if(message.content == 'm!commands'){
        message.channel.send({embed: {
        color: 3447003,
        author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
        },
        title: "COMMANDS:",
        description: "Detailed Information of the Commands",
        fields: [{
            name: "•m!info",
			value: "Provides general information about the bot"
        },
		{
            name: "•m!solve [pack] [level]",
			value: "Provides a pic with the correct angle/power of the requested level"
        },
        {
            name: "•m!rule [number]",
			value: "m!rule 1 provides the requested rule n°1"
        },
	{
            name: "•m!game start",
			value: "m!game start to begin the guessing game. | m!game stop to stop the game"
        },
	{
            name: "•m!emote [text]",
			value: "turns your text into emojis"
        },
		{
            name: "•m!rps [r/p/s]",
			value: "Play rock/paper/scissors with the bot. The bot doesn't cheat, we swear!"
        },
		{
            name: "•m!protip [number]",
			value: "m!protip 1 provides the requested protip n°1"
        },
		{
            name: "•m!meme",
			value: "m!meme provides a random meme"
        },
		{
            name: "•m!ball",
			value: "m!ball provides a random ball"
        }
        ],
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
	if(message.content == 'm!rps rock' || message.content == 'm!rps r'){
		var computerChoice = Math.random();
		if (computerChoice < 0.34){
			message.channel.send({embed: {
				title: "ITS A TIE!",
				description: "Player: Rock\nMonobot: Rock",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
		else if(computerChoice <= 0.67) {
			message.channel.send({embed: {
				title: "MONOBOT WINS!",
				description: "Player: Rock\nMonobot: Paper",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
		else {
			message.channel.send({embed: {
				title: "PLAYER WINS!",
				description: "Player: Rock\nMonobot: Scissors",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
    }
	if(message.content == 'm!rps paper' || message.content == 'm!rps p'){
		var computerChoice = Math.random();
		if (computerChoice < 0.34){
			message.channel.send({embed: {
				title: "PLAYER WINS!",
				description: "Player: Paper\nMonobot: Rock",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
		else if(computerChoice <= 0.67) {
			message.channel.send({embed: {
				title: "ITS A TIE!",
				description: "Player: Paper\nMonobot: Paper",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
		else {
			message.channel.send({embed: {
				title: "MONOBOT WINS!",
				description: "Player: Paper\nMonobot: Scissors",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
    }
	if(message.content == 'm!rps scissors' || message.content == 'm!rps s'){
		var computerChoice = Math.random();
		if (computerChoice < 0.34){
			message.channel.send({embed: {
				title: "MONOBOT WINS!",
				description: "Player: Scissors\nMonobot: Rock",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
		else if(computerChoice <= 0.67) {
			message.channel.send({embed: {
				title: "PLAYER WINS!",
				description: "Player: Scissors\nMonobot: Paper",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
		else {
			message.channel.send({embed: {
				title: "ITS A TIE!",
				description: "Player: Scissors\nMonobot: Scissors",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}
			});
		}
    }
    if(message.content == 'm!rule 1'){
		message.channel.send({embed: {
        title: "RULE #1:",
        description: "Be respectful to each other",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
    if(message.content == 'm!rule 2'){
		message.channel.send({embed: {
        title: "RULE #2:",
        description: "Don't SPAM (specifically don't spam other Discord servers links).",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
    if(message.content == 'm!rule 3'){
		message.channel.send({embed: {
        title: "RULE #3:",
        description: "No NSFW content allowed. You need an appropriate profile picture/username too.",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
    if(message.content == 'm!rule 4'){
		message.channel.send({embed: {
        title: "RULE #4:",
        description: "Avoid Swearing.",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
    if(message.content == 'm!rule 5'){
		message.channel.send({embed: {
        title: "RULE #5:",
        description: "Keep level sharing and level submissions to #level-sharing .",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
    if(message.content == 'm!rule 6'){
		message.channel.send({embed: {
        title: "RULE #6:",
        description: "Try to keep bug reports to #bugs .",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
    if(message.content == 'm!rule 7'){
		message.channel.send({embed: {
        title: "RULE #7:",
        description: "Do not fake a role proof. Send screenshots of ingame record/throphies signed with your name and with a line crossing the trophies (so people can't download it and make it pass as their own)",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
	if(message.content == 'm!rule 8'){
		message.channel.send({embed: {
        title: "RULE #8:",
        description: "Ignoring any of these rules might result in getting warning. If someone has over 2 warnings they could get banned depending of the rules they broke.",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
        
    
    
	if(message.content == 'm!rule 34'){
		message.channel.send({embed: {
        title: "( ͡° ͜ʖ ͡°)",
        description: "( ͡° ͜ʖ ͡°)",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
	if(message.content == 'm!game'){
		message.channel.send({embed: {
        title: "Guessing Game",
        description: "A guessing game where you have to guess the correct ball! \nYou start with 3 lives, losing one when you lose a stage. Choose a ball by typing the assign number :P If you don't feel like playing anymore, type m!game stop the bot will end the game. Due to lag, only 1 person can play at the time :)\nType m!game start to begin!",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
	if(message.content == 'm!info'){
		message.channel.send({embed: {
        title: "INFO",
        description: "Version 2.2\n\n-Owner/Coder: Jek\n-Helpers: AdSF, ChaotiC, Buck and DJ Lapras\n\nApproved by Lafocade",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }
	if(message.content == 'm!log'){
		message.channel.send({embed: {
        title: "V 2.2:",
        description: "NEW COMMAND\n- Text to Emoji\nm!emote [text]",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
    }/*
	var nermbproterp = 0;
	if(message.content == 'm!protip'){
		nermbproterp = Math.random();
		var termpnerm = 25;
		if (nermbproterp <= 1/termpnerm)
			nermbproterp = 1;
		else if (nermbproterp <= 2/termpnerm)
			nermbproterp = 2;
		else if (nermbproterp <= 3/termpnerm)
			nermbproterp = 3;
		else if (nermbproterp <= 4/termpnerm)
			nermbproterp = 4;
		else if (nermbproterp <= 5/termpnerm)
			nermbproterp = 5;
		else if (nermbproterp <= 6/termpnerm)
			nermbproterp = 6;
		else if (nermbproterp <= 7/termpnerm)
			nermbproterp = 7;
		else if (nermbproterp <= 8/termpnerm)
			nermbproterp = 8;
		else if (nermbproterp <= 9/termpnerm)
			nermbproterp = 9;
		else if (nermbproterp <= 10/termpnerm)
			nermbproterp = 10;
		else if (nermbproterp <= 11/termpnerm)
			nermbproterp = 11;
		else if (nermbproterp <= 12/termpnerm)
			nermbproterp = 12;
		else if (nermbproterp <= 13/termpnerm)
			nermbproterp = 13;
		else if (nermbproterp <= 14/termpnerm)
			nermbproterp = 14;
		else if (nermbproterp <= 15/termpnerm)
			nermbproterp = 15;
		else if (nermbproterp <= 16/termpnerm)
			nermbproterp = 16;
		else if (nermbproterp <= 17/termpnerm)
			nermbproterp = 17;
		else if (nermbproterp <= 18/termpnerm)
			nermbproterp = 18;
		else if (nermbproterp <= 19/termpnerm)
			nermbproterp = 19;
		else if (nermbproterp <= 20/termpnerm)
			nermbproterp = 20;
		else if (nermbproterp <= 21/termpnerm)
			nermbproterp = 21;
		else if (nermbproterp <= 22/termpnerm)
			nermbproterp = 22;
		else if (nermbproterp <= 23/termpnerm)
			nermbproterp = 23;
		else if (nermbproterp <= 24/termpnerm)
			nermbproterp = 24;
		else if (nermbproterp <= 25/termpnerm)
			nermbproterp = 25;
	}*/
	if(message.content == 'm!protip 1'){
		message.channel.send({embed: {
		title: "PROTIP #1:",
		description: "Submitted by: NotARock\nProTip: If you skip the extra ball levels, you get every ball on the level.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 2'){
		message.channel.send({embed: {
		title: "PROTIP #2:",
		description: "Submitted by: Jek\nProTip: Upgrade to have a better chance in winning.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 3'){
		message.channel.send({embed: {
		title: "PROTIP #3",
		description: "Submitted by: Jek\nProTip: If you are stuck in any level, type m!solve [level] and find out the solution",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 4'){
		message.channel.send({embed: {
		title: "PROTIP #4:",
		description: "Submitted by: AdSF\nProTip: Be patient. Progress will come with practice",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 5'){
		message.channel.send({embed: {
		title: "PROTIP #5:",
		description: "Submitted by: ChaotiC\nProTip: Get the ball in the hole",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 6'){
		message.channel.send({embed: {
		title: "PROTIP #6:",
		description: "Submitted by: lafocade\nProTip: Try to have at least 8 hours of sleep",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 7'){
		message.channel.send({embed: {
		title: "PROTIP #7:",
		description: "Submitted by: ChaotiC\nProTip: In general, it's better to have little different types of objects, and avoid cluttering the level up with unnecessary stuff.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 8'){
		message.channel.send({embed: {
		title: "PROTIP #8:",
		description: "Submitted by: Jek\nProTip: Always remember to charge your phone to max and play monogolf for the whole day ",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 9'){
		message.channel.send({embed: {
		title: "PROTIP #9:",
		description: "Submitted by: AdSF\nProTip: On the first level of a pack, you can't lose balls. Use that to your advantage by restarting untill a level you can't pass comes",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 10'){
		message.channel.send({embed: {
		title: "PROTIP #10:",
		description: "Submitted by: Monobot\nProTip: suggest protips by dm'ing  @AdSF and  @Jek",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 11'){
		message.channel.send({embed: {
		title: "PROTIP #11:",
		description: "Submitted by: DJ Lapras\nProTip: If you bought the magic upgrade, you will have 45 seconds with inifinite tries after you run out of balls. Use them wisely",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 12'){
		message.channel.send({embed: {
		title: "PROTIP #12:",
		description: "Submitted by: DJ Lapras\nProTip: You can continue playing at the level you were at after charging your phone or finishing a task ONLY in arcade mode.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 13'){
		message.channel.send({embed: {
		title: "PROTIP #13",
		description: "Submitted by: DJ Lapras\nProTip: Beating community packs or challenges will give you cooler balls skins. (Some say the harder the pack, the better the skin :3)",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 14'){
		message.channel.send({embed: {
		title: "PROTIP #14:",
		description: "Submitted by: Jek\nProTip: Watch ads to help devs and to get extra balls",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 15'){
		message.channel.send({embed: {
		title: "PROTIP #15:",
		description: "Submitted by: DJ Lapras\nProTip: Use the games music to time your shots and skip levels.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 16'){
		message.channel.send({embed: {
		title: "PROTIP #16:",
		description: "Submitted by: AdSF\nProTip: A big flash always comes after 3 tiny ones. Use that for your advantage to skip levels",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 17'){
		message.channel.send({embed: {
		title: "PROTIP #17:",
		description: "Submitted by: DJ Lapras\nProTip: Create levels using the editor, post a screenshot in Monogolf discord/twitter, and maybe it will get into the game.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 18'){
		message.channel.send({embed: {
		title: "PROTIP #18:",
		description: "Submitted by: AdSF\nProTip: Buying the premium balls will give you a transparent ball and a colour changing one. It's like a donation with a little bonus :)",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 19'){
		message.channel.send({embed: {
		title: "PROTIP #19:",
		description: "Submitted by: buckbuckchick\nProTip: Don't rush when playing arcade mode, but don't hesitate when playing challenges",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 20'){
		message.channel.send({embed: {
		title: "PROTIP #20:",
		description: "Submitted by: buckbuckchick\nProTip: Play Monogolf if you have nothing to do, or play Monogolf with your friends!",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 21'){
		message.channel.send({embed: {
		title: "PROTIP #21:",
		description: "Submitted by: Geogolf\nProTip: You can screenshot levels you're having problems, then remake them in the editor for easy practice.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 22'){
		message.channel.send({embed: {
		title: "PROTIP #22:",
		description: "Submitted by: DJ Lapras\nProTip: Dont delete monogolf. If you do, you will lose all your progress.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 23'){
		message.channel.send({embed: {
		title: "PROTIP #23:",
		description: "Submitted by: MicaelPlays\nProTip: Think first, shoot later.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 24'){
		message.channel.send({embed: {
		title: "PROTIP #24:",
		description: "Submitted by: Monobot\nProTip: cover the screen as much as you can while signing it and crossing the trophies",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 25'){
		message.channel.send({embed: {
		title: "PROTIP #25:",
		description: "Submitted by: Lafocade\nProTip: Love is important.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!protip 26'){
		message.channel.send({embed: {
		title: "PROTIP #26:",
		description: "Submitted by: AdSF\nProTip: Take your time to analyze a level. There's no need to rush it.",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!meme'){
		var rerndammerme = Math.random();
		var nermmerme = 50;
		if (rerndammerme <= 1/nermmerme)
			rerndammerme = 1;
		else if (rerndammerme <= 2/nermmerme)
			rerndammerme = 2;
		else if (rerndammerme <= 3/nermmerme)
			rerndammerme = 3;
		else if (rerndammerme <= 4/nermmerme)
			rerndammerme = 4;
		else if (rerndammerme <= 5/nermmerme)
			rerndammerme = 5;
		else if (rerndammerme <= 6/nermmerme)
			rerndammerme = 6;
		else if (rerndammerme <= 7/nermmerme)
			rerndammerme = 7;
		else if (rerndammerme <= 8/nermmerme)
			rerndammerme = 8;
		else if (rerndammerme <= 9/nermmerme)
			rerndammerme = 9;
		else if (rerndammerme <= 10/nermmerme)
			rerndammerme = 10;
		else if (rerndammerme <= 11/nermmerme)
			rerndammerme = 11;
		else if (rerndammerme <= 12/nermmerme)
			rerndammerme = 12;
		else if (rerndammerme <= 13/nermmerme)
			rerndammerme = 13;
		else if (rerndammerme <= 14/nermmerme)
			rerndammerme = 14;
		else if (rerndammerme <= 15/nermmerme)
			rerndammerme = 15;
		else if (rerndammerme <= 16/nermmerme)
			rerndammerme = 16;
		else if (rerndammerme <= 17/nermmerme)
			rerndammerme = 17;
		else if (rerndammerme <= 18/nermmerme)
			rerndammerme = 18;
		else if (rerndammerme <= 19/nermmerme)
			rerndammerme = 19;
		else if (rerndammerme <= 20/nermmerme)
			rerndammerme = 20;
		else if (rerndammerme <= 21/nermmerme)
			rerndammerme = 21;
		else if (rerndammerme <= 22/nermmerme)
			rerndammerme = 22;
		else if (rerndammerme <= 23/nermmerme)
			rerndammerme = 23;
		else if (rerndammerme <= 24/nermmerme)
			rerndammerme = 24;
		else if (rerndammerme <= 25/nermmerme)
			rerndammerme = 25;
		else if (rerndammerme <= 26/nermmerme)
			rerndammerme = 26;
		else if (rerndammerme <= 27/nermmerme)
			rerndammerme = 27;
		else if (rerndammerme <= 28/nermmerme)
			rerndammerme = 28;
		else if (rerndammerme <= 29/nermmerme)
			rerndammerme = 29;
		else if (rerndammerme <= 30/nermmerme)
			rerndammerme = 30;
		else if (rerndammerme <= 31/nermmerme)
			rerndammerme = 31;
		else if (rerndammerme <= 32/nermmerme)
			rerndammerme = 32;
		else if (rerndammerme <= 33/nermmerme)
			rerndammerme = 33;
		else if (rerndammerme <= 34/nermmerme)
			rerndammerme = 34;
		else if (rerndammerme <= 35/nermmerme)
			rerndammerme = 35;
		else if (rerndammerme <= 36/nermmerme)
			rerndammerme = 36;
		else if (rerndammerme <= 37/nermmerme)
			rerndammerme = 37;
		else if (rerndammerme <= 38/nermmerme)
			rerndammerme = 38;
		else if (rerndammerme <= 39/nermmerme)
			rerndammerme = 39;
		else if (rerndammerme <= 40/nermmerme)
			rerndammerme = 40;
		else if (rerndammerme <= 41/nermmerme)
			rerndammerme = 41;
		else if (rerndammerme <= 42/nermmerme)
			rerndammerme = 42;
		else if (rerndammerme <= 43/nermmerme)
			rerndammerme = 43;
		else if (rerndammerme <= 44/nermmerme)
			rerndammerme = 44;
		else if (rerndammerme <= 45/nermmerme)
			rerndammerme = 45;
		else if (rerndammerme <= 46/nermmerme)
			rerndammerme = 46;
		else if (rerndammerme <= 47/nermmerme)
			rerndammerme = 47;
		else if (rerndammerme <= 48/nermmerme)
			rerndammerme = 48;
		else if (rerndammerme <= 49/nermmerme)
			rerndammerme = 49;
		else if (rerndammerme <= 50/nermmerme)
			rerndammerme = 50;
		
		if (rerndammerme == 1 || rerndammerme == 2)
			message.channel.send("Meme is made by Mr.MarioOdyssey");
		if (rerndammerme == 3 || rerndammerme == 22)
			message.channel.send("Meme is made by Jek");
		if (rerndammerme == 40 || rerndammerme == 39 || rerndammerme == 38 || rerndammerme == 37)
			message.channel.send("Meme is made by AdSF");
		if (rerndammerme == 4 || rerndammerme == 15)
			message.channel.send("Meme is made by 24K Dιαмoɴd");
		if (rerndammerme == 5 || rerndammerme == 6)
			message.channel.send("Meme is made by Ctrl+Alt");
		if (rerndammerme == 7 || rerndammerme == 8 || rerndammerme == 11)
			message.channel.send("Meme is made by ©Geo®™");
		if (rerndammerme == 9 || rerndammerme == 10 || rerndammerme == 12 || rerndammerme == 41 || rerndammerme == 26 || rerndammerme == 42|| rerndammerme == 43|| rerndammerme == 44 || rerndammerme == 45 || rerndammerme == 47 || rerndammerme == 48 || rerndammerme == 49)
			message.channel.send("Meme is made by DJ Lapras");
		if (rerndammerme == 13)
			message.channel.send("Meme is made by emisv stonk");
		if (rerndammerme == 14)
			message.channel.send("Meme is made by bolis");
		if (rerndammerme == 50)
			message.channel.send("Meme is made by Geogolf");
		if (rerndammerme == 33)
			message.channel.send("Meme is made by Woomy on a vroomy");
		if (rerndammerme == 20 || rerndammerme == 21|| rerndammerme == 23|| rerndammerme == 24|| rerndammerme == 25 || rerndammerme == 27 || rerndammerme == 28 || rerndammerme == 31 || rerndammerme == 32)
			message.channel.send("Meme is made by SSeptic");
		if (rerndammerme == 17 || rerndammerme == 18 || rerndammerme == 19 || rerndammerme == 36)
			message.channel.send("Meme is made by D∆RITO");		
		if (rerndammerme == 16 || rerndammerme == 35 || rerndammerme == 34)
			message.channel.send("Meme is made by Buckbuckchick");
		if (rerndammerme == 29 || rerndammerme == 30)
			message.channel.send("Meme is made by Flipcakez");
		if (rerndammerme == 46)
			message.channel.send("Meme is made by MicaelPlays");
		
        message.channel.send({files: ["./meme"+ rerndammerme +".jpg"]});
    }
	if(message.content == 'm!legend'){
		message.channel.send("Legendary Meme");
		
        message.channel.send({files: ["./legend.jpg"]});
    }
    if(message.content == 'm!lb classic'){
		message.channel.send({embed: {
		title: "LEADERBOARD CLASSIC",
		description: ""+ lbclasserc +"",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
    }
    if(message.content == 'm!gun'){
		message.channel.send("<:gun1:471054081809448960><:gun2:471054082061107211><:gun3:471054078751932416><:gun4:471054075967045633>");
	}
	if(message.content == 'm!glock'){
		message.channel.send( "<:glock1:471414267711586314><:glock2:471414260354777090><:glock3:471414244089397258>\n<:glock4:471414263458562058>");
	}
	if(message.content == 'm!ak-47'){
		message.channel.send("<:ak472:472154846049337354><:ak471:472155187436453898>");
	}
    if(message.content == 'm!ball'){
	    var ranNerm = 0;
	    do {
		ranNerm = Math.random();
		if (ranNerm <= 0.05)
			ranNerm = 0;
		else if (ranNerm <= 0.10)
			ranNerm = 1;
		else if (ranNerm <= 0.15)
			ranNerm = 2;
		else if (ranNerm <= 0.20)
			ranNerm = 3;
		else if (ranNerm <= 0.25)
			ranNerm = 4;
		else if (ranNerm <= 0.30)
			ranNerm = 5;
		else if (ranNerm <= 0.35)
			ranNerm = 6;
		else if (ranNerm <= 0.40)
			ranNerm = 7;
		else if (ranNerm <= 0.45)
			ranNerm = 8;
		else if (ranNerm <= 0.50)
			ranNerm = 9;
		else if (ranNerm <= 0.55)
			ranNerm = 10;
		else if (ranNerm <= 0.60)
			ranNerm = 11;
		else if (ranNerm <= 0.65)
			ranNerm = 12;
		else if (ranNerm <= 0.70)
			ranNerm = 13;
		else if (ranNerm <= 0.75)
			ranNerm = 14;
		else if (ranNerm <= 0.80)
			ranNerm = 15;
		else if (ranNerm <= 0.85)
			ranNerm = 16;
		else if (ranNerm <= 0.90)
			ranNerm = 17;
		else if (ranNerm <= 0.95)
			ranNerm = 18;
	} while (ranNerm != 0 && ranNerm != 1 && ranNerm != 2 && ranNerm != 3 && ranNerm != 4 && ranNerm != 5 && ranNerm != 6 && ranNerm != 7 && ranNerm != 8 && ranNerm != 9 && ranNerm != 10 && ranNerm != 11 && ranNerm != 12 && ranNerm != 13 && ranNerm != 14 && ranNerm != 15 && ranNerm != 16 && ranNerm != 17 && ranNerm != 18);
	message.channel.send({embed: {
	title: "" + berllzNerm[ranNerm] + "",
	description: "" + berllz[ranNerm] + "",
	timestamp: new Date(),
	footer: {
			icon_url: client.user.avatarURL,
			text: "Monogolf Bot"
		}
	}});
    }
	if(message.content == 'm!ball custom'){
		rerndammerme = Math.random();
		nermmerme = 24;
		if (rerndammerme <= 1/nermmerme)
			rerndammerme = 1;
                else if (rerndammerme <= 2/nermmerme)
			rerndammerme = 2;
                else if (rerndammerme <= 3/nermmerme)
			rerndammerme = 3;
                else if (rerndammerme <= 4/nermmerme)
			rerndammerme = 4;
		else if (rerndammerme <= 5/nermmerme)
			rerndammerme = 5;
		else if (rerndammerme <= 6/nermmerme)
			rerndammerme = 6;
		else if (rerndammerme <= 7/nermmerme)
			rerndammerme = 7;
		else if (rerndammerme <= 8/nermmerme)
			rerndammerme = 8;
		else if (rerndammerme <= 9/nermmerme)
			rerndammerme = 9;
		else if (rerndammerme <= 10/nermmerme)
			rerndammerme = 10;
		else if (rerndammerme <= 11/nermmerme)
			rerndammerme = 11;
		else if (rerndammerme <= 12/nermmerme)
			rerndammerme = 12;
		else if (rerndammerme <= 13/nermmerme)
			rerndammerme = 13;
		else if (rerndammerme <= 14/nermmerme)
			rerndammerme = 14;
		else if (rerndammerme <= 15/nermmerme)
			rerndammerme = 15;
		else if (rerndammerme <= 16/nermmerme)
			rerndammerme = 16;
		else if (rerndammerme <= 17/nermmerme)
			rerndammerme = 17;
		else if (rerndammerme <= 18/nermmerme)
			rerndammerme = 18;
		else if (rerndammerme <= 19/nermmerme)
			rerndammerme = 19;
		else if (rerndammerme <= 20/nermmerme)
			rerndammerme = 20;
		else if (rerndammerme <= 21/nermmerme)
			rerndammerme = 21;
		else if (rerndammerme <= 22/nermmerme)
			rerndammerme = 22;
		else if (rerndammerme <= 23/nermmerme)
			rerndammerme = 23;
		else if (rerndammerme <= 24/nermmerme)
			rerndammerme = 24;
		message.channel.send({embed: {
	title: "" + custermberllzNerm[rerndammerme] + "",
	description: "" + custermberllz[rerndammerme] + "",
	timestamp: new Date(),
	footer: {
			icon_url: client.user.avatarURL,
			text: "Monogolf Bot"
		}
	}});
     }
	
    if(message.content == 'm!owo'){
	    message.delete()
		message.channel.send({embed: {
        title: "owo",
        description: "owo",
        timestamp: new Date(),
        footer: {
                icon_url: client.user.avatarURL,
                text: "Monogolf Bot"
            }
        }
    });
	    }
	    if(message.content == 'm!oof'){
	    message.delete();
		message.channel.send("<:oof:475373616876224535>");
    }
	if(message.content == '3999'){
	    message.delete();
		message.channel.send("4000");
    }/*
	if(message.content == 'm!adsf'){
	    message.delete();
		message.channel.send("<@321685193817849856>");
    }*/
	if(message.content == 'm!shoot'){
	    message.channel.send("<a:shooting:471476918940598273>");
    }
	if(message.content == 'm!golf'){
	    message.channel.send("<a:golf:471765959447805973>");
    }
	if(message.content == 'm!elmo'){
	    message.channel.send("<a:elmo:471767451680505856>");
    }
	if(message.content == 'm!lapras'){
	    message.channel.send("<a:lapras:471783111299039259>");
    }
	
	if(message.content == 'm!rainbow'){
	    message.channel.send({embed: {
				title: "Rainbow Ball",
				description: "<a:RainbowBall:471825657798852650>",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}}).then(function (message){
					message.react("<a:RainbowBall:471825657798852650>")
				}).catch(function(){
					
				});
    }
	
	if(message.content == 'm!transparent'){
	    message.channel.send({embed: {
				title: "Transparent Ball",
				description: "<:transparentBall:471830753718697997>",
				timestamp: new Date(),
				footer: {
						icon_url: client.user.avatarURL,
						text: "Monogolf Bot"
					}
				}}).then(function (message){
					message.react("<:transparentBall:471830753718697997>")
				}).catch(function(){
					
				});
    }
	
	
    if(message.content == 'm!solve arcade 1' || message.content == 'm!solve 1' || message.content == 'm!solve arcade 151' || message.content == 'm!solve 151' || message.content == 'm!solve arcade 301' || message.content == 'm!solve 301'){
        message.channel.send("Arcade Level 1");
        message.channel.send({files: ["./1.png"]});
    }
    if(message.content == 'm!solve arcade 2' || message.content == 'm!solve 2' || message.content == 'm!solve arcade 152' || message.content == 'm!solve 152' || message.content == 'm!solve arcade 302' || message.content == 'm!solve 302'){
        message.channel.send("Arcade Level 2");
        message.channel.send({files: ["./2.png"]});
    }
    if(message.content == 'm!solve arcade 3' || message.content == 'm!solve 3' || message.content == 'm!solve arcade 153' || message.content == 'm!solve 153' || message.content == 'm!solve arcade 303' || message.content == 'm!solve 303'){
        message.channel.send("Arcade Level 3");
        message.channel.send({files: ["./3.png"]});
    }
    if(message.content == 'm!solve arcade 4' || message.content == 'm!solve 4' || message.content == 'm!solve arcade 154' || message.content == 'm!solve 154' || message.content == 'm!solve arcade 304' || message.content == 'm!solve 304'){
        message.channel.send("Arcade Level 4");
        message.channel.send({files: ["./4.png"]});
    }
    if(message.content == 'm!solve arcade 5' || message.content == 'm!solve 5' || message.content == 'm!solve arcade 155' || message.content == 'm!solve 155' || message.content == 'm!solve arcade 305' || message.content == 'm!solve 305'){
        message.channel.send("Arcade Level 5");
        message.channel.send({files: ["./5.png"]});
    }
    if(message.content == 'm!solve arcade 6' || message.content == 'm!solve 6' || message.content == 'm!solve arcade 156' || message.content == 'm!solve 156' || message.content == 'm!solve arcade 306' || message.content == 'm!solve 306'){
        message.channel.send("Arcade Level 6");
        message.channel.send({files: ["./6.png"]});
    }
    if(message.content == 'm!solve arcade 7' || message.content == 'm!solve 7' || message.content == 'm!solve arcade 157' || message.content == 'm!solve 157' || message.content == 'm!solve arcade 307' || message.content == 'm!solve 307'){
        message.channel.send("Arcade Level 7");
        message.channel.send({files: ["./7.png"]});
    }
    if(message.content == 'm!solve arcade 8' || message.content == 'm!solve 8' || message.content == 'm!solve arcade 158' || message.content == 'm!solve 158' || message.content == 'm!solve arcade 308' || message.content == 'm!solve 308'){
        message.channel.send("Arcade Level 8");
        message.channel.send({files: ["./8.png"]});
    }
    if(message.content == 'm!solve arcade 9' || message.content == 'm!solve 9' || message.content == 'm!solve arcade 159' || message.content == 'm!solve 159' || message.content == 'm!solve arcade 309' || message.content == 'm!solve 309'){
        message.channel.send("Arcade Level 9");
        message.channel.send({files: ["./9.png"]});
    }
    if(message.content == 'm!solve arcade 10' || message.content == 'm!solve 10' || message.content == 'm!solve arcade 160' || message.content == 'm!solve 160' || message.content == 'm!solve arcade 310' || message.content == 'm!solve 310'){
        message.channel.send("Arcade Level 10");
        message.channel.send({files: ["./10.png"]});
    }
    if(message.content == 'm!solve arcade 11' || message.content == 'm!solve 11' || message.content == 'm!solve arcade 161' || message.content == 'm!solve 161' || message.content == 'm!solve arcade 311' || message.content == 'm!solve 311'){
        message.channel.send("Arcade Level 11");
        message.channel.send({files: ["./11.png"]});
    }
    if(message.content == 'm!solve arcade 12' || message.content == 'm!solve 12' || message.content == 'm!solve arcade 162' || message.content == 'm!solve 162' || message.content == 'm!solve arcade 312' || message.content == 'm!solve 312'){
        message.channel.send("Arcade Level 12");
        message.channel.send({files: ["./12.png"]});
    }
    if(message.content == 'm!solve arcade 13' || message.content == 'm!solve 13' || message.content == 'm!solve arcade 163' || message.content == 'm!solve 163' || message.content == 'm!solve arcade 313' || message.content == 'm!solve 313'){
        message.channel.send("Arcade Level 13");
        message.channel.send({files: ["./13.png"]});
    }
    if(message.content == 'm!solve arcade 14' || message.content == 'm!solve 14' || message.content == 'm!solve arcade 164' || message.content == 'm!solve 164' || message.content == 'm!solve arcade 314' || message.content == 'm!solve 314'){
        message.channel.send("Arcade Level 14");
        message.channel.send({files: ["./14.png"]});
    }
    if(message.content == 'm!solve arcade 15' || message.content == 'm!solve 15' || message.content == 'm!solve arcade 165' || message.content == 'm!solve 165' || message.content == 'm!solve arcade 315' || message.content == 'm!solve 315'){
        message.channel.send("Arcade Level 15");
        message.channel.send({files: ["./15.png"]});
    }
    if(message.content == 'm!solve arcade 16' || message.content == 'm!solve 16' || message.content == 'm!solve arcade 166' || message.content == 'm!solve 166' || message.content == 'm!solve arcade 316' || message.content == 'm!solve 316'){
        message.channel.send("Arcade Level 16");
        message.channel.send({files: ["./16.png"]});
    }
    if(message.content == 'm!solve arcade 17' || message.content == 'm!solve 17' || message.content == 'm!solve arcade 167' || message.content == 'm!solve 167' || message.content == 'm!solve arcade 317' || message.content == 'm!solve 317'){
        message.channel.send("Arcade Level 17");
        message.channel.send({files: ["./17.png"]});
    }
    if(message.content == 'm!solve arcade 18' || message.content == 'm!solve 18' || message.content == 'm!solve arcade 168' || message.content == 'm!solve 168' || message.content == 'm!solve arcade 318' || message.content == 'm!solve 318'){
        message.channel.send("Arcade Level 18");
        message.channel.send({files: ["./18.png"]});
    }
    if(message.content == 'm!solve arcade 19' || message.content == 'm!solve 19' || message.content == 'm!solve arcade 169' || message.content == 'm!solve 169' || message.content == 'm!solve arcade 319' || message.content == 'm!solve 319'){
        message.channel.send("Arcade Level 19");
        message.channel.send({files: ["./19.png"]});
    }
    if(message.content == 'm!solve arcade 20' || message.content == 'm!solve 20' || message.content == 'm!solve arcade 170' || message.content == 'm!solve 170' || message.content == 'm!solve arcade 320' || message.content == 'm!solve 320'){
        message.channel.send("Arcade Level 20");
        message.channel.send({files: ["./20.png"]});
    }
	if(message.content == 'm!solve arcade 21' || message.content == 'm!solve 21' || message.content == 'm!solve arcade 171' || message.content == 'm!solve 171' || message.content == 'm!solve arcade 321' || message.content == 'm!solve 321'){
        message.channel.send("Arcade Level 21");
        message.channel.send({files: ["./21.jpg"]});
    }
	if(message.content == 'm!solve arcade 22' || message.content == 'm!solve 22' || message.content == 'm!solve arcade 172' || message.content == 'm!solve 172' || message.content == 'm!solve arcade 322' || message.content == 'm!solve 322'){
        message.channel.send("Arcade Level 22");
        message.channel.send({files: ["./22.jpg"]});
    }
	if(message.content == 'm!solve arcade 23' || message.content == 'm!solve 23' || message.content == 'm!solve arcade 173' || message.content == 'm!solve 173' || message.content == 'm!solve arcade 323' || message.content == 'm!solve 323'){
        message.channel.send("Arcade Level 23");
        message.channel.send({files: ["./23.jpg"]});
    }
	if(message.content == 'm!solve arcade 24' || message.content == 'm!solve 24' || message.content == 'm!solve arcade 174' || message.content == 'm!solve 174' || message.content == 'm!solve arcade 324' || message.content == 'm!solve 324'){
        message.channel.send("Arcade Level 24");
        message.channel.send({files: ["./24.jpg"]});
    }
	if(message.content == 'm!solve arcade 25' || message.content == 'm!solve 25' || message.content == 'm!solve arcade 175' || message.content == 'm!solve 175' || message.content == 'm!solve arcade 325' || message.content == 'm!solve 325'){
        message.channel.send("Arcade Level 25");
        message.channel.send({files: ["./25.jpg"]});
    }
	if(message.content == 'm!solve arcade 26' || message.content == 'm!solve 26' || message.content == 'm!solve arcade 176' || message.content == 'm!solve 176' || message.content == 'm!solve arcade 326' || message.content == 'm!solve 326'){
        message.channel.send("Arcade Level 26");
        message.channel.send({files: ["./26.jpg"]});
    }
	if(message.content == 'm!solve arcade 27' || message.content == 'm!solve 27' || message.content == 'm!solve arcade 177' || message.content == 'm!solve 177' || message.content == 'm!solve arcade 327' || message.content == 'm!solve 327'){
        message.channel.send("Arcade Level 27");
        message.channel.send({files: ["./27.jpg"]});
    }
	if(message.content == 'm!solve arcade 28' || message.content == 'm!solve 28' || message.content == 'm!solve arcade 178' || message.content == 'm!solve 178' || message.content == 'm!solve arcade 328' || message.content == 'm!solve 328'){
        message.channel.send("Arcade Level 28");
        message.channel.send({files: ["./28.jpg"]});
    }
	if(message.content == 'm!solve arcade 29' || message.content == 'm!solve 29' || message.content == 'm!solve arcade 179' || message.content == 'm!solve 179' || message.content == 'm!solve arcade 329' || message.content == 'm!solve 329'){
        message.channel.send("Arcade Level 29");
        message.channel.send({files: ["./29.jpg"]});
    }
	if(message.content == 'm!solve arcade 30' || message.content == 'm!solve 30' || message.content == 'm!solve arcade 180' || message.content == 'm!solve 180' || message.content == 'm!solve arcade 330' || message.content == 'm!solve 330'){
        message.channel.send("Arcade Level 30");
        message.channel.send({files: ["./30.jpg"]});
    }
	if(message.content == 'm!solve arcade 31' || message.content == 'm!solve 31' || message.content == 'm!solve arcade 181' || message.content == 'm!solve 181' || message.content == 'm!solve arcade 331' || message.content == 'm!solve 331'){
        message.channel.send("Arcade Level 31");
        message.channel.send({files: ["./31.jpg"]});
    }
	if(message.content == 'm!solve arcade 32' || message.content == 'm!solve 32' || message.content == 'm!solve arcade 182' || message.content == 'm!solve 182' || message.content == 'm!solve arcade 332' || message.content == 'm!solve 332'){
        message.channel.send("Arcade Level 32");
        message.channel.send({files: ["./32.jpg"]});
    }
	if(message.content == 'm!solve arcade 33' || message.content == 'm!solve 33' || message.content == 'm!solve arcade 183' || message.content == 'm!solve 183' || message.content == 'm!solve arcade 333' || message.content == 'm!solve 333'){
        message.channel.send("Arcade Level 33");
        message.channel.send({files: ["./33.jpg"]});
    }
	if(message.content == 'm!solve arcade 34' || message.content == 'm!solve 34' || message.content == 'm!solve arcade 184' || message.content == 'm!solve 184' || message.content == 'm!solve arcade 334' || message.content == 'm!solve 334'){
        message.channel.send("Arcade Level 34");
        message.channel.send({files: ["./34.jpg"]});
    }
	if(message.content == 'm!solve arcade 35' || message.content == 'm!solve 35' || message.content == 'm!solve arcade 185' || message.content == 'm!solve 185' || message.content == 'm!solve arcade 335' || message.content == 'm!solve 335'){
        message.channel.send("Arcade Level 35");
        message.channel.send({files: ["./35.jpg"]});
    }
	if(message.content == 'm!solve arcade 36' || message.content == 'm!solve 36' || message.content == 'm!solve arcade 186' || message.content == 'm!solve 186' || message.content == 'm!solve arcade 336' || message.content == 'm!solve 336'){
        message.channel.send("Arcade Level 36");
        message.channel.send({files: ["./36.jpg"]});
    }
	if(message.content == 'm!solve arcade 37' || message.content == 'm!solve 37' || message.content == 'm!solve arcade 187' || message.content == 'm!solve 187' || message.content == 'm!solve arcade 337' || message.content == 'm!solve 337'){
        message.channel.send("Arcade Level 37");
        message.channel.send({files: ["./37.jpg"]});
    }
	if(message.content == 'm!solve arcade 38' || message.content == 'm!solve 38' || message.content == 'm!solve arcade 188' || message.content == 'm!solve 188' || message.content == 'm!solve arcade 338' || message.content == 'm!solve 338'){
        message.channel.send("Arcade Level 38");
        message.channel.send({files: ["./38.jpg"]});
    }
	if(message.content == 'm!solve arcade 39' || message.content == 'm!solve 39' || message.content == 'm!solve arcade 189' || message.content == 'm!solve 189' || message.content == 'm!solve arcade 339' || message.content == 'm!solve 339'){
        message.channel.send("Arcade Level 39");
        message.channel.send({files: ["./39.jpg"]});
    }
	if(message.content == 'm!solve arcade 40' || message.content == 'm!solve 40' || message.content == 'm!solve arcade 190' || message.content == 'm!solve 190' || message.content == 'm!solve arcade 340' || message.content == 'm!solve 340'){
        message.channel.send("Arcade Level 40");
        message.channel.send({files: ["./40.jpg"]});
    }
	if(message.content == 'm!solve arcade 41' || message.content == 'm!solve 41' || message.content == 'm!solve arcade 191' || message.content == 'm!solve 191' || message.content == 'm!solve arcade 341' || message.content == 'm!solve 341'){
        message.channel.send("Arcade Level 41");
        message.channel.send({files: ["./41.jpg"]});
    }
	if(message.content == 'm!solve arcade 42' || message.content == 'm!solve 42' || message.content == 'm!solve arcade 192' || message.content == 'm!solve 192' || message.content == 'm!solve arcade 342' || message.content == 'm!solve 342'){
        message.channel.send("Arcade Level 42");
        message.channel.send({files: ["./42.jpg"]});
    }
	if(message.content == 'm!solve arcade 43' || message.content == 'm!solve 43' || message.content == 'm!solve arcade 193' || message.content == 'm!solve 193' || message.content == 'm!solve arcade 343' || message.content == 'm!solve 343'){
        message.channel.send("Arcade Level 43");
        message.channel.send({files: ["./43.jpg"]});
    }
	if(message.content == 'm!solve arcade 44' || message.content == 'm!solve 44' || message.content == 'm!solve arcade 194' || message.content == 'm!solve 194' || message.content == 'm!solve arcade 344' || message.content == 'm!solve 344'){
        message.channel.send("Arcade Level 44");
        message.channel.send({files: ["./44.jpg"]});
    }
	if(message.content == 'm!solve arcade 45' || message.content == 'm!solve 45' || message.content == 'm!solve arcade 195' || message.content == 'm!solve 195' || message.content == 'm!solve arcade 345' || message.content == 'm!solve 345'){
        message.channel.send("Arcade Level 45");
        message.channel.send({files: ["./45.jpg"]});
    }
	if(message.content == 'm!solve arcade 46' || message.content == 'm!solve 46' || message.content == 'm!solve arcade 196' || message.content == 'm!solve 196' || message.content == 'm!solve arcade 346' || message.content == 'm!solve 346'){
        message.channel.send("Arcade Level 46");
        message.channel.send({files: ["./46.jpg"]});
    }
	if(message.content == 'm!solve arcade 47' || message.content == 'm!solve 47' || message.content == 'm!solve arcade 197' || message.content == 'm!solve 197' || message.content == 'm!solve arcade 347' || message.content == 'm!solve 347'){
        message.channel.send("Arcade Level 47");
        message.channel.send({files: ["./47.jpg"]});
    }
	if(message.content == 'm!solve arcade 48' || message.content == 'm!solve 48' || message.content == 'm!solve arcade 198' || message.content == 'm!solve 198' || message.content == 'm!solve arcade 348' || message.content == 'm!solve 348'){
        message.channel.send("Arcade Level 48");
        message.channel.send({files: ["./48.jpg"]});
    }
	if(message.content == 'm!solve arcade 49' || message.content == 'm!solve 49' || message.content == 'm!solve arcade 199' || message.content == 'm!solve 199' || message.content == 'm!solve arcade 349' || message.content == 'm!solve 349'){
        message.channel.send("Arcade Level 49");
        message.channel.send({files: ["./49.jpg"]});
    }
	if(message.content == 'm!solve arcade 50' || message.content == 'm!solve 50' || message.content == 'm!solve arcade 200' || message.content == 'm!solve 200' || message.content == 'm!solve arcade 350' || message.content == 'm!solve 350'){
        message.channel.send("Arcade Level 50");
        message.channel.send({files: ["./50.jpg"]});
    }
	if(message.content == 'm!solve arcade 51' || message.content == 'm!solve 51' || message.content == 'm!solve arcade 201' || message.content == 'm!solve 201' || message.content == 'm!solve arcade 351' || message.content == 'm!solve 351'){
        message.channel.send("Arcade Level 51");
        message.channel.send({files: ["./51.jpg"]});
    }
	if(message.content == 'm!solve arcade 52' || message.content == 'm!solve 52' || message.content == 'm!solve arcade 202' || message.content == 'm!solve 202' || message.content == 'm!solve arcade 352' || message.content == 'm!solve 352'){
        message.channel.send("Arcade Level 52");
        message.channel.send({files: ["./52.jpg"]});
    }
	if(message.content == 'm!solve arcade 53' || message.content == 'm!solve 53' || message.content == 'm!solve arcade 203' || message.content == 'm!solve 203' || message.content == 'm!solve arcade 353' || message.content == 'm!solve 353'){
        message.channel.send("Arcade Level 53");
        message.channel.send({files: ["./53.jpg"]});
    }
	if(message.content == 'm!solve arcade 54' || message.content == 'm!solve 54' || message.content == 'm!solve arcade 204' || message.content == 'm!solve 204' || message.content == 'm!solve arcade 354' || message.content == 'm!solve 354'){
        message.channel.send("Arcade Level 54");
        message.channel.send({files: ["./54.jpg"]});
    }
	if(message.content == 'm!solve arcade 55' || message.content == 'm!solve 55' || message.content == 'm!solve arcade 205' || message.content == 'm!solve 205' || message.content == 'm!solve arcade 355' || message.content == 'm!solve 355'){
        message.channel.send("Arcade Level 55");
        message.channel.send({files: ["./55.jpg"]});
    }
	if(message.content == 'm!solve arcade 56' || message.content == 'm!solve 56' || message.content == 'm!solve arcade 206' || message.content == 'm!solve 206' || message.content == 'm!solve arcade 356' || message.content == 'm!solve 356'){
        message.channel.send("Arcade Level 56");
        message.channel.send({files: ["./56.jpg"]});
    }
	if(message.content == 'm!solve arcade 57' || message.content == 'm!solve 57' || message.content == 'm!solve arcade 207' || message.content == 'm!solve 207' || message.content == 'm!solve arcade 357' || message.content == 'm!solve 357'){
        message.channel.send("Arcade Level 57");
        message.channel.send({files: ["./57.jpg"]});
    }
	if(message.content == 'm!solve arcade 58' || message.content == 'm!solve 58' || message.content == 'm!solve arcade 208' || message.content == 'm!solve 208' || message.content == 'm!solve arcade 358' || message.content == 'm!solve 358'){
        message.channel.send("Arcade Level 58");
        message.channel.send({files: ["./58.jpg"]});
    }
	if(message.content == 'm!solve arcade 59' || message.content == 'm!solve 59' || message.content == 'm!solve arcade 209' || message.content == 'm!solve 209' || message.content == 'm!solve arcade 359' || message.content == 'm!solve 359'){
        message.channel.send("Arcade Level 59");
        message.channel.send({files: ["./59.jpg"]});
    }
	if(message.content == 'm!solve arcade 60' || message.content == 'm!solve 60' || message.content == 'm!solve arcade 210' || message.content == 'm!solve 210' || message.content == 'm!solve arcade 360' || message.content == 'm!solve 360'){
        message.channel.send("Arcade Level 60");
        message.channel.send({files: ["./60.jpg"]});
    }
	if(message.content == 'm!solve arcade 61' || message.content == 'm!solve 61' || message.content == 'm!solve arcade 211' || message.content == 'm!solve 211' || message.content == 'm!solve arcade 361' || message.content == 'm!solve 361'){
        message.channel.send("Arcade Level 61");
        message.channel.send({files: ["./61.jpg"]});
    }
	if(message.content == 'm!solve arcade 62' || message.content == 'm!solve 62'){
        message.channel.send("Arcade Level 62");
        message.channel.send({files: ["./62.jpg"]});
    }
	if(message.content == 'm!solve arcade 212' || message.content == 'm!solve 212' || message.content == 'm!solve arcade 362' || message.content == 'm!solve 362'){
        message.channel.send("Arcade Level 212");
        message.channel.send({files: ["./212.jpg"]});
    }
	if(message.content == 'm!solve arcade 63' || message.content == 'm!solve 63' || message.content == 'm!solve arcade 213' || message.content == 'm!solve 213' || message.content == 'm!solve arcade 363' || message.content == 'm!solve 363'){
        message.channel.send("Arcade Level 63");
        message.channel.send({files: ["./63.jpg"]});
    }
	if(message.content == 'm!solve arcade 64' || message.content == 'm!solve 64' || message.content == 'm!solve arcade 214' || message.content == 'm!solve 214' || message.content == 'm!solve arcade 364' || message.content == 'm!solve 364'){
        message.channel.send("Arcade Level 64");
        message.channel.send({files: ["./64.jpg"]});
    }
	if(message.content == 'm!solve arcade 65' || message.content == 'm!solve 65' || message.content == 'm!solve arcade 215' || message.content == 'm!solve 215' || message.content == 'm!solve arcade 365' || message.content == 'm!solve 365'){
        message.channel.send("Arcade Level 65");
        message.channel.send({files: ["./65.jpg"]});
    }
	if(message.content == 'm!solve arcade 66' || message.content == 'm!solve 66' || message.content == 'm!solve arcade 216' || message.content == 'm!solve 216' || message.content == 'm!solve arcade 366' || message.content == 'm!solve 366'){
        message.channel.send("Arcade Level 66");
        message.channel.send({files: ["./66.jpg"]});
    }
	if(message.content == 'm!solve arcade 67' || message.content == 'm!solve 67' || message.content == 'm!solve arcade 217' || message.content == 'm!solve 217' || message.content == 'm!solve arcade 367' || message.content == 'm!solve 367'){
        message.channel.send("Arcade Level 67");
        message.channel.send({files: ["./67.jpg"]});
    }
	if(message.content == 'm!solve arcade 68' || message.content == 'm!solve 68' || message.content == 'm!solve arcade 218' || message.content == 'm!solve 218' || message.content == 'm!solve arcade 368' || message.content == 'm!solve 368'){
        message.channel.send("Arcade Level 68");
        message.channel.send({files: ["./68.jpg"]});
    }
	if(message.content == 'm!solve arcade 69' || message.content == 'm!solve 69'){
        message.channel.send("Arcade Level 69");
        message.channel.send({files: ["./69.jpg"]});
    }
	if(message.content == 'm!solve arcade 219' || message.content == 'm!solve 219' || message.content == 'm!solve arcade 369' || message.content == 'm!solve 369'){
        message.channel.send("Arcade Level 219");
        message.channel.send({files: ["./219.jpg"]});
    }
	if(message.content == 'm!solve arcade 70' || message.content == 'm!solve 70' || message.content == 'm!solve arcade 220' || message.content == 'm!solve 220' || message.content == 'm!solve arcade 370' || message.content == 'm!solve 370'){
        message.channel.send("Arcade Level 70");
        message.channel.send({files: ["./70.jpg"]});
    }
	if(message.content == 'm!solve arcade 71' || message.content == 'm!solve 71' || message.content == 'm!solve arcade 221' || message.content == 'm!solve 221' || message.content == 'm!solve arcade 371' || message.content == 'm!solve 371'){
        message.channel.send("Arcade Level 71");
        message.channel.send({files: ["./71.jpg"]});
    }
	if(message.content == 'm!solve arcade 72' || message.content == 'm!solve 72' || message.content == 'm!solve arcade 222' || message.content == 'm!solve 222' || message.content == 'm!solve arcade 372' || message.content == 'm!solve 372'){
        message.channel.send("Arcade Level 72");
        message.channel.send({files: ["./72.jpg"]});
    }
	if(message.content == 'm!solve arcade 73' || message.content == 'm!solve 73' || message.content == 'm!solve arcade 223' || message.content == 'm!solve 223' || message.content == 'm!solve arcade 373' || message.content == 'm!solve 373'){
        message.channel.send("Arcade Level 73");
        message.channel.send({files: ["./73.jpg"]});
    }
	if(message.content == 'm!solve arcade 74' || message.content == 'm!solve 74' || message.content == 'm!solve arcade 224' || message.content == 'm!solve 224' || message.content == 'm!solve arcade 374' || message.content == 'm!solve 374'){
        message.channel.send("Arcade Level 74");
        message.channel.send({files: ["./74.jpg"]});
    }
	if(message.content == 'm!solve arcade 75' || message.content == 'm!solve 75' || message.content == 'm!solve arcade 225' || message.content == 'm!solve 225' || message.content == 'm!solve arcade 375' || message.content == 'm!solve 375'){
        message.channel.send("Arcade Level 75");
        message.channel.send({files: ["./75.jpg"]});
    }
	if(message.content == 'm!solve arcade 76' || message.content == 'm!solve 76' || message.content == 'm!solve arcade 226' || message.content == 'm!solve 226' || message.content == 'm!solve arcade 376' || message.content == 'm!solve 376'){
        message.channel.send("Arcade Level 76");
        message.channel.send({files: ["./76.jpg"]});
    }
	if(message.content == 'm!solve arcade 77' || message.content == 'm!solve 77' || message.content == 'm!solve arcade 227' || message.content == 'm!solve 227' || message.content == 'm!solve arcade 377' || message.content == 'm!solve 377'){
        message.channel.send("Arcade Level 77");
        message.channel.send({files: ["./77.jpg"]});
    }
	if(message.content == 'm!solve arcade 78' || message.content == 'm!solve 78' || message.content == 'm!solve arcade 228' || message.content == 'm!solve 228' || message.content == 'm!solve arcade 378' || message.content == 'm!solve 378'){
        message.channel.send("Arcade Level 78");
        message.channel.send({files: ["./78.jpg"]});
    }
	if(message.content == 'm!solve arcade 79' || message.content == 'm!solve 79' || message.content == 'm!solve arcade 229' || message.content == 'm!solve 229' || message.content == 'm!solve arcade 379' || message.content == 'm!solve 379'){
        message.channel.send("Arcade Level 79");
        message.channel.send({files: ["./79.jpg"]});
    }
	if(message.content == 'm!solve arcade 80' || message.content == 'm!solve 80' || message.content == 'm!solve arcade 230' || message.content == 'm!solve 230' || message.content == 'm!solve arcade 380' || message.content == 'm!solve 380'){
        message.channel.send("Arcade Level 80");
        message.channel.send({files: ["./80.jpg"]});
    }
	if(message.content == 'm!solve arcade 81' || message.content == 'm!solve 81' || message.content == 'm!solve arcade 231' || message.content == 'm!solve 231' || message.content == 'm!solve arcade 381' || message.content == 'm!solve 381'){
        message.channel.send("Arcade Level 81");
        message.channel.send({files: ["./81.jpg"]});
    }
	if(message.content == 'm!solve arcade 82' || message.content == 'm!solve 82' || message.content == 'm!solve arcade 232' || message.content == 'm!solve 232' || message.content == 'm!solve arcade 382' || message.content == 'm!solve 382'){
        message.channel.send("Arcade Level 82");
        message.channel.send({files: ["./82.jpg"]});
    }
	if(message.content == 'm!solve arcade 83' || message.content == 'm!solve 83' || message.content == 'm!solve arcade 233' || message.content == 'm!solve 233' || message.content == 'm!solve arcade 383' || message.content == 'm!solve 383'){
        message.channel.send("Arcade Level 83");
        message.channel.send({files: ["./83.jpg"]});
    }
	if(message.content == 'm!solve arcade 84' || message.content == 'm!solve 84' || message.content == 'm!solve arcade 234' || message.content == 'm!solve 234' || message.content == 'm!solve arcade 384' || message.content == 'm!solve 384'){
        message.channel.send("Arcade Level 84");
        message.channel.send({files: ["./84.jpg"]});
    }
	if(message.content == 'm!solve arcade 85' || message.content == 'm!solve 85' || message.content == 'm!solve arcade 235' || message.content == 'm!solve 235' || message.content == 'm!solve arcade 385' || message.content == 'm!solve 385'){
        message.channel.send("Arcade Level 85");
        message.channel.send({files: ["./85.jpg"]});
    }
	if(message.content == 'm!solve arcade 86' || message.content == 'm!solve 86' || message.content == 'm!solve arcade 236' || message.content == 'm!solve 236' || message.content == 'm!solve arcade 386' || message.content == 'm!solve 386'){
        message.channel.send("Arcade Level 86");
        message.channel.send({files: ["./86.jpg"]});
    }
	if(message.content == 'm!solve arcade 87' || message.content == 'm!solve 87' || message.content == 'm!solve arcade 237' || message.content == 'm!solve 237' || message.content == 'm!solve arcade 387' || message.content == 'm!solve 387'){
        message.channel.send("Arcade Level 87");
        message.channel.send({files: ["./87.jpg"]});
    }
	if(message.content == 'm!solve arcade 88' || message.content == 'm!solve 88' || message.content == 'm!solve arcade 238' || message.content == 'm!solve 238' || message.content == 'm!solve arcade 388' || message.content == 'm!solve 388'){
        message.channel.send("Arcade Level 88");
        message.channel.send({files: ["./88.jpg"]});
    }
	if(message.content == 'm!solve arcade 89' || message.content == 'm!solve 89' || message.content == 'm!solve arcade 239' || message.content == 'm!solve 239' || message.content == 'm!solve arcade 389' || message.content == 'm!solve 389'){
        message.channel.send("Arcade Level 89");
        message.channel.send({files: ["./89.jpg"]});
    }
	if(message.content == 'm!solve arcade 90' || message.content == 'm!solve 90' || message.content == 'm!solve arcade 240' || message.content == 'm!solve 240' || message.content == 'm!solve arcade 390' || message.content == 'm!solve 390'){
        message.channel.send("Arcade Level 90");
        message.channel.send({files: ["./90.jpg"]});
    }
	if(message.content == 'm!solve arcade 91' || message.content == 'm!solve 91' || message.content == 'm!solve arcade 241' || message.content == 'm!solve 241' || message.content == 'm!solve arcade 391' || message.content == 'm!solve 391'){
        message.channel.send("Arcade Level 91");
        message.channel.send({files: ["./91.jpg"]});
    }
	if(message.content == 'm!solve arcade 92' || message.content == 'm!solve 92' || message.content == 'm!solve arcade 242' || message.content == 'm!solve 242' || message.content == 'm!solve arcade 392' || message.content == 'm!solve 392'){
        message.channel.send("Arcade Level 92");
        message.channel.send({files: ["./92.jpg"]});
    }
	if(message.content == 'm!solve arcade 93' || message.content == 'm!solve 93' || message.content == 'm!solve arcade 243' || message.content == 'm!solve 243' || message.content == 'm!solve arcade 393' || message.content == 'm!solve 393'){
        message.channel.send("Arcade Level 93");
        message.channel.send({files: ["./93.jpg"]});
    }
	if(message.content == 'm!solve arcade 94' || message.content == 'm!solve 94' || message.content == 'm!solve arcade 244' || message.content == 'm!solve 244' || message.content == 'm!solve arcade 394' || message.content == 'm!solve 394'){
        message.channel.send("Arcade Level 94");
        message.channel.send({files: ["./94.jpg"]});
    }
	if(message.content == 'm!solve arcade 95' || message.content == 'm!solve 95'){
        message.channel.send("Arcade Level 95");
        message.channel.send({files: ["./95.jpg"]});
    }
	if(message.content == 'm!solve arcade 245' || message.content == 'm!solve 245' || message.content == 'm!solve arcade 395' || message.content == 'm!solve 395'){
        message.channel.send("Arcade Level 245");
        message.channel.send({files: ["./245.jpg"]});
    }
	if(message.content == 'm!solve arcade 96' || message.content == 'm!solve 96' || message.content == 'm!solve arcade 246' || message.content == 'm!solve 246' || message.content == 'm!solve arcade 396' || message.content == 'm!solve 396'){
        message.channel.send("Arcade Level 96");
        message.channel.send({files: ["./96.jpg"]});
    }
	if(message.content == 'm!solve arcade 97' || message.content == 'm!solve 97' || message.content == 'm!solve arcade 247' || message.content == 'm!solve 247' || message.content == 'm!solve arcade 397' || message.content == 'm!solve 397'){
        message.channel.send("Arcade Level 97");
        message.channel.send({files: ["./97.jpg"]});
    }
	if(message.content == 'm!solve arcade 98' || message.content == 'm!solve 98' || message.content == 'm!solve arcade 248' || message.content == 'm!solve 248' || message.content == 'm!solve arcade 398' || message.content == 'm!solve 398'){
        message.channel.send("Arcade Level 98");
        message.channel.send({files: ["./98.jpg"]});
    }
	if(message.content == 'm!solve arcade 99' || message.content == 'm!solve 99' || message.content == 'm!solve arcade 249' || message.content == 'm!solve 249' || message.content == 'm!solve arcade 399' || message.content == 'm!solve 399'){
        message.channel.send("Arcade Level 99");
        message.channel.send({files: ["./99.jpg"]});
    }
	if(message.content == 'm!solve arcade 100' || message.content == 'm!solve 100' || message.content == 'm!solve arcade 250' || message.content == 'm!solve 250' || message.content == 'm!solve arcade 400' || message.content == 'm!solve 400'){
        message.channel.send("Arcade Level 100");
        message.channel.send({files: ["./100.jpg"]});
    }
	if(message.content == 'm!solve arcade 101' || message.content == 'm!solve 101' || message.content == 'm!solve arcade 251' || message.content == 'm!solve 251' || message.content == 'm!solve arcade 401' || message.content == 'm!solve 401'){
        message.channel.send("Arcade Level 101");
        message.channel.send({files: ["./101.jpg"]});
    }
    if(message.content == 'm!solve arcade 102' || message.content == 'm!solve 102' || message.content == 'm!solve arcade 252' || message.content == 'm!solve 252' || message.content == 'm!solve arcade 402' || message.content == 'm!solve 402'){
        message.channel.send("Arcade Level 102");
        message.channel.send({files: ["./102.jpg"]});
    }
    if(message.content == 'm!solve arcade 103' || message.content == 'm!solve 103' || message.content == 'm!solve arcade 253' || message.content == 'm!solve 253' || message.content == 'm!solve arcade 403' || message.content == 'm!solve 403'){
        message.channel.send("Arcade Level 103");
        message.channel.send({files: ["./103.jpg"]});
    }
    if(message.content == 'm!solve arcade 104' || message.content == 'm!solve 104' || message.content == 'm!solve arcade 254' || message.content == 'm!solve 254' || message.content == 'm!solve arcade 404' || message.content == 'm!solve 404'){
        message.channel.send("Arcade Level 104");
        message.channel.send({files: ["./104.jpg"]});
    }
    if(message.content == 'm!solve arcade 105' || message.content == 'm!solve 105' || message.content == 'm!solve arcade 255' || message.content == 'm!solve 255' || message.content == 'm!solve arcade 405' || message.content == 'm!solve 405'){
        message.channel.send("Arcade Level 105");
        message.channel.send({files: ["./105.jpg"]});
    }
    if(message.content == 'm!solve arcade 106' || message.content == 'm!solve 106' || message.content == 'm!solve arcade 256' || message.content == 'm!solve 256' || message.content == 'm!solve arcade 406' || message.content == 'm!solve 406'){
        message.channel.send("Arcade Level 106");
        message.channel.send({files: ["./106.jpg"]});
    }
    if(message.content == 'm!solve arcade 107' || message.content == 'm!solve 107' || message.content == 'm!solve arcade 257' || message.content == 'm!solve 257' || message.content == 'm!solve arcade 407' || message.content == 'm!solve 407'){
        message.channel.send("Arcade Level 107");
        message.channel.send({files: ["./107.jpg"]});
    }
    if(message.content == 'm!solve arcade 108' || message.content == 'm!solve 108' || message.content == 'm!solve arcade 258' || message.content == 'm!solve 258' || message.content == 'm!solve arcade 408' || message.content == 'm!solve 408'){
        message.channel.send("Arcade Level 108");
        message.channel.send({files: ["./108.jpg"]});
    }
    if(message.content == 'm!solve arcade 109' || message.content == 'm!solve 109' || message.content == 'm!solve arcade 259' || message.content == 'm!solve 259' || message.content == 'm!solve arcade 409' || message.content == 'm!solve 409'){
        message.channel.send("Arcade Level 109");
        message.channel.send({files: ["./109.jpg"]});
    }
    if(message.content == 'm!solve arcade 110' || message.content == 'm!solve 110' || message.content == 'm!solve arcade 260' || message.content == 'm!solve 260' || message.content == 'm!solve arcade 410' || message.content == 'm!solve 410'){
        message.channel.send("Arcade Level 110");
        message.channel.send({files: ["./110.jpg"]});
    }
    if(message.content == 'm!solve arcade 111' || message.content == 'm!solve 111' || message.content == 'm!solve arcade 261' || message.content == 'm!solve 261' || message.content == 'm!solve arcade 411' || message.content == 'm!solve 411'){
        message.channel.send("Arcade Level 111");
        message.channel.send({files: ["./111.jpg"]});
    }
    if(message.content == 'm!solve arcade 112' || message.content == 'm!solve 112' || message.content == 'm!solve arcade 262' || message.content == 'm!solve 262' || message.content == 'm!solve arcade 412' || message.content == 'm!solve 412'){
        message.channel.send("Arcade Level 112");
        message.channel.send({files: ["./112.jpg"]});
    }
    if(message.content == 'm!solve arcade 113' || message.content == 'm!solve 113' || message.content == 'm!solve arcade 263' || message.content == 'm!solve 263' || message.content == 'm!solve arcade 413' || message.content == 'm!solve 413'){
        message.channel.send("Arcade Level 113");
        message.channel.send({files: ["./113.jpg"]});
    }
    if(message.content == 'm!solve arcade 114' || message.content == 'm!solve 114' || message.content == 'm!solve arcade 264' || message.content == 'm!solve 264' || message.content == 'm!solve arcade 414' || message.content == 'm!solve 414'){
        message.channel.send("Arcade Level 114");
        message.channel.send({files: ["./114.jpg"]});
    }
    if(message.content == 'm!solve arcade 115' || message.content == 'm!solve 115' || message.content == 'm!solve arcade 265' || message.content == 'm!solve 265' || message.content == 'm!solve arcade 415' || message.content == 'm!solve 415'){
        message.channel.send("Arcade Level 115");
        message.channel.send({files: ["./115.jpg"]});
    }
    if(message.content == 'm!solve arcade 116' || message.content == 'm!solve 116' || message.content == 'm!solve arcade 266' || message.content == 'm!solve 266' || message.content == 'm!solve arcade 416' || message.content == 'm!solve 416'){
        message.channel.send("Arcade Level 116");
        message.channel.send({files: ["./116.jpg"]});
    }
    if(message.content == 'm!solve arcade 117' || message.content == 'm!solve 117' || message.content == 'm!solve arcade 267' || message.content == 'm!solve 267' || message.content == 'm!solve arcade 417' || message.content == 'm!solve 417'){
        message.channel.send("Arcade Level 117");
        message.channel.send({files: ["./117.jpg"]});
    }
    if(message.content == 'm!solve arcade 118' || message.content == 'm!solve 118' || message.content == 'm!solve arcade 268' || message.content == 'm!solve 268' || message.content == 'm!solve arcade 418' || message.content == 'm!solve 418'){
        message.channel.send("Arcade Level 118");
        message.channel.send({files: ["./118.jpg"]});
    }
    if(message.content == 'm!solve arcade 119' || message.content == 'm!solve 119' || message.content == 'm!solve arcade 269' || message.content == 'm!solve 269' || message.content == 'm!solve arcade 419' || message.content == 'm!solve 419'){
        message.channel.send("Arcade Level 119");
        message.channel.send({files: ["./119.jpg"]});
    }
    if(message.content == 'm!solve arcade 120' || message.content == 'm!solve 120' || message.content == 'm!solve arcade 270' || message.content == 'm!solve 270' || message.content == 'm!solve arcade 420' || message.content == 'm!solve 420'){
        message.channel.send("Arcade Level 120");
        message.channel.send({files: ["./120.jpg"]});
    }
	if(message.content == 'm!solve arcade 121' || message.content == 'm!solve 121' || message.content == 'm!solve arcade 271' || message.content == 'm!solve 271' || message.content == 'm!solve arcade 421' || message.content == 'm!solve 421'){
        message.channel.send("Arcade Level 121");
        message.channel.send({files: ["./121.jpg"]});
    }
	if(message.content == 'm!solve arcade 122' || message.content == 'm!solve 122' || message.content == 'm!solve arcade 272' || message.content == 'm!solve 272' || message.content == 'm!solve arcade 422' || message.content == 'm!solve 422'){
        message.channel.send("Arcade Level 122");
        message.channel.send({files: ["./122.jpg"]});
    }
	if(message.content == 'm!solve arcade 123' || message.content == 'm!solve 123' || message.content == 'm!solve arcade 273' || message.content == 'm!solve 273' || message.content == 'm!solve arcade 423' || message.content == 'm!solve 423'){
        message.channel.send("Arcade Level 123");
        message.channel.send({files: ["./123.jpg"]});
    }
	if(message.content == 'm!solve arcade 124' || message.content == 'm!solve 124' || message.content == 'm!solve arcade 274' || message.content == 'm!solve 274' || message.content == 'm!solve arcade 424' || message.content == 'm!solve 424'){
        message.channel.send("Arcade Level 124");
        message.channel.send({files: ["./124.jpg"]});
    }
	if(message.content == 'm!solve arcade 125' || message.content == 'm!solve 125' || message.content == 'm!solve arcade 275' || message.content == 'm!solve 275' || message.content == 'm!solve arcade 425' || message.content == 'm!solve 425'){
        message.channel.send("Arcade Level 125");
        message.channel.send({files: ["./125.jpg"]});
    }
	if(message.content == 'm!solve arcade 126' || message.content == 'm!solve 126' || message.content == 'm!solve arcade 276' || message.content == 'm!solve 276' || message.content == 'm!solve arcade 426' || message.content == 'm!solve 426'){
        message.channel.send("Arcade Level 126");
        message.channel.send({files: ["./126.jpg"]});
    }
	if(message.content == 'm!solve arcade 127' || message.content == 'm!solve 127' || message.content == 'm!solve arcade 277' || message.content == 'm!solve 277' || message.content == 'm!solve arcade 427' || message.content == 'm!solve 427'){
        message.channel.send("Arcade Level 127");
        message.channel.send({files: ["./127.jpg"]});
    }
	if(message.content == 'm!solve arcade 128' || message.content == 'm!solve 128' || message.content == 'm!solve arcade 278' || message.content == 'm!solve 278' || message.content == 'm!solve arcade 428' || message.content == 'm!solve 428'){
        message.channel.send("Arcade Level 128");
        message.channel.send({files: ["./128.jpg"]});
    }
	if(message.content == 'm!solve arcade 129' || message.content == 'm!solve 129' || message.content == 'm!solve arcade 279' || message.content == 'm!solve 279' || message.content == 'm!solve arcade 429' || message.content == 'm!solve 429'){
        message.channel.send("Arcade Level 129");
        message.channel.send({files: ["./129.jpg"]});
    }
	if(message.content == 'm!solve arcade 130' || message.content == 'm!solve 130' || message.content == 'm!solve arcade 280' || message.content == 'm!solve 280' || message.content == 'm!solve arcade 430' || message.content == 'm!solve 430'){
        message.channel.send("Arcade Level 130");
        message.channel.send({files: ["./130.jpg"]});
    }
	if(message.content == 'm!solve arcade 131' || message.content == 'm!solve 131' || message.content == 'm!solve arcade 281' || message.content == 'm!solve 281' || message.content == 'm!solve arcade 431' || message.content == 'm!solve 431'){
        message.channel.send("Arcade Level 131");
        message.channel.send({files: ["./131.jpg"]});
    }
	if(message.content == 'm!solve arcade 132' || message.content == 'm!solve 132' || message.content == 'm!solve arcade 282' || message.content == 'm!solve 282' || message.content == 'm!solve arcade 432' || message.content == 'm!solve 432'){
        message.channel.send("Arcade Level 132");
        message.channel.send({files: ["./132.jpg"]});
    }
	if(message.content == 'm!solve arcade 133' || message.content == 'm!solve 133' || message.content == 'm!solve arcade 283' || message.content == 'm!solve 283' || message.content == 'm!solve arcade 433' || message.content == 'm!solve 433'){
        message.channel.send("Arcade Level 133");
        message.channel.send({files: ["./133.jpg"]});
    }
	if(message.content == 'm!solve arcade 134' || message.content == 'm!solve 134' || message.content == 'm!solve arcade 284' || message.content == 'm!solve 284' || message.content == 'm!solve arcade 434' || message.content == 'm!solve 434'){
        message.channel.send("Arcade Level 134");
        message.channel.send({files: ["./134.jpg"]});
    }
	if(message.content == 'm!solve arcade 135' || message.content == 'm!solve 135' || message.content == 'm!solve arcade 285' || message.content == 'm!solve 285' || message.content == 'm!solve arcade 435' || message.content == 'm!solve 435'){
        message.channel.send("Arcade Level 135");
        message.channel.send({files: ["./135.jpg"]});
    }
	if(message.content == 'm!solve arcade 136' || message.content == 'm!solve 136' || message.content == 'm!solve arcade 286' || message.content == 'm!solve 286' || message.content == 'm!solve arcade 436' || message.content == 'm!solve 436'){
        message.channel.send("Arcade Level 136");
        message.channel.send({files: ["./136.jpg"]});
    }
	if(message.content == 'm!solve arcade 137' || message.content == 'm!solve 137' || message.content == 'm!solve arcade 287' || message.content == 'm!solve 287' || message.content == 'm!solve arcade 437' || message.content == 'm!solve 437'){
        message.channel.send("Arcade Level 137");
        message.channel.send({files: ["./137.jpg"]});
    }
	if(message.content == 'm!solve arcade 138' || message.content == 'm!solve 138' || message.content == 'm!solve arcade 288' || message.content == 'm!solve 288' || message.content == 'm!solve arcade 438' || message.content == 'm!solve 438'){
        message.channel.send("Arcade Level 138");
        message.channel.send({files: ["./138.jpg"]});
    }
	if(message.content == 'm!solve arcade 139' || message.content == 'm!solve 139' || message.content == 'm!solve arcade 289' || message.content == 'm!solve 289' || message.content == 'm!solve arcade 439' || message.content == 'm!solve 439'){
        message.channel.send("Arcade Level 139");
        message.channel.send({files: ["./139.jpg"]});
    }
	if(message.content == 'm!solve arcade 140' || message.content == 'm!solve 140' || message.content == 'm!solve arcade 290' || message.content == 'm!solve 290' || message.content == 'm!solve arcade 440' || message.content == 'm!solve 440'){
        message.channel.send("Arcade Level 140");
        message.channel.send({files: ["./140.jpg"]});
    }
	if(message.content == 'm!solve arcade 141' || message.content == 'm!solve 141' || message.content == 'm!solve arcade 291' || message.content == 'm!solve 291' || message.content == 'm!solve arcade 441' || message.content == 'm!solve 441'){
        message.channel.send("Arcade Level 141");
        message.channel.send({files: ["./141.jpg"]});
    }
	if(message.content == 'm!solve arcade 142' || message.content == 'm!solve 142' || message.content == 'm!solve arcade 292' || message.content == 'm!solve 292' || message.content == 'm!solve arcade 442' || message.content == 'm!solve 442'){
        message.channel.send("Arcade Level 142");
        message.channel.send({files: ["./142.jpg"]});
    }
	if(message.content == 'm!solve arcade 143' || message.content == 'm!solve 143' || message.content == 'm!solve arcade 293' || message.content == 'm!solve 293' || message.content == 'm!solve arcade 443' || message.content == 'm!solve 443'){
        message.channel.send("Arcade Level 143");
        message.channel.send({files: ["./143.jpg"]});
    }
	if(message.content == 'm!solve arcade 144' || message.content == 'm!solve 144' || message.content == 'm!solve arcade 294' || message.content == 'm!solve 294' || message.content == 'm!solve arcade 444' || message.content == 'm!solve 444'){
        message.channel.send("Arcade Level 144");
        message.channel.send({files: ["./144.jpg"]});
    }
	if(message.content == 'm!solve arcade 145' || message.content == 'm!solve 145' || message.content == 'm!solve arcade 295' || message.content == 'm!solve 295' || message.content == 'm!solve arcade 445' || message.content == 'm!solve 445'){
        message.channel.send("Arcade Level 145");
        message.channel.send({files: ["./145.jpg"]});
    }
	if(message.content == 'm!solve arcade 146' || message.content == 'm!solve 146' || message.content == 'm!solve arcade 296' || message.content == 'm!solve 296' || message.content == 'm!solve arcade 446' || message.content == 'm!solve 446'){
        message.channel.send("Arcade Level 146");
        message.channel.send({files: ["./146.jpg"]});
    }
	if(message.content == 'm!solve arcade 147' || message.content == 'm!solve 147' || message.content == 'm!solve arcade 297' || message.content == 'm!solve 297' || message.content == 'm!solve arcade 447' || message.content == 'm!solve 447'){
        message.channel.send("Arcade Level 147");
        message.channel.send({files: ["./147.jpg"]});
    }
	if(message.content == 'm!solve arcade 148' || message.content == 'm!solve 148' || message.content == 'm!solve arcade 298' || message.content == 'm!solve 298' || message.content == 'm!solve arcade 448' || message.content == 'm!solve 448'){
        message.channel.send("Arcade Level 148");
        message.channel.send({files: ["./148.jpg"]});
    }
	if(message.content == 'm!solve arcade 149' || message.content == 'm!solve 149' || message.content == 'm!solve arcade 299' || message.content == 'm!solve 299' || message.content == 'm!solve arcade 449' || message.content == 'm!solve 449'){
        message.channel.send("Arcade Level 149");
        message.channel.send({files: ["./149.jpg"]});
    }
	if(message.content == 'm!solve arcade 150' || message.content == 'm!solve 150' || message.content == 'm!solve arcade 300' || message.content == 'm!solve 300' || message.content == 'm!solve arcade 450' || message.content == 'm!solve 450'){
        message.channel.send("Arcade Level 150");
        message.channel.send({files: ["./150.jpg"]});
    }
	if(message.content == 'm!solve arcade 451' || message.content == 'm!solve 451'){
        message.channel.send("Arcade Level 451:\nIts a surprise ;)");
        //message.channel.send({files: ["./451.jpg"]});
    }
	//Tesalia
    if(message.content == 'm!solve tesalia 1' || message.content == 'm!solve t 1'){
        message.channel.send("Tesalia Level 1");
        message.channel.send({files: ["./t1.jpg"]});
    }
	if(message.content == 'm!solve tesalia 2' || message.content == 'm!solve t 2'){
        message.channel.send("Tesalia Level 2");
        message.channel.send({files: ["./t2.jpg"]});
    }
	if(message.content == 'm!solve tesalia 3' || message.content == 'm!solve t 3'){
        message.channel.send("Tesalia Level 3");
        message.channel.send({files: ["./t3.jpg"]});
    }
	if(message.content == 'm!solve tesalia 4' || message.content == 'm!solve t 4'){
        message.channel.send("Tesalia Level 4");
        message.channel.send({files: ["./t4.jpg"]});
    }
	if(message.content == 'm!solve tesalia 5' || message.content == 'm!solve t 5'){
        message.channel.send("Tesalia Level 5");
        message.channel.send({files: ["./t5.jpg"]});
    }
	if(message.content == 'm!solve tesalia 6' || message.content == 'm!solve t 6'){
        message.channel.send("Tesalia Level 6");
        message.channel.send({files: ["./t6.jpg"]});
    }
	if(message.content == 'm!solve tesalia 7' || message.content == 'm!solve t 7'){
        message.channel.send("Tesalia Level 7");
        message.channel.send({files: ["./t7.jpg"]});
    }
	if(message.content == 'm!solve tesalia 8' || message.content == 'm!solve t 8'){
        message.channel.send("Tesalia Level 8");
        message.channel.send({files: ["./t8.jpg"]});
    }
	if(message.content == 'm!solve tesalia 9' || message.content == 'm!solve t 9'){
        message.channel.send("Tesalia Level 9");
        message.channel.send({files: ["./t9.jpg"]});
    }
	if(message.content == 'm!solve tesalia 10' || message.content == 'm!solve t 10'){
        message.channel.send("Tesalia Level 10");
        message.channel.send({files: ["./t10.jpg"]});
    }
	if(message.content == 'm!solve tesalia 11' || message.content == 'm!solve t 11'){
        message.channel.send("Tesalia Level 11");
        message.channel.send({files: ["./t11.jpg"]});
    }
	if(message.content == 'm!solve tesalia 12' || message.content == 'm!solve t 12'){
        message.channel.send("Tesalia Level 12");
        message.channel.send({files: ["./t12.jpg"]});
    }
	if(message.content == 'm!solve tesalia 13' || message.content == 'm!solve t 13'){
        message.channel.send("Tesalia Level 13");
        message.channel.send({files: ["./t13.jpg"]});
    }
	if(message.content == 'm!solve tesalia 14' || message.content == 'm!solve t 14'){
        message.channel.send("Tesalia Level 14");
        message.channel.send({files: ["./t14.jpg"]});
    }
	if(message.content == 'm!solve tesalia 15' || message.content == 'm!solve t 15'){
        message.channel.send("Tesalia Level 15");
        message.channel.send({files: ["./t15.jpg"]});
    }
	if(message.content == 'm!solve tesalia 16' || message.content == 'm!solve t 16'){
        message.channel.send("Tesalia Level 16");
        message.channel.send({files: ["./t16.jpg"]});
    }
	if(message.content == 'm!solve tesalia 17' || message.content == 'm!solve t 17'){
        message.channel.send("Tesalia Level 17");
        message.channel.send({files: ["./t17.jpg"]});
    }
	if(message.content == 'm!solve tesalia 18' || message.content == 'm!solve t 18'){
        message.channel.send("Tesalia Level 18");
        message.channel.send({files: ["./t18.jpg"]});
    }
	if(message.content == 'm!solve tesalia 19' || message.content == 'm!solve t 19'){
        message.channel.send("Tesalia Level 19");
        message.channel.send({files: ["./t19.jpg"]});
    }
	if(message.content == 'm!solve tesalia 20' || message.content == 'm!solve t 20'){
        message.channel.send("Tesalia Level 20");
        message.channel.send({files: ["./t20.jpg"]});
    }
	
	if(message.content == 'm!solve tesalia 21' || message.content == 'm!solve t 21'){
        message.channel.send("Tesalia Level 21");
        message.channel.send({files: ["./t21.jpg"]});
    }
	if(message.content == 'm!solve tesalia 22' || message.content == 'm!solve t 22'){
        message.channel.send("Tesalia Level 22");
        message.channel.send({files: ["./t22.jpg"]});
    }
	if(message.content == 'm!solve tesalia 23' || message.content == 'm!solve t 23'){
        message.channel.send("Tesalia Level 23");
        message.channel.send({files: ["./t23.jpg"]});
    }
	if(message.content == 'm!solve tesalia 24' || message.content == 'm!solve t 24'){
        message.channel.send("Tesalia Level 24");
        message.channel.send({files: ["./t24.jpg"]});
    }
	if(message.content == 'm!solve tesalia 25' || message.content == 'm!solve t 25'){
        message.channel.send("Tesalia Level 25");
        message.channel.send({files: ["./t25.jpg"]});
    }
	if(message.content == 'm!solve tesalia 26' || message.content == 'm!solve t 26'){
        message.channel.send("Tesalia Level 26");
        message.channel.send({files: ["./t26.jpg"]});
    }
	if(message.content == 'm!solve tesalia 27' || message.content == 'm!solve t 27'){
        message.channel.send("Tesalia Level 27");
        message.channel.send({files: ["./t27.jpg"]});
    }
	if(message.content == 'm!solve tesalia 28' || message.content == 'm!solve t 28'){
        message.channel.send("Tesalia Level 28");
        message.channel.send({files: ["./t28.jpg"]});
    }
	if(message.content == 'm!solve tesalia 29' || message.content == 'm!solve t 29'){
        message.channel.send("Tesalia Level 29");
        message.channel.send({files: ["./t29.jpg"]});
    }
	if(message.content == 'm!solve tesalia 30' || message.content == 'm!solve t 30'){
        message.channel.send("Tesalia Level 30");
        message.channel.send({files: ["./t30.jpg"]});
    }
	if(message.content == 'm!solve tesalia 31' || message.content == 'm!solve t 31'){
        message.channel.send("Tesalia Level 31");
        message.channel.send({files: ["./t31.jpg"]});
    }
	if(message.content == 'm!solve tesalia 32' || message.content == 'm!solve t 32'){
        message.channel.send("Tesalia Level 32");
        message.channel.send({files: ["./t32.jpg"]});
    }
	if(message.content == 'm!solve tesalia 33' || message.content == 'm!solve t 33'){
        message.channel.send("Tesalia Level 33");
        message.channel.send({files: ["./t33.jpg"]});
    }
	if(message.content == 'm!solve tesalia 34' || message.content == 'm!solve t 34'){
        message.channel.send("Tesalia Level 34");
        message.channel.send({files: ["./t34.jpg"]});
    }
	if(message.content == 'm!solve tesalia 35' || message.content == 'm!solve t 35'){
        message.channel.send("Tesalia Level 35");
        message.channel.send({files: ["./t35.jpg"]});
    }
	if(message.content == 'm!solve tesalia 36' || message.content == 'm!solve t 36'){
        message.channel.send("Tesalia Level 36");
        message.channel.send({files: ["./t36.jpg"]});
    }
	if(message.content == 'm!solve tesalia 37' || message.content == 'm!solve t 37'){
        message.channel.send("Tesalia Level 37");
        message.channel.send({files: ["./t37.jpg"]});
    }
	if(message.content == 'm!solve tesalia 38' || message.content == 'm!solve t 38'){
        message.channel.send("Tesalia Level 38");
        message.channel.send({files: ["./t38.jpg"]});
    }
	if(message.content == 'm!solve tesalia 39' || message.content == 'm!solve t 39'){
        message.channel.send("Tesalia Level 39");
        message.channel.send({files: ["./t39.jpg"]});
    }
	if(message.content == 'm!solve tesalia 40' || message.content == 'm!solve t 40'){
        message.channel.send("Tesalia Level 40");
        message.channel.send({files: ["./t40.jpg"]});
    }
	if(message.content == 'm!solve tesalia 41' || message.content == 'm!solve t 41'){
        message.channel.send("Tesalia Level 41");
        message.channel.send({files: ["./t41.jpg"]});
    }
	if(message.content == 'm!solve tesalia 42' || message.content == 'm!solve t 42'){
        message.channel.send("Tesalia Level 42");
        message.channel.send({files: ["./t42.jpg"]});
    }
	if(message.content == 'm!solve tesalia 43' || message.content == 'm!solve t 43'){
        message.channel.send("Tesalia Level 43");
        message.channel.send({files: ["./t43.jpg"]});
    }
	if(message.content == 'm!solve tesalia 44' || message.content == 'm!solve t 44'){
        message.channel.send("Tesalia Level 44");
        message.channel.send({files: ["./t44.jpg"]});
    }
	if(message.content == 'm!solve tesalia 45' || message.content == 'm!solve t 45'){
        message.channel.send("Tesalia Level 45");
        message.channel.send({files: ["./t45.jpg"]});
    }
	if(message.content == 'm!solve tesalia 46' || message.content == 'm!solve t 46'){
        message.channel.send("Tesalia Level 46");
        message.channel.send({files: ["./t46.jpg"]});
    }
	if(message.content == 'm!solve tesalia 47' || message.content == 'm!solve t 47'){
        message.channel.send("Tesalia Level 47");
        message.channel.send({files: ["./t47.jpg"]});
    }
	if(message.content == 'm!solve tesalia 48' || message.content == 'm!solve t 48'){
        message.channel.send("Tesalia Level 48");
        message.channel.send({files: ["./t48.jpg"]});
    }
	if(message.content == 'm!solve tesalia 49' || message.content == 'm!solve t 49'){
        message.channel.send("Tesalia Level 49");
        message.channel.send({files: ["./t49.jpg"]});
    }
	if(message.content == 'm!solve tesalia 50' || message.content == 'm!solve t 50'){
        message.channel.send("Tesalia Level 50");
        message.channel.send({files: ["./t50.jpg"]});
    }
	if(message.content == 'm!solve tesalia 51' || message.content == 'm!solve t 51'){
        message.channel.send("Tesalia Level 51");
        message.channel.send({files: ["./t51.jpg"]});
    }
	if(message.content == 'm!solve tesalia 52' || message.content == 'm!solve t 52'){
        message.channel.send("Tesalia Level 52");
        message.channel.send({files: ["./t52.jpg"]});
    }
	if(message.content == 'm!solve tesalia 53' || message.content == 'm!solve t 53'){
        message.channel.send("Tesalia Level 53");
        message.channel.send({files: ["./t53.jpg"]});
    }
	if(message.content == 'm!solve tesalia 54' || message.content == 'm!solve t 54'){
        message.channel.send("Tesalia Level 54");
        message.channel.send({files: ["./t54.jpg"]});
    }
	if(message.content == 'm!solve tesalia 55' || message.content == 'm!solve t 55'){
        message.channel.send("Tesalia Level 55");
        message.channel.send({files: ["./t55.jpg"]});
    }
	if(message.content == 'm!solve tesalia 56' || message.content == 'm!solve t 56'){
        message.channel.send("Tesalia Level 56");
        message.channel.send({files: ["./t56.jpg"]});
    }
	if(message.content == 'm!solve tesalia 57' || message.content == 'm!solve t 57'){
        message.channel.send("Tesalia Level 57\nUnknown Solution");
        //message.channel.send({files: ["./t57.jpg"]});
    }
	if(message.content == 'm!solve tesalia 58' || message.content == 'm!solve t 58'){
        message.channel.send("Tesalia Level 58");
        message.channel.send({files: ["./t58.jpg"]});
    }
	if(message.content == 'm!solve tesalia 59' || message.content == 'm!solve t 59'){
        message.channel.send("Tesalia Level 59");
        message.channel.send({files: ["./t59.jpg"]});
    }
	if(message.content == 'm!solve tesalia 60' || message.content == 'm!solve t 60'){
        message.channel.send("Tesalia Level 60");
        message.channel.send({files: ["./t60.jpg"]});
    }
	if(message.content == 'm!solve tesalia 61' || message.content == 'm!solve t 61'){
        message.channel.send("Tesalia Level 61");
        message.channel.send({files: ["./t61.jpg"]});
    }
	if(message.content == 'm!solve tesalia 62' || message.content == 'm!solve t 62'){
        message.channel.send("Tesalia Level 62");
        message.channel.send({files: ["./t62.jpg"]});
    }
	if(message.content == 'm!solve tesalia 63' || message.content == 'm!solve t 63'){
        message.channel.send("Tesalia Level 63");
        message.channel.send({files: ["./t63.jpg"]});
    }
	if(message.content == 'm!solve tesalia 64' || message.content == 'm!solve t 64'){
        message.channel.send("Tesalia Level 64");
        message.channel.send({files: ["./t64.jpg"]});
    }
	if(message.content == 'm!solve tesalia 65' || message.content == 'm!solve t 65'){
        message.channel.send("Tesalia Level 65");
        message.channel.send({files: ["./t65.jpg"]});
    }
	if(message.content == 'm!solve tesalia 66' || message.content == 'm!solve t 66'){
        message.channel.send("Tesalia Level 66");
        message.channel.send({files: ["./t66.jpg"]});
    }
	if(message.content == 'm!solve tesalia 67' || message.content == 'm!solve t 67'){
        message.channel.send("Tesalia Level 67");
        message.channel.send({files: ["./t67.jpg"]});
    }
	if(message.content == 'm!solve tesalia 68' || message.content == 'm!solve t 68'){
        message.channel.send("Tesalia Level 68");
        message.channel.send({files: ["./t68.jpg"]});
    }
	if(message.content == 'm!solve tesalia 69' || message.content == 'm!solve t 69'){
        message.channel.send("Tesalia Level 69");
        message.channel.send({files: ["./t69.jpg"]});
    }
	if(message.content == 'm!solve tesalia 70' || message.content == 'm!solve t 70'){
        message.channel.send("Tesalia Level 70");
        message.channel.send({files: ["./t70.jpg"]});
    }
	if(message.content == 'm!solve tesalia 71' || message.content == 'm!solve t 71'){
        message.channel.send("Tesalia Level 71");
        message.channel.send({files: ["./t71.jpg"]});
    }
	if(message.content == 'm!solve tesalia 72' || message.content == 'm!solve t 72'){
        message.channel.send("Tesalia Level 72");
        message.channel.send({files: ["./t72.jpg"]});
    }
	if(message.content == 'm!solve tesalia 73' || message.content == 'm!solve t 73'){
        message.channel.send("Tesalia Level 73");
        message.channel.send({files: ["./t73.jpg"]});
    }
	if(message.content == 'm!solve tesalia 74' || message.content == 'm!solve t 74'){
        message.channel.send("Tesalia Level 74");
        message.channel.send({files: ["./t74.jpg"]});
    }
	if(message.content == 'm!solve tesalia 75' || message.content == 'm!solve t 75'){
        message.channel.send("Tesalia Level 75");
        message.channel.send({files: ["./t75.jpg"]});
    }
	if(message.content == 'm!solve tesalia 76' || message.content == 'm!solve t 76'){
        message.channel.send("Tesalia Level 76");
        message.channel.send({files: ["./t76.jpg"]});
    }
	if(message.content == 'm!solve tesalia 77' || message.content == 'm!solve t 77'){
        message.channel.send("Tesalia Level 77");
        message.channel.send({files: ["./t77.jpg"]});
    }
	if(message.content == 'm!solve tesalia 78' || message.content == 'm!solve t 78'){
        message.channel.send("Tesalia Level 78\nUnknown Solution");
        //message.channel.send({files: ["./t78.jpg"]});
    }
	if(message.content == 'm!solve tesalia 79' || message.content == 'm!solve t 79'){
        message.channel.send("Tesalia Level 79");
        message.channel.send({files: ["./t79.jpg"]});
    }
	if(message.content == 'm!solve tesalia 80' || message.content == 'm!solve t 80'){
        message.channel.send("Tesalia Level 80");
        message.channel.send({files: ["./t80.jpg"]});
    }
	if(message.content == 'm!solve tesalia 81' || message.content == 'm!solve t 81'){
        message.channel.send("Tesalia Level 81");
        message.channel.send({files: ["./t81.jpg"]});
    }
	if(message.content == 'm!solve tesalia 82' || message.content == 'm!solve t 82'){
        message.channel.send("Tesalia Level 82");
        message.channel.send({files: ["./t82.jpg"]});
    }
	if(message.content == 'm!solve tesalia 83' || message.content == 'm!solve t 83'){
        message.channel.send("Tesalia Level 83");
        message.channel.send({files: ["./t83.jpg"]});
    }
	if(message.content == 'm!solve tesalia 84' || message.content == 'm!solve t 84'){
        message.channel.send("Tesalia Level 84");
        message.channel.send({files: ["./t84.jpg"]});
    }
	if(message.content == 'm!solve tesalia 85' || message.content == 'm!solve t 85'){
        message.channel.send("Tesalia Level 85");
        message.channel.send({files: ["./t85.jpg"]});
    }
	if(message.content == 'm!solve tesalia 86' || message.content == 'm!solve t 86'){
        message.channel.send("Tesalia Level 86");
        message.channel.send({files: ["./t86.jpg"]});
    }
	if(message.content == 'm!solve tesalia 87' || message.content == 'm!solve t 87'){
        message.channel.send("Tesalia Level 87");
        message.channel.send({files: ["./t87.jpg"]});
    }
	if(message.content == 'm!solve tesalia 88' || message.content == 'm!solve t 88'){
        message.channel.send("Tesalia Level 88");
        message.channel.send({files: ["./t88.jpg"]});
    }
	if(message.content == 'm!solve tesalia 89' || message.content == 'm!solve t 89'){
        message.channel.send("Tesalia Level 89");
        message.channel.send({files: ["./t89.jpg"]});
    }
	if(message.content == 'm!solve tesalia 90' || message.content == 'm!solve t 90'){
        message.channel.send("Tesalia Level 90");
        message.channel.send({files: ["./t90.jpg"]});
    }
	if(message.content == 'm!solve tesalia 91' || message.content == 'm!solve t 91'){
        message.channel.send("Tesalia Level 91");
        message.channel.send({files: ["./t91.jpg"]});
    }
	if(message.content == 'm!solve tesalia 92' || message.content == 'm!solve t 92'){
        message.channel.send("Tesalia Level 92");
        message.channel.send({files: ["./t92.jpg"]});
    }
	if(message.content == 'm!solve tesalia 93' || message.content == 'm!solve t 93'){
        message.channel.send("Tesalia Level 93");
        message.channel.send({files: ["./t93.jpg"]});
    }
	if(message.content == 'm!solve tesalia 94' || message.content == 'm!solve t 94'){
        message.channel.send("Tesalia Level 94");
        message.channel.send({files: ["./t94.jpg"]});
    }
	if(message.content == 'm!solve tesalia 95' || message.content == 'm!solve t 95'){
        message.channel.send("Tesalia Level 95");
        message.channel.send({files: ["./t95.jpg"]});
    }
	if(message.content == 'm!solve tesalia 96' || message.content == 'm!solve t 96'){
        message.channel.send("Tesalia Level 96\nUnknown Solution");
        //message.channel.send({files: ["./t96.jpg"]});
    }
	if(message.content == 'm!solve tesalia 97' || message.content == 'm!solve t 97'){
        message.channel.send("Tesalia Level 97\nUnknown Solution");
        //message.channel.send({files: ["./t97.jpg"]});
    }
	if(message.content == 'm!solve tesalia 98' || message.content == 'm!solve t 98'){
        message.channel.send("Tesalia Level 98");
        message.channel.send({files: ["./t98.gif"]});
    }
	if(message.content == 'm!solve tesalia 99' || message.content == 'm!solve t 99'){
        message.channel.send("Tesalia Level 99\nUnknown Solution");
        message.channel.send({files: ["./t99.jpg"]});
    }
	if(message.content == 'm!solve tesalia 100' || message.content == 'm!solve t 100'){
        message.channel.send("Tesalia Level 100");
        message.channel.send({files: ["./t100.jpg"]});
    }
	if(message.content == 'm!solve tesalia 101' || message.content == 'm!solve t 101'){
        message.channel.send("Tesalia Level 101");
        message.channel.send({files: ["./t101.jpg"]});
    }
	if(message.content == 'm!solve tesalia 102' || message.content == 'm!solve t 102'){
        message.channel.send("Tesalia Level 102");
        message.channel.send({files: ["./t102.jpg"]});
    }
	if(message.content == 'm!solve tesalia 103' || message.content == 'm!solve t 103'){
        message.channel.send("Tesalia Level 103");
        message.channel.send({files: ["./t103.jpg"]});
    }
	if(message.content == 'm!solve tesalia 104' || message.content == 'm!solve t 104'){
        message.channel.send("Tesalia Level 104");
        message.channel.send({files: ["./t104.jpg"]});
    }
	if(message.content == 'm!solve tesalia 105' || message.content == 'm!solve t 105'){
        message.channel.send("Tesalia Level 105");
        message.channel.send({files: ["./t105.jpg"]});
    }/*
    if(message.content.contains("m!s arcade")){
       var [] solArr = message.content.split[" "];
       //var solNum = Integer.parseInt(solArr[1]);
       message.channel.send("Arcade Level" + solArr[1] + ".");
       //message.channel.send("plz work");
    }*/
    //GAME
	
    var i = 0;
    i = 0;
    do{
        if(message.content == 'm!game start' || merxPlayerzBool[i] == true){
            testmsguser = message.author;
            merxTerm[i]++;
            if (merxPlayerz[0] == " "){
                merxPlayerz[i] = testmsguser;
            }
            else if (merxPlayerz[1] == " " && merxPlayerz[0] != testmsguser){
                merxPlayerz[1] = testmsguser;
            }
            else if (merxPlayerz[2] == " " && merxPlayerz[0] != testmsguser && merxPlayerz[1] != testmsguser){
                merxPlayerz[2] = testmsguser;
            }
             
            if (merxPlayerzBool[i] == false && merxPlayerz[i] == testmsguser){
                merxTerm[i] = 0;
	
                do {
                    ranNermg[i] = Math.random();
                    if (ranNermg[i] <= 0.05)
                        ranNermg[i] = 0;
                    else if (ranNermg[i] <= 0.10)
                        ranNermg[i] = 1;
                    else if (ranNermg[i] <= 0.15)
                        ranNermg[i] = 2;
                    else if (ranNermg[i] <= 0.20)
                        ranNermg[i] = 3;
                    else if (ranNermg[i] <= 0.25)
                        ranNermg[i] = 4;
                    else if (ranNermg[i] <= 0.30)
                        ranNermg[i] = 5;
                    else if (ranNermg[i] <= 0.35)
                        ranNermg[i] = 6;
                    else if (ranNermg[i] <= 0.40)
                        ranNermg[i] = 7;
                    else if (ranNermg[i] <= 0.45)
                        ranNermg[i] = 8;
                    else if (ranNermg[i] <= 0.50)
                        ranNermg[i] = 9;
                    else if (ranNermg[i] <= 0.55)
                        ranNermg[i] = 10;
                    else if (ranNermg[i] <= 0.60)
                        ranNermg[i] = 11;
                    else if (ranNermg[i] <= 0.65)
                        ranNermg[i] = 12;
                    else if (ranNermg[i] <= 0.70)
                        ranNermg[i] = 13;
                    else if (ranNermg[i] <= 0.75)
                        ranNermg[i] = 14;
                    else if (ranNermg[i] <= 0.80)
                        ranNermg[i] = 15;
                    else if (ranNermg[i] <= 0.85)
                        ranNermg[i] = 16;
                    else if (ranNermg[i] <= 0.90)
                        ranNermg[i] = 17;
                    else if (ranNermg[i] <= 0.95)
                        ranNermg[i] = 18;
                } while (ranNermg[i] != 0 && ranNermg[i] != 1 && ranNermg[i] != 2 && ranNermg[i] != 3 && ranNermg[i] != 4 && ranNermg[i] != 5 && ranNermg[i] != 6 && ranNermg[i] != 7 && ranNermg[i] != 8 && ranNermg[i] != 9 && ranNermg[i] != 10 && ranNermg[i] != 11 && ranNermg[i] != 12 && ranNermg[i] != 13 && ranNermg[i] != 14 && ranNermg[i] != 15 && ranNermg[i] != 16 && ranNermg[i] != 17 && ranNermg[i] != 18);
                var botsmg = message.channel.send({embed: {
                title: "Which ball is the " + berllzNermg[ranNermg[i]] +"?",
                description: "1 => <:UnlockBall:463357163197431817> \n2 => <:UnlockBall:463357163197431817>",
                timestamp: new Date(),
                     
                author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                     
                }});
                //message.edit('This is my new content!')
                //testmsgid = botsmg.id;
                //botsmg;
                //tersterng = true;
                merxPlayerzBool[i] = true;
                merxPlayerzLerf[i] = 3;
                //message.channel.send("id -> " + testmsgid + "\nuser: -> " + testmsguser);
            }
            if (merxTerm[i] >= 15){
                        hs = "" + merxPlayerz[i] + " has " + streakNum[i] + " Streak";
                        message.channel.send({embed: {
                            title: "STREAK",
                            description: "" + merxPlayerz[i] + " has not responded\nYour score is: " + streakNum[i] + " Streak",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i] = 0;
                        merxPlayerzBool[i] = false;
                        merxPlayerz[i] = " ";
		    merxTerm[i] = 0;
            }
            if (merxPlayerz[i] == testmsguser && message.author == merxPlayerz[i] && (message.content == "m!game stop")){
                        hs = "" + merxPlayerz[i] + " has " + streakNum[i] + " Streak";
                        message.channel.send({embed: {
                            title: "STREAK",
                            description: "" + merxPlayerz[i] + " has Quited\nYour score is: " + streakNum[i] + " Streak",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i] = 0;
                        merxPlayerzBool[i] = false;
                        merxPlayerz[i] = " ";
		    merxTerm[i] = 0;
            }
            if (merxPlayerzBool[i] == true && merxPlayerz[i] == testmsguser && message.author == merxPlayerz[i] && (message.content == "1" || message.content == "2") && (streakNum[i] < 40)){
                merxTerm[i] = 0;
                var randerm = Math.random();
                var mernerNerm = Math.random();
                do{
                    mernerNerm = Math.random();
                    if (mernerNerm <= 0.05)
                        mernerNerm = 0;
                    else if (mernerNerm <= 0.10)
                        mernerNerm = 1;
                    else if (mernerNerm <= 0.15)
                        mernerNerm = 2;
                    else if (mernerNerm <= 0.20)
                        mernerNerm = 3;
                    else if (mernerNerm <= 0.25)
                        mernerNerm = 4;
                    else if (mernerNerm <= 0.30)
                        mernerNerm = 5;
                    else if (mernerNerm <= 0.35)
                        mernerNerm = 6;
                    else if (mernerNerm <= 0.40)
                        mernerNerm = 7;
                    else if (mernerNerm <= 0.45)
                        mernerNerm = 8;
                    else if (mernerNerm <= 0.50)
                        mernerNerm = 9;
                    else if (mernerNerm <= 0.55)
                        mernerNerm = 10;
                    else if (mernerNerm <= 0.60)
                        mernerNerm = 11;
                    else if (mernerNerm <= 0.65)
                        mernerNerm = 12;
                    else if (mernerNerm <= 0.70)
                        mernerNerm = 13;
                    else if (mernerNerm <= 0.75)
                        mernerNerm = 14;
                    else if (mernerNerm <= 0.80)
                        mernerNerm = 15;
                    else if (mernerNerm <= 0.85)
                        mernerNerm = 16;
                    else if (mernerNerm <= 0.90)
                        mernerNerm = 17;
                    else if (mernerNerm <= 0.95)
                        mernerNerm = 18;
                } while (mernerNerm == ranNermg[i] || (mernerNerm != 0 && mernerNerm != 1 && mernerNerm != 2 && mernerNerm != 3 && mernerNerm != 4 && mernerNerm != 5 && mernerNerm != 6 && mernerNerm != 7 && mernerNerm != 8 && mernerNerm != 9 && mernerNerm != 10 && mernerNerm != 11 && mernerNerm != 12 && mernerNerm != 13 && mernerNerm != 14 && mernerNerm != 15 && mernerNerm != 16 && mernerNerm != 17 && mernerNerm != 18));
                 
                 
                if (message.content == "1" && randerm <= 0.5){
                    message.channel.send({embed: {
                        title: "WRONG!",
                        description: "" + berllzg[mernerNerm] + " => <:UnlockBall:463357163197431817> \n" + berllzg[ranNermg[i]] + " => <:UnlockBall:463357163197431817>",
                        timestamp: new Date(),
                        author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                    }});
                    merxPlayerzLerf[i] = merxPlayerzLerf[i] - 1;
                    if (merxPlayerzLerf[i] == 7){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart: :black_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 6){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 5){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 4){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 3){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 2){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 1){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 0){
                        hs = "" + testmsguser + " has " + streakNum[i] + " Streak";
                        message.channel.send({embed: {
                            title: "STREAK",
                            description: "" + testmsguser + " has " + streakNum[i] + " Streak",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i] = 0;
                        merxPlayerzBool[i] = false;
                        merxPlayerz[i] = " ";
                    }
                    if (merxPlayerzLerf[i] != 0) {
                        do {
                        ranNermg[i] = Math.random();
                        if (ranNermg[i] <= 0.05)
                            ranNermg[i] = 0;
                        else if (ranNermg[i] <= 0.10)
                            ranNermg[i] = 1;
                        else if (ranNermg[i] <= 0.15)
                            ranNermg[i] = 2;
                        else if (ranNermg[i] <= 0.20)
                            ranNermg[i] = 3;
                        else if (ranNermg[i] <= 0.25)
                            ranNermg[i] = 4;
                        else if (ranNermg[i] <= 0.30)
                            ranNermg[i] = 5;
                        else if (ranNermg[i] <= 0.35)
                            ranNermg[i] = 6;
                        else if (ranNermg[i] <= 0.40)
                            ranNermg[i] = 7;
                        else if (ranNermg[i] <= 0.45)
                            ranNermg[i] = 8;
                        else if (ranNermg[i] <= 0.50)
                            ranNermg[i] = 9;
                        else if (ranNermg[i] <= 0.55)
                            ranNermg[i] = 10;
                        else if (ranNermg[i] <= 0.60)
                            ranNermg[i] = 11;
                        else if (ranNermg[i] <= 0.65)
                            ranNermg[i] = 12;
                        else if (ranNermg[i] <= 0.70)
                            ranNermg[i] = 13;
                        else if (ranNermg[i] <= 0.75)
                            ranNermg[i] = 14;
                        else if (ranNermg[i] <= 0.80)
                            ranNermg[i] = 15;
                        else if (ranNermg[i] <= 0.85)
                            ranNermg[i] = 16;
                        else if (ranNermg[i] <= 0.90)
                            ranNermg[i] = 17;
                        else if (ranNermg[i] <= 0.95)
                            ranNermg[i] = 18;
                        } while (ranNermg[i] != 0 && ranNermg[i] != 1 && ranNermg[i] != 2 && ranNermg[i] != 3 && ranNermg[i] != 4 && ranNermg[i] != 5 && ranNermg[i] != 6 && ranNermg[i] != 7 && ranNermg[i] != 8 && ranNermg[i] != 9 && ranNermg[i] != 10 && ranNermg[i] != 11 && ranNermg[i] != 12 && ranNermg[i] != 13 && ranNermg[i] != 14 && ranNermg[i] != 15 && ranNermg[i] != 16 && ranNermg[i] != 17 && ranNermg[i] != 18);
                        var botsmg = message.channel.send({embed: {
                        title: "Which ball is the " + berllzNermg[ranNermg[i]] +"?",
                        description: "1 => <:UnlockBall:463357163197431817> \n2 => <:UnlockBall:463357163197431817>",
                        timestamp: new Date(),
                        author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                }
                else if (message.content == "1" && randerm <= 1){
                    message.channel.send({embed: {
                        title: "CORRECT!",
                        description: "" + berllzg[ranNermg[i]] + " => <:UnlockBall:463357163197431817> \n" + berllzg[mernerNerm] + " => <:UnlockBall:463357163197431817>",
                        timestamp: new Date(),
                        author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                    }});
                    streakNum[i]++;
                    if (merxPlayerzLerf[i] == 7){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart: :black_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 6){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 5){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 4){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 3){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 2){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 1){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    do {
                        ranNermg[i] = Math.random();
                        if (ranNermg[i] <= 0.05)
                            ranNermg[i] = 0;
                        else if (ranNermg[i] <= 0.10)
                            ranNermg[i] = 1;
                        else if (ranNermg[i] <= 0.15)
                            ranNermg[i] = 2;
                        else if (ranNermg[i] <= 0.20)
                            ranNermg[i] = 3;
                        else if (ranNermg[i] <= 0.25)
                            ranNermg[i] = 4;
                        else if (ranNermg[i] <= 0.30)
                            ranNermg[i] = 5;
                        else if (ranNermg[i] <= 0.35)
                            ranNermg[i] = 6;
                        else if (ranNermg[i] <= 0.40)
                            ranNermg[i] = 7;
                        else if (ranNermg[i] <= 0.45)
                            ranNermg[i] = 8;
                        else if (ranNermg[i] <= 0.50)
                            ranNermg[i] = 9;
                        else if (ranNermg[i] <= 0.55)
                            ranNermg[i] = 10;
                        else if (ranNermg[i] <= 0.60)
                            ranNermg[i] = 11;
                        else if (ranNermg[i] <= 0.65)
                            ranNermg[i] = 12;
                        else if (ranNermg[i] <= 0.70)
                            ranNermg[i] = 13;
                        else if (ranNermg[i] <= 0.75)
                            ranNermg[i] = 14;
                        else if (ranNermg[i] <= 0.80)
                            ranNermg[i] = 15;
                        else if (ranNermg[i] <= 0.85)
                            ranNermg[i] = 16;
                        else if (ranNermg[i] <= 0.90)
                            ranNermg[i] = 17;
                        else if (ranNermg[i] <= 0.95)
                            ranNermg[i] = 18;
                    } while (ranNermg[i] != 0 && ranNermg[i] != 1 && ranNermg[i] != 2 && ranNermg[i] != 3 && ranNermg[i] != 4 && ranNermg[i] != 5 && ranNermg[i] != 6 && ranNermg[i] != 7 && ranNermg[i] != 8 && ranNermg[i] != 9 && ranNermg[i] != 10 && ranNermg[i] != 11 && ranNermg[i] != 12 && ranNermg[i] != 13 && ranNermg[i] != 14 && ranNermg[i] != 15 && ranNermg[i] != 16 && ranNermg[i] != 17 && ranNermg[i] != 18);
                    var botsmg = message.channel.send({embed: {
                    title: "Which ball is the " + berllzNermg[ranNermg[i]] +"?",
                    description: "1 => <:UnlockBall:463357163197431817> \n2 => <:UnlockBall:463357163197431817>",
                    timestamp: new Date(),
                    author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                    }});
                }
                if (message.content == "2" && randerm <= 0.5){
                    message.channel.send({embed: {
                        title: "CORRECT!",
                        description: "" + berllzg[mernerNerm] + " => <:UnlockBall:463357163197431817> \n" + berllzg[ranNermg[i]] + " => <:UnlockBall:463357163197431817>",
                        timestamp: new Date(),
                        author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                    }});
                    streakNum[i]++;
                    if (merxPlayerzLerf[i] == 7){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart: :black_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 6){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 5){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 4){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 3){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 2){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    if (merxPlayerzLerf[i] == 1){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
                    do {
                    ranNermg[i] = Math.random();
                        if (ranNermg[i] <= 0.05)
                            ranNermg[i] = 0;
                        else if (ranNermg[i] <= 0.10)
                            ranNermg[i] = 1;
                        else if (ranNermg[i] <= 0.15)
                            ranNermg[i] = 2;
                        else if (ranNermg[i] <= 0.20)
                            ranNermg[i] = 3;
                        else if (ranNermg[i] <= 0.25)
                            ranNermg[i] = 4;
                        else if (ranNermg[i] <= 0.30)
                            ranNermg[i] = 5;
                        else if (ranNermg[i] <= 0.35)
                            ranNermg[i] = 6;
                        else if (ranNermg[i] <= 0.40)
                            ranNermg[i] = 7;
                        else if (ranNermg[i] <= 0.45)
                            ranNermg[i] = 8;
                        else if (ranNermg[i] <= 0.50)
                            ranNermg[i] = 9;
                        else if (ranNermg[i] <= 0.55)
                            ranNermg[i] = 10;
                        else if (ranNermg[i] <= 0.60)
                            ranNermg[i] = 11;
                        else if (ranNermg[i] <= 0.65)
                            ranNermg[i] = 12;
                        else if (ranNermg[i] <= 0.70)
                            ranNermg[i] = 13;
                        else if (ranNermg[i] <= 0.75)
                            ranNermg[i] = 14;
                        else if (ranNermg[i] <= 0.80)
                            ranNermg[i] = 15;
                        else if (ranNermg[i] <= 0.85)
                            ranNermg[i] = 16;
                        else if (ranNermg[i] <= 0.90)
                            ranNermg[i] = 17;
                        else if (ranNermg[i] <= 0.95)
                            ranNermg[i] = 18;
                    } while (ranNermg[i] != 0 && ranNermg[i] != 1 && ranNermg[i] != 2 && ranNermg[i] != 3 && ranNermg[i] != 4 && ranNermg[i] != 5 && ranNermg[i] != 6 && ranNermg[i] != 7 && ranNermg[i] != 8 && ranNermg[i] != 9 && ranNermg[i] != 10 && ranNermg[i] != 11 && ranNermg[i] != 12 && ranNermg[i] != 13 && ranNermg[i] != 14 && ranNermg[i] != 15 && ranNermg[i] != 16 && ranNermg[i] != 17 && ranNermg[i] != 18);
                    var botsmg = message.channel.send({embed: {
                    title: "Which ball is the " + berllzNermg[ranNermg[i]] +"?",
                    description: "1 => <:UnlockBall:463357163197431817> \n2 => <:UnlockBall:463357163197431817>",
                    timestamp: new Date(),
                    author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                    }});
                }
                 
                else if (message.content == "2" && randerm <= 1){
                    message.channel.send({embed: {
                        title: "WRONG!",
                        description: "" + berllzg[ranNermg[i]] + " => <:UnlockBall:463357163197431817> \n" + berllzg[mernerNerm] + " => <:UnlockBall:463357163197431817>",
                        timestamp: new Date(),
                        author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                    }});
                    merxPlayerzLerf[i] = merxPlayerzLerf[i] - 1;
                    if (merxPlayerzLerf[i] == 7){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart: :black_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 6){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart: :purple_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 5){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart: :blue_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 4){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart: :yellow_heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 3){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 2){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart: :heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 1){
                        message.channel.send({embed: {
                            title: "NEXT ROUND!",
                            description: ":heart:",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i]++;
                    }
                    if (merxPlayerzLerf[i] == 0){
                        hs = "" + testmsguser + " has " + streakNum[i] + " Streak";
                        message.channel.send({embed: {
                            title: "STREAK",
                            description: "" + testmsguser + " has " + streakNum[i] + " Streak",
                            timestamp: new Date(),
                            author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                        streakNum[i] = 0;
                        merxPlayerzBool[i] = false;
                        merxPlayerz[i] = " ";
                    }
                    if (merxPlayerzLerf[i] != 0) {
                        do {
                        ranNermg[i] = Math.random();
                        if (ranNermg[i] <= 0.05)
                            ranNermg[i] = 0;
                        else if (ranNermg[i] <= 0.10)
                            ranNermg[i] = 1;
                        else if (ranNermg[i] <= 0.15)
                            ranNermg[i] = 2;
                        else if (ranNermg[i] <= 0.20)
                            ranNermg[i] = 3;
                        else if (ranNermg[i] <= 0.25)
                            ranNermg[i] = 4;
                        else if (ranNermg[i] <= 0.30)
                            ranNermg[i] = 5;
                        else if (ranNermg[i] <= 0.35)
                            ranNermg[i] = 6;
                        else if (ranNermg[i] <= 0.40)
                            ranNermg[i] = 7;
                        else if (ranNermg[i] <= 0.45)
                            ranNermg[i] = 8;
                        else if (ranNermg[i] <= 0.50)
                            ranNermg[i] = 9;
                        else if (ranNermg[i] <= 0.55)
                            ranNermg[i] = 10;
                        else if (ranNermg[i] <= 0.60)
                            ranNermg[i] = 11;
                        else if (ranNermg[i] <= 0.65)
                            ranNermg[i] = 12;
                        else if (ranNermg[i] <= 0.70)
                            ranNermg[i] = 13;
                        else if (ranNermg[i] <= 0.75)
                            ranNermg[i] = 14;
                        else if (ranNermg[i] <= 0.80)
                            ranNermg[i] = 15;
                        else if (ranNermg[i] <= 0.85)
                            ranNermg[i] = 16;
                        else if (ranNermg[i] <= 0.90)
                            ranNermg[i] = 17;
                        else if (ranNermg[i] <= 0.95)
                            ranNermg[i] = 18;
                    } while (ranNermg[i] != 0 && ranNermg[i] != 1 && ranNermg[i] != 2 && ranNermg[i] != 3 && ranNermg[i] != 4 && ranNermg[i] != 5 && ranNermg[i] != 6 && ranNermg[i] != 7 && ranNermg[i] != 8 && ranNermg[i] != 9 && ranNermg[i] != 10 && ranNermg[i] != 11 && ranNermg[i] != 12 && ranNermg[i] != 13 && ranNermg[i] != 14 && ranNermg[i] != 15 && ranNermg[i] != 16 && ranNermg[i] != 17 && ranNermg[i] != 18);
                        var botsmg = message.channel.send({embed: {
                        title: "Which ball is the " + berllzNermg[ranNermg[i]] +"?",
                        description: "1 => <:UnlockBall:463357163197431817> \n2 => <:UnlockBall:463357163197431817>",
                        timestamp: new Date(),
                        author: {
                    name: "Guessing Game | Level : " + streakNum[i],
                    icon_url: message.author.avatarURL
                  }
                        }});
                    }
			
                }
                 
            }
		
	}
	    merxTerm[i] = 0;
        i++;
    } while (i < 2)
	    
	    //letters to emotes
	if(message.content.includes('m!emote') == true){
		
		var werd = "";
		var cher = 8;
		//var cherer = message.content.charCodeAt(0);
		var res = message.content.split("");
		for (cher = 8; cher < message.content.length; cher++) {
			/*
			cherer = message.content.charCodeAt(o);
			if (cherer == 'a')
				werd+= lerters[0];*/
			if (res[cher] == "a" || res[cher] == "A")
				werd+= lerters[0] + "";
			else if (res[cher] == "b" || res[cher] == "B")
				werd+= lerters[1] + "";
			else if (res[cher] == "c" || res[cher] == "C")
				werd+= lerters[2] + "";
			else if (res[cher] == "d" || res[cher] == "D")
				werd+= lerters[3] + "";
			else if (res[cher] == "e" || res[cher] == "E")
				werd+= lerters[4] + "";
			else if (res[cher] == "f" || res[cher] == "F")
				werd+= lerters[5] + "";
			else if (res[cher] == "g" || res[cher] == "G")
				werd+= lerters[6] + "";
			else if (res[cher] == "h" || res[cher] == "H")
				werd+= lerters[7] + "";
			else if (res[cher] == "i" || res[cher] == "I")
				werd+= lerters[8] + "";
			else if (res[cher] == "j" || res[cher] == "J")
				werd+= lerters[9] + "";
			else if (res[cher] == "k" || res[cher] == "K")
				werd+= lerters[10] + "";
			else if (res[cher] == "l" || res[cher] == "L")
				werd+= lerters[11] + "";
			else if (res[cher] == "m" || res[cher] == "M")
				werd+= lerters[12] + "";
			else if (res[cher] == "n" || res[cher] == "N")
				werd+= lerters[13] + "";
			else if (res[cher] == "o" || res[cher] == "O")
				werd+= lerters[14] + "";
			else if (res[cher] == "p" || res[cher] == "P")
				werd+= lerters[15] + "";
			else if (res[cher] == "q" || res[cher] == "Q")
				werd+= lerters[16] + "";
			else if (res[cher] == "r" || res[cher] == "R")
				werd+= lerters[17] + "";
			else if (res[cher] == "s" || res[cher] == "S")
				werd+= lerters[18] + "";
			else if (res[cher] == "t" || res[cher] == "T")
				werd+= lerters[19] + "";
			else if (res[cher] == "u" || res[cher] == "U")
				werd+= lerters[20] + "";
			else if (res[cher] == "v" || res[cher] == "V")
				werd+= lerters[21] + "";
			else if (res[cher] == "w" || res[cher] == "W")
				werd+= lerters[22] + "";
			else if (res[cher] == "x" || res[cher] == "X")
				werd+= lerters[23] + "";
			else if (res[cher] == "y" || res[cher] == "Y")
				werd+= lerters[24] + "";
			else if (res[cher] == "z" || res[cher] == "Z")
				werd+= lerters[25] + "";
			else if (res[cher] == "1")
				werd+= lerters[26] + "";
			else if (res[cher] == "2")
				werd+= lerters[27] + "";
			else if (res[cher] == "3")
				werd+= lerters[28] + "";
			else if (res[cher] == "4")
				werd+= lerters[29] + "";
			else if (res[cher] == "5")
				werd+= lerters[30] + "";
			else if (res[cher] == "6")
				werd+= lerters[31] + "";
			else if (res[cher] == "7")
				werd+= lerters[32] + "";
			else if (res[cher] == "8")
				werd+= lerters[33] + "";
			else if (res[cher] == "9")
				werd+= lerters[34] + "";
			else if (res[cher] == "0")
				werd+= lerters[35] + "";
			else if (res[cher] == "+")
				werd+= lerters[36] + "";
			else if (res[cher] == ".")
				werd+= lerters[37] + "";
			else if (res[cher] == "%")
				werd+= lerters[38] + "";
			else if (res[cher] == "-") 
				werd+= lerters[39] + "";
			else if (res[cher] == "×")
				werd+= lerters[40] + "";
			else if (res[cher] == "<")
				werd+= lerters[41] + "";
			else if (res[cher] == "#")
				werd+= lerters[42] + "";
			else if (res[cher] == ">")
				werd+= lerters[43] + "";
			else if (res[cher] == "/")
				werd+= lerters[44] + "";
			else if (res[cher] == "!")
				werd+= lerters[45] + "";
			else if (res[cher] == "÷")
				werd+= lerters[46] + "";
			else if (res[cher] == "\\") 
				werd+= lerters[47] + "";
			else if (res[cher] == "*") 
				werd+= lerters[48] + "";
			else if (res[cher] == "&") 
				werd+= lerters[49] + "";
			else if (res[cher] == " ")
				werd+= "      ";
		}
		
		var botsmg = message.channel.send({embed: {
                        title: "Text to Emote",
                        description: "" + werd + "",
                        timestamp: new Date(),
                        author: {
                    name: "Text to Emote",
                    icon_url: message.author.avatarURL
                  }
                        }});
	}
});



client.login(process.env.BOT_TOKEN);
