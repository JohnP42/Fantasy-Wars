![Fantasy Wars](http://i.neoseeker.com/ca/fantasy_wars_conceptart_cLwPX.jpg)
# Fantasy Wars
Fantasy Wars is a turn-based strategy game where each players can choose one of three mythical factions. Build up an army, capture strategic footholds, and slaughter opposing forces on your way to victory. Eliminate all enemy units or capture their castle to ensure victory.

# Game Features
* Three playable races
* Four playable maps
  * Unique scenarios on each map
* Unit creation
* Unique unit types
  ** Different attack/defense/speed/range
  ** Different properties (i.e artillery cannot move and attack)
* Building properties
* Building Capture
* Terrain bonuses
* Unit movement/attack animations
* Player vs Player
* Player vs Computer
  ** Computer AI that can build units, capture, attack, and move on the enemy position.
* Hand-drawn assets (tiles/units)
* Menu navigation
* User interface
  * Display of current selected unit and tile properties
* Sound effects (and option to mute sound)
* Victory conditions
*

# Basic Rules (Units):
Units are the forces in your army that you control to try and win the battle. Units fall into one of four categories: Infantry, Cavalry, Artillery, and Flying.

# Unit Types
* Artillery
  * Slow, long-ranged units. They deal massive damage, however, they cannot and move in the same turn.
* Cavalry
  * Close-ranged, mobile units. They can provide support to your frontline troops quickly.
* Flying
  * Fast, mobile units. They can cover ground quickly, however, they are vulnerable to attack.
* Infantry
  * Close-ranged units. The bread and butter unit of your army. These units can capture new buildings.

# Gameplay (Player Turn)
A player can move each unit once per turn, one at a time. When a player selects a unit to move, the squares it is allowed to move to are highlighted. A player selects a highlighted square to move a unit to that square. After moving (or not moving) if any enemies are within range, a unit can attack that enemy. Though some units can not move and attack in the same turn. When a unit engages another unit, first the unit that did the engaging attacks, then the other unit may counter attack if the unit is adjacent and has a min range of 1.

# Basic Rules (Terrain):
There are different kinds of terrain that units can traverse. Terrain can hinder movement, protect from range attacks, and some can be captured to gain an advantage. Some terrain can be captured and used to either gain resources, or spend resources to create units. If the structure belongs to you and a unit starts the turn on it, it will gain 20% of its max health and restore all ammo. Only infantry units can capture buildings.

# Factions
Choose one of three deadly factions.
## Elves
Graceful, city-dwelling elves who originally lived in the frosty mountains to the north. They have come to the main land to claim their stake on the territory.
## Dwarves
Dwarves who have built advanced technologies for themselves.

* Bi-Plane
* Cannon
* Grenandier
* Iron Guard
* Mech
* Mortar
* Mortarbike
* Warrior

## Orcs
Bumbling, but deadly orcs.  Beware of their sharp axes.

## How to run test suite
* npm install
* npm install -g karma-cli (to install npm globally)
* karma start
* TODO: Look into how to add assets into the karma tests