/*
Type here
*/
/*GLOBAL VARIABLES====================================*/
var monkeyArray = ["Aye-aye Lemur", "Baboon", "Chimpanzee", "Red-Shanked Douc", "Finger Monkey", "Gorilla", "Indri Lemur", "Japanese Macaque", "Lar Gibbon", "Mandrill", "Orangutan", "Proboscis", "Ring-Tailed Lemur", "Siamang", "Snub-Nosed Monkey", "Spider Monkey", "Squirrel Monkey", "Woolly Monkey"];
var monkeyImgArr = [
    ["images/ayeAye_02.jpg",
        "images/ayeAye_01.jpg",
        "images/ayeAye_03.jpg"],
    ["images/baboon_03.jpg",
        "images/baboon_02.jpg",
        "images/baboon_01.jpg"],
    ["images/chimpanzee_01.jpg",
        "images/chimpanzee_03.jpg",
        "images/chimpanzee_02.jpg"],
    ["images/douc_04.jpg",
        "images/douc_01.jpg",
        "images/douc_02.jpg"],
    ["images/fingerMonkey_01.jpg",
        "images/fingerMonkey_02.jpg",
        "images/fingerMonkey_03.jpg",],
    ["images/gorilla_01.jpg",
        "images/gorilla_02.jpg",
        "images/gorilla_04.jpg",],
    ["images/indriLemur_01.jpg",
        "images/indriLemur_02.jpg",
        "images/indriLemur_03.jpg",],
    ["images/japaneseMacaque_01.jpg",
        "images/japaneseMacaque_02.jpg",
        "images/japaneseMacaque_03.jpg",],
    ["images/larGibbon_02.jpg",
        "images/larGibbon_01.jpg",
        "images/larGibbon_03.jpg",],
    ["images/mandrill_01.jpg",
        "images/mandrill_02.jpg",
        "images/mandrill_03.jpg",],
    ["images/orangutan_02.jpg",
        "images/orangutan_01.jpg",
        "images/orangutan_03.jpg",],
    ["images/proboscis_01.jpg",
        "images/proboscis_03.jpg",
        "images/proboscis_02.jpg",],
    ["images/ringTailedLemur_01.jpg",
        "images/ringTailedLemur_02.jpg",
        "images/ringTailedLemur_03.jpg",
        "images/ringTailedLemur_04.jpg",],
    ["images/siaming_03.jpg",
        "images/siaming_02.jpg",
        "images/siaming_01.jpg",],
    ["images/snubNosedMonkey_01.jpg",
        "images/snubNosedMonkey_02.jpg",
        "images/snubNosedMonkey_03.jpg",],
    ["images/spiderMonkey_01.jpg",
        "images/spiderMonkey_02.jpg",
        "images/spiderMonkey_03.jpg",],
    ["images/squirrelMonkey_03.jpg",
        "images/squirrelMonkey_01.jpg",
        "images/squirrelMonkey_02.jpg",],
    ["images/woollyMonkey_01.jpg",
        "images/woollyMonkey_02.jpg",
        "images/woollyMonkey_03.jpg",]
];
var monkeyInfo = [
    ["Africa", "Africa", "Africa", "Asia", "Latin America", "Africa", "Africa", "Asia", "Asia", "Africa", "Asia", "Asia", "Africa", "Asia", "Asia", "Latin America", "Latin America", "Latin America"],
    ["Lemur", "Cercopithecidae", "Great Ape", "Cercopithecidae", "Marmoset", "Great Ape", "Lemur", "Cercopithecidae", "Gibbon", "Cercopithecidae", "Great Ape", "Cercopithecidae", "Lemur", "Gibbon", "Cercopithecidae", "Atelidae", "Cebidae", "Atelidae"],
    ["Omnivore", "Herbivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Omnivore"]
]
var monkeyDesc = [
    ['These hideous creatures look stupid. Aye-aye Lemurs are nocturnal "monkeys" that are native to the island of madagascar. They are the worlds largest nocturnal primate. What looks the most stupid about them is how their eyes can never focus and drift in opposite directions. They have a special middle finger which is very long and looks very snapable. This finger is used for tapping on trees to locate hollow chambers where insect larvae hide. Their diet consist mostly of these bugs that they find in dead wood.'],
    ['Baboons are very cool animals. They are most well known for their swollen butts. These monkey butts are most prominate on the female baboons so the males know which ones are of age and ready to mate. Baboons are very smart creatures, back in the day of Egyptian mythology, the god of wisdom was a baboon. There are many many different types of baboons. The first image is a Hamadryas Baboon and the second and third images are Olive Baboons.'],
    ['Chimpanzees, also known as "Chimps" in American Slang, are very cool animals. They are larger and smarter than your average monkey. People share approximately 95-98% of DNA with Chimpanzees. Chimps are the monkey with the longest possible life-span, the oldest ever chimpanzee to live named "Little Mama", was alive for around 75 - 80 years and sadly passed away on November 14, 2017. "Little Mama" was best known as a professional ice skater. Chimpanzees are very handy creatures. Chimps are also special because have the ability to use tools such as hammers and sticks since they got two big thumbs like you.'],
    ['The Red-Shanked Douc is a very beautiful creature. From it\'s stunning eyes to its beautiful colourful body, these monkeys are one of the cutest creatures alive. They often communicate by barking, hooting, croacking, and holaring at eachother. Unfortunately, all 3 types of Doucs are critically endangered. They are hunted in the forests of Vietnam and often turned to medicine. Doucs are one of my favourite monkeys and I hope that they do not go extinct any time soon.'],
    ['Finger monkeys are very small monkeys. They are so small that they are about the size of a humans finger. These monkeys are very popular on TikTok because they are so small bean. Finger Monkeys are actually not the real scientific name for these small bean creature. These bad boys are more commonly know as Pygmy Marmosets by scientists alike. There are other types of Finger Monkeys that aren\'t Pygmy Marmosets, but they are most commonly that species.'],
    ['Gorillas are very large and big bulky creatures. They are the largest monkey reaching heights of 1.8 metres, and weighing up to 300kg. They are about 4-10x more powerful than humans such as you. Their bodies are very strong and they can throw things very far. Harambe is a very famous gorilla. He was born in 1999, and became an icon in 2016 after being shot and killed at the Cincinnati Zoo after a little baby boy fell into his entrapment. Harambe deserves justice.'],
    ['Indri Lemurs are the largest lemur alive, growing up to around 3 feet! They are known for hoping around and some of the best can jump vertically up to 33 feet (11x their height). Unlink most monkeys they got no tail. They got friction pads on their hands to help with grabbing on to branches. Very grippy creatures! Their white, gray, and black colour scheme makes them stand out as one of the coolest lemurs alive!'],
    ['Japanese Macaques are very chill monkeys. They are also known as "Snow Monkeys" as they are one of the only types of monkeys to live in a cold snowy environment. Found in the mountains of Japan, they love snow, but snow only covers the ground for a third of the year. During the snowy months, to warm their bodies, they tend to relax in hot springs. This helps lower their stress, making them chill as fudge. The hotsprings heal the monkeys due to the many minerals in the water. Hotspring are like hottubs but natural. It is my dream one day to chill in a hotspring with a Japanase Macaque.'],
    ['Lar Gibbons are very cool monkeys. They are light weight, weighing around 10-20 pounds. Due to their lack of body fat, they are very agile creatures. Their strong and long limbs make it easy for them to swing fast from tree to tree. In their off time they love walking like little dudes. They crip walk around like they\'re on 55th street. These little hoodlums are my personal favourite monkeys because they are so dude like. Their dude like physique makes them so cool. I like to imagine myself a Lar Gibbon walking around. I want to be one.'],
    ['Mandrills have a very colourful face and but. They shine a vibrant bright blue. Despite their friendly and colourful appearance they can be very aggressive. Madrills have the sharpest teeth making them very scary when they are angry. They are the largest non primate monkey. Despite their resemblance to baboons, they aren\'t actually baboons. Rafiki from the Lion King is often referred to as a baboons, but he is actually not a baboon due to the vibrant blue on his nose and butt suggesting he is a Mandrill.'],
    ['Orangutans are the coolest monkey. They are like dudes, they walk and do dude like things. Some of the many orangutan hobbies include fishing, driving golf carts, reading, playing at the beach, and being monkey. Orangutans are my favourite monkey because I like to imagine myself as one. They are primates which mean they are closely related to humans. So we are the same. Many years ago we used to be just like Orangutans. They are one of the smartest monkeys just like me. Mother orangutans give birth to new babies once every eight years. Orangutans are going extinct and we must protect them at all cost because they are the best animal.'],
    ['Proboscis\'s are very stupid monkeys and have a funny looking nose. The males have much larger noses than the women monkeys.The women monkeys have pathetic little stubs as their nose with their nostrils pointing up like a pig. The women monkeys find mates based on how large their nose is, leaving the men with small noses unable to find love. Unlike most monkeys, they don\'t hang out in trees all too much, they prefer to sit in swamps. They love their life around the water and are very good swimmers. To help them swim, they have their nostrils point downwards so the water doesn\'t get stuck up their nose.'],
    ['Ring-Tailed Lemurs are very charismatic monkeys. They have a beautiful striking appearance with a long bushy tail that is striped with black and white rings. Out of all the monkeys I think that Ring-Tailed Lemurs look the coolest. These monkeys like to engage with eachoter in "Lermur Ballet". During this ritual, they rub their tails scent on their wrists and wave them in the air to spread their scent to establish their territory. "Lemur Ballet" is a battle between the male lemurs to get more of their scent in the air. This attracts the other Lemurs to mate with them and have babies. I love Ring-Tailed Lemurs and they are my favourite lemur.'],
    ['Siamings are very cool monkeys. They got a little ball pocket underneath their mouth, similar to that of an adams apple. These monkeys are most well known for their loud calls to the other monkeys. They sound like "BLEEEEEHEEEEHEH BALABLABLABLABALBLABA". Because their mouth pockets are so large, they can make very large and loud sounds. Siamings are the largest of the Gibbon species. The average Siaming Gibbon is around 1 meter tall, weight about 25-30 pounds.'],
    ['Snub-Nosed Monkeys are like little dudes. They have the ability to stand, eat, and walk just like a dude. My favourite video of a snub nosed monkey is the one who eats an apple like a dude. Thye have little adorable faces. They are found all over asia, ranging from the temperate forests to the snowy mountains. During the winter they like to migrate to the warm rainforest, but during the rest of the year they live in the mountains with elevations of over 9000 feet. These little dudes have beautiful bright orange and golden fur. These are one of my personal favourite monkeys.'],
    ['Spider monkeys are like spiders, they are black and got long arms and legs and an especially long tail.  Their tail is so long and flexible and strong that it essentially functions as another limb. They are able to grab many things witht that tail. Unlike you and most other monkeys, they are thumbless, however their lack of thumb is made up by their unlack of tail. Similarly to spiders, their diet consists of some bugs. However, they mostly eat fruits, nuts, seeds, and leaves. Spider monkeys are responsible for planting trees due to all the seeds the poop out after eating fruit and seeds.'],
    ['Squirrel monkeys are like squirrels but monkey. They are very small compared to most monkeys, hence the name and also look like squirrels. They eat nuts too. They are mostly diurnal (active during the day), but some of them are a little nocturnal too (active during the night). These little creatures have assive brains compared to their tiny bodies. They even have their own language consisty of about 25-30 different types of calls. This is useful since they tend to live in troops of up to 300 monkeys.'],
    ['Woolly monkeys are got thick and dense fur, similar to the wool of a sheep. Their thickness of fur changes based on the season due to temperature and daylight duration. They shed their wool to maintain a regular body temperature. They have the most amount of fur when the are baby making them extra fluffy and warm on the inside. Their abnormally round heads are my favourite aspect of these creature since it makes them look awesome.'],
]
var scrollImg = 0;
var username = localStorage.getItem("username");
/*CHANGE MONKEY=======================================*/
//Change URL
function sendMonkey(monkeyType) {
    // Navigate to the receiver page with the data as a query parameter
    window.location.href = "monkey.html?type=" + encodeURIComponent(monkeyType);
}
//Change Text
function loadMonkey(monkeyType) {
    console.log("monkeyType:", monkeyType); //LOG
    document.getElementById("title").innerHTML = monkeyArray[monkeyType];
    document.getElementById("region").innerHTML = monkeyInfo[0][monkeyType];
    document.getElementById("species").innerHTML = monkeyInfo[1][monkeyType];
    document.getElementById("diet").innerHTML = monkeyInfo[2][monkeyType];
    document.getElementById("monkeyImg").src = monkeyImgArr[monkeyType][scrollImg];
    document.getElementById("description").innerHTML = monkeyDesc[monkeyType];
}
/*SLIDE IMAGES========================================*/
function sLeft(monkeyType) {
    scrollImg--;
    if (scrollImg < 0) {
        scrollImg = monkeyImgArr[monkeyType].length - 1;
    }
    var monkeyImg = document.querySelector(".monkeyImg");
    monkeyImg.src = monkeyImgArr[monkeyType][scrollImg];
}
function scrollRight(monkeyType) {
    scrollImg++;
    if (scrollImg >= monkeyImgArr[monkeyType].length) {
        scrollImg = 0;
    }
    var monkeyImg = document.querySelector(".monkeyImg");
    monkeyImg.src = monkeyImgArr[monkeyType][scrollImg];
}
/*SLIDE IMAGES========================================*/
/*FILTERS=============================================*/
function checkRegion() { // Region filter checkbox
    var checkboxRegion = document.getElementById("checkboxRegion");
    //Display drop down
    if (checkboxRegion.checked) {
        document.getElementById("regionList").style.display = 'block';
    } else {
        document.getElementById("regionList").style.display = 'none';
    }
    //Uncheck other boxes
}

