var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

//FirstView Component Constructor
function SettingsView() {
	//create object instance, a parasitic subclass of Observable
	this.self = Ti.UI.createView({visible:false});
	//Bind things
	this.createView = __bind(this.createView, this);
	
	
	this.createView();
	
	return this.self;
}

SettingsView.prototype.createView = function() {
	var knownPlates = [45,35,25,10,5];
	var plateTable = Ti.UI.createTableView({
		width:'100%',
		height:'100%'
	});
	this.self.add(plateTable);
	for (var i=0; i<knownPlates.length; i++) {
		var row = Ti.UI.createTableViewRow({
			height:20
		});
		var label = Ti.UI.createLabel({
			text:'Plate Size:' + knownPlates[i],
			color:'#000',
			width:'100%',
			height:'100%'
		});
		row.add(label);
		plateTable.data.push(row);
	}
}

module.exports = SettingsView;
