//12 character random password generator
let arrayPickerRandomNumber = Math.floor(Math.random() * 4)
let upperCaseArrayRandomCharacter = Math.floor(Math.random() * 26)
let lowerCaseArrayRandomCharacter = Math.floor(Math.random() * 26) 
let numbersArrayRandomNumber = Math.floor(Math.random() * 10)
let specialCharactersArrayRandomCharacter = Math.floor(Math.random() * 5)
let randomPassword = ''
let newCharacter
let pWordMaker = {
	upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	specialCharacters: ['!', '@', '#', '$', '-'],
    arrayPicker: function () {
 		switch (arrayPickerRandomNumber) {
			case 0:
				pWordMaker.upperCaseArray() 
				break;
			case 1:
				pWordMaker.lowerCaseArray() 
				break;
        	case 2: 
        		pWordMaker.numbersArray()
           		break;
        	case 3:
        		pWordMaker.specialCharactersArray()
           		break;}},
 	upperCaseArray: function () {newCharacter = pWordMaker.upperCase[upperCaseArrayRandomCharacter]},
 	lowerCaseArray: function () {newCharacter = pWordMaker.lowerCase[lowerCaseArrayRandomCharacter]},
 	numbersArray: function () {newCharacter = pWordMaker.numbers[numbersArrayRandomNumber]},
 	specialCharactersArray: function () {newCharacter = pWordMaker.specialCharacters[specialCharactersArrayRandomCharacter]}
} 
 
for (let index = 0; index < 12; index++) {
	arrayPickerRandomNumber = Math.floor(Math.random() * 4)
    upperCaseArrayRandomCharacter = Math.floor(Math.random() * 26) 
    lowerCaseArrayRandomCharacter = Math.floor(Math.random() * 26)
	numbersArrayRandomNumber = Math.floor(Math.random() * 10) 
    specialCharactersArrayRandomCharacter = Math.floor(Math.random() * 5)
    pWordMaker.arrayPicker()
    randomPassword = randomPassword + newCharacter
}
console.log(randomPassword)