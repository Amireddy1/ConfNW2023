// length 가 4인 array 생성
const array=[
	'A',
    'BB',
    'CCC',
    'DDDD',
];
let arrayCopy=[
];
something(array);
function something(arguments){
	let lenghtOfArguments=arguments.length;
    while(lenghtOfArguments!==0){
        lenghtOfArguments=lenghtOfArguments-1;
        arrayCopy[lenghtOfArguments]=array[lenghtOfArguments];
        console.log(arrayCopy);
    }
}
