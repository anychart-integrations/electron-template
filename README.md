[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# Electron basic template

This example shows how to build simple desktop application with AnyChart library and [Electron](http://electron.atom.io/).

### Running
To use this sample you must have:

NodeJS installed, if not please checkout [NodeJS official site](https://nodejs.org).
To check your nodejs installation, run following command in command line:
```
$ node -v
v7.2.1 # sample output
```

npm package manager, if not please checkout [npm official site](https://www.npmjs.com/).
To check your npm installation, run following command in command line:
```
$ npm -v
3.10.10 # sample output
```

grunt task runner, if not please checkout [grunt official site](http://gruntjs.com/).
To check your grunt installation, run following command in command line:
```
$ grunt --version
grunt-cli v1.2.0 # sample output
```

To start this example run commands listed below.

Clone the repository from github.com to your workspace folder:

```
$ git clone git@github.com:anychart-integrations/electron-template.git
```

Navigate to the repository folder:
```
$ cd electron-template
```

Install dependencies
```
npm install
```

To start application, run next command:
```
$ ./node_modules/.bin/electron .
```

To build application for your current platform run:
```
$ grunt electron:build
```

Now you can run packaged application. Navigate to generated build folder, e.g for linux x64 run:
```
$ cd dist/electron-template-linux-x64
```

And run application:
```
$ ./electron-template
```

To build application for all available platforms and architectures run:
```
$ grunt electron:buildAll
```
There will be many folders in dist directory corresponding to available platforms.


## Workspace
Your workspace should look like:
```
electron-template/
    dist/					# generated builds
	node_modules/			# dependencies
    anychart-bundle.min.js	# anychart library
	anychart-ui.min.css		# anychart style
	main.js					# main Electron js script
	index.html				# main Electron html
	Gruntfile.js			# grunt
	package.json			# project settings
    README.md
    .gitignore
```

## Technologies
Platform/Language - [NodeJS](https://nodejs.org/en/)<br />
Framework - [Electron](http://electron.atom.io/)<br />
Build tool - [npm](https://www.npmjs.com/)<br />
Task runner - [grunt](http://gruntjs.com/)<br />

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
AnyChart Electron integration sample includes two parts:
- Code of the integration sample that allows to use Javascript library (in this case, AnyChart) with Electron. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/electron-template/blob/master/LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/).

If you have any questions regarding licensing - please contact us. <sales@anychart.com>

[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/electron-template?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
