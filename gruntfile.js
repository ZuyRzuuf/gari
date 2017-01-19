module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass : {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'scss/build/style.css': 'scss/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                sourceMap: true,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'public/style.min.css': [
                        'scss/vendor/font-awesome/font-awesome.min.css',
                        'scss/vendor/datepicker/bootstrap-datetimepicker.css',
                        'scss/vendor/datatables/jquery.dataTables.min.css',
                        'scss/vendor/datatables/dataTables.bootstrap.min.css',
                        'scss/vendor/owl-carousel/owl.carousel.css',
                        'scss/build/style.css'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['scss/**/*.scss', 'scss/vendor/**/*.css'],
                tasks: ['css'],
                options: {
                    interrupt: true
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-watch');

    // Run the server and watch for file changes
    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('build', ['css']);
    grunt.registerTask('default', ['watch']);
};