//
// const gulp = require('gulp'),
//     extender = require('gulp-html-extend');
//
// const input_path = "./src/",
//     output_path = "./dist/";
//
// const html_path = input_path + "";
//
// var htmls = ["portfolio"],
//     html_list = [];
//
// for (index in htmls) {
//     html_list[index] = html_path + htmls[index] + ".html";
// }
//
// console.log(html_list);
//
// gulp.task('extend', function () {
//     gulp.src(html_list)
//         .pipe(extender({annotations: true, verbose: false}))
//         .pipe(gulp.dest(output_path));
// });
//
//
// gulp.task('watch', function () {
//     gulp.watch(html_path + '/*.html', ['extend']);
// });
//
// gulp.task('default', function () {
//     gulp.run('extend');
//     // gulp.run('watch');   # 暂时无需监听，注释掉
// });
