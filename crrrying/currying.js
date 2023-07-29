let sample_space = [
    {
        name: 'Akshay',
        sex: 'male',
        isSmoker: true,
        isPanEater: false,
        cigaretteBrand: 'advance',
    },
    {
        name: 'Laxman',
        sex: 'male',
        isSmoker: false,
        isPanEater: true,
        panType: 'banrasi'
    },
    {
        name: 'sanjana',
        sex: 'female',
        isSmoker: true,
        cigaretteBrand: 'gold flake',
        isPanEater: true,
        panType: 'maghai'
    },
    {
        name: 'nandu',
        sex: 'kid',
        isSmoker: true,
        cigaretteBrand: 'double mint',
        isPanEater: true,
        panType: 'kalkatta'
    },
    {
        name: 'thakur saab',
        sex: 'male',
        isSmoker: true,
        cigaretteBrand: 'cigar',
        isPanEater: false
    },
];

function getPeopleBasedOnSex (sampleSpace,sex){
    let getPeopleBasedOnSex = sampleSpace.filter((value)=>value.sex === sex);
    return function isPanEater(trueOrFalse){
        let panEater = getPeopleBasedOnSex.filter((value)=>value.isPanEater===trueOrFalse);
        return function panType(typeOfPan){
           let typeOfPanEat= panEater.filter((value)=>value.panType === typeOfPan );
           return typeOfPanEat;
        }
    }
}

console.log(getPeopleBasedOnSex(sample_space,"female")(true)("maghai"))