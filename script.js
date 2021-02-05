var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm+dd;

const zodiac = [
    {name: 'Aires', dateStart: 0321, dateEnd: 0419, type: 'Fire'},
    {name: 'Taurus', dateStart: 0420, dateEnd: 0520, type: 'Earth'},
    {name: 'Gemini', dateStart: 0521, dateEnd: 0620, type: 'Air'},
    {name: 'Cancer', dateStart: 0621, dateEnd: 0722, type: 'Water'},
    {name: 'Leo', dateStart: 0723, dateEnd: 0822, type: 'Fire'},
    {name: 'Virgo', dateStart: 0823, dateEnd: 0922, type: 'Earth'},
    {name: 'Libra', dateStart: 0923, dateEnd: 1022, type: 'Air'},
    {name: 'Scorpio', dateStart: 1023, dateEnd: 1121, type: 'Water'},
    {name: 'Sagittarius', dateStart: 1122, dateEnd: 1221, type: 'Fire'},
    {name: 'Capricorn', dateStart: 1222, dateEnd: 0119, type: 'Earth'},
    {name: 'Aquarius', dateStart: 0120, dateEnd: 0218, type: 'Air'},
    {name: 'Pisces', dateStart: 0219, dateEnd: 0320, type: 'Water'}
];

const Fire = ['starting', 'enthusiastic', 'courageous'];
const Earth = ['strong', 'determined', 'practical'];
const Air = ['true', 'talked about', 'full of ideas'];
const Water = ['kind', 'open minded', 'wise'];

const category = ['career', 'relationship', 'life'];

function generate(){
    const randomIndex1 = Math.floor(Math.random() * 3);
    const randomIndex2 = Math.floor(Math.random() * 3);
    let selectedType = '';
    let randomType = '';
    for(let i=0; i < zodiac.length+1; i++){
        if(zodiac[i].dateStart <= today && zodiac[i].dateEnd >= today){
            if(zodiac[i].type === 'Fire'){
                selectedType = 'Fire';
                randomType = Fire[randomIndex1];
            } else if(zodiac[i].type ==='Earth'){
                selectedType = 'Earth';
                randomType = Earth[randomIndex1];
            } else if(zodiac[i].type === 'Air'){
                selectedType = 'Air';
                randomType = Air[randomIndex1];
             } else if(zodiac[i].type === 'Water'){
                selectedType = 'Water';
                randomType = Water[randomIndex1];
            };
            const randomCategory = category[randomIndex2];
            const horoscope = `${zodiac[i].name}: Your ${randomCategory} will be ${randomType}!`;
            return horoscope;
        };
    };
};

console.log(generate());