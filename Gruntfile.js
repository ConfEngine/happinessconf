module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['src/sass/main.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['src/js/app.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'src/css/main.css': 'src/sass/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/css/main.min.css': ['src/css/main.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/app.min.js': ['src/js/app.js']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        },
        htmlmin: {
            file: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    src: 'index.html',
                    dest: 'build/'
                }
            }
        },
        replacer: {
            index: {
                options: {
                    replace: {
                        'src/css/main.css': 'css/main.min.css',
                        'favicon.ico': '../favicon.ico',
                        'src/js/app.js': 'js/app.min.js',
                    }
                },
                files: [
                    { src: ['index.html'], dest: 'build/index.html' }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-replacer');
    grunt.loadNpmTasks('grunt-htmlmin');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'cssmin', 'uglify', 'imagemin', 'replacer', 'htmlmin']);
};
