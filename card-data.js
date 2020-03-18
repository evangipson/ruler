function randomItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
};
function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const lordPreTitles = [
    "grand",
    "prince",
];
const lordTitles = [
    "archbishop",
    "king",
    "lord",
    "duke",
    "consort",
    "landgrave",
    "knight",
    "baronet",
    "emporer",
    "reeve",
    "admiral",
    "alderman",
    "yeoman",
    "viscount",
    "chancellor",
];
const lordDescriptors = [
    "wealthy",
    "just",
    "fair",
    "fat",
    "bane",
    "rich",
    "poised",
    "eternal",
];
const lordNames = [
    "geubert",
    "pierrot",
    "otho",
    "gawen",
    "wymerus",
    "clerebold",
    "launcelot",
    "arthurius",
    "allen",
    "diggory",
    "oddo",
    "lambequin",
    "jodocus",
    "herviet",
    "michiel",
    "eliot",
    "frederick",
    "ottie",
    "villequin",
    "ade",
    "guillemaque",
    "letholdus",
    "richier",
    "isemberd",
    "geraint",
    "gilebert",
    "lanslet",
];

export const GenerateLordTitle = function() {
    if(Math.random() > 0.5) {
        return `${capitalize(randomItem(lordPreTitles))} ${capitalize(randomItem(lordTitles))} ${capitalize(randomItem(lordNames))}`;
    }
    if(Math.random() > 0.5) {
        return `${capitalize(randomItem(lordNames))}, the ${capitalize(randomItem(lordDescriptors))} ${capitalize(randomItem(lordTitles))}`;
    }
    return `${capitalize(randomItem(lordTitles))} ${capitalize(randomItem(lordNames))}`;
}