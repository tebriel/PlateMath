Ti.include('Calculations/SettingsObject.js');

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

//Application Window Component Constructor
function ApplicationWindow() {
	//Load settings or create a new set
	this.settings = JSON.parse(Ti.App.Properties.getString('settings', new SettingsObject()));
	
	this.ChangeSettings = __bind(this.ChangeSettings, this);
	
	//load component dependencies
	var MainView = require('ui/MainView');
	var SettingsView = require('ui/SettingsView');
	
	this.self = Titanium.UI.createWindow();
	
	//create component instance
	this.settingsView = new SettingsView(this.settings);
	this.mainView = new MainView(this.ChangeSettings, this.settings);

	//construct UI
	this.settingsWin = Ti.UI.createWindow({
		id:'settingsWindow'
	});
	this.settingsWin.add(this.settingsView);
	var mainWin = Ti.UI.createWindow({
		id:'mainWindow'
	});
	//Adding a nav bar gives us the TitleBar with the App name
	this.nav = Titanium.UI.iPhone.createNavigationGroup({
   		window: mainWin
	});	
	mainWin.add(this.mainView);
	this.self.add(this.nav);
	
	return this.self;
}

ApplicationWindow.prototype.ChangeSettings = function() {
	this.nav.open(this.settingsWin,{animated:true});
	this.settingsView.show();
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
