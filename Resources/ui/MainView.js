var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Ti.include('Calculations/CalculatePlates.js', 'Calculations/PlateObject.js')

//FirstView Component Constructor
function MainView() {
	//create object instance, a parasitic subclass of Observable
	this.self = Ti.UI.createView();
	
	//Bind things
	this.createView = __bind(this.createView, this);
	
	
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
		color:'#000'
	});
	this.self.add(button);
	
	button.addEventListener('click', function(e) {
		calculatePlates(50);
	});
}

module.exports = MainView;
