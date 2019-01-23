const { get } = require('node-superfetch'); //the core of this package

/**
 * Get a random image of a cat!
 * @returns {Promise} A promise that contains url to the image
 * 
 */

module.exports = {  
    cat: randomCat,
    bird: randomBird,
    dog: randomDog,
    bunny: randomBunny,
    duck: randomDuck,
    fox: randomFox,
    lion: randomLion,
    lizard: randomLizard,
    owl: randomOwl,
    panda: randomPanda,
    redPanda: randomRedPanda,
    penguin: randomPenguin,
    shiba: randomShiba,
    tiger: randomTiger
}


function randomCat() {

        var request = async () => { 
            var res = await get('https://aws.random.cat/meow'); 
            if (res.ok) {
                return res.body;
            } else { 
                console.error(`An error occured: ${res.error}`);
            }
        }

        var url = request().then(body => body.file);
        return url; 
}


function randomBird() {

    var request = async () => {
        var res = await get('http://random.birb.pw/tweet/');
        if (res.ok) {
            return res.text;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => `http://random.birb.pw/img/${body}`);
    return url; 
}


function randomDog() {

    var request = async () => { 
        var res = await get('https://dog.ceo/api/breeds/image/random');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.message);
    return url; 
}

function randomBunny() {

    var request = async () => { 
        var res = await get('https://api.bunnies.io/v2/loop/random/?media=gif,png');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.media.poster);
    return url; 
}

function randomDuck() {

    var request = async () => { 
        var res = await get('https://random-d.uk/api/v1/random?type=png');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.url);
    return url; 
}

function randomFox() {

    var request = async () => { 
        var res = await get('https://randomfox.ca/floof/');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.image);
    return url; 
}

function randomLion() {

    var request = async () => { 
        var res = await get('https://animals.anidiots.guide/lion');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.link);
    return url; 
}

function randomLizard() {

    var request = async () => { 
        var res = await get('https://nekos.life/api/v2/img/lizard');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.url);
    return url; 
}

function randomOwl() {

    var request = async () => { 
        var res = await get('http://pics.floofybot.moe/owl');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.image);
    return url; 
}

function randomPanda() {

    var request = async () => { 
        var res = await get('https://animals.anidiots.guide/panda');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.link);
    return url; 
}

function randomRedPanda() {

    var request = async () => { 
        var res = await get('https://animals.anidiots.guide/red_panda');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.link);
    return url; 
}

function randomPenguin() {

    var request = async () => { 
        var res = await get('https://animals.anidiots.guide/penguin');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.link);
    return url; 
}

function randomShiba() {

    var request = async () => { 
        var res = await get('http://shibe.online/api/shibes');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body[0]);
    return url; 
}

function randomTiger() {

    var request = async () => { 
        var res = await get('https://animals.anidiots.guide/tiger');
        if (res.ok) {
            return res.body;
        } else { 
            console.error(`An error occured: ${res.error}`);
        }
    }

    var url = request().then(body => body.link);
    return url; 
}
