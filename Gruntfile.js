module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['src/sass/main.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
            js: {
                files: ['src/js/app.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
}
