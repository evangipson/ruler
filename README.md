# Ruler

## Abstract
Ruler is a sandbox war political strategy card game capable of forming deep stories, where two players battle for control of a property, and the winner takes the property. The point of Ruler is to amass as much gold and property as you can. Players can lose cards, but will be easily able to get back to square one, either by creating a new character, or exchanging their honor for "relief" (the ability to re-draft your first army and create a new fief).

There is a Battlefield, the size of which is determined by the Property card that is being defended. Larger properties have larger battlefields.

There is a concept of "honor" which lasts through games and implies a stronger player. This will be used to make sure players are relatively the same strength; this will also protect less experienced players from being crushed. Players with more honor will have upgraded cards, and more cards in general.

Larger-scale battles will happen when players have more honor, because they will have a bigger army and more "policies", and larger properties will be at stake.

## Game Mechanics

### High-level Rules
- Each battle is for a town/kingdom/property and takes place between at least 2 players
- The winner of the battle recieves the property
- Players with lots of properties have higher Honor
- Higher Honor (more properties) lets you have a bigger deck
- If a player with lower honor beats a player with higher honor, they recieve more rewards
- Every player starts with 5 cards drawn from their deck

### Before Starting Your First Game
1. The player will create their Lord
    - This will create the player's first Lord card
1. The player will draft their first army
    - This will create the player's Regiment cards
1. The player will assign their personality
    - This will create the player's Policy cards
1. The player will be given a Gold card
    - This will allow the player to accumulate gold in between battles
1. The player will create their first fief
    - This will create the player's first (low-level) Property card
1. The player is now ready for battle

### Game Loop
#### Pre-Game Phase
1. The attacker declares that they want to fight for the defender's property
1. The defender must agree to defend the property
#### Setup Phase
1. The attacker goes first by placing their Lord card on the battlefield
1. The defender goes second by placing their Lord card on the battlefield
1. The attacker places any card on the battlefield
1. The defender places any card on the battlefield
1. This continues until the battlefield is full
#### Battle Phase
1. Until either the attacking/defending Lord is dead, or the attacker/defender surrenders:
    1. The attacker's turn begins by drawing a card
    1. The attacker has the opportunity to play a card from their hand
        - This can be an equipment card, or a policy card
    1. The attacker can then declare an attack to any adjacent defender card on the battlefield, or if there aren't any adjacent defender cards, the attacker can move any card to a new spot on the battlefield, given it is within the card's range
    1. The attacker's turn is over
    1. The defender's turn begins by drawing a card
    1. The defender has the opportunity to play a card from their hand
        - This can be an equipment card, or a policy card
    1. The defender can then declare an attack to any adjacent attacker card on the battlefield, or if there aren't any adjacent attacker cards, the defender can move any card to a new spot on the battlefield, given it is within the card's range
    1. The defender's turn is over
#### Win Phase
1. If the defender wins, they take any non-Lord, non-Property card
    - If the defender and attacker have equal honor, or if the defender has more honor than the attacker, the defender will take one card
    - If the defender has lower honor than the attacker and they win, they will take more than one of these cards, the number is determined by the formula:
    ``CardsTaken = AttackerHonor - DefenderHonor``
1. If the attacker wins, they take the Property card from the defender
    - If the attacker and defender have equal honor, or if the attacker has more honor than the defender, the attacker will take only the Property card
    - If the attacker has lower honor than the defender and they win, they will take the Property card as well as any non-Lord, non-Property card.
        - The number of non-Lord, non-Property cards is determined by the formula:
    ``CardsTaken = DefenderHonor - AttackerHonor - 1``
1. Both players will then have a chance to upgrade their cards
    - This can happen anytime after the battle, it's not technically a phase of the game, the store is a seperate phase after the battle ends
    - The store will exchange Gold for upgrades to existing cards or new cards
        - Upgrades to existing cards will improve Range, Power, or Defense ratings and allow for new art and title
    - The store will allow players to exchange unwanted cards for Gold

### Battlefield
The battlefield is a variable-sized grid which players will use to position their army, Lord, and equipment (on top of Lord/Regiment cards) before the battle for the property ensues. The size of the battlefield is determined by the Property Card in question.

During the duration of the game, cards will move in the grid. A battle will ensue between the Regiment/Lord and any Regiment/Lord adjacent, decided by the player whose turn it is. Equipment is taken into account during battle.

#### Battlefield Example
##### New Game
<table>
    <tbody>
        <tr>
            <td colspan=3 style="text-align: center"><b>Defender</b></td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center">Property Card<br />Size: 3</td>
        </tr>
        <tr>
            <td>Open Square</td>
            <td>Defender Lord Card</td>
            <td>Open Square</td>
        </tr>
        <tr>
            <td>Open Square</td>
            <td>Open Square</td>
            <td>Open Square</td>
        </tr>
        <tr>
            <td>Open Square</td>
            <td>Attacker Lord Card</td>
            <td>Open Square</td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center"><b>Attacker</b></td>
        </tr>
    </tbody>
