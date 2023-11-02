let data;
let pokemon;
let font;
let currentSortingOrder = "Number";
let hoveredName = null;
let currentPokemonImage = null;
const pokemonImages = [];
const sounds = {};
const colorOrder = ['white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black']; //set the color order
const pokepics = { //list of pokemon images
  "Bulbasaur": "bulbasaur.png",
  "Ivysaur": "ivysaur.png",
  "Venusaur": "venusaur.png",
  "Charmander": "charmander.png",
  "Charmeleon": "charmeleon.png",
  "Charizard": "charizard.png",
  "Squirtle": "squirtle.png",
  "Wartortle": "wartortle.png",
  "Blastoise": "blastoise.png",
  "Caterpie": "caterpie.png",
  "Metapod": "metapod.png",
  "Butterfree": "butterfree.png",
  "Weedle": "weedle.png",
  "Kakuna": "kakuna.png",
  "Beedrill": "beedrill.png",
  "Pidgey": "pidgey.png",
  "Pidgeotto": "pidgeotto.png",
  "Pidgeot": "pidgeot.png",
  "Rattata": "rattata.png",
  "Raticate": "raticate.png",
  "Spearow": "spearow.png",
  "Fearow": "fearow.png",
  "Ekans": "ekans.png",
  "Arbok": "arbok.png",
  "Pikachu": "pikachu.png",
  "Raichu": "raichu.png",
  "Sandshrew": "sandshrew.png",
  "Sandslash": "sandslash.png",
  "Nidoran-f": "nidoran-f.png",
  "Nidorina": "nidorina.png",
  "Nidoqueen": "nidoqueen.png",
  "Nidoran-m": "nidoran-m.png",
  "Nidorino": "nidorino.png",
  "Nidoking": "nidoking.png",
  "Clefairy": "clefairy.png",
  "Clefable": "clefable.png",
  "Vulpix": "vulpix.png",
  "Ninetales": "ninetales.png",
  "Jigglypuff": "jigglypuff.png",
  "Wigglytuff": "wigglytuff.png",
  "Zubat": "zubat.png",
  "Golbat": "golbat.png",
  "Oddish": "oddish.png",
  "Gloom": "gloom.png",
  "Vileplume": "vileplume.png",
  "Paras": "paras.png",
  "Parasect": "parasect.png",
  "Venonat": "venonat.png",
  "Venomoth": "venomoth.png",
  "Diglett": "diglett.png",
  "Dugtrio": "dugtrio.png",
  "Meowth": "meowth.png",
  "Persian": "persian.png",
  "Psyduck": "psyduck.png",
  "Golduck": "golduck.png",
  "Mankey": "mankey.png",
  "Primeape": "primeape.png",
  "Growlithe": "growlithe.png",
  "Arcanine": "arcanine.png",
  "Poliwag": "poliwag.png",
  "Poliwhirl": "poliwhirl.png",
  "Poliwrath": "poliwrath.png",
  "Abra": "abra.png",
  "Kadabra": "kadabra.png",
  "Alakazam": "alakazam.png",
  "Machop": "machop.png",
  "Machoke": "machoke.png",
  "Machamp": "machamp.png",
  "Bellsprout": "bellsprout.png",
  "Weepinbell": "weepinbell.png",
  "Victreebel": "victreebel.png",
  "Tentacool": "tentacool.png",
  "Tentacruel": "tentacruel.png",
  "Geodude": "geodude.png",
  "Graveler": "graveler.png",
  "Golem": "golem.png",
  "Ponyta": "ponyta.png",
  "Rapidash": "rapidash.png",
  "Slowpoke": "slowpoke.png",
  "Slowbro": "slowbro.png",
  "Magnemite": "magnemite.png",
  "Magneton": "magneton.png",
  "Farfetchd": "farfetchd.png",
  "Doduo": "doduo.png",
  "Dodrio": "dodrio.png",
  "Seel": "seel.png",
  "Dewgong": "dewgong.png",
  "Grimer": "grimer.png",
  "Muk": "muk.png",
  "Shellder": "shellder.png",
  "Cloyster": "cloyster.png",
  "Gastly": "gastly.png",
  "Haunter": "haunter.png",
  "Gengar": "gengar.png",
  "Onix": "onix.png",
  "Drowzee": "drowzee.png",
  "Hypno": "hypno.png",
  "Krabby": "krabby.png",
  "Kingler": "kingler.png",
  "Voltorb": "voltorb.png",
  "Electrode": "electrode.png",
  "Exeggcute": "exeggcute.png",
  "Exeggutor": "exeggutor.png",
  "Cubone": "cubone.png",
  "Marowak": "marowak.png",
  "Hitmonlee": "hitmonlee.png",
  "Hitmonchan": "hitmonchan.png",
  "Lickitung": "lickitung.png",
  "Koffing": "koffing.png",
  "Weezing": "weezing.png",
  "Rhyhorn": "rhyhorn.png",
  "Rhydon": "rhydon.png",
  "Chansey": "chansey.png",
  "Tangela": "tangela.png",
  "Kangaskhan": "kangaskhan.png",
  "Horsea": "horsea.png",
  "Seadra": "seadra.png",
  "Goldeen": "goldeen.png",
  "Seaking": "seaking.png",
  "Staryu": "staryu.png",
  "Starmie": "starmie.png",
  "Mr-Mime": "mr-mime.png",
  "Scyther": "scyther.png",
  "Jynx": "jynx.png",
  "Electabuzz": "electabuzz.png",
  "Magmar": "magmar.png",
  "Pinsir": "pinsir.png",
  "Tauros": "tauros.png",
  "Magikarp": "magikarp.png",
  "Gyarados": "gyarados.png",
  "Lapras": "lapras.png",
  "Ditto": "ditto.png",
  "Eevee": "eevee.png",
  "Vaporeon": "vaporeon.png",
  "Jolteon": "jolteon.png",
  "Flareon": "flareon.png",
  "Porygon": "porygon.png",
  "Omanyte": "omanyte.png",
  "Omastar": "omastar.png",
  "Kabuto": "kabuto.png",
  "Kabutops": "kabutops.png",
  "Aerodactyl": "aerodactyl.png",
  "Snorlax": "snorlax.png",
  "Articuno": "articuno.png",
  "Zapdos": "zapdos.png",
  "Moltres": "moltres.png",
  "Dratini": "dratini.png",
  "Dragonair": "dragonair.png",
  "Dragonite": "dragonite.png",
  "Mewtwo": "mewtwo.png",
  "Mew": "mew.png"
};

