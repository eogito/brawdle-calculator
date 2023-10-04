//import inquirer from 'inquirer';

var brawlers = new Array();
var potential = new Array();
brawlers[0] = {name: "shelly", rarity: "Starter", wall: "Yes", health: 7400, projectiles: 5, year: 2017};

brawlers[1] = {name: "nita", rarity: "Rare", wall: "No", health: 8000, projectiles: 1, year: 2017};
brawlers[2] = {name: "colt", rarity: "Rare", wall: "Yes", health: 5600, projectiles: 6, year: 2017};
brawlers[3] = {name: "bull", rarity: "Rare", wall: "Yes", health: 10000, projectiles: 5, year: 2017};
brawlers[4] = {name: "brock", rarity: "Rare", wall: "Yes", health: 4800, projectiles: 1, year: 2017};
brawlers[5] = {name: "el primo", rarity: "Rare", wall: "Yes", health: 12000, projectiles: 4, year: 2017};
brawlers[6] = {name: "barley", rarity: "Rare", wall: "No", health: 4800, projectiles: 1, year: 2017};
brawlers[7] = {name: "poco", rarity: "Rare", wall: "No", health: 7400, projectiles: 1, year: 2017};
brawlers[8] = {name: "rosa", rarity: "Rare", wall: "No", health: 10800, projectiles: 3, year: 2019};

brawlers[9] = {name: "jessie", rarity: "Super Rare", wall: "No", health: 6000, projectiles: 1, year: 2017};
brawlers[10] = {name: "dynamike", rarity: "Super Rare", wall: "Yes", health: 5600, projectiles: 2, year: 2017};
brawlers[11] = {name: "tick", rarity: "Super Rare", wall: "Yes", health: 4400, projectiles: 3, year: 2019};
brawlers[12] = {name: "8-bit", rarity: "Super Rare", wall: "No", health: 10000, projectiles: 6, year: 2019};
brawlers[13] = {name: "rico", rarity: "Super Rare", wall: "No", health: 5600, projectiles: 5, year: 2017};
brawlers[14] = {name: "darryl", rarity: "Super Rare", wall: "No", health: 10600, projectiles: 10, year: 2017};
brawlers[15] = {name: "penny", rarity: "Super Rare", wall: "No", health: 6400, projectiles: 1, year: 2018};
brawlers[16] = {name: "carl", rarity: "Super Rare", wall: "No", health: 8000, projectiles: 1, year: 2019};
brawlers[17] = {name: "jacky", rarity: "Super Rare", wall: "No", health: 10000, projectiles: 1, year: 2020};
brawlers[18] = {name: "gus", rarity: "Super Rare", wall: "No", health: 6400, projectiles: 1, year: 2022};

brawlers[19] = {name: "bo", rarity: "Epic", wall: "Yes", health: 7200, projectiles: 3, year: 2017};
brawlers[20] = {name: "emz", rarity: "Epic", wall: "No", health: 7200, projectiles: 1, year: 2019};
brawlers[21] = {name: "stu", rarity: "Epic", wall: "Yes", health: 5800, projectiles: 2, year: 2021};
brawlers[22] = {name: "piper", rarity: "Epic", wall: "Yes", health: 4800, projectiles: 1, year: 2017};
brawlers[23] = {name: "pam", rarity: "Epic", wall: "No", health: 9600, projectiles: 9, year: 2017};
brawlers[24] = {name: "frank", rarity: "Epic", wall: "Yes", health: 14000, projectiles: 1, year: 2018};
brawlers[25] = {name: "bibi", rarity: "Epic", wall: "No", health: 9600, projectiles: 1, year: 2019};
brawlers[26] = {name: "bea", rarity: "Epic", wall: "No", health: 4800, projectiles: 1, year: 2019};
brawlers[27] = {name: "nani", rarity: "Epic", wall: "Yes", health: 5200, projectiles: 3, year: 2020};
brawlers[28] = {name: "edgar", rarity: "Epic", wall: "No", health: 6600, projectiles: 2, year: 2020};
brawlers[29] = {name: "griff", rarity: "Epic", wall: "Yes", health: 6800, projectiles: 9, year: 2021};
brawlers[30] = {name: "grom", rarity: "Epic", wall: "Yes", health: 5600, projectiles: 1, year: 2021};
brawlers[31] = {name: "bonnie", rarity: "Epic", wall: "No", health: 9600, projectiles: 1, year: 2022};
brawlers[32] = {name: "hank", rarity: "Epic", wall: "No", health: 11600, projectiles: 1, year: 2023};

