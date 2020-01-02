var BodyParts = 
{
    GetParts:function(basicPart)
    {
        var returnParts = [];
        
        if
        (
            basicPart != "head" &&
            basicPart != "abdomen" &&
            basicPart != "leftarm" &&
            basicPart != "rightarm" &&
            basicPart != "leftleg" &&
            basicPart != "rightleg"
        ) returnParts.push(BodyParts.GetBasic());
        else returnParts.push(basicPart);
        
        returnParts.push(BodyParts.GetFine(returnParts[0]));
        
        return returnParts;
    },
    
    GetBasic:function()
    {
        var basicPart;
        var randomRoll = randomInteger(100);
        
        if      (randomRoll < 11)   basicPart = "head";
        else if (randomRoll < 31)   basicPart = "abdomen";
        else if (randomRoll < 51)   basicPart = "leftarm";
        else if (randomRoll < 71)   basicPart = "rightarm";
        else if (randomRoll < 86)   basicPart = "leftleg";
        else                        basicPart = "rightleg";
        
        return basicPart;
    },
    
    // Return a fine body part if a basic part is entered.
    GetFine:function(basicPart)
    {
        var finePart;
        var randomRoll = randomInteger(100);
        
        if (basicPart == "head")
        {
            if      (randomRoll < 4)    finePart = "lefteye";
            else if (randomRoll < 7)    finePart = "righteye";
            else if (randomRoll < 17)   finePart = "nose";
            else if (randomRoll < 22)   finePart = "mouth";
            else if (randomRoll < 36)   finePart = "jaw";
            else if (randomRoll < 46)   finePart = "leftcheek";
            else if (randomRoll < 56)   finePart = "rightcheek";
            else if (randomRoll < 66)   finePart = "neck";
            else if (randomRoll < 71)   finePart = "throat";
            else if (randomRoll < 81)   finePart = "forehead";
            else                        finePart = "cranium";
        }
        else if (basicPart == "abdomen")
        {
            if      (randomRoll < 6)    finePart = "clavicle";
            else if (randomRoll < 16)   finePart = "spine";
            else if (randomRoll < 31)   finePart = "leftribcage";
            else if (randomRoll < 46)   finePart = "rightribcage";
            else if (randomRoll < 81)   finePart = "lowerabdomen";
            else if (randomRoll < 91)   finePart = "hips";
            else                        finePart = "crotch";
        }
        else if (basicPart == "leftarm" || basicPart == "rightarm")
        {
            if      (randomRoll < 21)   finePart = "shoulder";
            else if (randomRoll < 41)   finePart = "upperarm";
            else if (randomRoll < 56)   finePart = "elbow";
            else if (randomRoll < 86)   finePart = "forearm";
            else                        finePart = "hand";
        }
        else if (basicPart == "leftleg" || basicPart == "rightleg")
        {
            if      (randomRoll < 16)   finePart = "groin";
            else if (randomRoll < 51)   finePart = "thigh";
            else if (randomRoll < 76)   finePart = "knee";
            else if (randomRoll < 91)   finePart = "shin";
            else                        finePart = "foot";
        }
        else finePart = "UNDEFINED"
        
        return finePart;
    },
    
    RefineBodyPartID:function(basicPart, finePart)
    {
        var returnText = "INVALID";
        
        if (finePart == "lefteye") returnText = "left eye";
        else if (finePart == "righteye") returnText = "right eye";
        else if (finePart == "nose") returnText = "nose";
        else if (finePart == "mouth") returnText = "mouth";
        else if (finePart == "jaw") returnText = "jaw";
        else if (finePart == "leftcheek") returnText = "cheek, left side of face";
        else if (finePart == "rightcheek") returnText = "cheek, right side of face";
        else if (finePart == "neck") returnText = "neck";
        else if (finePart == "throat") returnText = "throat";
        else if (finePart == "forehead") returnText = "forehead";
        else if (finePart == "cranium") returnText = "cranium";
        
        else if (finePart == "clavicle") returnText = "clavicle";
        else if (finePart == "spine") returnText = "spine";
        else if (finePart == "leftribcage") returnText = "ribcage, left side";
        else if (finePart == "rightribcage") returnText = "ribcage, right side";
        else if (finePart == "lowerabdomen") returnText = "abdomen, below ribcage";
        else if (finePart == "hips") returnText = "hips";
        else if (finePart == "crotch") returnText = "crotch";
        
        else if (finePart == "shoulder" && basicPart == "leftarm") returnText = "left shoulder";
        else if (finePart == "upperarm" && basicPart == "leftarm") returnText = "left upper arm";
        else if (finePart == "elbow" && basicPart == "leftarm") returnText = "left elbow";
        else if (finePart == "forearm" && basicPart == "leftarm") returnText = "left forearm";
        else if (finePart == "hand" && basicPart == "leftarm") returnText = "left hand";
        
        else if (finePart == "shoulder" && basicPart == "rightarm") returnText = "right shoulder";
        else if (finePart == "upperarm" && basicPart == "rightarm") returnText = "right upper arm";
        else if (finePart == "elbow" && basicPart == "rightarm") returnText = "right elbow";
        else if (finePart == "forearm" && basicPart == "rightarm") returnText = "right forearm";
        else if (finePart == "hand" && basicPart == "rightarm") returnText = "right hand";

        else if (finePart == "groin" && basicPart == "leftleg") returnText = "groin, left side";
        else if (finePart == "thigh" && basicPart == "leftleg") returnText = "left thigh";
        else if (finePart == "knee" && basicPart == "leftleg") returnText = "left knee";
        else if (finePart == "shin" && basicPart == "leftleg") returnText = "left shin";
        else if (finePart == "foot" && basicPart == "leftleg") returnText = "left foot";
        
        else if (finePart == "groin" && basicPart == "rightleg") returnText = "groin, right side";
        else if (finePart == "thigh" && basicPart == "rightleg") returnText = "right thigh";
        else if (finePart == "knee" && basicPart == "rightleg") returnText = "right knee";
        else if (finePart == "shin" && basicPart == "rightleg") returnText = "right shin";
        else if (finePart == "foot" && basicPart == "rightleg") returnText = "right foot";
        
        
        return returnText;
    },
    
    RefineBasicBodyPartID:function(basicPart)
    {
        var returnText = "INVALID";
        
        if (basicPart == "head") returnText = "Head";
        else if (basicPart == "abdomen") returnText = "Abdomen";
        else if (basicPart == "leftarm") returnText = "Left Arm";
        else if (basicPart == "rightarm") returnText = "Right Arm";
        else if (basicPart == "leftleg") returnText = "Left Leg";
        else if (basicPart == "rightleg") returnText = "Right Leg";
        
        return returnText;
    }
};



