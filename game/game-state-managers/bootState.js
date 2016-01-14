var bootState = {

	create: function() {
		// Set constants for Game
    TILESCALE = 32;

    UNITS = {
    	"dwarves": {
	    	"Dwarf Warrior": 100,
				"Dwarf Grenadier": 150,
				"Dwarf Mech": 200,
				"Dwarf MotorBike": 200, 
				"Dwarf IronGuard": 400,
				"Dwarf Mortar": 900,
				"Dwarf Cannon": 1000,
				"Dwarf Biplane": 400
			},
			"elves": {
				"Elf Longbow": 100,
				"Elf Elite": 300,
				"Elf Arcanist": 300,
				"Elf Ranger": 250,
				"Elf SilverLancer": 600,
				"Elf Valkyrie": 500,
				"Elf Ballista": 600,
				"Elf EagleWatch": 600
			},
			"orcs": {
				"Orc Warmonger": 200,
				"Orc Impaler": 100,
				"Orc Berserker": 400,
				"Orc Salamander": 250,
				"Orc GilaMonster": 600,
				"Orc Catapult": 500,
				"Orc BloodWing": 300,
				"Orc Wyvern": 800
			}
    }

		game.state.start("loadState");
	}
}

