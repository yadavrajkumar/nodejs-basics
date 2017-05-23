var fs=require("fs")
var filepath='./sample.txt';
/*console.log("Start Reading file !!!!")
fs.readFileSync(filepath)
fs.readFile(filepath,function(err,data){
if(err){
	console.log(err)
}

//`throw err
console.log(data.toString())
})

console.log("Done Reading file !!!!")*/
/*console.log("Star writing file")
fs.writeFile('./output.txt','hello Techminds',function(err,data){

	if(err){
		throw err;
		console.log(err)
	}
	console.log(data)
})
console.log("Done writing file !!!!")*/
//fs.readFileSync(filepath)
/*fs.readFile(filepath,function(err,data){
if(err){
	console.log(err)
}
//console.log("Star writing file")
fs.writeFile('./output.txt',data,function(err,data){

	if(err){
		throw err;
		console.log(err)
	}
	})
})*/

var data =fs.readFileSync(filepath)
fs.writeFileSync('raj.txt',data)