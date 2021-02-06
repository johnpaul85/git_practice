var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
const mmdd = parseInt(mm+dd,10);

const zodiac = [
    {name: 'Aires', dateStart: 321, dateEnd: 419, type: 'Fire'},
    {name: 'Taurus', dateStart: 420, dateEnd: 520, type: 'Earth'},
    {name: 'Gemini', dateStart: 521, dateEnd: 620, type: 'Air'},
    {name: 'Cancer', dateStart: 621, dateEnd: 722, type: 'Water'},
    {name: 'Leo', dateStart: 723, dateEnd: 822, type: 'Fire'},
    {name: 'Virgo', dateStart: 823, dateEnd: 922, type: 'Earth'},
    {name: 'Libra', dateStart: 923, dateEnd: 1022, type: 'Air'},
    {name: 'Scorpio', dateStart: 1023, dateEnd: 1121, type: 'Water'},
    {name: 'Sagittarius', dateStart: 1122, dateEnd: 1221, type: 'Fire'},
    {name: 'Capricorn', dateStart: 1222, dateEnd: 119, type: 'Earth'},
    {name: 'Aquarius', dateStart: 120, dateEnd: 218, type: 'Air'},
    {name: 'Pisces', dateStart: 219, dateEnd: 320, type: 'Water'}
];

const Fire = ['starting', 'enthusiastic', 'courageous'];
const Earth = ['strong', 'determined', 'practical'];
const Air = ['true', 'talked about', 'full of ideas'];
const Water = ['kind', 'open minded', 'wise'];

const category = ['career', 'relationship', 'life'];

function generate(){
    for(let i=0; i < zodiac.length+1; i++){
        if(zodiac[i].dateStart < zodiac[i].dateEnd && zodiac[i].dateStart <= mmdd && zodiac[i].dateEnd >= mmdd || zodiac[i].dateStart > zodiac[i].dateEnd && zodiac[i].dateStart <= mmdd || zodiac[i].dateStart > zodiac[i].dateEnd && mmdd <= zodiac[i].dateEnd){
            let selectedType = zodiac[i].type;
            let randomType = eval(selectedType)[Math.floor(Math.random() * eval(selectedType).length)];
            let randomCategory = category[Math.floor(Math.random() * category.length)];
            let horoscope = `${zodiac[i].name}: Your ${randomCategory} will be ${randomType}!`;
            return horoscope;
        };
    };
};

console.log(generate());