function checkSpecies() { // Diet filter checkbox
    var checkboxRegion = document.getElementById("checkboxSpecies");
    //Display drop down
    if (checkboxRegion.checked) {
        document.getElementById("speciesList").style.display = 'block';
    } else {
        document.getElementById("speciesList").style.display = 'none';
    }
}
function checkDiet() { // Diet filter checkbox
    var checkboxRegion = document.getElementById("checkboxDiet");
    //Display drop down
    if (checkboxRegion.checked) {
        document.getElementById("dietList").style.display = 'block';
    } else {
        document.getElementById("dietList").style.display = 'none';
    }
}

var region = "Any";
var species = "Any";
var diet = "Any";

function regionSelector(object) {
    var selector = object;
    if (document.getElementById(selector.id).checked == true) {
        document.getElementById("africa").checked = false;
        document.getElementById("asia").checked = false;
        document.getElementById("latinAmerica").checked = false;
        document.getElementById(selector.id).checked = true;
        region = document.getElementById(selector.id).value;
    }
    if (document.getElementById(selector.id).checked == false) {
        region = "Any";
    }
}
function speciesSelector(object) {
    var selector = object;
    if (document.getElementById(selector.id).checked == true) {
        document.getElementById("atelidae").checked = false;
        document.getElementById("cebidae").checked = false;
        document.getElementById("cercopithecidae").checked = false;
        document.getElementById("gibbons").checked = false;
        document.getElementById("greatApes").checked = false;
        document.getElementById("lemurs").checked = false;
        document.getElementById("marmosets").checked = false;
        document.getElementById(selector.id).checked = true;
        species = document.getElementById(selector.id).value;
    }
    if (document.getElementById(selector.id).checked == false) {
        species = "Any";
    }
}

