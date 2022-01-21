# Report
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0  a -->

1. [Report](#report)
	1. [Site](#site)
	2. [Structure and Style (HTML CSS)](#structure-and-style-html-css)
		1. [Logo](#logo)
		2. [Learn from Blogging / Root (CSS variables) / Responsive Design](#learn-from-blogging--root-css-variables--responsive-design)
		3. [Word and Title](#word-and-title)
		4. [Find from Google](#find-from-google)
			1. [Display](#display)
			2. [Margin vs Padding](#margin-vs-padding)
		5. [Percentage display](#percentage-display)
	3. [Javascript (JS)](#javascript-js)
		1. [Markdown to HTML](#markdown-to-html)
		2. [Table of Contents (toc)](#table-of-contents-toc)
		3. [Night Mode](#night-mode)
		4. [Popup-Box (not used)](#popup-box-not-used)
	4. [Images (PNG SVG)](#images-png-svg)
		1. [Vector (SVG)](#vector-svg)
		2. [PNG](#png)
	5. [Server](#server)
	6. [Database](#database)
	7. [Dynamic pages (data.js - a chat app - index)](#dynamic-pages-datajs---a-chat-app---index)

<!-- /TOC -->

## Site

To see the site, please type `npx nodemon app.js` in the terminal.
Recommended Browser: Chrome
At localhost:3000

The site name is "A Simple Reader" and it is a site to read novels.

The features and functions I initally think to put in the site are:
- user system (not successful)
- bookmark (not successful)
- insert own novel (not successful)
- night mode
- toc functions
- to-top button
- clean and clear to read

---

- A for HTML
- A for CSS
- B for JS
- A for PNG
- A for SVG
- C for Server
- C for Database
- C for Dynamic pages
- 23 for Depth (out of 40)

## Structure and Style (HTML CSS)

### Logo

iCon of the site is generated from [realfavicongenerator.net](https://realfavicongenerator.net) after drawing from my ipad's app "Vectornator," a vector drawing app. The [realfavicongenerator.net](https://realfavicongenerator.net) can generate all kinds of icons that fit in all kinds of devices and browsers.

### Learn from Blogging / Root (CSS variables) / Responsive Design

I am a fan of blogging, though I don't have time to play my blog recently. The blogging platform I prefer is FC2.com, and it is a Japanese one but with many languages available. The platform provides html and css for users to create themes and decorate their own blog. The users can also upload the themes they make as well. [Life-is - FC2ブログテンプレート][2db2d2a5] is one of my favourite theme made by [Akira](https://vanillaice000.blog.fc2.com). I learned many html's and css' features and code from here. I think one of the useful features I learned is the css variables (root) with this function, it is easy to manage color and number of sizes. And the code also looks cleaner and easier to manage colors and sizes as well. Instaed of pulling the long css code up and down to change values, putting the root column and set or chaneg variables or values in varables is much more formalized. It is also useful for changing the themes of the website, for example, night mode and light mode. Responsive design that [Akira](https://vanillaice000.blog.fc2.com) made I think is wonderful and I learn a lot from it. The most of themes she made all contains responsive design for phones, tablets and computers. I leared that for different devices, the webpage should have different design to make the website easier for readers to browse.

I didn't really include responsive design in my website but I hope my site can still look good even on different devices. What I did is set all of the value of width and height into percentages, so that the size of the fields in the site can change as the size of the screen changes. I made only some adjustment to the size of the font for the phone size screen mainly because the font in the footer and sidebar looks a bit too big.

### Word and Title

[CSSのコピペだけ！おしゃれな見出しのデザイン例まとめ68選][058cfa9c] and [Table design][52395661] are articles from the same site that provides some beautiful style of h1 titles and useful tutorials. They are also find when I was blogging and the designs are all suitable in minimal or cute sites.

### Find from Google

Most of the time when I have problem with CSS styles, I mostly just google to find solutions. I also leared a lot css tricks from them. For example, the filier function in css is one of the fun thing I found. It can easily put filters on images without changing the image itself.

[image link problem](https://stackoverflow.com/questions/3655059/html-pick-images-of-root-folder-from-sub-folder) solves the problem of how to wrtie the path when the file is in different folders.

#### Display

I am sometimes confused about the display variables and how it works. [Understanding CSS Display: None, Block, Inline and Inline-Block][f84b5b98] is an useful article intoducing some famous display variables and it is clear to understand. I always go back to this page when I am confusing.

#### Margin vs Padding

Margin vs Padding are also confusing to me as well. I found the picture in [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp) is so useful. It clearly shows the range and position of margin, border, padding and content.

### Percentage display

[Creating a Percentage of Webpage Scrolled Indicator][f8570f8b] is one of the idea I am thinking of to put into the reading page. But I give up because it will look a bit messy and crowded.

## Javascript (JS)

### Markdown to HTML

At first, I wanted to create a javascript to convert the novel text/md files into html automatically when entering the website. [marked.js][865a9bd5] is one of the method I search from the internet and it seems easy to install into the website. However, I failed when conducting the website with mdtohtml.js file. I search on the internet to find out some solutions but it does not work on mine. It can only work when I type the text content as a string in the js file and it always shows error when fetching the md file to convert to html.

Therefore, I find out a site called [Convert Markdown to HTML][920b207b] from google to directly convert markdown text to html format. To me, it is an easier way than the one above. So cut and paste the html text from the website to my novel-01.html file.

### Table of Contents (toc)

[jQueryで目次と「目次に戻る」を自動生成（プラグイン無し）][c53dd6b6] is an article teaching how to make toc using only javascript and jQuery. And it is also the method I use in my own blog. When you put `<nav id="toc"></nav>` into the article page or other pages, it creates a menu of the h2-4(or others) in the position where you put `<nav id="toc"></nav>`. The style of toc is adjustable and the list style is also customizable as well. However, it is not working on my reader site again. No matter how I adjust the js file, it doesn't show the menu of h2-4 in the page, which are the chapter title in the novel-01.html.

So I go on google and [Tocbot][331da836] is my favourite one. It looks clean and tidy and easy to intall into the website. At first, I use the css file provided by the author but looks a bit ugly with the original style of my website, so I copied the css code from the link and paste it in basic.css. I tryied many colors like green, blue, gray or pink but I decided to use purple as the main color of toc and the whole site.

### Night Mode

In a reader, I think a night mode switcher is essential. Above, I used css variables to control the colors and sizes in css code. I want to directly change the root variables to switch between light and night mode. [How to change CSS :root color variables in JavaScript](https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript) on stackoverflow is a useful article to me. The setProperty() function is the core part of the night mode function. By changing the variables of background color and text color of the pages, it is easier to set up the function() and js in the mode switcher. Also, I also copied the setTheme() and loadTheme() js from the asker of the stackoverflow page. I modified the set item functions to setProperty() mentioned above.

localStorage is another feature I think useful when running a website. It can store some setting or data in the user's side and it is sometimes convenient to avoid repeating entering personal settings or to store some data for next-time use.

### Popup-Box (not used)

I initially want to create a side bar with just buttons and by pressing buttons, a popup box will appear on the screen and user can do actions on it. [Simple Popup or Model Box Using HTML CSS and JavaScript](http://significanttechno.com/simple-popup-or-model-box-using-html-css-and-javascript) a tutorial I found and I copied the code and try to modify it. But I later on found out that it is kind of annoying when you hide all of the sidebar functions and have to press the buttons to show the functions. Although the page would look cleaner, I prefer to remove popup boxes and show the functions on the sidebar in a simple way instead of complicated way.

## Images (PNG SVG)

### Vector (SVG)

Tools I used:
- iPad + pencil
- Vectornator

For the vector drawing part, I used a vector-drawing app "Vectornator" in my ipad to create icons used in this site. The app can export the works to png, jpg, svg, and pdf. It has most of the tools needed in drawing, such as brushes, path editors, word inserting, shape tools and many others.

First, I painted the background with the brushes.
![](./report image/06.png)
![](/report image/07.png)

Then I would draw the shapes with the tools before designing the words. The shape tool in this app includes circle, squares, rectangle, star, and many more. I can draw the shapes either with or without filling the shape, which is very convenient.

![](/report image/02.png)
![](/report image/03.png)
![](/report image/04.png)
![](/report image/13.png)

With brushes and path tools, it is easy to create more artistic words and easier to make adjustment as well. First is drawing the words, and then pull the points on the path on words to make adjustment if some places are too thin or thick or not look right.

![](/report image/01.png)
![](/report image/05.png
![](/report image/10.png)
![](/report image/11.png)
![](/report image/14.png)
![](/report image/15.png)
![](/report image/19.png)

In the app, layar tool is also another convenient function. It is easy to see what items are there in every layer.

![](/report image/12.png)

### PNG

Tools I used:
- ON1 Effect 10 (I downloaded from its offical website when it was free)
- Krita

[stocksnap.io](https://stocksnap.io/) is where I find and download the images to edit. All the images in this site are all under the lisense CC0, which means free and open sourse.

I used ON1 Effect 10 and Krita to do this part of work. There are numorous filters and effect in ON1 Effect 10 which is a photo-editing application.

I choose a recommended filter and then add another filters to the image. After choosing the recommended filter, I also do some adjustment on the filter settings, such as adjusting brightness or contrast, adding textures, turn into black and whites and many more. Through adjustments of filters' setting, the photo will look different from the original one. In this application, it enables the users to view the before-after photo view. It contains abundant filters and provides detailed settings for users to create unique photo and not just let users use only the already set filters.

![](/report image/21.png)
![](/report image/22.png)
![](/report image/23.png)
![](/report image/30.png)
![](/report image/31.png)
![](/report image/32.png)

I choosed Krita rather than Gimp is because Krita's interface looks better than Gimp and the word tool is easier to use as well. At first, I have trouble using the svg text tool. No matter how much I clicked, it just doesn't response. I forget that you have to pull a square to open the word-editing window. I draw shapes using rectangle, eclipse, polyline and polygon tools. With stars, I first draw the outline with the polyline tool and with one of them filled with color black and the other one stay with just lines. I also separate the shapes, texts, and images into differnet layers so that control over the image and also do some blending with the brushes' layers. Another feature I love is that you can spin and zoom the image on the window with mousepad. I'm using Macbook and with the pad it is easy to spin and zoom with two fingers.

![](/report image/24.png)
![](/report image/25.png)
![](/report image/26.png)
![](/report image/27.png)
![](/report image/28.png)
![](/report image/29.png)
![](/report image/33.png)
![](/report image/34.png)
![](/report image/35.png)
![](/report image/36.png)
![](/report image/37.png)

[bookroo.com](https://bookroo.com/blog/the-100-best-quotes-about-reading) is where the quotes on the imges I copied from.

## Server

I followed the instructions from [Express4.17.1](https://expressjs.com/) the offical website and build the basic app.js. [Getting off the ground with Express.js](https://www.freecodecamp.org/news/getting-off-the-ground-with-expressjs-89ada7ef4e59/) gives me some more idea about express.js and how it works. However, I think it is still too hard for me to understand the routing inexpress.js. Near the end of the article, the https problem is mentioned with some information provided. I wanted to investigate in how to redirect the site from http to https. [create a trusted self-signed SSL cert for localhost (for use with Express/Node)](https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node) is what I find on how to do this. There is a detailed tutorial and it is very useful. However, I didnot habe enough time to finish it. I comment the redirect-to-https part in app.js.

## Database

- createdb.js

I choose to use SQLite3 and also downloaded DB Browser for SQLite. I have huge problems with database and read and search through google for solutions. Here are some websites I visited and learned:

- [Build a REST API with Node.js and Express.js](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
- [Experiment with Node JS and Sqlite3](https://medium.com/@phuhien/experiment-with-node-js-and-sqlite3-6f1ccaad3167)

 Note: from the two above website and the class note I started to have some idea of how database and node works together. But I still have some problem between database and express-routing. I don't really understand how these two interact. But these two tutorials teaches me a lot. I copied and modified some of the code in these two articles.

- [Connecting To SQLite Database Using Node.js](http://www.sqlitetutorial.net/sqlite-nodejs/connect/)
- [JavaScript HTML Input Examples](https://www.w3schools.com/js/js_input_examples.asp)
- [Guide - 用 JavaScript 來取得表單元素內容的值（取值）](https://pjchender.blogspot.com/2015/11/javascript.html)
- [JavaScript - onClick to get the ID of the clicked button](https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button)
- [Get filename from URL using Javascript](https://befused.com/javascript/get-filename-url)
- [Querying Data in SQLite Database from Node.js Applications](http://www.sqlitetutorial.net/sqlite-nodejs/query/)

I searched for informations about html inputs, javascript, database and express.js. I have a clear idea of how node.js and database works together. I think the hardest part is express.js. It is too hard to understand.

I created two tables, Membership and Bookmark in the .db/.sqlite file in DB Browser for SQLite. It works fine when I compile the js files to create tables and insert data into tables and run the website(app.js).

## Dynamic pages (data.js - a chat app - index)

- createdb.js
- app.js

- [Build a REST API with Node.js and Express.js](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
- [Experiment with Node JS and Sqlite3](https://medium.com/@phuhien/experiment-with-node-js-and-sqlite3-6f1ccaad3167)
- [Handle GET and POST Request in Express 4](https://codeforgeek.com/handle-get-post-request-express-4/)
- [Node, Express & MongoDB: Button click example](https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35)

The above are some of the information on Google that I find and try to copy the method in the tutorial to create a login system. However, it is not working very well problably because I did not have a clear understanding on routing. I try very hard to understand the routing such as get, post and delete but I cannot finish the program. I am sure that I have no problem with the database side and the biggest problem I have is in the server side(routing). Therefore, I cannot pass the data on the site to the app.js to the js file and then the databse.

- data.js : a chap app at index.html

[Getting Started with WebSockets](https://spin.atomicobject.com/2018/10/01/websockets-getting-started/) and [Real-time chat app using WebSockets and Nodejs](https://medium.com/@JoshiRabindra/real-time-chat-app-using-websockets-and-nodejs-a97f90eb5bed) are two tutorials teaching how to make a chat app with socket.io, express and nodemon. I basically just copy the code in the tutorials into the server side (app.js) and client side (data.js). Both of the tutorials expained detailedly of why to add the function and when to add it or use it. The order of the lines in both js and app.js are important. I keep getting errors when I paste the line in a wrong place or misunderstand the tutorial and the lines are not in the correct order. I get an minor but essential error in data.js with the line `var socket = io.connect("<http://localhost:3000>");` and did not notice that I should delete the <> brackets and I am finding the bug everywhere in the file and folders. Thankfully, I have notice this bug from the error log and compare the bug with the correct one on the internet. And fix the bug and it works!

  [058cfa9c]: https://saruwakakun.com/html-css/reference/h-design "CSSのコピペだけ！おしゃれな見出しのデザイン例まとめ68選"
  [52395661]: https://saruwakakun.com/html-css/basic/table "Table design"
  [c53dd6b6]: http://10251.net/jquery-toc-without-plugins "jQueryで目次と「目次に戻る」を自動生成（プラグイン無し）"
  [f84b5b98]: https://medium.com/swlh/understanding-css-display-none-block-inline-and-inline-block-63f6510df93 "Understanding CSS Display: None, Block, Inline and Inline-Block"
  [2db2d2a5]: https://vanillaice000.blog.fc2.com/blog-entry-428.html "Life-is - FC2ブログテンプレート"
  [331da836]: https://tscanlin.github.io/tocbot/#api "Tocbot"
  [920b207b]: https://www.browserling.com/tools/markdown-to-html "Convert Markdown to HTML"
  [865a9bd5]: https://github.com/markedjs/marked "marked.js"
  [f8570f8b]: http://qnimate.com/creating-a-percentage-scrolled-indicator/ "Creating a Percentage of Webpage Scrolled Indicator"
