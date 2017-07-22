## 1\. Add Dependencies

In your project, navigate to `compartments/templates/root.html`.  
Add the angular and angular-route scripts.

## 2\. Initialize Angular App

In `compartments/assets/scripts`, create a file named `app.js`. Your angular code will go in this file.

In `compartments/templates/root.html`, add a script tag that points to `/assets/scripts/app.js`.

In `root.html`, add the container for the angular app right above the scripts.

<base href="/">  
<div ng-app="app">  
    <ng-view></ng-view>  
</div>  
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>  
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>  
<script src="assets/scripts/app.js"></script>

## 3\. Templates

In `compartments/assets/scripts` and a make a directory named `templates`. All of your SPA templates will go in this directory.

When referencing your templates from `app.js`, use `/assets/scripts/templates/filename.html` format.

## 4\. Binding Page/Collection Data

To display Page/Collection content, you must use the Airship CMS API.

### Pages

Make a GET request to`[/api/pages/page-name](https://yoursite.airshipcms.io/api/pages/page-name)`.

In the response object, you will see an array name `fields`. This array contains an object for each field created for that page.

The `_root_` page has a Github field, Description field, and a Body field. The `Airship Schema`, `Angular Tutorial` and `Styling` pages all have a Body field.

Example of page fields setup:  
![](http://res.cloudinary.com/airship/image/upload/v1497216300/media/page-fields-760px_kxl0g5.png)

Each field contains these properties:

<pre>num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string</pre>

The `value` property is what you will bind to your templates.

Because the Body field's type is `richtext area` the value will contain HTML. To bind this field, you have to use Angular's `ng-bind-html` directive instead of `{{ body }}`.

To prevent "unsafe" errors, you will need to sanitize the field's value with `$sce.trustAsHtml`.

JS:

<pre>.controller('SetupController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
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
  }])</pre>

Template:

<div>  
    <p>{{ description }}</p>  
    <div ng-bind-html='body' class='body'></div>  
</div>

### Collections

Make a GET request to `[/api/aerostat_collection/collection-permalink](https://yoursite.airshipcms.io/api/aerostat_collection/collection-permalink)`. The collection permalink for this project is `elements`.

This will return an array of Aerostats.

An Aerostat contains a number of properties. The `fields` array is the only field used in this demo. The fields for the `elements` collection are Name, Image, and Description:

![](http://res.cloudinary.com/airship/image/upload/v1497218205/media/elements-fields_dq3h80.png)

The response object structure is same as Page Fields, where each field contains these properties:

<pre>num_options: int
options: []
sorting_position: int
title: string
type: string
value: string
variable_name: string</pre>

Set `$scope.elements` to the response object.

JS:

<pre>.controller('ElementsController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://yourdomain.airshipcms.io/api/aerostat_collection/elements?limit=20&sort=sorting_position')
    .then(function(res) {
      $scope.elements = res.data.map(function(element) {
        element.fields.forEach(function(field) {
          switch(field.variable_name) {
            default:
              element[field.variable_name] = { value: field.value };
              break;
          }
        });
        return element
      });
    })
  }])</pre>

In your template, display the name and image of each element by using Angular's `ng-repeat` directive.

Template:

<div>  
  <a href='/elements/{{ element.id }}' class='element' ng-repeat='element in elements'>  
    <div class='card'>  
      <div class='card-image'>  
        <figure class="image">  
          <img src="{{ element.image.value[0].thumbnail_url }}" alt="{{ element.value[0].file_name }}">  
        </figure>  
      </div>  
      <div class='card-content'>  
        <div class="media-content">  
          <p class="title is-4">{{ element.name.value }}</p>  
        </div>  
      </div>  
  </div>  
  </a>  
</div>