function dietSelector(object) {
    var selector = object;
    if (document.getElementById(selector.id).checked == true) {
        document.getElementById("herbivore").checked = false;
        document.getElementById("omnivore").checked = false;
        document.getElementById(selector.id).checked = true;
        diet = document.getElementById(selector.id).value;
    }
    if (document.getElementById(selector.id).checked == false) {
        diet = "Any";
    }
}



/*FILTERS=============================================*/
/*SEARCH=============================================*/

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});


function search() {
    var input = document.getElementById("search").value;
    window.location.href = 'search_results.html?input=' + encodeURIComponent(input) + "&region=" + encodeURIComponent(region) + "&species=" + encodeURIComponent(species) + "&diet=" + encodeURIComponent(diet);
}

function results(input, monkeyRegion, monkeySpecies, monkeyDiet) {
    document.getElementById("resultsTitle").innerHTML = "Search Results for: \"" + input + "\"";
    input = input.toLowerCase();
    var output = "";
    for (i = 0; i < (monkeyArray.length); i++) {
        monkey = monkeyArray[i].toLowerCase(); //I made them both lower case so it's not case sensitive
        if (monkey.includes(input) == true) {
            if (monkeyInfo[0][i] == monkeyRegion || monkeyRegion == "Any") {
                if (monkeyInfo[1][i] == monkeySpecies || monkeySpecies == "Any") {
                    if (monkeyInfo[2][i] == monkeyDiet || monkeyDiet == "Any") {
                        link = '"monkey.html?type=' + encodeURIComponent(i) + '"';
                        output = output + "<a class=\"monkeyLink\" href=" + link + ">" + monkeyArray[i] + "</a>";
                    }
                }
            }
        }

    }
    //Display filters applied
    if (monkeyRegion != "Any") {
        document.getElementById("filterApplied").innerHTML += monkeyRegion;
    }
    if (monkeySpecies != "Any") {
        if (monkeyRegion != "Any") {
            document.getElementById("filterApplied").innerHTML += ", "
        }
        document.getElementById("filterApplied").innerHTML += monkeySpecies;
    }
    if (monkeyDiet != "Any") {
        if (monkeyRegion != "Any" || monkeySpecies != "Any") {
            document.getElementById("filterApplied").innerHTML += ", "
        }
        document.getElementById("filterApplied").innerHTML += monkeyDiet;
    }
    if (monkeyRegion == "Any" && monkeySpecies == "Any" && monkeyDiet == "Any") {
        document.getElementById("filterApplied").innerHTML += "None";
    }

    document.getElementById("results").innerHTML = output;
}
/*SEARCH=============================================*/
/*DATE===============================================*/
function dateLoad() {
    var d = new Date();
    var dayOfWeek = d.getDay();
    var month = d.getMonth();
    var day = d.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var motdTitle = ["Harambe", "Orangutan Fisherman", "Donkey Kong", "Monkey Wrench", "Curious George", "King Kong Balls", "Zoboomafoo"]
    var motdImg = ["images/harambe_01.jpg", "images/fisherman_01.jpg", "images/donkeyKong_01.jpg", "images/monkeyWrench_01.jpg", "images/curiousGeorge_01.jpg", "images/kingKongBalls_01.jpg", "images/zooboomafoo_01.jpg"];
    var motdInfo = [
        ["Cincinnati Zoo", "Shore", "DK Island", "Garage", "Big City", "Prague", "Duke Lemur Center"],
        ["Gorilla", "Orangutan", "Gorilla", "Tool", "Chimpanzee", "Chimpanzee", "Coquerel's Sifaka"],
        ["May 28, 2016", "Fisherman", "Bananas", "Iron", "Banana", "Big", "Chris & Martin Kratt"]
    ]
    var motdInfoLeft = [
        ["Location: ", "Location: ", "Region: ", "Region: ", "Location: ", "Location: ", "Location: "],
        ["Race: ", "Race: ", "Race: ", "Race: ", "Race: ", "Race: ", "Race: "],
        ["Died: ", "Occupation: ", "Fav Food: ", "Material: ", "Fav Food: ", "Size: ", "Best Friends: "]
    ]
    var motdDesc = [
        ['In 2016, Harambe was shot and killed at the Cincinatti Zoo. He was shot because a 3 year old child fell into his enclosure. This cause outrage against the Cincinatti Zoo for not using alternative methods to subdue Harambe as suppose to killing him. The Cincinatti Zoo said that they did not use a tranquilizer since it was too risky since the drugs would not take immediate effect. He will be forever remembered. #JusticeForHarambe'],
        ['How did he get a fishing rod? Where is he? Who gave him his hat? How did he get there? There are many mysteries surround the Orangutan Fisherman. The Orangutan Fisherman is living the life we all want to live. Many believe that this is what ultimate nirvana looks like. He is a true outdoorsman. This is my favourite monkey of all time.'],
        ['He\'s the leader of the bunch, you know him well. He\'s finally back to kick some tail. His coconut gun can fire in spurts. If he shoots ya, it\'s gonna hurt! He\'s bigger, faster, and stronger too. He\'s the first member of the DK crew!'],
        ['This tool is very useful. As a handyman myself I can safely say this is my favourite tool. This is a sentiment that is hard for soft-handed liberals to understand. Maybe the liberals have a few bolts lose in their head that need to be tightened. As the saying goes, "Lefty loosy! Righty tighty!"'],
        ['George is a monkey who is curious. He is originally from the book series by H. A. Rey \"Curious George\" (1941). Since he has become a pop culture icon. He is the main character of the TV series \"Curious George\" (2006) that was based off of the book series \"Curious George\". He is also the main character in the movie \"Curious George\" (2006) based off of the book series \"Curious George\".  The movie his home to the original hit song \"Upside Down\" by Jack Johnson. George himself is the pet to the Man in the Yellow Hat. Due to his curiosity, he tends to get the Man in the Yellow Hat in a lot of trouble!'],
        ['King Kong Balls is an absolute beautiful statue in the heart of Prague, Czechia. The statue is 5.04 meters long, 2.10 meters wide, 2.25 meters high, and weighs 6128 lbs. This statue is based off of photo of a real chimp with huge balls. The statue was built in 2019 by a French artist Denis Defrancesco. King Kong Balls is one of the greatest creations of all time.'],
        ['Jovian, more well known as "Zoboomafoo" is a lemur that lived at the Duke Lemur Center in North Carolina. Zoboomafoo gained his fame from the self titled PBS show "Zoboomafoo" (1999-2001). In the show, Zoboomafo would join Martin and Chris Krat on many adventures to educate kids on all types of animals. In 2014, Zoboomafoo died. He lived a great life as the most well loved lemur to ever live, and is a big part of many childhoods.'],
    ]
    document.getElementById("dateId").innerHTML = "Monkey of the Day: " + days[dayOfWeek] + ", " + months[month] + " " + day;
    document.getElementById("title").innerHTML = motdTitle[dayOfWeek];
    document.getElementById("region").innerHTML = motdInfo[0][dayOfWeek];
    document.getElementById("species").innerHTML = motdInfo[1][dayOfWeek];
    document.getElementById("diet").innerHTML = motdInfo[2][dayOfWeek];
    document.getElementById("regionLeft").innerHTML = motdInfoLeft[0][dayOfWeek];
    document.getElementById("speciesLeft").innerHTML = motdInfoLeft[1][dayOfWeek];
    document.getElementById("dietLeft").innerHTML = motdInfoLeft[2][dayOfWeek];
    document.getElementById("monkeyImg").src = motdImg[dayOfWeek];
    document.getElementById("description").innerHTML = motdDesc[dayOfWeek];
}
/*DATE===============================================*/
/*STAR_RATING========================================*/
hovered = false;
function star(starNum) {
    for (count = 0; count < starNum; count++) { //CHECK STARS
        document.getElementsByClassName("fa fa-star")[count].checked = true;
        document.getElementsByClassName("fa fa-star")[count].style.color = "orange";
    } for (count = starNum; count < 5; count++) { //UNCHECK STARS
        document.getElementsByClassName("fa fa-star")[count].checked = false;
        document.getElementsByClassName("fa fa-star")[count].style.color = "rgb(219, 219, 219)";
    }
    document.getElementById("starNum").innerHTML = "(" + starNum + ".0)";
    hovered = true;
}

function hoveronStar(starNum) {
    for (count = 0; count < starNum; count++) { //COLOUR STARS
        document.getElementsByClassName("fa fa-star")[count].style.color = "orange";
    } for (count = starNum; count < 5; count++) { //UNCOLOUR STARS
        document.getElementsByClassName("fa fa-star")[count].style.color = "rgb(219, 219, 219)";
        if (document.getElementsByClassName("fa fa-star")[count].checked == true) {
            document.getElementById("starNum").innerHTML = "(" + (parseInt(count)+1) + ".0)";
        }
    }
    hovered = false;
}

function hoveroffStar() {
    if (!hovered) {
        for (count = 0; count < 5; count++) {
            document.getElementsByClassName("fa fa-star")[count].style.color = "rgb(219, 219, 219)";
            if (document.getElementsByClassName("fa fa-star")[count].checked == true) { //RE-COLOR STARS
                document.getElementsByClassName("fa fa-star")[count].style.color = "orange";
                document.getElementById("starNum").innerHTML = "(" + (parseInt(count) + 1) + ".0)";
            }
        }
    }
}
/*STAR_RATING========================================*/