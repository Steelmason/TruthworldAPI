# TruthworldAPI
A custom script for automating rolls for the TTRPG 'Truthworld' using Roll20.net's API scripting system.



NOTE that each character-sheet must be provided with the following Roll20 Attributes in order to function:

// [ The following attributes should be a number value between from 0 to 4 depending on how many d6s are rolled for that attribute. Example: Poor = 1, Average = 2, Good = 3... ]
Cunning
Knowledge
Willpower
Strength
Agility
Dexterity

// [ This is the BDT of the weapon the character is currently using. If unarmed, enter '0'. ]
BaseDamageThreat

// [ Purpose should be obvious. If unarmed, preferably enter 'none'. ]
WeaponName

// [ This attribute lists all weapon properties. If weapon has more than one property, enter them each seperated by space, comma, or colon. If unarmed, preferably enter 'unarmed'. ]
WeaponProperties



In addition, I highly recommend setting up these three macros and ticking the 'In Bar' box on the 'Macros' menu:

NAME:       Attack
CONTENTS:   !attack

NAME:       Check
CONTENTS:   !check ?{Attribute to roll|Cunning,cunning|Knowledge,knowledge|Willpower,willpower|Strength,strength|Agility,agility|Dexterity,dexterity} ?{Profession Bonus|0} ?{Circumstance Bonus|0} ?{Whisper Check?|Public,0|Whisper,1}

NAME:       Defend
CONTENTS:   !defend ?{Attack roll to defend from|0} ?{Damage threat to defend against|0} ?{How do you defend?|Brace,brace|Dodge,dodge|Counter,counter} ?{Profession Bonus|0} ?{Circumstance Bonus|0}
