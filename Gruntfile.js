//Gruntfile.js
module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-nodemon");

  grunt.registerTask("default", ["autoprefixer", "concurrent"]);

  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ["watch", "nodemon"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: "index.js"
      }
    },
    watch: {
      prefix: {
        options: {
          livereload: true
        },
        files: "src/css/**/*.css",
        tasks: ["autoprefixer"]
      }
    },
    autoprefixer: {
      dev: {
        expand: true,
        flatten: true,
        src: "src/css/**/*.css",
        dest: "build/css/"
      }
    }
  });

};
