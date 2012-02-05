var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

//FirstView Component Constructor
function SettingsView(settings) {
	//create object instance, a parasitic subclass of Observable
	this.self = Ti.UI.createView();
	//Bind things
	this.createView = __bind(this.createView, this);
	this.settings = settings;	
	
	this.createView();
	
	return this.self;
}

SettingsView.prototype.createView = function() {

	var knownPlates = this.settings.plateList;
	var plateTable = Ti.UI.createTableView({
		id:'settingsTable'
	});
	this.self.add(plateTable);
	
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

module.exports = SettingsView;
