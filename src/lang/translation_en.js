/* Author: André Roberge
   License: MIT
 */

/*jshint browser:true, devel:true, white:false, plusplus:false */

/**  Note: the English translation serve two purpose:
     1. to provide a model to follow for other languages
     2. to have strings that can take some parameters that are replaced at run-time.

*/
/* jshint -W069 */
var RUR = RUR || {};

RUR.translation = {};
RUR.translation_to_english = {};


// required for object-handling functions e.g. take(object), put(object)
RUR.translation["apple"] = "apple";
RUR.translation_to_english["apple"] = "apple";
RUR.translation["banana"] = "banana";
RUR.translation_to_english["banana"] = "banana";
RUR.translation["box"] = "box";
RUR.translation_to_english["box"] = "box";
RUR.translation["bridge"] = "bridge";
RUR.translation_to_english["bridge"] = "bridge";
RUR.translation["carrot"] = "carrot";
RUR.translation_to_english["carrot"] = "carrot";
RUR.translation["daisy"] = "daisy";
RUR.translation_to_english["daisy"] = "daisy";
RUR.translation["dandelion"] = "dandelion";
RUR.translation_to_english["dandelion"] = "dandelion";
RUR.translation["leaf"] = "leaf";
RUR.translation_to_english["leaf"] = "leaf";
RUR.translation["orange"] = "orange";
RUR.translation_to_english["orange"] = "orange";
RUR.translation.square = "square";
RUR.translation_to_english["square"] = "square";
RUR.translation.star = "star";
RUR.translation_to_english["star"] = "star";
RUR.translation["strawberry"] = "strawberry";
RUR.translation_to_english["strawberry"] = "strawberry";
RUR.translation.token = "token";
RUR.translation_to_english["token"] = "token";
RUR.translation.triangle = "triangle";
RUR.translation_to_english["triangle"] = "triangle";
RUR.translation["tulip"] = "tulip";
RUR.translation_to_english["tulip"] = "tulip";

// in world.js
RUR.translation["Problem with onload code."] = "Invalid Javascript onload code; contact the creator of this world.";

RUR.translation["# from library import *"] = "# 'from library import *' in Python Code is required to use\n# the code in this library. \n\n";
RUR.translation.move = "move";
RUR.translation["Python Code"] = "Python Code";
RUR.translation["Javascript Code"] = "Javascript Code";

// in recorder.js
RUR.translation["Too many steps:"] = "Too many steps: {max_steps}";
RUR.translation["<li class='success'>Reeborg is at the correct x position.</li>"] = "<li class='success'>Reeborg is at the correct x position.</li>";
RUR.translation["<li class='failure'>Reeborg is at the wrong x position.</li>"] = "<li class='failure'>Reeborg is at the wrong x position.</li>";
RUR.translation["<li class='success'>Reeborg is at the correct y position.</li>"] = "<li class='success'>Reeborg is at the correct y position.</li>";
RUR.translation["<li class='failure'>Reeborg is at the wrong y position.</li>"] = "<li class='failure'>Reeborg is at the wrong y position.</li>";
RUR.translation["<li class='success'>All objects are at the correct location.</li>"] = "<li class='success'>All objects are at the correct location.</li>";
RUR.translation["<li class='failure'>One or more objects are not at the correct location.</li>"] = "<li class='failure'>One or more objects are not at the correct location.</li>";
RUR.translation["<li class='success'>All walls have been built correctly.</li>"] = "<li class='success'>All walls have been built correctly.</li>";
RUR.translation["<li class='failure'>One or more walls missing or built at wrong location.</li>"] = "<li class='failure'>One or more walls missing or built at wrong location.</li>";
RUR.translation["Last instruction completed!"] = "Last instruction completed!";
RUR.translation["<p class='center'>Instruction <code>done()</code> executed.</p>"] = "<p class='center'>Instruction <code>done()</code> executed.</p>";


// in control.js
RUR.translation["Unknown object"] = "Unknown object: {obj}";
RUR.translation["No object found here"] = "No {obj} found here!";
RUR.translation["object"] = "object";
RUR.translation["I don't have any object to put down!"] = "I don't have any {obj} to put down!";
RUR.translation["There is already a wall here!"] = "There is already a wall here!";
RUR.translation["Ouch! I hit a wall!"] = "Ouch! I hit a wall!";
RUR.translation["Done!"] = "Done!";  // and recorder.js
RUR.translation["There is no position as a goal in this world!"] = "There is no position as a goal in this world!";
RUR.translation["There is no goal in this world!"] = "There is no goal in this world!";
RUR.translation["I carry too many different objects. I don't know which one to put down!"] = "I carry too many different objects. I don't know which one to put down!";
RUR.translation["Many objects are here; I do not know which one to take!"] = "Many different objects are here; I do not know which one to take!";

