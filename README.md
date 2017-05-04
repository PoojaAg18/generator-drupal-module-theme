![Drupal YEOMAN][drupal-yeomen-image]

# generator-drupal-module-theme
> Drupal Custom Module and Custom Theme Generator integrated with options of grunt optimization tasks(jshint, minification, concatenation, sprite-image creation)

> Fast and easy way to setup a module scaffolding with the most important files and functions you need to start developing.

## Installation

First, Install Yeoman and this generator using npm(prequisites: nodejs should be pre-installed):

```bash
npm install -g yo
npm install -g generator-drupal-module-theme
```

#Note: To download external libraries install bower globally while setting up the project, Please run below command -

```bash
npm install -g bower
```

And then go to your sites/all path of your site folder and run -

```bash
yo drupal-module-theme
```
And answer the below questions to get started -
* Would you like to add Custom Theme? 
* Which Drupal version? Drupal 7
* Name your Child theme:
* Describe your Child theme:
* Would you like to add Custom Module?
* what is your module Name?
* Describe your custom module:
* Would you like to add install file?
* Would you like to add some hooks? hook_permission, hook_menu, hook_theme, hook_block_[info|view|configure]

Optionally, To optimize your project using grunt after changes -
Run below command from your sites/all/ folder where gruntfile.js is present
```bash
grunt serve
```
A "Dist" folder will be created with all the optimized files

Generated file structure:
|-src
   |- Modules
       |- Contrib
       |- Custom
            |- Modulefolder
                  |- modulename.info
                  |- modulename.install
                  |- modulename.module
                  |- CSS Folder -> CSS File
                  |- JS Folder -> JS File
                  |- Folders like images and templates
    |- Themes
       |- ThemeFolder
                  |- themename.info
                  |- template.php
                  |- templates folder with all basic template files - block.tpl,node.tpl,html.tpl etc
                  |- CSS Folder -> CSS File
                  |- JS Folder -> JS File
                  |- Images folder and dummy images like logo and screenshot.
     |- Libraries
         |- Third party libraries like Angular, jquery etc downloaded by bower
         
Additionally, grunt folder will be installed with all the tasks files to make any path changes in future, bower.json, gruntfile.js, package.json, (.jshintrc, .editorconfig to maintain coding standards)   
                

[drupal-yeomen-image]: https://blogpost.pp.ua/sites/default/files/post/images/drupal_yeoman.png