var AttackManager =
{
    MakeDamagingAttack:function(type, character, name, attribute, professionBonus, circumstanceModifier, basicPart, finePart)
    {
        character = getObj("character", character);

        if (character)
        {
            var weaponName = getAttrByName(character.id, "WeaponName");
            
            var weaponProperties = getAttrByName(character.id, "WeaponProperties");

            var standardThreat = parseInt(getAttrByName(character.id, "Strength"));
            var baseDamageThreat = getAttrByName(character.id, "BaseDamageThreat");
            if (baseDamageThreat < standardThreat && !weaponProperties.includes("small")) baseDamageThreat = standardThreat;
            if (type == "soften") baseDamageThreat = 0;
            
            var attribute = getAttrByName(character.id, attribute);
            
            
            var maneuverPenalty = 0;
            
            if (finePart)
            {
                maneuverPenalty = 2;
                if (basicPart == "head") maneuverPenalty = 3;
            }
            else if (basicPart)
            {
                maneuverPenalty = 1;
                if (basicPart == "head") maneuverPenalty = 2;
            }
            
            
            if (!basicPart && !finePart)
            {
                var struckParts = BodyParts.GetParts();
                
                basicPart = struckParts[0];
                finePart = struckParts[1];
            }
            else if (basicPart && !finePart)
            {
                var struckParts = BodyParts.GetParts(basicPart);
                
                finePart = struckParts[1];
            }
            
            var refinedBodyPart = BodyParts.RefineBodyPartID(basicPart, finePart);
            
            
            var propertyDamageThreat = 0;
            var additionalText = "";
            if (weaponProperties.toLowerCase().includes("blunt force"))
            {
                if (basicPart == "head") propertyDamageThreat = 3;
                else if (finePart == "ribcageleft" || finePart == "ribcageRight") propertyDamageThreat = 1;
                else if (finePart == "lowerabdomen") additionalText = "{{=Target is winded.}}";
                else if (finePart == "hand") additionalText = "{{=Target Strength Check vs. drop weapon.}}";
            }
            else if (weaponProperties.toLowerCase().includes("unarmed"))
            {
                if (basicPart == "head") propertyDamageThreat = 2;
                else if (finePart == "lowerabdomen") additionalText = "{{=Target is winded.}}";
                else if (finePart == "hand") additionalText = "{{=Attacker makes immediate Disarm check.}}";
            }
            else if (weaponProperties.toLowerCase().includes("lacerating"))
            {
                if (basicPart == "head" || finePart == "lowerabdomen") propertyDamageThreat = 2;
                else if (finePart == "throat") propertyDamageThreat = 4;
                
                additionalText = "{{=If Moderate Wound or greater, target Bleeds.}}";
            }
            else if (weaponProperties.toLowerCase().includes("piercing"))
            {
                if (finePart == "lefteye" || finePart == "righteye") propertyDamageThreat = 5;
                else if (finePart == "throat") propertyDamageThreat = 3;
                else if (basicPart == "abdomen") propertyDamageThreat = 2;
                else if (finePart == "hand") additionalText = "{{=Target Willpower Check vs. drop weapon.}}";
            }
            else if (weaponProperties.toLowerCase().includes("firearm")) additionalText = "{{=Firearm: No additional threat on success.}}";
            
            sendChat("", '/desc '
            + '&{template:default}'
            + '{{**ATTACKER**= ***' + name + '.***}}'
            + '{{**WEAPON**= ' + ChatFeatures.CapitaliseFirstLetter(weaponName) + '.}}'
            + '{{**PROPERTIES**= *' + ChatFeatures.CapitaliseFirstLetter(weaponProperties) +'.*}}'
            + '{{**TYPE**= ' + ChatFeatures.CapitaliseFirstLetter(type) + '.}}'
            + '{{**LOCATION**= ' + ChatFeatures.CapitaliseFirstLetter(refinedBodyPart) + '.}}'
            + '{{**DAMAGE THREAT**= [[' + baseDamageThreat + ' + ' + propertyDamageThreat + ']]}}'
            + '{{**ATTACK ROLL**= [[1d6! + ' + (attribute - 1 - maneuverPenalty) + 'd6 + ' + professionBonus + 'd6 + ' + circumstanceModifier + 'd6]]}}'
            + additionalText
            );
        }
        else log("No character sheet found!");
    },
    
    RollD6:function(amount)
    {
        var results = [];
        
        if (amount < 0)
        {
            for (i = 0; i < Math.abs(amount); i++)  results.push(randomInteger(6) * -1);
        }
        else if (amount > 0)
        {
            for (i = 0; i < amount; i++)            results.push(randomInteger(6));
        }
        else                                        results.push(0);
        
        return results;
    },
    
    RollD6_Exploding:function()
    {
        var lastRoll = randomInteger(6);
        
        var results = [];
        results.push(lastRoll);
        
        while (lastRoll == 6)
        {
            lastRoll = randomInteger(6);
            results.push(lastRoll);
        }
        
        return results;
    }
}