// in robot.js (and possibly others)
RUR.translation.east = "east";
RUR.translation.north = "north";
RUR.translation.west = "west";
RUR.translation.south = "south";
RUR.translation["Unknown orientation for robot."] = "Unknown orientation for robot.";


// in ui.js
RUR.translation["World selected"] = "World {world} selected";
RUR.translation["Could not find world"] = "Could not find world {world}";
RUR.translation["Object names"] = " library, token, star, triangle, square, etc.";


// in doc_ready.js
RUR.translation["Invalid world file."] = "Invalid world file.";
RUR.translation["PERMALINK"] = "PERMALINK";

// in file_io.js
RUR.translation["Could not find link: "] = "Could not find link: ";


// in world_editor.js
RUR.translation["Click on world to move robot."] = "Click on world to add or remove possible starting positions for Reeborg.";
RUR.translation["Added robot."] = "Added Reeborg.";
RUR.translation["Click on image to turn robot"] = "Click on image to turn Reeborg";
RUR.translation["Robot now has tokens."] = "Reeborg now has {x_tokens} tokens.";
RUR.translation["Click on world to add object."] = "Click on world to set number of {obj}.";
RUR.translation["Click on desired object below."] = "Click on desired object below.";
RUR.translation["Click on world to toggle walls."] = "Click on world to toggle walls.";
RUR.translation["Click on world to set home position for robot."] = "Click on world to add/remove possible final positions for robot.";
RUR.translation["Click on world to toggle additional walls to build."] = "Click on world to toggle additional walls to build.";
RUR.translation["Click on desired goal object below."] = "Click on desired goal object below.";
RUR.translation["Click on world to set number of goal objects."] = "Click on world to set number of goal {obj}.";
RUR.translation["Enter number of tokens for robot to carry (use inf for infinite number)"] = "Enter number of tokens for Reeborg to carry.";
RUR.translation[" is not a valid value!"] = " is not a valid value!";
RUR.translation["Enter number of objects desired at that location."] = "Click on world to set number {obj}.";
RUR.translation["Objects found here:"] = "Objects found here:";
RUR.translation["Description"] = "Description";
RUR.translation["A robot located here carries no objects."] = "A robot located at {x},{y} carries no objects.";
RUR.translation["Goal to achieve:"] = "Goal to achieve:";
RUR.translation["A robot located here carries:"] = "A robot located at {x},{y} carries:";
RUR.translation["random location"] = "random location";
RUR.translation["Enter number of objects to give to robot."] = "Enter number of {obj} to give to robot.";
RUR.translation["Special information about this location:"] = "Special information about this location:";
RUR.translation["Click on world to toggle tile."] = "Click on world to toggle {obj} tile.";
RUR.translation["Click on desired tile below."] = "Click on desired tile below.";
RUR.translation["mud"] = "mud";
RUR.translation["water"] = "water";
RUR.translation["grass"] = "grass";
RUR.translation["gravel"] = "gravel";
RUR.translation["ice"] = "ice";
RUR.translation["A wall must be built east of this location."] = "A wall must be built east of this location.";
RUR.translation["A wall must be built north of this location."] = "A wall must be built north of this location.";
RUR.translation["A wall must be built west of this location."] = "A wall must be built west of this location.";
RUR.translation["A wall must be built south of this location."] = "A wall must be built south of this location.";
RUR.translation["The final required position of the robot will be chosen at random."] = "The final required position of the robot will be chosen at random.";
RUR.translation["The final position of the robot must be (x, y) = "] = "The final position of the robot must be (x, y) = ";
RUR.translation["Click on world to fill with given tile."] = "Click on world to fill with given tile.";
RUR.translation["Click on desired object below."] = "Click on desired object below.";
RUR.translation["Enter url of image to use as background."] = "Enter url of image to use as background.";
RUR.translation["Replace editor content"] = "Do you wish to replace your editor code by that provided by the creator of this world?";
RUR.translation["Replace library content"] = "Do you wish to replace your library code by that provided by the creator of this world?";
RUR.translation["colour"] = "colour";


// in storage.js
RUR.translation["Name already exist; confirm that you want to replace its content."] = "Name already exist; confirm that you want to replace its content.";
RUR.translation["No such world!"] = "No such world!";
RUR.translation["Enter world name to save"] = "Enter world name to save; names in use: ";
RUR.translation["Enter world name to delete"] = "Enter world name to delete; existing worlds: ";
RUR.translation["Delete "] = "Delete ";


// in runner.js
RUR.translation["Error found at or near line {number}."] = "Error found at or near line {number}.";
RUR.translation["<br>Perhaps a missing colon is the cause."] = "<br>Perhaps a missing colon is the cause.";
RUR.translation["<br>Perhaps you forgot to add parentheses ()."] = "<br>Perhaps you forgot to add parentheses ().";
RUR.translation["<br>Perhaps you misspelled a word or forgot to define a function or a variable."] = "<br>Perhaps you misspelled a word or forgot to define a function or a variable.";


