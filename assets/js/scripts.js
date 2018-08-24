var MODE = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
};

var PASSENITY = {
    WORDS: {},
    NUMBERS: [],
    CHAR_MAP: [
        {key: "a", value: ["@", "a"]},
        {key: "B", value: ["8", "3"]},
        {key: "s", value: ["$", "s"]},
        {key: "i", value: ["!", "i"]},

        {key: "S", value: ["$", "5", "S"]},
        {key: "E", value: ["3", "E"]},

        {key: "9", value: ["q", "9"]},
        {key: "2", value: ["Z", "z", "3"]},
        {key: "5", value: ["S", "s", "5"]},
    ],
    SPECIAL_CHAR: ["$", "#", "@", "*", "?"],
    IMAGE_MAP: {},
    EXPLATION_MAP: [
        {key: "a", value: ["Apple"]},
        {key: "b", value: ["Ball"]},
        {key: "c", value: ["Cat"]},
        {key: "e", value: ["Eat"]},
        {key: "f", value: ["Fall"]},
        {key: "g", value: ["Gum"]},
        {key: "h", value: ["Hall"]},
        {key: "i", value: ["Internet"]},
        {key: "j", value: ["Joker"]},
        {key: "k", value: ["Kite"]},
        {key: "l", value: ["Laugh"]},
        {key: "m", value: ["Moon"]},
        {key: "n", value: ["Night"]},
        {key: "o", value: ["Orange"]},
        {key: "p", value: ["Pull"]},
        {key: "q", value: ["Question"]},
        {key: "r", value: ["Rest"]},
        {key: "s", value: ["Small"]},
        {key: "t", value: ["Tea"]},
        {key: "u", value: ["Us"]},
        {key: "v", value: ["Vitamine"]},
        {key: "w", value: ["World"]},
        {key: "x", value: ["Xerox"]},
        {key: "y", value: ["Yellow"]},
        {key: "z", value: ["Zoo"]},

        {key: "0", value: ["Zero"]},
        {key: "1", value: ["One"]},
        {key: "2", value: ["Two"]},
        {key: "3", value: ["Three"]},
        {key: "4", value: ["Four"]},
        {key: "5", value: ["Five"]},
        {key: "6", value: ["Siz"]},
        {key: "7", value: ["Seven"]},
        {key: "8", value: ["Eight"]},
        {key: "9", value: ["Nine"]},
    ]
};

var LAST_STATE = {

};

