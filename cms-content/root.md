## Tools

*   [Angular](https://angularjs.org/) 1.6.4: a JavaScript MVW framework.
*   angular-route was used for routing.
*   [Bulma](http://bulma.io/): a modern CSS framework based on [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
*   Site Provisioned on [Airship CMS](http://airshipcms.io/)

## Create an Airship Project

### 1\. Create an Airship CMS Project

Create an Airship Project at **[https://airshipcms.io/](https://airshipcms.io/).**

Follow the [**Airship Schema Tutorial**](/airship-schema) to replicate the pages and collection in this demo site.

If you need any more details about these steps you can view more info on setting up your Airship project [here](http://airshipcms.io/documentation/view/airship-cli-commands).

### 2\. Set up your Local Environment

If you have not installed the Airship CLI tools yet, follow the directions to [**Install Airship CLI**](http://airshipcms.io/documentation/view/install-airship-cli-tools). You only need to install the CLI tools once on your Mac or Linux machine.

In your terminal, navigate to the root directory of your project.

### 3\. Login to Airship CMS

Run: <span class="code">airship login yoursitesubdomain</span>

(Where "**yoursitesubdomain**" is the subdomain preceding "airshipcms.io").

### 4\. Initialize Airship CMS

Run: <span class="code">airship land</span>

This pulls down necessary Airship config files and initial project structure.

### 5\. Start Your Airship Server

Run: <span class="code">airship serve</span>

Open browser and navigate to localhost:9001

## Create your Single-Page Application

Once your Airship Site is set up, you can start building your Angular 1.x Single-Page Application. Follow the directions in the [**Angular Tutorial**](/angular-tutorial)**. **You can also clone the [Git Repository](https://github.com/AirshipCMS/angular-1.airshipcms.io) for this demo site, and transfer relevant files into your own project.
