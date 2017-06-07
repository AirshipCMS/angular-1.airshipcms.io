# Angular 1.x + Airship CMS
<img src="compartments/assets/media/angular-airship-red.svg" width="auto" height="auto">

This demo project demonstrates an Airship project that uses an Angular 1.X SPA to render all pages.
You can view the demo [here](http://angular-1.airshipcms.io/)


## Tools
- Angular 1.6.4: a JavaScript MVW framework.
- angular-route was used for routing.
- Bulma: a modern CSS framework based on Flexbox
- CSS

# Project Setup

## 1. Open up your terminal and navigate to the root directory of your project

## 2. Login to Airship CMS

Run:

```airship login [YOUR SITE NAME]```

## 3. Initialize Airship CMS

Run:

```airship land```

This pulls down necessary Airship config files and initial project structure.

## 4. Start Your Airship Server

Run:

```airship serve```

Open browser and navigate to localhost:9001

You can view more info on setting up your Airship project [here]().


# Airship Schema

This section demonstrates how all of the pages/collections were created in the CMS.

## 1. Login to Airship CMS

in your browser, navigate to yourdomain.airshipcms.io/admin and login with your credentials.

## 1. Modify _root_ page

- 1. Remove the initial page fields from the `Page Fields` section.
- 2. Add a text area field titled Description.
- 3. Add a richtext area field titled Body.
- 4. Click the Modify Page button.

## 2. Create Airship Schema Page

- 1. Click the New Page button.
- 2. Enter "Airship Schema" into the Title field.
- 3. In the `Page Layout & Template` section, set Layout to `application.html` and Template to `root.html`.
- 4. In the `Page Fields` section, add a richtext area field titled Body.
- 5. Click Create Page.

## 3. Create Angular Tutorial Page

- 1. Click the New Page button.
- 2. Enter "Angular Tutorial" into the Title field.
- 3. In the `Page Layout & Template` section, set Layout to `application.html` and Template to `root.html`.
- 4. In the `Page Fields` section, add a richtext area field titled Body.
- 5. Click Create Page.

## 4. Create Styling Page

- 1. Click the New Page button.
- 2. Enter "Styling" into the Title field.
- 3. In the `Page Layout & Template` section, set Layout to `application.html` and Template to `root.html`.
- 4. In the `Page Fields` section, add a richtext area field titled Body.
- 5. Click Create Page.

## 5. Create Elements Collection

- 1. Navigate to /collections.
- 2. Click New Collection button.
- 3. Enter "Elements" in the Title field.
- 4. In the `Collection Layout & Template Directory` section, set Layout to `application.html` and Template to `root.html`.
- 5. In the `Page Fields` section, add a text field titled Name.
- 6. Add an image field titled Image.
- 7. Add a text area field titled Description.
- 8. Set Primary Label to Name.
- 9. Click the Create Collection button.

## 6. Add Elements

- 1. In the Elements Collection, click the New Item button.
- 2. Enter the element Name, Image and Desctiption.
- 3. Click the Save & Close button.

You can view more info on how to set up pages and collections [here]()

# Angular Tutorial

## 1. Add Dependencies

In your project, navigate to `compartments/templates/root.html`.

Add the angular and angular-route scripts.

## 2. Initialize Angular App

In `compartments/assets/scripts`, create a file named `app.js`. Your angular code will go in this file.

In `compartments/templates/root.html`, add a script tag that points to `/assets/scripts/app.js`.

In `root.html`, add the container for the angular app right above the scripts.

```
<base href="/">
<div ng-app="app">
  <ng-view></ng-view>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
<script src="assets/scripts/app.js"></script>
```

## 3. Templating

In `compartments/assets/scripts` and a make a directory named `templates`.
All of your SPA templates will go in this directory.

When referencing your templates from `app.js`, use `/assets/scripts/templates/filename.html` format.

## 3. Binding Page/Collection Data

To display Page/Collection content, you must use the Airship CMS API.

### Pages

Make a GET request to `https://yoursite.airshipcms.io/api/pages/page-name`.

In the response object, you will see an array name `fields`.
This array contains an object for each field created for that page.

The `_root_` page has a Description field and and a Body field.
The `Airship Schema`, `Angular Tutorial` and `Styling` pages all have a Body field.

Each field contains these properties:

num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string

The `value` property is what you will bind to your templates.

Because the Body field's type is `richtext area` the value will contain HTML. To bind this field, you have to use Angular's `ng-bind-html` directive instead of `{{ body }}`. 

To prevent "unsafe" errors, you will need to sanitize the field's value with `$sce.trustAsHtml`.

JS:

```
.controller('SetupController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('http://yourdomain.airshipcms.io/api/pages/__root__')
        .then(function(res) {
          	res.data.fields.forEach(function(field) {
            	switch(field.variable_name) {
              		case 'body':
                		$scope[field.variable_name] = $sce.trustAsHtml(field.value); //sanitze html
                		break;
              		default:
                		$scope[field.variable_name] = field.value;
                		break;
            	}
          	})
        })
    }])
```

Template:

```
<div>
	<p>{{ description }}</p>
	<div ng-bind-html='body' class='body'></div>
</div>
```

### Collections

Make a GET request to `https://yoursite.airshipcms.io/api/aerostat_collection/collection-permalink`.
The collection permalink for this project is `elements`.

This will return an array of Aerostats.
An Aerostat contains a number of properties. The `fields` array is the only field used in this demo.
The structure is same as Page Fields.