</table>

##### Mid-Game
<table>
    <tbody>
        <tr>
            <td colspan=3 style="text-align: center"><b>Defender</b></td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center">Property Card<br />Size: 3</td>
        </tr>
        <tr>
            <td>Defender Regiment card</td>
            <td>Defender Lord card</td>
            <td>Defender Regiment card</td>
        </tr>
        <tr>
            <td>Defender Regiment card</td>
            <td>Attacker Lord Card</td>
            <td>Attacker Regiment card</td>
        </tr>
        <tr>
            <td>Attacker Regiment card</td>
            <td>Attacker Regiment card</td>
            <td>Open Square</td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center"><b>Attacker</b></td>
        </tr>
    </tbody>
</table>

## Types of Cards
You can upgrade each type of card with a certain amount of gold.

### Resource Cards
Every Resource card (minus Gold cards) will have a Range, Power, or Defense rating. These are taken into account with the Regiment/Lord card's ratings during the battle for movement and combat. Resource cards are played "on" Regiment/Lord cards. Each Regiment/Lord card can only have 2 equipment attached at any given time.
- Gold
    - Not placed on the battlefield
    - All gold is accumulated on one card
    - Every player starts with a "Gold" card
- Trade Goods
    - Not placed on the battlefield
    - Wine/Beer
    - Food
    - Silk
    - etc.
- Equipment
    - Placed on the battlefield
    - Weapons
    - Armor
- Animals
    - Placed on the battlefield
    - Horses
    - Cows
    - etc.
#### Example Resource Card
<table>
    <tbody>
        <tr>
            <td colspan=3><b>Resource Card Title</b></td>
        </tr>
        <tr>
            <td colspan=3>Resource Card Type</td>
        </tr>
        <tr>
            <td colspan=3 style="height:70px">Resource Card Description</td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center;height:200px">Resource Card Art</td>
        </tr>
        <tr>
            <td>Range Rating</td>
            <td>Power Rating</td>
            <td>Defense Rating</td>
        </tr>
    </tbody>
</table>

### Regiment Cards
Every Regiment card will have a Range, Power, and Defense rating. These are taken into account during the battle for movement and combat.
- Melee
    - Swordsmen, Spearmen, Axemen, Bandits, etc.
    - Needs an equipment card before attacking
- Ranged
    - Bowmen, Longbowmen, Crossbowmen, etc.
    - Needs an equipment card before attacking
- Mounted
    - Cavalry Swordsmen, Cavalry Spearmen, Cavalary Bowmen, etc.
    - Needs a Melee/Ranged Regiment card (with equipment) and Animal Resource card before attacking
#### Example Regiment Card
<table>
    <tbody>
        <tr>
            <td colspan=3><b>Regiment Card Title</b></td>
        </tr>
        <tr>
            <td colspan=3>Regiment Card Type</td>
        </tr>
        <tr>
            <td colspan=3 style="height:70px">Regiment Card Description</td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center;height:200px">Regiment Card Art</td>
        </tr>
        <tr>
            <td>Range Rating</td>
            <td>Power Rating</td>
            <td>Defense Rating</td>
        </tr>
    </tbody>
</table>

### Lord Cards
Every Lord card is created by the player before their first battle. They will be able to customize the title, art, description, range, power, and defense.
#### Example Lord Card
<table>
    <tbody>
        <tr>
            <td colspan=3><b>Lord Card Title</b></td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center;height:200px">Lord Card Art</td>
        </tr>
        <tr>
            <td colspan=3 style="height:70px">Lord Card Description</td>
        </tr>
        <tr>
            <td>Range Rating</td>
            <td>Power Rating</td>
            <td>Defense Rating</td>
        </tr>
    </tbody>
</table>

### Property Cards
Every Property card will have a Size, Wealth, and Tax rating. The size rating will determine the size of the battlefield. The Wealth and Tax rating will determine how much Gold the player will recieve from the Property.
#### Example Property Card
<table>
    <tbody>
        <tr>
            <td colspan=3><b>Property Card Title</b></td>
        </tr>
        <tr>
            <td colspan=3 style="text-align: center;height:200px">Property Card Art</td>
        </tr>
        <tr>
            <td colspan=3 style="height:70px">Property Card Description</td>
        </tr>
        <tr>
            <td>Size Rating</td>
            <td>Wealth Rating</td>
            <td>Tax Rating</td>
        </tr>
    </tbody>
</table>
