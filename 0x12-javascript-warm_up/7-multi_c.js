#!/usr/bin/node

function multi_c(){
	let number = parseInt(process.argv[2]);

	if(isNaN(number)){
		console.log("Missing number of occurrences\n");} else{
			for(let i = 0; i < number; i++){
				console.log("C is fun");
			}
			console.log("\n");
		}
}

multi_c();
