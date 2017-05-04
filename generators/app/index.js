var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay'); 
var mkdirp = require('mkdirp'); 

module.exports = yeoman.extend({ 
  prompting: function () {
    this.log(yosay(
      'Welcome to the ' + chalk.red('Drupal Custom Module and Theme') + ' generator!'
    ));
    var prompts = [ {
      name: 'theme',
      message: 'Would you like to add Custom Theme?',
      default: 'Y/n'
    }, {
     when: function(props) { return (/y/i).test(props.theme); },
      name: 'drupalVersion',
      message: 'Which Drupal version?',
      type: 'list',
      choices: [{
        name: 'Drupal 7',
        value: 'd7'
      }]
    },{
     when: function(props) { return (/y/i).test(props.theme); },
      name: 'themeName',
      message: 'Name your Child theme:',
    }, {
     when: function(props) { return (/y/i).test(props.theme); },
      name: 'themeDesc',
      message: 'Describe your Child theme:'
    },{
      name: 'module',
      message: 'Would you like to add Custom Module?',
      default: 'Y/n'
    },{
     when: function(props) { return (/y/i).test(props.module); },
      name: 'moduleName',
      message: 'what is your module Name?',
    },{
     when: function(props) { return (/y/i).test(props.module); },
      name: 'moduleDesc',
      message: 'Describe your custom module:'
    },{
      when: function(props) { return (/y/i).test(props.module); },
      type: 'confirm',
      name: 'install',
      message: 'Would you like to add install file?',
      default: false
    },{
    when: function(props) { return (/y/i).test(props.module); },
      type: 'checkbox',
      name: 'hooks',
      message: 'Would you like to add some hooks?',
      choices: [
        {
          name: 'hook_permission',
          value: 'perm',
          default: false
        },
        {
          name: 'hook_menu',
          value: 'menu',
          default: false
        },
        {
          name: 'hook_theme',
          value: 'theme',
          default: false
        },
        {
          name: 'hook_block_[info|view|configure]',
          value: 'block',
          default: false
        }
      ]
    }];
    return this.prompt(prompts).then(function (props) {
      this.drupalVersion = props.drupalVersion;
      this.themeName= props.themeName;
      this.themeDesc = props.themeDesc;
      this.module = props.module;
      this.moduleName = props.moduleName;
      this.moduleDesc = props.moduleDesc;
      this.install = props.install;        
      var def_value_hooks = {
        perm: false,
        menu: false,
        theme: false,
        block: false
      };
      if( props.hooks) {
      props.hooks.forEach(function(v) {
        def_value_hooks[v] = true;
      }); }
      this.hooks = def_value_hooks;
    }.bind(this));    
  },
  writing: {
   app: function () {
      var context = {
        drupal_version : this.drupalVersion,
        theme_name : this.themeName,
        theme_desc : this.themeDesc,
        module_name: this.moduleName,
        module_desc: this.moduleDesc,
        module: this.module,
        hooks: this.hooks,
        install: this.install,
        dependencies: this.dependencies
      };
       if (context.theme_name) {
         mkdirp('src/themes/'+ context.theme_name); 
         mkdirp('src/themes/'+ context.theme_name +'/js'); 
         mkdirp('src/themes/'+ context.theme_name +'/css');
         mkdirp('src/themes/'+ context.theme_name +'/images');
         this.fs.copy(this.templatePath('_style.css'), this.destinationPath('src/themes/'+ context.theme_name +'/css/style.css'));
         this.fs.copyTpl(this.templatePath('_javascript.js'), this.destinationPath('src/themes/'+ context.theme_name +'/js/' + context.theme_name + '.js'), context);
         if (context.drupal_version === 'd7') {
           this.fs.copyTpl(this.templatePath('_theme.info'), this.destinationPath('src/themes/'+ context.theme_name +'/'+ context.theme_name + '.info'), context);                   
           this.fs.copy(this.templatePath('templates'), this.destinationPath('src/themes/'+ context.theme_name +'/templates'));
         }
         this.fs.copy(this.templatePath('_screenshot.png'), this.destinationPath('src/themes/'+ context.theme_name +'/screenshot.png'));
         this.fs.copy(this.templatePath('_logo.png'), this.destinationPath('src/themes/'+ context.theme_name +'/logo.png'));
         this.fs.copyTpl(this.templatePath('_template.php'), this.destinationPath('src/themes/'+ context.theme_name +'/template.php'), context);                              
       }
       if (context.module_name) {
        mkdirp('src/modules/contrib');
        mkdirp('src/modules/custom/'+ context.module_name);
        this.fs.copyTpl(this.templatePath('_info.php'), this.destinationPath('src/modules/custom/'+ context.module_name +'/' + context.module_name + '.info'), context);                                         
        this.fs.copyTpl(this.templatePath('_module.php'), this.destinationPath('src/modules/custom/'+  context.module_name +'/' + context.module_name + '.module'), context);                                         
        if (context.hooks.theme) {
          mkdirp('src/modules/custom/'+ context.module_name +'/templates');
        }
        if (context.install) {
          this.fs.copyTpl(this.templatePath('_install.php'), this.destinationPath('src/modules/custom/'+ context.module_name +'/' + context.module_name + '.install'), context);                                         
        }      
        mkdirp('src/modules/custom/' + context.module_name + '/js');
        mkdirp('src/modules/custom/' + context.module_name + '/css');
        mkdirp('src/modules/custom/' + context.module_name + '/images');
        this.fs.copyTpl(this.templatePath('_jQuery.js'), this.destinationPath('src/modules/custom/' + context.module_name +'/js/' + context.module_name + '.js'), context);                                         
        this.fs.copy(this.templatePath('_style.css'), this.destinationPath('src/modules/custom/'+ context.module_name +'/css/style.css'));                                                
      } 
      this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
			this.fs.copy(this.templatePath('bower.json'), this.destinationPath('bower.json'));
			this.fs.copy(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'));
			this.fs.copy(this.templatePath('grunt'), this.destinationPath('grunt'));
			this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    },
	 	projectfiles: function() {
			this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
			this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
			this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
		}
  }, 
	install: function() {
	  this.installDependencies();
	}
});
