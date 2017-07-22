# Airship Schema
Before you can do the Angular Tutorial, complete this tutorial for recreating the Airship Schema for this project.

## Login to Airship CMS
In your browser, navigate to `yourdomain.airshipcms.io/admin` and login with your credentials.
[picture of airship cms login]  

## Modify the `_root_` page
- Click the wrench icon for the "Landing Page".
[picture of page]  
- Check that the layout for the page is set to `application.html` and the template for the page is set to `root.html`.
[picture of template/layout]  
- Remove the initial page fields from the `Page Fields` section.
- Add a textarea field titled "Description".
- Add a link field titled "Github". [@fobabett - added]
- Add a textarea field titled "Body". [@fobabett - updated]
[picture of fields]  
- Click the Modify Page button.

## Create the `Airship Schema`, `Angular Tutorial`, and `Styling` Pages
- Navigate to `Pages` and click the `New Page` button.
- Enter "Airship Schema" into the Title field.
- The permalink "airship-schema" will generate.
[picture of title and permalink]  
- You don't need to set anything in the `Template Rendering` section, since the contents of the project are all rendered in the single-page application on the root page.
- In the `Page Fields` section, add a textarea field titled "Body".
- Click `Create Page`.
- Repeat, for the "Angular Tutorial" and "Styling" pages.

## Create the `Elements` Collection
- Navigate to `Collections` and click the `New Collection` button.
- Enter "Elements" in the Title field.
- The public path "elements" will generate.
- Modify the second field so that it reads "Refer to a single item in this collection as a(n)... element."
[image of collection setup]  
- You don't need to set anything in the `Collection Rendering` section.
- In the `Collection Settings` section, check "Show Permalink".
[image of show permalink]  
- In the `Post Fields` section, add a text field titled "Name", an image field titled "Image", and a textarea field titled "Description".
[image of post fields]  
- Set the Primary Label to "Name".
[image of primary label]  
- Click the `Create Collection` button.

## Add some Elements
- In the list view of the Elements Collection, click the `New Item` button.
- Enter the element "Name", "Image" and "Description".
- Click the `Save & Close` button.
- Create a few more elements.
