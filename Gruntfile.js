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
        files: "models/src/css/**/*.css",
        tasks: ["autoprefixer"]
      },
      template: {
        files: "**/*.html",
        tasks: ["hello"]
      }
    },
    autoprefixer: {
      dev: {
        expand: true,
        flatten: true,
        src: "models/src/css/**/*.css",
        dest: "models/build/css/"
      }
    }
  });

};
