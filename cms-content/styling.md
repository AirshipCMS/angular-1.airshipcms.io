## Styling

This project was styled with CSS and Bulma.

All stylesheets must go into `/compartments/assets/styles`

All files from this directory and external files were included in the head of `/compartments/layouts/application.html`

<head>  
  <meta charset="UTF-8">  
  <title>Angular 1.x + Airship CMS</title>  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css">  
  <link rel="stylesheet" href="/assets/styles/styles.css">  
</head>

## How to Use PostCSS

This demonstrates how to implement PostCSS with Gulp

### 1\. Install Dependencies

`yarn add gulp gulp-postcss`

or

`npm i gulp gulp-postcss`

### 2\. Add PostCSS Config

Add your `postcss.config.js` at the root of your project.

### 3\. Add Gulp File

Add your `gulpfile.js` at the root of your project

Set the destination of your gulp task to `./compartments/assets/styles`

This is where all of your stylesheets for your Airship project must go

Example gulpfile:

<pre>var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('css', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('./compartments/assets/styles'));
  });

gulp.task('default', ['css']);</pre>