var ChatFeatures =
{
    CharacterFromMessage:function(msg)
    {
        var characters = findObjs({_type: 'character'});
        var speaking;
        characters.forEach(function(chr) { if(chr.get('name') == msg.who) speaking = chr; });
 
        if(speaking) return 'character|' + speaking.id;
        else return 'player|' + msg.playerid;
    },
    
    CharacterIDFromMessage:function(msg)
    {
        var characters = findObjs({_type: 'character'});
        var speaking;
        characters.forEach(function(chr) { if(chr.get('name') == msg.who) speaking = chr; });
 
        if(speaking) return speaking.id;
        else return msg.playerid;
    },
    
    CapitaliseFirstLetter:function(text)
    {
        return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
    }
};



on("chat:message", function(msg)
{
    if (msg.type == "api")
    {
        msg.content = msg.content.toLowerCase();
        
        // On '!getbodypart' chat command:
        if(msg.type == "api" && msg.content.indexOf("!getbodypart") !== -1)
        {
            var selectedBodyParts = BodyParts.GetParts(msg.content.slice(13, msg.content.length));
        
            sendChat(ChatFeatures.CharacterFromMessage(msg), "/e 's attack strikes the " + selectedBodyParts[0] + ", " + selectedBodyParts[1] + " region!");
        }
        
        // On '!attack' chat command:
        else if(msg.type == "api" && msg.content.indexOf("!attack") !== -1)
        {
            var characterID = ChatFeatures.CharacterIDFromMessage(msg);
            
            
            if (msg.content.indexOf(" ", 8) == -1) attackType = msg.content.slice(8, msg.content.length);
            else attackType = msg.content.slice(8, msg.content.indexOf(" ", 8));
            
            if (attackType == "") attackType = "help";
            
            
            var parameter1 = msg.content.slice(9 + attackType.length, msg.content.length);
            if (parameter1.includes(" ")) parameter1 = parameter1.slice(0, parameter1.indexOf(" "));
            
            var parameter2 = msg.content.slice(10 + attackType.length + parameter1.length, msg.content.length);
            if (parameter2.includes(" ")) parameter2 = parameter2.slice(0, parameter2.indexOf(" "));
            
            var parameter3 = msg.content.slice(11 + attackType.length + parameter1.length + parameter2.length, msg.content.length);
            if (parameter3.includes(" ")) parameter3 = parameter3.slice(0, parameter3.indexOf(" "));
            
            var parameter4 = msg.content.slice(12 + attackType.length + parameter1.length + parameter2.length + parameter3.length, msg.content.length);
            if (parameter4.includes(" ")) parameter4 = parameter4.slice(0, parameter4.indexOf(" "));
            
            var parameter5 = msg.content.slice(13 + attackType.length + parameter1.length + parameter2.length + parameter3.length + parameter4.length, msg.content.length);
            if (parameter5.includes(" ")) parameter5 = parameter5.slice(0, parameter5.indexOf(" "));
            
            
            if (attackType == "x")
            {
                // (type, character, name, attribute, professionBonus, circumstanceModifier, basicPart, finePart)
                var _type = parameter1;
                var _attribute = parameter2;
                var _professionBonus = parseInt(parameter3);
                var _basicPart = parameter4;
                var _finePart = parameter5;
                
                AttackManager.MakeDamagingAttack(_type, characterID, msg.who, _attribute, _professionBonus, 0, _basicPart, _finePart);
            }
            else if (attackType == "checkprofession")
            {
                var _type = parameter1;
                var _attribute = parameter2;
                var _basicPart = parameter3;
                var _finePart = parameter4;
                
                sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=APPLY PROFESSION BONUS}} {{[None.](!attack x ' + _type + ' ' + _attribute + ' 0 ' + _basicPart + ' ' + _finePart + ') [+1d6.](!attack x ' + _type + ' ' + _attribute + ' 1 ' + _basicPart + ' ' + _finePart + ') [+2d6.](!attack x ' + _type + ' ' + _attribute + ' 2 ' + _basicPart + ' ' + _finePart + ')}}', null, {noarchive:true});
            }
            else if (attackType == "checkattribute")
            {
                var _type = parameter1;
                var _basicPart = parameter2;
                var _finePart = parameter3;

                sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT ROLL ATTRIBUTE}} {{[Strength.](!attack checkProfession ' + _type + ' strength ' + _basicPart + ' ' + _finePart + ') [Agility.](!attack checkProfession ' + _type + ' agility ' + _basicPart + ' ' + _finePart + ') [Dexterity.](!attack checkProfession ' + _type + ' dexterity ' + _basicPart + ' ' + _finePart + ') [Cunning.](!attack checkProfession ' + _type + ' cunning ' + _basicPart + ' ' + _finePart + ')}}', null, {noarchive:true});
                
            }
            else if (attackType == "callbasic") sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT BASIC PART}} {{[Head.](!attack callfine head) [Abdomen.](!attack callfine abdomen) [Left Arm.](!attack callfine leftarm) [Right Arm.](!attack callfine rightarm) [Left Leg.](!attack callfine leftleg) [Right Leg.](!attack callfine rightleg)}}', null, {noarchive:true});
            else if (attackType == "callfine")
            {
                if (parameter1 == "head")           sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT CALL TYPE}} {{**Basic=**[Attack ' + BodyParts.RefineBasicBodyPartID(parameter1) + '.](!attack checkattribute call head)}} {{**Fine**= [Left Eye.](!attack checkattribute call head lefteye) [Right Eye.](!attack checkattribute call head righteye) [Nose.](!attack checkattribute call head nose)  [Mouth.](!attack checkattribute call head mouth)  [Jaw.](!attack checkattribute call head jaw)  [Left Cheek.](!attack checkattribute call head leftcheek)  [Right Cheek.](!attack checkattribute call head rightcheek)  [Neck.](!attack checkattribute call head neck)  [Throat.](!attack checkattribute call head throat)  [Forehead.](!attack checkattribute call head forehead)  [Cranium.](!attack checkattribute call head cranium)}}', null, {noarchive:true});
                else if (parameter1 == "abdomen")   sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT CALL TYPE}} {{**Basic=**[Attack ' + BodyParts.RefineBasicBodyPartID(parameter1) + '.](!attack checkattribute call abdomen)}} {{**Fine**= [Clavicle.](!attack checkattribute call abdomen clavicle) [Spine.](!attack checkattribute call abdomen spine) [Ribcage, Left.](!attack checkattribute call abdomen leftribcage) [Ribcage, Right.](!attack checkattribute call abdomen rightribcage) [Lower Abdomen.](!attack checkattribute call abdomen lowerabdomen) [Hips.](!attack checkattribute call abdomen hips) [Crotch.](!attack checkattribute call abdomen crotch)}}', null, {noarchive:true});
                else if (parameter1 == "leftarm")   sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT CALL TYPE}} {{**Basic=**[Attack ' + BodyParts.RefineBasicBodyPartID(parameter1) + '.](!attack checkattribute call leftarm)}} {{**Fine**= [Shoulder.](!attack checkattribute call leftarm shoulder) [Upper Arm.](!attack checkattribute call leftarm upperarm) [Elbow.](!attack checkattribute call leftarm elbow) [Forearm.](!attack checkattribute call leftarm forearm) [Hand.](!attack checkattribute call leftarm hand)}}', null, {noarchive:true});
                else if (parameter1 == "rightarm")  sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT CALL TYPE}} {{**Basic=**[Attack ' + BodyParts.RefineBasicBodyPartID(parameter1) + '.](!attack checkattribute call rightarm)}} {{**Fine**= [Shoulder.](!attack checkattribute call rightarm shoulder) [Upper Arm.](!attack checkattribute call rightarm upperarm) [Elbow.](!attack checkattribute call rightarm elbow) [Forearm.](!attack checkattribute call rightarm forearm) [Hand.](!attack checkattribute call rightarm hand)}}', null, {noarchive:true});
                else if (parameter1 == "leftleg")   sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT CALL TYPE}} {{**Basic=**[Attack ' + BodyParts.RefineBasicBodyPartID(parameter1) + '.](!attack checkattribute call leftleg)}} {{**Fine**= [Groin.](!attack checkattribute call leftleg groin) [Thigh.](!attack checkattribute call leftleg thigh) [Knee.](!attack checkattribute call leftleg knee) [Shin.](!attack checkattribute call leftleg shin) [Foot.](!attack checkattribute call leftleg foot)}}', null, {noarchive:true});
                else if (parameter1 == "rightleg")  sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT CALL TYPE}} {{**Basic=**[Attack ' + BodyParts.RefineBasicBodyPartID(parameter1) + '.](!attack checkattribute call rightleg)}} {{**Fine**= [Groin.](!attack checkattribute call rightleg groin) [Thigh.](!attack checkattribute call rightleg thigh) [Knee.](!attack checkattribute call rightleg knee) [Shin.](!attack checkattribute call rightleg shin) [Foot.](!attack checkattribute call rightleg foot)}}', null, {noarchive:true});
            }
            else if (attackType == "soften")
            {
                AttackManager.MakeDamagingAttack("soften", characterID, msg.who, "Strength", 0, 0);
            }
            else if (attackType == "measure")
            {
                AttackManager.MakeDamagingAttack("measure", characterID, msg.who, "Strength", 0, 0);
            }
            else if (attackType == "aim")
            {
                var weaponName = ChatFeatures.CapitaliseFirstLetter(getAttrByName(getObj("character", characterID).id, "WeaponName"));
                
                sendChat("", "/desc &{template:default} {{**ACTION**= " + msg.who + " takes aim.}} {{**WEAPON**= " + weaponName + ".}}");
            }
            else if (attackType == "disarmcheck1") sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT DISARM ATTRIBUTE}} {{[Strength](!attack disarmcheck2 strength) [Agility](!attack disarmcheck2 agility) [Dexterity](!attack disarmcheck2 dexterity)}}', null, {noarchive:true});
            else if (attackType == "disarmcheck2") sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT PROFESSION BONUS}} {{[None.](!attack disarm ' + parameter1 + ' 0) [+1d6.](!attack disarm ' + parameter1 + ' 1) [+2d6.](!attack disarm ' + parameter1 + ' 2)}}', null, {noarchive:true});
            else if (attackType == "disarm")
            {
                var attributeScore = getAttrByName(getObj("character", characterID).id, ChatFeatures.CapitaliseFirstLetter(parameter1));
                
                sendChat("", '/desc '
                + '&{template:default}'
                + '{{***' + msg.who + '*** *attempts a disarm.*}}'
                + '{{**' + ChatFeatures.CapitaliseFirstLetter(parameter1) + ' Check -** [[1d6! + ' + (attributeScore - 2) + 'd6 + ' + parseInt(parameter2) + 'd6]]}}'
                + '{{*Contest with* **Strength, Agility or Dexterity.**}}', null, {noarchive:true});
            }

            else if (attackType == "help")
            {
                var character = getObj("character", characterID);
                
                var weaponProperties = getAttrByName(character.id, "WeaponProperties");
                
                if (weaponProperties.toLowerCase().includes("unarmed")) var prevent =  " {{**PREVENT**= [Tackle.](!attack checkAttribute tackle) [Disarm.](!attack disarmcheck1)}}";
                else var prevent = "";
                
                if (weaponProperties.toLowerCase().includes("piercing") || weaponProperties.toLowerCase().includes("lacerating") || weaponProperties.toLowerCase().includes("firearm")) var soften = "";
                else var soften = "[Soften.](!attack checkattribute soften) ";
                
                sendChat("Truthbot", '/w "' + msg.who + '" &{template:default} {{name=SELECT ATTACK MANEUVER}} {{**NONE**= [Attack.](!attack checkAttribute none)}} {{**CALL**= [Call.](!attack callbasic)}} {{**LESSEN**= ' + soften + '[Measure.](!attack checkattribute measure)}} {{**AIM**= [Take aim.](!attack aim)}}' + prevent, null, {noarchive:true});
            }
        }
        
        else if(msg.type == "api" && msg.content.indexOf("!defend") !== -1)
        {
            var character = getObj("character", ChatFeatures.CharacterIDFromMessage(msg));
            
            
            var attackRoll = msg.content.slice(8, msg.content.length);
            if (attackRoll.includes(" ")) attackRoll = attackRoll.slice(0, attackRoll.indexOf(" ")); 
            
            var damageThreat = msg.content.slice(9 + attackRoll.length, msg.content.length);
            if (damageThreat.includes(" ")) damageThreat = damageThreat.slice(0, damageThreat.indexOf(" "));
            
            var type = msg.content.slice(10 + attackRoll.length + damageThreat.length, msg.content.length);
            if (type.includes(" ")) type = type.slice(0, type.indexOf(" "));
            
            var professionBonus = msg.content.slice(11 + attackRoll.length + damageThreat.length + type.length, msg.content.length);
            if (professionBonus.includes(" ")) professionBonus = professionBonus.slice(0, professionBonus.indexOf(" "));
            
            var circumstanceBonus = msg.content.slice(12 + attackRoll.length + damageThreat.length + type.length + professionBonus.length, msg.content.length);
            
            attackRoll = parseInt(attackRoll);
            damageThreat = parseInt(damageThreat);
            professionBonus = parseInt(professionBonus);
            circumstanceBonus = parseInt(circumstanceBonus);
            
            
            var critRolls = AttackManager.RollD6_Exploding();
            
            if (type == "brace") var attributeRolls = AttackManager.RollD6(getAttrByName(character.id, "Strength") - 1);
            else if (type == "dodge") var attributeRolls = AttackManager.RollD6(getAttrByName(character.id, "Agility") - 1);
            else if (type == "counter") var attributeRolls = AttackManager.RollD6(getAttrByName(character.id, "Dexterity") - 1);
            
            var professionRolls = [];
            if (professionBonus == 0) professionRolls.push(0);
            else professionRolls = AttackManager.RollD6(professionBonus)
            
            var circumstanceRolls = [];
            if (circumstanceBonus == 0) circumstanceRolls.push(0);
            else circumstanceRolls = AttackManager.RollD6(circumstanceBonus);
            
            
            var defenceTotal = 0;
            critRolls.forEach(roll => defenceTotal += roll);
            attributeRolls.forEach(roll => defenceTotal += roll);
            professionRolls.forEach(roll => defenceTotal += roll);
            circumstanceRolls.forEach(roll => defenceTotal += roll);
            
            var degreesOfSuccess = (defenceTotal - attackRoll) / 3;
            if (degreesOfSuccess > 0) degreesOfSuccess = Math.floor(degreesOfSuccess);
            else if (degreesOfSuccess < 0) degreesOfSuccess = Math.ceil(degreesOfSuccess);
            
            var finalDamageThreat = damageThreat;
            
            var defenceOutcome = "";
            
            
            if (type == "brace")
            {
                finalDamageThreat -= 2;
                finalDamageThreat -= degreesOfSuccess;
                
                defenceOutcome = "Braced (-[[2]]DT).";
            }
            else if (type == "dodge")
            {
                if (defenceTotal < attackRoll)
                {
                    finalDamageThreat++;
                    finalDamageThreat -= degreesOfSuccess;
                    
                    defenceOutcome = "Botched Dodge (+[[1]]DT).";
                }
                else
                {
                    finalDamageThreat -= degreesOfSuccess * 2;
                    
                    defenceOutcome = "Dodged (+[[1]]DT).";
                }
            }
            else if (type == "counter")
            {
                if (defenceTotal < attackRoll)
                {
                    finalDamageThreat += 2;
                    finalDamageThreat -= degreesOfSuccess;
                    
                    defenceOutcome = "Botched Counter (+[[2]]DT).";
                }
                else
                {
                    finalDamageThreat = 0;
                    if (degreesOfSuccess >= 3) defenceOutcome = "Perfect Counter (Free action).";
                }
            }
            
            if (finalDamageThreat < 0) finalDamageThreat = 0;
            
            var injuryTaken = "No Injury.";
            if (finalDamageThreat >= 11)        injuryTaken = "CRITICAL INJURY.";
            else if (finalDamageThreat >= 7)    injuryTaken = "Major Injury.";
            else if (finalDamageThreat >= 4)    injuryTaken = "Moderate Injury.";
            else if (finalDamageThreat >= 1)    injuryTaken = "Minor Injury.";
            
            
            var displayDefenceRolls = "[[";
            critRolls.forEach(roll => displayDefenceRolls += roll + "+");
            displayDefenceRolls = displayDefenceRolls.slice(0, displayDefenceRolls.length - 1) + "]]";
            
            if (attributeRolls.length > 0)
            {
                displayDefenceRolls += " + [[";
                attributeRolls.forEach(roll => displayDefenceRolls += roll + "+");
                displayDefenceRolls = displayDefenceRolls.slice(0, displayDefenceRolls.length - 1) + "]]";
            }
            
            if (professionBonus > 0)
            {
                displayDefenceRolls += " + [[";
                professionRolls.forEach(roll => displayDefenceRolls += roll + "+");
                displayDefenceRolls = displayDefenceRolls.slice(0, displayDefenceRolls.length - 1) + "]]";
            }

            if (circumstanceBonus > 0)
            {
                displayDefenceRolls += " + [[";
                circumstanceRolls.forEach(roll => displayDefenceRolls += roll + "+");
                displayDefenceRolls = displayDefenceRolls.slice(0, displayDefenceRolls.length - 1) + "]]";
            }
            
            
            if (defenceOutcome != "") defenceOutcome = " {{=" + defenceOutcome + "}}";
            
            
            sendChat("", '/desc &{template:default} {{name=**' + msg.who + '** *attempts to* ***' + ChatFeatures.CapitaliseFirstLetter(type) + '.***}} {{**Attack**= DT [[' + damageThreat + ']], Roll [[' + attackRoll + ']].}} {{**Defence**= ' + displayDefenceRolls + ' = [[' + defenceTotal + ' + (1d1 - 1)]].}}' + defenceOutcome + ' {{**Result**= ***DT*** [[' + finalDamageThreat + ']], ' + injuryTaken + '}}', null, {noarchive:true});
        }
        
        else if(msg.type == "api" && msg.content.indexOf("!check") !== -1)
        {
            var character = getObj("character", ChatFeatures.CharacterIDFromMessage(msg));
            
            
            var attribute = msg.content.slice(7, msg.content.length);
            if (attribute.includes(" ")) attribute = attribute.slice(0, attribute.indexOf(" "));
            
            
            var professionBonus = msg.content.slice(8 + attribute.length, msg.content.length);
            if (professionBonus.includes(" ")) professionBonus = professionBonus.slice(0, professionBonus.indexOf(" "));
            
            
            var circumstanceBonus = msg.content.slice(9 + attribute.length + professionBonus.length, msg.content.length);
            if (circumstanceBonus.includes(" ")) circumstanceBonus = circumstanceBonus.slice(0, circumstanceBonus.indexOf(" "));
            
            
            var toWhisper = msg.content.slice(10 + attribute.length + professionBonus.length + circumstanceBonus.length, msg.content.length);
            if (toWhisper.includes(" ")) toWhisper = toWhisper.slice(0, toWhisper.indexOf(" "));
            
            if (toWhisper == "" || toWhisper == 0) toWhisper = false;
            else toWhisper = true;
            
            
            if (toWhisper)
            {
                var rollDetails = '/w "' + msg.who + '" ';
                var whoDis = msg.who;
            }
            else
            {
                var rollDetails = '/desc ';
                var whoDis = "";
            }
            
            rollDetails += '&{template:default} {{name= **' + msg.who + '** - ' + ChatFeatures.CapitaliseFirstLetter(attribute);
            if (professionBonus != 0) rollDetails += ', *+' + professionBonus + 'd6 prof.*';
            if (circumstanceBonus > 0) rollDetails += ', *+' + circumstanceBonus + 'd6*';
            else if (circumstanceBonus < 0) rollDetails += ', -' + circumstanceBonus + 'd6';
            
            sendChat(whoDis, rollDetails + '}} {{**Check result -**= [[1d6! + ' + (getAttrByName(character.id, ChatFeatures.CapitaliseFirstLetter(attribute)) - 1) + 'd6 + ' + professionBonus + 'd6 + ' + circumstanceBonus + 'd6]]}}' + prevent, null, {noarchive:true});
        }
    }
});