function preload() {
  data = loadJSON("pokemon.json"); //load the JSON data
  img = loadImage('images/BG.png'); //load the background image
  font = loadFont("OldSchoolAdventures.ttf"); //load the font
  for (let name in pokepics) { //preload pokemon images
    let imageFileName = pokepics[name];
    if (imageFileName) {
      pokemonImages[name] = loadImage("images/" + imageFileName);
    }
  }

  for (let name in pokepics) { //preload pokemon sounds
    let soundFileName = name + ".wav";
    sounds[name] = loadSound("sounds/" + soundFileName);
  }
}

function setup() {
  let buttonContainer = createDiv(); // Create a container for the buttons at the top
  buttonContainer.position(100, 500);

  Nbutton = createButton("Sort by Number"); //create each of the sorting buttons
  Nbutton.mousePressed(orderNum);
  Nbutton.parent(buttonContainer);

  Hbutton = createButton("Sort By Height");
  Hbutton.mousePressed(orderHeight);
  Hbutton.parent(buttonContainer);

  Wbutton = createButton("Sort by Weight");
  Wbutton.mousePressed(orderWeight);
  Wbutton.parent(buttonContainer);

  Cbutton = createButton("Sort by Color");
  Cbutton.mousePressed(orderColor);
  Cbutton.parent(buttonContainer);

  createCanvas(600, 5000);
  pokemon = data.pokemon;
}

function mouseMoved() {
  let nameY = 500;

  if (data) {
  for (let i = 0; i < pokemon.length; i++) { //for every pokemon, determine whether the mouse is over its name based on its coordinates
    const isMouseOverName = mouseX > 125 && mouseX < 425 && mouseY > nameY - 18 && mouseY < nameY + 9; //boolean for determining if the mouse is over each name
    if (isMouseOverName) { //if true, pull the name and display an image based on that name
      hoveredName = pokemon[i].name;
      if (pokepics[hoveredName]) {
        currentPokemonImage = loadImage("images/" + pokepics[hoveredName]);
      }
      cursor(HAND); //change cursor to a hand when hovered
    }
   nameY += 27.5; //increment the y-coordinate for the next Pokemon
  }
  

  if (!hoveredName) { //if the mouse is not over any name, clear the current image
    currentPokemonImage = null;
    cursor(ARROW); //change cursor back to the default arrow
  }

}
}

function draw() {
  background(img); //set the background as the loaded image
  textSize(24);
  textAlign(LEFT);
  textFont(font);
  fill(0);

  if (data) {
  text("Sorting Order: " + currentSortingOrder, 125, 450);

  let nameX = 125; //adjust x coordinate for name column
  let dataX = 425; //adjust the x coordinate for the data column
  let nameY = 500; //adjust the y coordinate for the name column
  for (let i = 0; i < pokemon.length; i++) { //for each pokemon, print its name in the correlating color
    fill(pokemon[i].color);
    textSize(18);
    text(pokemon[i].name, nameX, nameY);
    text(getSortingData(pokemon[i]), dataX, nameY); // Display sorting data
    nameY += 27.5; // Increment the y-coordinate for the next Pokemon
  }
  if (currentPokemonImage && mouseY < 4625 && mouseY > 475 && mouseX > 125 && mouseX < 450) {
    image(currentPokemonImage, mouseX, mouseY, 100, 100); // Display the image if available
  }
}
}

function getSortingData(pokemon) { //obtain info to display in data column
  if (currentSortingOrder === "Number") {
    return pokemon.id;
  } else if (currentSortingOrder === "Height") {
    return pokemon.height/2 + " feet";
  } else if (currentSortingOrder === "Weight") {
    return pokemon.weight/2 + " lbs";
  } else if (currentSortingOrder === "Color") {
    return pokemon.color;
  }
}

function orderHeight() { //sort the list in height order
  currentSortingOrder = "Height";
  pokemon.sort((b, a) => a.height - b.height);
}

function orderWeight() { //sort the list in weight order
  currentSortingOrder = "Weight";
  pokemon.sort((b, a) => a.weight - b.weight);
}

function orderNum() { //sort the list in numerical order
  currentSortingOrder = "Number";
  pokemon.sort((a,b) => a.id - b.id);
}

function orderColor() { //sort the list in color order
  currentSortingOrder = "Color";
  pokemon.sort((a, b) => {
    const colorA = colorOrder.indexOf(a.color);
    const colorB = colorOrder.indexOf(b.color);
    return colorA - colorB;
  });
}

function mousePressed() { //play the sound when each name is clicked on
  if (mouseY > 475 && mouseY < 4625 && mouseX > 125 && mouseX < 450) {
    if (hoveredName) {
      if (sounds[hoveredName]) {
        sounds[hoveredName].play();
      }
    }
  }
}