brawlers[33] = {name: "mortis", rarity: "Mythic", wall: "No", health: 7600, projectiles: 1, year: 2017};
brawlers[34] = {name: "tara", rarity: "Mythic", wall: "Yes", health: 6200, projectiles: 3, year: 2017};
brawlers[35] = {name: "gene", rarity: "Mythic", wall: "Yes", health: 7200, projectiles: 1, year: 2019};
brawlers[36] = {name: "max", rarity: "Mythic", wall: "No", health: 6000, projectiles: 4, year: 2019};
brawlers[37] = {name: "mr. p", rarity: "Mythic", wall: "No", health: 6800, projectiles: 1, year: 2020};
brawlers[38] = {name: "sprout", rarity: "Mythic", wall: "No", health: 6000, projectiles: 1, year: 2020};
brawlers[39] = {name: "byron", rarity: "Mythic", wall: "No", health: 4800, projectiles: 1, year: 2020};
brawlers[40] = {name: "squeak", rarity: "Mythic", wall: "No", health: 7200, projectiles: 1, year: 2021};
brawlers[41] = {name: "gray", rarity: "Mythic", wall: "Yes", health: 6600, projectiles: 1, year: 2022};
brawlers[42] = {name: "willow", rarity: "Mythic", wall: "No", health: 5600, projectiles: 1, year: 2023};
brawlers[43] = {name: "doug", rarity: "Mythic", wall: "No", health: 10000, projectiles: 1, year: 2023};

brawlers[44] = {name: "spike", rarity: "Legendary", wall: "No", health: 4800, projectiles: 1, year: 2017};
brawlers[45] = {name: "crow", rarity: "Legendary", wall: "No", health: 4800, projectiles: 3, year: 2017};
brawlers[46] = {name: "leon", rarity: "Legendary", wall: "No", health: 6800, projectiles: 4, year: 2018};
brawlers[47] = {name: "sandy", rarity: "Legendary", wall: "No", health: 7600, projectiles: 1, year: 2019};
brawlers[48] = {name: "amber", rarity: "Legendary", wall: "No", health: 6400, projectiles: 1, year: 2020};
brawlers[49] = {name: "meg", rarity: "Legendary", wall: "No", health: 7400, projectiles: 8, year: 2021};
brawlers[50] = {name: "chester", rarity: "Legendary", wall: "Yes", health: 7000, projectiles: 1, year: 2022};

brawlers[51] = {name: "gale", rarity: "Chromatic", wall: "No", health: 7600, projectiles: 6, year: 2020};
brawlers[52] = {name: "surge", rarity: "Chromatic", wall: "No", health: 5600, projectiles: 1, year: 2020};
brawlers[53] = {name: "colette", rarity: "Chromatic", wall: "No", health: 6800, projectiles: 1, year: 2020};
brawlers[54] = {name: "lou", rarity: "Chromatic", wall: "No", health: 6400, projectiles: 3, year: 2020};
brawlers[55] = {name: "ruffs", rarity: "Chromatic", wall: "Yes", health: 5600, projectiles: 2, year: 2021};
brawlers[56] = {name: "belle", rarity: "Chromatic", wall: "No", health: 5200, projectiles: 1, year: 2021};
brawlers[57] = {name: "buzz", rarity: "Chromatic", wall: "No", health: 8800, projectiles: 5, year: 2021};
brawlers[58] = {name: "ash", rarity: "Chromatic", wall: "No", health: 10400, projectiles: 1, year: 2021};
brawlers[59] = {name: "lola", rarity: "Chromatic", wall: "No", health: 7600, projectiles: 6, year: 2021};
brawlers[60] = {name: "fang", rarity: "Chromatic", wall: "No", health: 8600, projectiles: 1, year: 2022};
brawlers[61] = {name: "eve", rarity: "Chromatic", wall: "No", health: 5800, projectiles: 3, year: 2022};
brawlers[62] = {name: "janet", rarity: "Chromatic", wall: "No", health: 6400, projectiles: 1, year: 2022};
brawlers[63] = {name: "otis", rarity: "Chromatic", wall: "No", health: 6400, projectiles: 3, year: 2022};
brawlers[64] = {name: "sam", rarity: "Chromatic", wall: "No", health: 10800, projectiles: 2, year: 2022};
brawlers[65] = {name: "buster", rarity: "Chromatic", wall: "No", health: 10400, projectiles: 1, year: 2022};
brawlers[66] = {name: "mandy", rarity: "Chromatic", wall: "No", health: 5600, projectiles: 1, year: 2022};
brawlers[67] = {name: "r-t", rarity: "Chromatic", wall: "No", health: 7800, projectiles: 1, year: 2023};
brawlers[68] = {name: "maisie", rarity: "Chromatic", wall: "No", health: 7200, projectiles: 1, year: 2023};
brawlers[69] = {name: "cordelius", rarity: "Chromatic", wall: "No", health: 6400, projectiles: 2, year: 2023};
brawlers[70] = {name: "pearl", rarity: "Chromatic", wall: "Yes", health: 8400, projectiles: 6, year: 2023};

