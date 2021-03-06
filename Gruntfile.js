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
        replacer: {
            index: {
                options: {
                    reportError: true,
                    replace: {
                        'src/css/main.css': 'css/main.min.css',
                        'src/js/app.js': 'js/app.min.js'
                    }
                },
                files: [
                    {expand: true, flatten: true, src: ['*.html'], dest: 'build/html/'}
                ]
            }
        },
        htmlmin: {  
            dist: { 
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'build/html/index.html',
                    'build/speakers.html': 'build/html/speakers.html'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['*.ico'], dest: 'build/', filter: 'isFile'}
                ]
            }
        },
        clean : {
            folder : [ "build/html" ]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-replacer');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'cssmin', 'uglify', 'imagemin', 'replacer', 'htmlmin', 'copy','clean']);
};
