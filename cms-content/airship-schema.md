# Airship Schema
Before you can do the Angular Tutorial, complete this tutorial for recreating the Airship Schema for this project.

---

## Login to Airship CMS
In your browser, navigate to `mysite.airshipcms.io/admin` and login with your credentials (_replace "mysite" with your actual site subdomain_).

<img width="849" alt="Admin Login" src="https://airshipcms.io/assets/media/oss-elements/login-to-airship-cms.jpg">  

## Modify the `_root_` page
In the sidebar, click "Pages" then click the <img width="26" alt="wrench" src="https://airshipcms.io/assets/media/quickstart-guide/icon-wrench.png"> Modify Link for the "Homepage".

<img width="236" alt="Modify the Root Page" src="https://airshipcms.io/assets/media/oss-elements/modify-the-root-page.jpg">

Check that the layout for the page is set to `application.html` and the template for the page is set to `root.html`.

<img width="683" alt="Page Rendering" src="https://airshipcms.io/assets/media/oss-elements/page-rendering.jpg">

Modify the Page Fields:
- Remove the initial page fields from the `Page Fields` section.
- Add a textarea field titled "Description".
- Add a link field titled "Github". 
- Add a textarea field titled "Body". 

<img width="730" alt="Root Page Fields" src="https://airshipcms.io/assets/media/oss-elements/page-fields.jpg">

Click the Modify Page button.

## Create the `Airship Schema`, `Angular Tutorial`, and `Styling` Pages
- Navigate to `Pages` and click the `New Page` button.
- Enter "Airship Schema" into the Title field.
- The permalink "airship-schema" will generate.

<img width="683" alt="Airship Schema Permalink" src="https://airshipcms.io/assets/media/oss-elements/page-setup.jpg">

You don't need to set anything in the `Template Rendering` section, since the contents of the project are all rendered in the single-page application on the root page.

In the `Page Fields` section, add a textarea field titled "Body".

<img width="625" alt="Body Field" src="https://airshipcms.io/assets/media/oss-elements/page-fields-body.jpg">

Click `Create Page`.
Repeat, for the "Angular Tutorial" and "Styling" pages.

<img width="930" alt="All Pages" src="https://airshipcms.io/assets/media/oss-elements/pages-all.jpg">  

## Create the `Elements` Collection
- Navigate to `Collections` and click the `New Collection` button.
- Enter "Elements" in the Title field.
- The public path "elements" will generate.
- The Name "elements" will also generate. Modify it to be "element"

<img width="653" alt="Collection Setup" src="https://airshipcms.io/assets/media/oss-elements/collection-setup.jpg">

In the `Collection Rendering` section, you'll see `Layout`, `Template Directory`, `Items Per Page` with `50` as the default value, `Sort Property` with `permalink` as the default value and `Sort Order` with `ascending` as the default value.

<img width="727" alt="Collection Rendering" src="https://airshipcms.io/assets/media/oss-elements/collection-rendering-no-layout-or-templates.jpg">

You can skip setting a layout and template directory because all pages in the Elements collection will be rendered with with a single-page application.

You can also leave the `Items Per Page`, `Sort Property`, and `Sort Order` as-is, since your application will override any values set here.

In the `Collection Settings` section, be sure "Show Permalink" is checked.

<img width="720" alt="Collection Settings" src="https://airshipcms.io/assets/media/oss-elements/collection-settings.jpg">

In the `Post Fields` section, add a text field titled "Name", an image field titled "Image", and a textarea field titled "Description".

<img width="697" alt="Collection Post Fields" src="https://airshipcms.io/assets/media/oss-elements/collection-post-fields.jpg">

Set the Primary Label to "Name".

<img width="359" alt="Collection Primary Label" src="https://airshipcms.io/assets/media/oss-elements/collection-primary-label.jpg">

Click the `Create Collection` button.

## Add some Elements
- In the list view of the Elements Collection, click the `New Item` button.
- Enter the element "Name", "Image" and "Description".
- Click the `Save & Close` button.
- Create a few more elements.

_If you have a local copy of this repository, the graphics for all the elements in this demo are included in a directory outside of compartments._

## Site Settings
You will need to set up a SPA Route so that your Angular Application can load on the _root_ page.

In the Airship admin panel, click the `Settings` located in the sidebar, then click the `Developer` tab. The Developer Settings page will look like this:

<img width="990" alt="Developer Settings" src="https://airshipcms.io/assets/media/oss-elements/developer-settings.jpg">

Click the `Add Route` button in the `Single-Page Application Routes` section.

<img width="238" alt="SPA Routes" src="https://airshipcms.io/assets/media/oss-elements/single-page-application-routes.jpg">

Leave `/.*` as the value for the `Pattern` field and `/` as the value for the `Destination` field then click `Add`.

<img width="760" alt="SPA Routes" src="https://airshipcms.io/assets/media/oss-elements/single-page-application-routes-added.jpg">

## Local Development
Return to the Setup Instructions Step #3 for instructions on developing locally, setting up the Angular project, and deployment.
 