var select = document.getElementById("selectNumber");
var brawler;
var guesses;

for(var i = 0; i < brawlers.length; i++) {
    var el = document.createElement("option");
    el.textContent = brawlers[i].name.charAt(0).toUpperCase() + brawlers[i].name.slice(1);
    select.appendChild(el);
}
function enter() {
    if (select.selectedIndex == 0) {
        alert("No brawler selected!");
        return;
    }
    brawler = brawlers[select.selectedIndex - 1];
    guesses = 1;
    document.getElementById("f").innerText = "# of guesses: " + guesses;
    document.getElementById("g").innerText = "";
    for (var i = 0; i <= 70; i++) {
        potential[i] = i;
    }
}
function guess() {
    if (brawler == undefined) {
        alert("Please select a brawler as your first guess");
        return;
    }
    var newl = new Array();
    var wall = document.getElementById("wall").value;
    var health = document.getElementById("health").value;
    var projectiles = document.getElementById("projectiles").value;
    var year = document.getElementById("year").value;
    
    document.getElementById("wall").value = "";
    document.getElementById("health").value = "";
    document.getElementById("projectiles").value = "";
    document.getElementById("year").value = "";
    console.log(potential);
    console.log(brawler.name);
    for (var i = 0; i < potential.length; i++) {
        var cor = true;
        var brawl = brawlers[potential[i]];
        console.log("amogus");
        if (wall == 'correct') {
            if (brawler.wall == brawl.wall) {
                if (health == 'lower') {
                    if (brawler.health > brawl.health) {
                        if (projectiles == 'lower') {
                            if (brawler.projectiles > brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'higher') {
                            if (brawler.projectiles < brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'correct') {
                            if (brawler.projectiles == brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                    }
                }
                else if (health == 'higher') {
                    if (brawler.health < brawl.health) {
                        if (projectiles == 'lower') {
                            if (brawler.projectiles > brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'higher') {
                            if (brawler.projectiles < brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'correct') {
                            if (brawler.projectiles == brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                    }
                }
                else if (health == 'correct') {
                    if (brawler.health == brawl.health) {
                        if (projectiles == 'lower') {
                            if (brawler.projectiles > brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'higher') {
                            if (brawler.projectiles < brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'correct') {
                            if (brawler.projectiles == brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            if (brawler.wall != brawl.wall) {
                if (health == 'lower') {
                    if (brawler.health > brawl.health) {
                        if (projectiles == 'lower') {
                            if (brawler.projectiles > brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'higher') {
                            if (brawler.projectiles < brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'correct') {
                            if (brawler.projectiles == brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                    }
                }
                else if (health == 'higher') {
                    if (brawler.health < brawl.health) {
                        if (projectiles == 'lower') {
                            if (brawler.projectiles > brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'higher') {
                            if (brawler.projectiles < brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'correct') {
                            if (brawler.projectiles == brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                    }
                }
                else if (health == 'correct') {
                    if (brawler.health == brawl.health) {
                        if (projectiles == 'lower') {
                            if (brawler.projectiles > brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'higher') {
                            if (brawler.projectiles < brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                        else if (projectiles == 'correct') {
                            if (brawler.projectiles == brawl.projectiles) {
                                if (year == 'lower') {
                                    if (brawler.year > brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'higher') {
                                    if (brawler.year < brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                                else if (year == 'correct') {
                                    if (brawler.year == brawl.year) {
                                        
                                        newl[newl.length] = potential[i];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    brawler = brawlers[newl[0]];
    potential = newl;
    console.log(potential);
    console.log(brawler.name);
    guesses++;
    document.getElementById("f").innerText = "# of guesses:" + guesses;
    document.getElementById("g").innerText = "you should guess " + brawler.name;
}


// const response = await inquirer.prompt([
//   {
//     type: 'input',
//     name: 'question',
//     message: 'Want to answer?'
//   }
// ]);

// console.log(response.question);
  
  
// var guess = 'fang';
// console.log(guess);
// for (var i = 0; i < 4; i++) {
//     var wall = prompt("");
//     var health = prompt("");
//     var projectiles = prompt("");
//     var year = prompt("");
//     console.log(`${wall} ${health} ${projectiles} ${year}`);
// }