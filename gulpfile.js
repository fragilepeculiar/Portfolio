// 获取 gulp
var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");
var imagemin = require("gulp-imagemin");
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('src/css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

// 压缩图片任务
gulp.task('img', function () {
    // 1. 找到图片
    gulp.src('src/img/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest('dist/img'))
});

// 压缩html任务
gulp.task('build-html' , function(){
    return gulp.src("src/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("dist/"))
});


// 压缩 js 文件
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('src/js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})


// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('src/css/*.css', ['css'])
    gulp.watch('src/img/*.*)', ['img'])
    gulp.watch('src/*.html',['build-html'])
    gulp.watch('src/js/*.js', ['script'])
});

// 在命令行使用 gulp 启动css等任务
gulp.task('default', ['css', 'img', 'build-html', 'script', 'auto'])






