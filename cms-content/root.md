# Angular 1.x + Airship CMS
<img src="https://cdn.rawgit.com/AirshipCMS/angular-1.airshipcms.io/86c6751d/assets/angular-airship-red.svg">

This is a demo of an Airship CMS project that uses an Angular 1.X SPA to render all pages.
You can view the demo at [http://angular-1.airshipcms.io](http://angular-1.airshipcms.io/).

# Tools
- [Airship CMS](https://airshipcms.io): a web development & deployment platform.
- [Angular 1.6.4](https://angularjs.org): a JavaScript MVW framework.
- [angular-route](https://www.npmjs.com/package/angular-route): used for routing.
- [Gulp](http://gulpjs.com/): used to compile CSS.
- [Bulma](http://bulma.io/): a modern CSS framework.

# Project Setup

## 1. Provision a Site in the Airship Developer Portal
Provision a new site in the [Airship Developer Portal](https://skyport.airshipcms.io).

## 2. Set up the Site Schema in your Site Admin Portal
Follow the steps to re-create a [Site Schema](https://angular-1.airshipcms.io/airship-schema) that matches this demo project.

## 3. Install Airship Launcher CLI Tools
If you don't yet have the Airship Launcher command line tools, install the [Mac & Linux](https://airshipcms.io/mac-linux-installer) or [Windows](https://airshipcms.io/windows-installer) toolset.

## 4. login to Airship CMS in your Terminal
In your terminal, navigate to the root of your directory and run the following (_be sure to replace "mysite" with your actual site subdomain_):
```
airship login mysite
```
or more verbosely:
```
airship login mysite.airshipcms.io
```

## 5. Land the initial Templates
In your terminal, run the following:
```
airship land
```
This will download the initial project templates and directories.

## 6. Start the local Airship Server in your Terminal
In the root of your directory, run:
```
airship serve
```
This will start the Airship Server in your local project directory.

## 7. Complete the Styling & Angular Tutorial
Follow the instructions for setting up [Styling](https://angular-1.airshipcms.io/styling) & [Angular](https://angular-1.airshipcms.io/angular-tutorial) for this project.
(If you don't want to follow the instructions step-by-step, you can also copy the relevant files from the demo repo to your site directory).

## 8. View the local site in a browser
Open a web browser and navigate to `localhost:9001`.

## 9. Launch your Site
In the root of your directory, run:
```
airship launch
```
Your demo site will be published!
