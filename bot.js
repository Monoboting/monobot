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
        description: "•m!info\n•m!commands\n•m!solve [pack] [level]\n•m!rule [number]\n•m!rps [r/p/s]\n•m!protip [number]\n•m!meme\n•m!ball",
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
	if(message.content == 'm!info'){
		message.channel.send({embed: {
        title: "INFO",
        description: "Version 1.6\n\n-Owner/Coder: Jek\n-Helpers: AdSF, ChaotiC and DJ Lapras\n\nApproved by Lafocade",
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
        title: "V 1.6:",
        description: "NEW COMMAND UPDATE:\n Fun Command: m!ball\nSuggested by: DJ Lapras\nIf you have any suggestion on any fun commands, dm @AdSF or @Jek or any of the mods and it might be added\nEnjoy! ;)",
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
	if(message.content == 'm!meme'){
		var rerndammerme = Math.random();
		var nermmerme = 41;
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
		if (rerndammerme == 9 || rerndammerme == 10 || rerndammerme == 12 || rerndammerme == 41 || rerndammerme == 26 )
			message.channel.send("Meme is made by DJ Lapras");
		if (rerndammerme == 13)
			message.channel.send("Meme is made by emisv stonk");
		if (rerndammerme == 14)
			message.channel.send("Meme is made by bolis");
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
		
        message.channel.send({files: ["./meme"+ rerndammerme +".jpg"]});
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
		message.channel.send({embed: {
		title: "MONOGUN",
		description: "<:gun1:471054081809448960><:gun2:471054082061107211><:gun3:471054078751932416><:gun4:471054075967045633>",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
	}
	if(message.content == 'm!glock'){
		message.channel.send({embed: {
		title: "MONOGLOCK",
		description: "<:glock1:471414267711586314><:glock2:471414260354777090><:glock3:471414244089397258>\n<:glock4:471414263458562058>",
		timestamp: new Date(),
		footer: {
				icon_url: client.user.avatarURL,
				text: "Monogolf Bot"
			}
		}
		});
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
    }/*
    if(message.content.contains("m!s arcade")){
       var [] solArr = message.content.split[" "];
       //var solNum = Integer.parseInt(solArr[1]);
       message.channel.send("Arcade Level" + solArr[1] + ".");
       //message.channel.send("plz work");
    }*/
    
});



client.login(process.env.BOT_TOKEN);