function initPasswordEntity() {
    var animalNames = ["Dog", "Cat", "Tiger", "Bird", "Lion", "Bear", "Snake", "Deer", "Rabbit", "bat", "monkey", "frog", "camel", "owl", "fish"];

    var commonWords = ["give", "day", "beautiful", "love", "rocks"];

    var planetNames = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
    var commonPlanetWords = ["awesome", "beautiful", "rocks"];

    var fastFoodNames = ["Chees", "burger", "pizza", "bread", "soup", "noodles", "icecream", "Burrito"];
    var commonFoodWords = ["Delicious", "Lovely", "Tasty", "Yummy", "Tasteful", "Sweet"];

    var vegetablesNames = ['Potato', 'Sweet corn', 'Carrot', 'Broccoli', 'Green bean', 'Tomato', 'Garlic', 'Cucumber', 'Spinach', 'Onion', 'Sweet potato', 'Mushroom', 'Pea', 'Asparagus', 'Cauliflower', 'Romaine lettuce', 'Bell pepper', 'Red bell pepper', 'Olives', 'Avocado', 'Cabbage', 'Iceberg Lettuce', 'Brussels sprout', 'Zucchini', 'Celery', 'Jalapeño', 'Spring Onions', 'Green bell pepper', 'Pumpkin', 'Baby Carrot', 'Red Cabbage', 'Corn', 'Artichoke', 'Beet', 'Kale', 'Ginger', 'Snap pea', 'Yellow onion', 'Black Beans', 'Eggplant', 'Yams', 'Heirloom Tomato', 'Red onion', 'French fries', 'Lima Bean', 'Radish', 'Leek', 'Lettuce', 'Squash', 'Pinto Beans'];
    var fruitsNames = ['Strawberries', 'Watermelon', 'Grape', 'Orange', 'Banana', 'Peach', 'Mango', 'Pineapple', 'Apple', 'Cherry', 'Blueberry', 'Raspberry', 'Pear', 'Blackberry', 'Plum', 'Kiwifruit', 'Green Grapes', 'Melon', 'Lemon', 'Tangerine', 'Pomegranate', 'Mandarin orange', 'Apricot', 'Nectarine', 'Avocado', 'Cantaloupe', 'Coconut', 'Grapefruit', 'Lime', 'Honeydew', 'Pistachio', 'Blood orange', 'Lychee', 'Fig', 'Navel Orange', 'Wild Strawberries', 'Kiwi', 'Papaya', 'Golden Apple', 'Gala Apple', 'Dates', 'Berry', 'Big Cherry', 'Pink Lady Apple', 'Sour Cherry', 'Rainier Cherries', 'White Peach', 'Red Grapes', 'Passion fruit', 'Asian Pear'];
    var nutsNames = ['Almond', 'Apricot', 'Areca nut', 'Cantaloupe', 'Cashew', 'Chestnut', 'Coconut', 'Cuddapah almond', 'Zante currant', 'Date palm', 'Common fig', 'Flax', 'Peanut', 'Walnut', 'Pine nut', 'Pistachio', 'Prune', 'Pumpkin seed', 'Saffron', 'Sesame'];

    var technicalNames1 = ['Terminal', 'Place', 'Sun', 'Air', 'Help', 'path', 'other', 'option', 'sunday'];
    technicalNames1.concat(['Watt', 'What', 'How', 'View', 'Ice', 'Water', 'Empty', 'Fridge', 'Magnet', 'Monday', 'Tuesday', 'Wednesday']);
    technicalNames1.concat(['Palace', 'Moon', 'Orbit', 'Robot', 'Terminator', 'Transformer', 'Swap', 'Panther']);
    technicalNames1.concat(['Laptop', 'Smartphone', 'Mobile', 'Tablet', 'Earphone', 'Headphone', 'Keys', 'Keyboard', 'Board']);
    technicalNames1.concat(['Cube', 'Red', 'Green', 'White', 'Blue', 'Yellow', 'Orange', 'Black']);
    technicalNames1.concat(['Power', 'Bank', 'Account', 'Solve']);
    technicalNames1.concat(['Mouse', 'Cat', 'Dog', 'Snake']);
    technicalNames1.concat(['Vision', 'Window', 'Kali', 'Init', 'Edit', 'Music', 'Video']);
    technicalNames1.concat(['Friends', 'Inception', 'Godfather', 'Batman', 'Superman', 'Spider', 'Ironman', 'Arrow', 'Bow']);
    technicalNames1.concat(['Jordon', 'Sheldon', 'Cooper', 'Big', 'Bang', 'Theory']);
    technicalNames1.concat(['Money', 'Rupee', 'Doller', 'Bitcoin', 'Bit', 'Byte', 'Coin']);
    technicalNames1.concat(['Think', 'Grow', 'Reach', 'Rich', 'Ultra']);
    technicalNames1.concat("test,next,rat,mat,pat,yellow,red,green,orange,pink,dog,cat,rain,rent,car,bike,polo,yes,no,gole,excel,apple,ball,roger,fire,fly,home,end,start,page,up,down,left,right,life,tree,trek,hike,hack,text,file,edit,search,run,tool,window,save,ok,good,bad,better,upper,cut,copy,paste,lime,star,mars,earth,rocket,gift,word,work,world,fifa,foot,football,cap,eat,food,rat,mat,white,set,morning,night,after,noon,moon,sun,pluto,saturn,second,radius,planet,over,solar,tonight,size,rock,rocket,lower,produce,random,range,hope".split(","))

    addToWordList("ANIMALS", "planet.jpg", animalNames, commonWords);
    addToWordList("PLANETS", "planet.jpg", commonPlanetWords, planetNames);
    addToWordList("FOODS", "planet.jpg", fastFoodNames, commonFoodWords);
    addToWordList("VEGETABLES", "planet.jpg", vegetablesNames, commonFoodWords);
    addToWordList("FRUITS", "planet.jpg", fruitsNames, commonFoodWords);
    addToWordList("NUTS", "planet.jpg", nutsNames, commonFoodWords);
    addToWordList("TECHNICAL", "planet.jpg", technicalNames1);

    for (var i = 0; i < 10; i++) {
        PASSENITY.NUMBERS.push(i);
    }


}

function addToWordList() {
    var group = arguments[0];
    var imageName = arguments[1];
    PASSENITY.WORDS[group] = [];
    PASSENITY.IMAGE_MAP[group] = imageName;
    for (var i = 2; i < arguments.length; i++) {
        PASSENITY.WORDS[group]["CAT" + i] = arguments[i];
    }
}


$(document).ready(initApplication);

function initApplication() {
    initPasswordEntity();
    $("#password-generate-simple").click(onClickGeneratePasswordSimple);
    $("#password-generate-hard").click(onClickGeneratePasswordHard);
    $("#password-output").click(onClickCopyToClipboard)
    onClickGeneratePasswordSimple();
}
function onClickCopyToClipboard() {
    var txt = $("#password-output").text();
    txt = txt.replace(/ /g, "");
    txt = txt.replace(/\n/g, "");
    copyToClipboard(txt);
    if (!$("#success-message").hasClass("toggle")) {

        $("#success-message").addClass("toggle");

        setTimeout(function () {
            $("#success-message").removeClass("toggle");
        }, 1000);
    }
}
function copyToClipboard(str) {
    $("#clipboard").val(str);
    $("#clipboard").get(0).select();
    document.execCommand("copy");
}



