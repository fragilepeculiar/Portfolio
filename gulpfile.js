// 获取 gulp
var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");
var imagemin = require("gulp-imagemin")

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('css/*.css', ['css'])
    gulp.watch('img/*.*)', ['img'])
    gulp.watch('*.html',[])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['css', 'auto', 'build-html', 'img'])


gulp.task('build-html' , function(){
    return gulp.src("*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("dist"))
});

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('img', function () {
    // 1. 找到图片
    gulp.src('img/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest('dist/img'))
});



