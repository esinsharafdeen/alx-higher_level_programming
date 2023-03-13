#!/usr/bin/node

function to_integer(){
	let number = parseInt(process.argv[2]);
	
	if(!isNaN(number)){
		console.log(`My number: ${number}\n`);
	}else{
		console.log("Not a number\n");
	}
}

to_integer();
