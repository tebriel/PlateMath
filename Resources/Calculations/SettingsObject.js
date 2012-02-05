var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

function SettingsObject(plateList, barWeight) {
	this.plateList = ((plateList)? plateList:[45, 35, 25, 10, 5, 2.5]);
	this.barWeight = ((barWeight)? barWeight:45);
	Ti.App.Properties.setString('settings', JSON.stringify(this));
}
