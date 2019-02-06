module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ["dist", '.tmp'],

    jshint: {
      all: ['Gruntfile.js', 'src/app/**/*.js'],
      options: {
        'esversion': 6,
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015'] }]]
        },
        src: ['./src/app/app.module.js'],
        dest: 'dist/main.js',
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          hostname: 'localhost',
          port: 8080,
          base: './dist'
        }
      }
    },
// not used for tasks:
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/main.js'
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'app/',
        src: ['**', '!js/**', '!lib/**', '!**/*.css'],
        dest: 'dist/'
      },
      shims: {
        expand: true,
        cwd: 'app/lib/webshim/shims',
        src: ['**'],
        dest: 'dist/js/shims'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'main.css': 'src/assets/scss/style.scss',
        }
      }
    },

    browserSync: {
      bsFiles: {
        src: 'assets/css/*.css'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['jshint', 'browserify', 'connect:server']);
};