## Introduction to Chrome DevTools
### Why is this important?
Using Chrome DevTools is a great way to debug front-end files and view performance and test responsiveness of your website.

### What are the objectives?
In this lesson, we will go over the most important features of Chrome Developer Tools. By the end of this lesson, you will be able to:
 - Explain what DevTools is and what each tab does
 - Inspect HTML, CSS and JavaScript using Console and Element tabs
 - Inspect the network tab and record page load
 - Use console to run JavaScript and debug scripts

### Where should we be now?
Make sure you have Chrome installed. You should alse be familiar with basics of HTML, CSS and JavaScript and how they work together to create a web page.

## What is DevTools?
DevTools is a built in tool for developers in Chrome browser to do debugging and find detailed information about the a web application or a web page. It's consisted of multiple tabs and each one focus on a specific aspect of an app. You can explore the HTML/CSS used in the webpage to debug JavaScript and view network performance.
 
There are three way to open DevTools:

1. open your Chrome browser and click on the three bar icon on the right side of your address bar. Go to More Tools -> Developer Tools.
2. Right click anywhere on the page and select Inspect. This method will open the Elements tab and highlights the selected element on the page.
3. Use the shortcut : ` cmd + option + j `. This shortcut will always open the console tag. You can use `i` instead of `j` to start from the tab you left off before. 

<p align="center">
  <img src="overview.png" width="800">
</p>
 
 
 Now go ahead and open you DevTools using any of the 3 methods. As you can see there are 8 tabs available and each one provides different set of information to help you debug or optimize your applications:


1. **Elements**: Inspect and edit the HTML & CSS of the DOM (Document Object Model)
2. **Console**: Run JavaScript in the browser
3. **Sources**: A graphical interface to the V8 debugger
4. **Network**: Evaluate network performance (refresh to see it in action)
5. **Timeline**: Evaluate page load performance (refresh to see it in action)
6. **Profiles**: Identify optimizations in the performance of an app or webpage.
7. **Application**: (Formerly "Resources"); Manage application storage
8. **Security**: Confirm whether the page you're viewing is secure
9. **Audits**: The Audit panel can analyze a page as it loads.

## Elements 
###### Tool for inspecting layout
 In this tab you can inspect:
 - HTML structure of the page
 - CSS styles applied to each element
 - Box Model
 - Event Listeners
 - Element Properties

Go to <a href="https://google.com">google.com</a> and open the elements tab in your DevTools. spend a minute and explore the html elements in the page and try to find the styles applied to them.

As you can see, this tab provides a hierarchical structure of the DOM. You can play around with the attributes,styles and find the size of each element in the page. This is a great way to find issues in the structural layer of your applications. Another important thing you can find in this tab is the event listeners attached to each element.

## Console 
###### Tool for log information during developemnt and interact with DOM elements 
Similar to using Elements tab for finding bugs with the layout, we use console tab to figure out JavaScript bugs and errors. You can run JavaScript code in the console as shown here:

![](http://jsforcats.com/images/console-variables.gif)
(img source: [jsforcats.com](http://jsforcats.com/))

Also
Now spend a few minutes and go through [Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference) and learn how to use console and interact with DOM. 

Going back to google.com, let's open the console and follow along:

<details>
<summary> Let's select the microphone element in the search field. Can you name selector attached to it?
</summary>
```
document.getElementById('gsri_ok0');
```
</details>
<details>
<summary> Now let's make the microphone disappear!
</summary>
```
document.getElementById('gsri_ok0').style.visibility="hidden";
```
</details>
## Source
###### Tool for debuging js files and view front-end related source files
In this tab you can view web page's resources. You can view the javascript files. When you receive an error in console, if you click on the filename on the right hand, it will take you to source tab and highlights where the error happend.

![](https://developers.google.com/web/tools/chrome-devtools/images/sources-panel.png)

## Network
###### Tool to measure performance and loading time for resources

This tab shows anything related to network activities,like the timeline of all the resources( including CSS, JS, img and etc) begin loaded or HTTP requests and responses. One of the coolest things you can do with this tab is to record your page while it's being loaded and identify which resources are available sooner than the other. This will come in handy at optimization.

![](https://developers.google.com/web/tools/chrome-devtools/images/before-reorder.png)
( image source:[Goolge DevTools Docs](https://developers.google.com/web/tools/chrome-devtools/settings) )

When DOM is ready, in the timeline section a vertical blue line will appear to show DOM is loaded. You can alo find the the exact timing on the bottom of the page.

![](https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/domcontentloaded.png)
( image source:[Goolge DevTools Docs](https://developers.google.com/web/tools/chrome-devtools/settings) )

When inspecting this tab it is important to be familiar with  response status codes:

 - 1xx : Informational
 - 2xx : Successful
 - 3xx : Redirect
 - 4xx : Client-error
 - 5xx : Server-error

check this out : [List of status codes](https://http.cat/)

If one of the resources failed to load, by checking this tab you can figure our where is problem is. Is it a server side issue? Is it bad request from client? 


## conclusion
As you can see Chrome DevTools is a powerful tool for any web developer and knowing your way around it can help you pinpoint issues with your app faster. So make the DevTools your best friend!

- Explain what the Elements tab is and what kind of information it provides?
- If an event listener does not respond to clicking,,where is the first place you check?
- How do you add breakpoints to a JavaScript file? Which tab you use?
- Explain what the networks tab does and record a page during loading process.

## Individual Exsercise
  Now it is time for you to try to debug a few errors! First:
  - clone down this repo `git clone repo-url`
  - navigate to your local repo ` cd Intro-to-Chrome-DevTools`
  - go to challenge folder ` cd challenge`
  - open the index.html file ` open index.html`

As you can see I have lost my cats!! All three of them! and also the elements page doesnt seem to be in the right place.
  ### Step1: Find my cats!
  Explore the Elements tab and go through the DOM and their styles to find the three cats. Change the CSS styles to make the cats stick on the page. 
  
  Dont forget **not to refresh** the page or you will loose the changes.
  ### Step2: Name the cats
   Aren't they cool?! if you click on them you should get an alert message from the cat introducing themselves. If they are not introducing themselves where would you look for possible bugs? There might not be visible error messages in the console but how else you can see script files?
 
## Resources
- [Chrome DevTools reference](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
- [More practise on DevTools](http://discover-devtools.codeschool.com/)

###### Add breakpoints to DOM
###### Add breakpoints to js files

