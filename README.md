[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
NodeJS basic template
=========================

This example shows how to run Anychart library with Electron.

### Running
To use this sample you must have:

NodeJS installed, if not please checkout [NodeJS official site](https://nodejs.org)
To check your nodejs installation, run following command in command line:
```
$ node -v
v7.2.1 # sample output
```

npm package manager, if not please checkout https://www.npmjs.com/
To check your npm installation, run following command in command line:
```
$ npm -v
3.10.10 # sample output
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

To run app, run next command:
```
$ ./node_modules/.bin/electron .
```

To build app for your current platform run:
```
$ grunt electron:build
```

Now you can run packaged app, navigate to generated build folder and run app, e.g for linux x64 run:
```
$ cd dist/electron-template-linux-x64
```

And run app:
```
$ ./electron-template
```

To build app for all platforms run
```
$ grunt electron:buildAll
```
There will be many folders in dist directory corresponding available platforms


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
Template - [Jade](https://naltatis.github.io/jade-syntax-docs/)<br />

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-express-mongodb-template/blob/master/LICENSE).
