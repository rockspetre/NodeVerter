//THIS MERGES MULTIPLE VIDEO FILES
var ffmpeg = require("fluent-ffmpeg")
var firstFile = "title.mp4";
var secondFile = "source.mp4";
var thirdFile = "third.mov";
var outPath = "out.mp4";

//the above listed sources can be file input streams 
//NOTE  you cannot chain mulitple file input streams with the FFMPEG api
//figure it out **winks**

//E.G 
//var newFile = require("fs").readFileSync('/path-to-file');

var proc = ffmpeg(firstFile)
    .input(secondFile)
    .input(thirdFile)
    //.input(fourthFile)
    //.input(...)
    .on('end', function() {
      console.log('files have been merged succesfully');
    })
    .on('error', function(err) {
      console.log('an error happened: ' + err.message);
    })
    .mergeToFile(outPath);
