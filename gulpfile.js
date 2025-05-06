import gulp from "gulp";

function testOne(cb) {
  console.log("Pierwszy test...");
  cb();
}

function testTwo(cb) {
  console.log("Drugi test...");
  cb();
}

export default gulp.series(testOne, testTwo);