function read_from_file() {
	try {
		if (process.argv.length < 3) {
		       console.log('Usage: node ' + process.argv[1] + ' input.txt')
		       process.exit(1);
		}
		// Read the file and print its contents.
		let fs = require('fs'), filename = process.argv[2];
		let argument =  fs.readFileSync(filename, 'utf8') 
		return argument
	}
	catch(err) {
		console.log("File of this name exist")
		process.exit(0);
	}
}

function gcd(num1, num2) {
	try {
		num1 = Math.abs(Number(num1));
		num2 = Math.abs(Number(num2));
		if (isNaN(num1) || isNaN(num1)) {
			throw "Invalid Value"
		}
		while(num2) {
			let t = num2;
			num2 = num1 % num2;
			num1 = t;
		}
		return num1;	
	}
	catch(err) {
		console.log("No numeric type")
		process.exit(0);
	}
}

function test_result(result) {
	try {
		let fs = require('fs');
		let golden_result =  fs.readFileSync("golden.txt", 'utf8') 
		if (result == golden_result) {
			const fs = require('fs')
			fs.writeFile('output.txt', 'Test Passed \n', err => {
				if (err) {
					console.error(err)
					return
				} })
		} else {
			const fs = require('fs')
			fs.writeFile('output.txt', 'Test Failed \n', err => {
				if (err) {
					console.error(err)
					return
				} })
		}
	} 
	catch(err) {
		console.log("Golden  file exist")
		process.exit(0);
	}
}



function main() {
		let argument = read_from_file();
		const myArray = argument.split(" ");
		let x = myArray[0];
		let y = myArray[1];
		let result = gcd(x, y);
		test_result(result);
}

main()