// in images.js
RUR.translation["I'm stuck in mud."] = "I'm stuck in mud.";
RUR.translation["Mud: Reeborg <b>cannot</b> detect this and will get stuck if it moves to this location."] = "Mud: Reeborg <b>cannot</b> detect this and will get stuck if it moves to this location.";
RUR.translation["I'm slipping on ice!"] = "I'm slipping on ice!";
RUR.translation["Ice: Reeborg <b>cannot</b> detect this and will slide and move to the next location if it moves to this location."] = "Ice: Reeborg <b>cannot</b> detect this and will slide and move to the next location if it moves to this location.";
RUR.translation["Grass: usually safe."] = "Grass: usually safe.";
RUR.translation["Gravel: usually safe."] = "Gravel: usually safe.";
RUR.translation["I'm in water!"] = "I'm in water!";
RUR.translation["Water: Reeborg <b>can</b> detect this but will get damaged if it moves to this location."] = "Water: Reeborg <b>can</b> detect this but will get damaged if it moves to this location.";
RUR.translation["green_home_tile: Reeborg <b>can</b> detect this tile using at_goal()."] = "green_home_tile: Reeborg <b>can</b> detect this tile using at_goal().";
RUR.translation["Crash!"] = "Crash!";
RUR.translation["brick wall: Reeborg <b>can</b> detect this but will hurt himself if he attemps to move through it."] = "Brick wall: Reeborg <b>can</b> detect this but will hurt himself if he attemps to move through it.";
RUR.translation["I hit a fence!"] = "I hit a fence!";
RUR.translation["Fence: Reeborg <b>can</b> detect this but will be stopped by it."] = "Fence: Reeborg <b>can</b> detect this but will be stopped by it.";
RUR.translation["Bridge:"] = "Bridge: ";
RUR.translation["Reeborg <b>can</b> detect this and will know that it allows safe passage over water."] = "Reeborg <b>can</b> detect this and will know that it allows safe passage over water.";


//===
RUR.translation["Something is blocking the way!"] = "Something is blocking the way!";
RUR.translation["Reeborg <b>can</b> detect this tile using at_goal()."] = "Reeborg <b>can</b> detect this using at_goal().";
RUR.translation["green home tile:"] = "green home tile:";
RUR.translation["home:"] = "home:";
RUR.translation["racing flag:"] = "racing flag:";
RUR.translation["house:"] = "house:";

RUR.translation["fence_right"] = "fence";
RUR.translation["fence_left"] = "fence";
RUR.translation["fence_double"] = "fence";
RUR.translation["fence_vertical"] = "fence";

//=== in common_def.py
RUR.translation["Local variables"] = "Local variables";
RUR.translation["Global variables"] = "Global variables";
RUR.translation["Watched expressions"] = "Watched expressions";

// in zz_dr_blockly.js

RUR.translation["move forward"] = "move forward";
RUR.translation["write"] = "write";
RUR.translation["turn left"] = "turn left";
RUR.translation["turn_left"] = "turn_left";
RUR.translation["take"] = "take";
RUR.translation["take object"] = "take object";
RUR.translation["put"] = "put";
RUR.translation["put object"] = "put object";
RUR.translation["pause"] = "pause";
RUR.translation["Pause the program's execution."] = "Pause the program's execution.";
RUR.translation["build_wall"] = "build_wall";
RUR.translation["Build a wall in front of the robot."] = "Build a wall in front of the robot.";
RUR.translation["done"] = "done";
RUR.translation["End the program's execution."] = "End the program's execution.";
RUR.translation["True if a wall is blocking the way."] = "True if a wall is blocking the way";
RUR.translation["wall_in_front"] = "wall_in_front";
RUR.translation["wall_on_right"] = "wall_on_right";
RUR.translation["True if nothing is blocking the way."] = "True if nothing is blocking the way.";
RUR.translation["front_is_clear"] = "front_is_clear";
RUR.translation["right_is_clear"] = "right_is_clear";
RUR.translation["at_goal"] = "at_goal";
RUR.translation["True if desired destination."] = "True if desired destination.";
RUR.translation["carries_object"] = "carries_object";
RUR.translation["True if robot carries at least one object."] = "True if robot carries at least one object.";
RUR.translation["object_here"] = "object_here";
RUR.translation["True if there is at least one object here."] = "True if there is at least one object here.";
RUR.translation["is_facing_north"] = "is_facing_north";
RUR.translation["True if robot is facing North."] = "True if robot is facing North.";
RUR.translation["sound"] = "sound";
RUR.translation["think"] = "think";
RUR.translation["Delay between actions; default is 300 ms."] = "Delay between actions; default is 300 ms.";
