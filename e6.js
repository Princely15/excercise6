// Excercise 6
const guests = {
    Anthony: {
        title: 'General',
        region: 'Rome',
        dietaryPref: 'Vegetarian',
        pastGifts: ['Golden Laurel', 'Chariot']
    },
    Cicero: {
        title: 'Orator',
        region: 'Arpium',
        dietaryPref: 'Omnivore',
        pastGifts: ['Scroll of Proverbs', 'Quill']
    }
};

guests.Brutus = {
    title: 'Senator',
    region: 'Rome',
    dietaryPref: 'Vegan',
    pastGifts: ['Silver Dagger', 'Marble Bust']
};

guests.Cicero.pastGifts.push('Golden Lyre')

const antonyRegion = guests.Anthony.region;

delete guests.Cicero

const generalProfile = guests.Anthony;
generalProfile.region ='Egypt';

