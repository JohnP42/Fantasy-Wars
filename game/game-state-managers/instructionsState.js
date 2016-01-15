var instructionsState = {

  create: function () {

		 var text = "Goal: Capture the enemy headquarters or kill all their units.  To see the stats for a unit or square of terrain, click on it.  To move a unit, click on it to see its range (highlights in blue).  Then click in a blue highlighted square to move them to that square.  After movement, you will see their attack range (highlights in red), and click on an enemy in range to attack them.  The amount of damage you do will appear above them.  Note: Certain units cannot both move and attack at the same time (like artillery).  Capture towns and barracks to get more gold and units (only barracks can create units).  If one of your infantry units lands on a capturable building, a prompt will appear.  Click on the unit to begin trying to capture the building.  Barracks can build one unit per turn.  Click on a barracks you own to see what units you can build.  Units that you can afford will appear in white.  Units that you cannot afford will appear in red.  Click on the unit to build it.  You cannot move a unit the same turn that you build it.";

    var background = game.load.image('parchment', 'game/assets/menus/ui/parchmentBackdrop.png');
  	var instructionsStyle = {font: "20px Herculanum", fill: "white", align: "center" };
    var instructionsText = game.add.text(40, 40, text, instructionsStyle);

   	instructionsText.anchor.set(0);
   	instructionsText.wordWrap = true;
   	instructionsText.wordWrapWidth = 725;

 
    battleStateButton = new MenuButton(175, 500, "mainMenuButtons", "mapSelectState", "battleGround", "map", "army1", "army2", "battleButton", 0, 0, 1, 0);
    campaignStateButton = new MenuButton(450, 500, "mainMenuButtons", "mapSelectState", "campaign", "map", "army1", "army2", "battleButton", 2, 2, 3, 2);
  }

};

