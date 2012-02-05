var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

//FirstView Component Constructor
function SettingsView(settings, win) {
	//create object instance, a parasitic subclass of Observable
	this.win           = win;
	this.settings      = settings;
	this.editButton    = null;
		
	this.self          = Ti.UI.createView();
	//Bind things
	this.createView    = __bind(this.createView, this);
	this.editTable     = __bind(this.editTable, this);
	this.addEditButton = __bind(this.addEditButton, this);

	
	this.createView();
	
	return this.self;
}

SettingsView.prototype.addEditButton = function() {
	this.win.rightNavButton = this.editButton;
}

SettingsView.prototype.createView = function() {

	var knownPlates = this.settings.plateList;
	var plateTable = Ti.UI.createTableView({
		id:'settingsTable'
	});
	this.self.add(plateTable);
	
	this.editButton = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.EDIT
	});
	this.editButton.addEventListener('click', this.editTable);
	
	this.addEditButton();	
	
	plateTable.data = [];
	var tableData = [];
	for (var i=0; i<knownPlates.length; i++) {
		var row = Ti.UI.createTableViewRow({
			id:'settingsRow'
		});
		var label = Ti.UI.createLabel({
			id:'settingsLabel',
			text:String.format(L('plate_size'),knownPlates[i])
		});
		row.add(label);
		tableData.push(row);
	}
	plateTable.data = tableData;
	
	
}

SettingsView.prototype.editTable = function() {
	
}

module.exports = SettingsView;
