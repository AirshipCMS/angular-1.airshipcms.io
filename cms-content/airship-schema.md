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

## Create the Airship Schema Page
- Click the `New Page` button.
- Enter "Airship Schema" into the Title field.
- The permalink "airship-schema" will generate.
[picture of title and permalink]  
- Because the entire application will be rendered in a single-page application with angular templating, you only need to set a layout and template for the root page. All other pages and collections don't need a layout or template.
- In the `Page Fields` section, add a textarea field titled "Body".
- Click `Create Page`.

## Create the "Angular Tutorial" and "Styling" Pages
- Click the `New Page` button.
- Enter "Airship Tutorial" into the Title field.
- The permalink "airship-tutorial" will generate.
- Skip the `Page Rendering` section.
- In the `Page Fields` section, add a textarea field titled "Body".
- Click `Create Page`.
- Repeat, with the Title "Styling" for the Styling page.

## Create the "Elements" Collection
- 1\. Navigate to /collections.

- 2\. Click New Collection button.

- 3\. Enter "Elements" in the Title field.

- 4\. In the `Collection Layout & Template Directory` section, set Layout to `application.html` and Template to `root.html`.

- 5\. In the `Page Fields` section, add a text field titled Name.

- 6\. Add an image field titled Image.

- 7\. Add a text area field titled Description.

- 8\. Set Primary Label to Name.

- 9\. Click the Create Collection button.

### 6\. Add Elements

- 1\. In the Elements Collection, click the New Item button.

- 2\. Enter the element Name, Image and Desctiption.

- 3\. Click the Save & Close button.

You can view more info on how to set up pages and collections [here](#)