function onClickGeneratePasswordSimple() {
    var strPassword = "";
    strPassword = generatePassword(MODE.EASY);
    $("#password-output").html(strPassword);
    generatePaswordExplanation();
}

function onClickGeneratePasswordHard() {


    var strPassword = "";
    strPassword = generatePassword(MODE.HARD);

    $("#password-output").html(strPassword);
    generatePaswordExplanation();
}



function generatePassword(mode) {
    var group = getRandomeWordGroup();
    var finalword = "";
    if (mode === MODE.EASY) {
        var word1 = getRandomWord(group);
        var word2 = getRandomWord(group);
        var word3 = getRandomNumber(2);

        finalword = word1 + word2 + word3;

    } else if (mode === MODE.HARD) {
        var word1 = getRandomWord(group);
        var word2 = getRandomWord(group);
        var word3 = getRandomNumber(1);
        var word4 = getRandomNumber(1);
        var word5 = getRandomSpecialChar();
        finalword = makeItHardWord(word1) + makeItHardWord(word2) + word5 + makeItHardWord(word3) + word4;
    }
    // finalword = finalword.charAt(0).toUpperCase() + finalword.slice(1);

    var imageName = PASSENITY.IMAGE_MAP[group];
    console.log("called", imageName, group);

    $("#background-image").css("background-image", "url(assets/image/" + imageName + ")");
    return finalword;
}

function getRandomSpecialChar() {
    return PASSENITY.SPECIAL_CHAR[getRandomIndex(PASSENITY.SPECIAL_CHAR.length - 1)];
}

function makeItHardWord(word) {
    var hardWord = word + "";
    for (var i = 0; i < PASSENITY.CHAR_MAP.length; i++) {
        var objMap = PASSENITY.CHAR_MAP[i];
        var indexChar = hardWord.indexOf(objMap.key);
        if (indexChar >= 0) {
            var index = getRandomIndex(objMap.value.length - 1);
            hardWord = hardWord.replace(objMap.key, objMap.value[index]);
        }
    }
    return hardWord;
}

function getRandomWord(group) {
    var category = getRandomeWordGroupCategory(group);


    console.log(group, category);


    var index = getRandomIndex(PASSENITY.WORDS[group][category].length - 1);
    var word = PASSENITY.WORDS[group][category][index];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    word = word.replace(/ /g, "");
    console.log(group, category, index, word);
    return word;
}

function getRandomeWordGroup() {
    var group = "";
    var index = "";
    do {
        for (index in PASSENITY.WORDS) {
            if (getRandomIndex(20) % 4 == 0) {
                group = index;
            }
        }
        if (group == null || group == undefined || group == "") {
            group = index;
        }
        if (Object.keys(PASSENITY.WORDS).length == 1)
        {
            break;
        }

    } while (group === LAST_STATE.WORD_GROUP);
    LAST_STATE.WORD_GROUP = group;
    return group;
}

function getRandomeWordGroupCategory(group) {
    var category = "";
    var index = "";
    do {
        for (index in PASSENITY.WORDS[group]) {
            if (getRandomIndex(20) % 4 == 0) {
                category = index;
            }
        }
        if (category == null || category == undefined || category == "") {
            category = index;
        }

        if (Object.keys(PASSENITY.WORDS[group]).length == 1)
        {
            break;
        }
    } while (category === LAST_STATE.WORD_CATEGORY);
    LAST_STATE.WORD_CATEGORY = category;
    return category;
}

function getRandomIndex(maxNumber) {
    return Math.ceil(Math.random() * (maxNumber + 1)) - 1;
}

function getRandomNumber(digitCount) {
    var max = Math.pow(10, digitCount);
    return Math.ceil(Math.random() * (max));
}

function generatePaswordExplanation() {
    var $parent = $("#pass-explaination");
    $parent.html("");
    var items = getPaswordExplanationList();
    for (var i = 0; i < items.length; i++)
    {
        var item = items[i];
        var $item = $('<div />', {
            class: 'item',
            text: item,
            click: function () {
                var txt = getPaswordExplanationList().join(",");
                copyToClipboard(txt);
                if (!$("#pass-explaination-message").hasClass("toggle")) {

                    $("#pass-explaination-message").addClass("toggle");

                    setTimeout(function () {
                        $("#pass-explaination-message").removeClass("toggle");
                    }, 1000);
                }
            }

        });
        $parent.append($item);
    }
}
function getPaswordExplanationList() {
    var pass = $("#password-output").text();
    var explanation = [];
    for (var i = 0; i < pass.length; i++)
    {
        var c = pass.charAt(i);
        var line = c + " in " + getExplanationFor(c);
        explanation.push(line);
    }
    return explanation;
}

function getExplanationFor(c) {
    var items = PASSENITY.EXPLATION_MAP;
    for (var i = 0; i < items.length; i++)
    {
        var item = items[i];
        if (item.key === c)
        {
            return item.value[getRandomIndex(item.value.length - 1)];
        }
    }
    return "";
}