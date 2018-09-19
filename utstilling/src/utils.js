export default {

// Lager en liste med 4 distinkte tall fra 1-4
// Algoritme kilde: https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
    distinct() {
        let indexArr = [];
        while (indexArr.length < 4) {
            let randomnumber = Math.floor(Math.random() * 4) + 1;
            if (indexArr.indexOf(randomnumber) > -1) continue;
            indexArr[indexArr.length] = randomnumber;
        }
        ;
        return indexArr;
    },

//Creates a list of four numbers in correct interval based on music category
//This is because LoadSound needs a number between 1 and 12.
    randomizeSound(categorySound) {
        let indexArr = this.distinct();
        let returnArr = [];
        let increment = 0;
        switch (categorySound) {
            default:
                console.log("No music category chosen");
                break;
            case "music":
                break;
            case "movies":
                increment = 4;
                break;
            case "animals":
                increment = 8;
                break;
        }
        while (returnArr.length < 4) {
            returnArr[returnArr.length] = indexArr.pop() + increment;
        }
        return returnArr;
    }
}