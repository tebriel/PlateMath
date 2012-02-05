var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Ti.include('Calculations/CalculatePlates.js', 'Calculations/PlateObject.js')
Ti.include('Utilities/sprintf-0.7-beta1.js');

//FirstView Component Constructor
function MainView(settingsCall, settings) {
	//create object instance, a parasitic subclass of Observable
	this.self = Ti.UI.createView();
	this.desiredWeight = null;
	
	this.changeSettings = settingsCall;
	this.settings = settings;
	
	//Bind things
	this.createView = __bind(this.createView, this);
	this.callCalc = __bind(this.callCalc, this);
	
	this.createView();
	
	return this.self;
}

MainView.prototype.createView = function() {
	var label = Ti.UI.createLabel({
		id:'welcometext',
		text:String.format(L('welcome'), 'PlateMath')
	});
	this.self.add(label);
	
	var button = Ti.UI.createButton({
		id:'calcButton'
	});
	this.self.add(button);
	
	button.addEventListener('click', this.callCalc);
	
	//TODO: this button needs an image (wrench/? mark)
	var settingsButton = Ti.UI.createButton({ 
		id:'settingsButton',
		systemButton: Ti.UI.iPhone.SystemButton.INFO_DARK
	});
		
	settingsButton.addEventListener('click', this.changeSettings);
	this.self.add(settingsButton);
	
	this.desiredWeight = Ti.UI.createTextField({
		id:'weightEntry',
	 	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD
	});
	
	this.self.add(this.desiredWeight);
	
	this.Results = Ti.UI.createTextArea({
		id:'calcResultsArea'
	});
	this.self.add(this.Results);
}

MainView.prototype.callCalc = function() {
	//Hide the keyboard
	this.desiredWeight.blur();
	
	//Factor out the barbell
	//TODO: use the settings for this weight
	var toCalc = Math.max(0,this.desiredWeight.value - 45);
	var resultSet = calculatePlates(this.settings.plateList, toCalc);
	
	//TODO: Convert to a sprintf for the setting for the bar weight
	this.Results.value = ((this.desiredWeight.value >=45)? L('bar_weight'):'');
	
	//TODO: Make this prettier!
	for (var i=0; i<resultSet.length; i++) {
		var result = resultSet[i];
		this.Results.value += sprintf(L('plate_qty'), result, result); 
	}
}

module.exports = MainView;
