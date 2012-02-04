var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Ti.include('Calculations/CalculatePlates.js', 'Calculations/PlateObject.js')

//FirstView Component Constructor
function MainView(settingsCall) {
	//create object instance, a parasitic subclass of Observable
	this.self = Ti.UI.createView();
	this.desiredWeight = null;
	this.changeSettings = settingsCall;
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
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var button = Ti.UI.createButton({
		title:'Push Me!',
		width:'50%',
		height:'10%',
		top:'35%',
		color:'#000'
	});
	this.self.add(button);
	
	button.addEventListener('click', this.callCalc);
	var settingsButton = Ti.UI.createButton({ 
		systemButton: Ti.UI.iPhone.SystemButton.INFO_DARK,
		width:20,
		height:20, 
		right:10,
		bottom:10
	});
		
	//settingsButton.addEventListener('click', this.changeSettings);
	this.self.add(settingsButton);
	
	this.desiredWeight = Ti.UI.createTextField({
		width:100,
		height:20,
		backgroundColor:'#FFF',
	 	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		top:'25%',
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD
	});
	
	this.self.add(this.desiredWeight);
	
	this.Results = Ti.UI.createTextArea({
		height:'50%',
		width:'100%',
		top:'50%',
		backgroundColor:'#CCC',
		color:'#000'
	});
	this.self.add(this.Results);
}

MainView.prototype.callCalc = function() {
	this.desiredWeight.blur();
	var resultSet = calculatePlates(this.desiredWeight.value);
	this.Results.value = '';
	for (var i=0; i<resultSet.length; i++) {
		this.Results.value += String.format('%d @ %d\n', resultSet[i].getWeight(), resultSet[i].getQuantity());
	}
}

module.exports = MainView;
