const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');
const friendlyFormatter = require('eslint-friendly-formatter');

let jsScript = 'node';
if (process.env.npm_config_argv !== undefined && process.env.npm_config_argv.indexOf('debug') > 0) {
    jsScript = 'node debug';
}

function lintOne(aims) {
    console.log(`ESlint:${aims}`);
    console.time('Finished eslint');
    return gulp.src(aims)
        .pipe(eslint({ configFile: './.eslintrc.json' }))
        .pipe(eslint.format(friendlyFormatter))
        .pipe(eslint.results(results => {
            // Called once for all ESLint results.
            console.log(`- Total Results: ${results.length}`);
            console.log(`- Total Warnings: ${results.warningCount}`);
            console.log(`- Total Errors: ${results.errorCount}`);
            console.timeEnd('Finished eslint');
        }));
}

gulp.task('ESlint', () =>
    gulp.src(['src/**/*.js', '!node_modules/**'])
        .pipe(eslint({ configFile: './.eslintrc.json' }))
        .pipe(eslint.format(friendlyFormatter))
        // .pipe(eslint.failAfterError())
        .pipe(eslint.results(results => {
            // Called once for all ESLint results.
            console.log(`- Total Results: ${results.length}`);
            console.log(`- Total Warnings: ${results.warningCount}`);
            console.log(`- Total Errors: ${results.errorCount}`);
        }))
);

gulp.task('ESlint_nodemon', ['ESlint'], () => {
    const stream = nodemon({
        script: 'build/dev-server.js',
        execMap: {
            js: jsScript
        },
        tasks: function (changedFiles) {
            lintOne(changedFiles);
            return [];
        },
        verbose: true,
        ignore: ['build/*.js', 'dist/*.js', 'nodemon.json', '.git', 'node_modules/**/node_modules', 'gulpfile.js'],
        env: {
            NODE_ENV: 'development'
        },
        ext: 'js json'
    });

    return stream
        .on('restart', () => {
            console.log('Application has restarted!');
        })
        .on('crash', () => {
            console.error('Application has crashed!\n');
            // restart the server in 20 seconds
            stream.emit('restart', 20);
        });
});

gulp.task('nodemon', () => nodemon({
    script: 'build/dev-server.js',
    execMap: {
        js: jsScript
    },
    verbose: true,
    ignore: ['build/*.js', 'dist/*.js', 'nodemon.json', '.git', 'node_modules/**/node_modules', 'gulpfile.js'],
    env: {
        NODE_ENV: 'development'
    },
    ext: 'js json'
})
);

gulp.task('default', ['ESlint', 'ESlint_nodemon'], () => {
    console.log('ESlint检查完成');
});
