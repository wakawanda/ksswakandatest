
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var checkbox2 = {};	// @checkbox
	var checkbox1 = {};	// @checkbox
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	checkbox2.click = function checkbox2_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	checkbox1.click = function checkbox1_click (event)// @startlock
	{// @endlock
			if($$('checkbox1').getValue()){
				sources.disclosures.all();
			}
			else{
				sources.disclosures.query('DisclosureStatus =:1','New');
			}
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$("containerDisclosureFilter").hide();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("checkbox2", "click", checkbox2.click, "WAF");
	WAF.addListener("checkbox1", "click", checkbox1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock
