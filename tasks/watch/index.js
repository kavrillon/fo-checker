import gulp from 'gulp';
import livereload from 'gulp-livereload';
import config from '../config';

gulp.task('watch', ['connect:dev'], () => {
    livereload.listen();
    gulp.watch(config.globs.html, ['htmlprocess:watch']);
    gulp.watch(config.globs.js, ['6to5:watch']);
    gulp.watch(config.globs.images, ['image:dev:watch']);
    gulp.watch(config.globs.scss, ['sass:watch']);
});
