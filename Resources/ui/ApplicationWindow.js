var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

//Application Window Component Constructor
function ApplicationWindow() {
	this.ChangeSettings = __bind(this.ChangeSettings, this);
	//load component dependencies
	var MainView = require('ui/MainView');
	var SettingsView = require('ui/SettingsView');
	this.self = Titanium.UI.createWindow();
	//create component instance
	var mainWin = Ti.UI.createWindow({
		backgroundColor:'#CCC',
		barColor:'#000',
		navBarHidden:false,
		title:'PlateMath',
		exitOnClose:true
	});
	
	this.settingsWin = Ti.UI.createWindow({
		backgroundColor:'#CCC',
		barColor:'#000',
		navBarHidden:false,
		title:'Settings',
		exitOnClose:false
	});
	
	this.settingsView = new SettingsView();

	
	this.nav = Titanium.UI.iPhone.createNavigationGroup({
   		window: mainWin
	});	
	//construct UI
	this.mainView = new MainView(this.ChangeSettings);
	mainWin.add(this.mainView);
	this.self.add(this.nav);
	this.self.add(this.settingsView);
	
	return this.self;
}

ApplicationWindow.prototype.ChangeSettings = function() {
	//this.nav.open(this.settingsWin,{animated:true});
	this.mainView.animate({view:this.settingsView, transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
	this.settingsView.show();
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
