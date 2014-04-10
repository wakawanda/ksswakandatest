
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var checkbox2 = {};	// @checkbox
// @endregion// @endlock

// eventHandlers// @lock

	checkbox2.click = function checkbox2_click (event)// @startlock
	{// @endlock
		sources.disclosures.query('DisclosureStatus =:1','New');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("checkbox2", "click", checkbox2.click, "WAF");
// @endregion
};// @endlock
