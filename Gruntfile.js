module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist/**/*', '.sass-cache/'],

    jshint: {
      all: ['Gruntfile.js', 'src/app/**/*.js'],
      options: {
        'esversion': 6,
      }
    },

    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015']
            }]
          ]
        },
        src: ['./src/app/app.module.js'],
        dest: 'dist/main.js',
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['**', '!app/**/*.js', '!env/**', '!assets/styles/*.scss'],
        dest: 'dist/'
      }
    },

    sass: {
      dist: {
        files: {
          'dist/assets/styles/style.css': 'src/assets/styles/style.scss'
        }
      }
    },

    watch: {
      files: ['src/**/*'],
      tasks: ['build']
    },

    browserSync: {
      bsFiles: {
        src: [
          'src/**/*'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./dist",
          routes: {
            "/node_modules": "node_modules"
          }
        },
        browser: "chrome"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build', ['clean', 'copy', 'sass', 'jshint', 'browserify']);
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};
