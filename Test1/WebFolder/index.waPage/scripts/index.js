
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid3 = {};	// @dataGrid
	var disclosuresQuery = {};	// @button
	var disclosuresMine = {};	// @checkbox
	var disclosuresNew2 = {};	// @checkbox
	var disclosuresAll = {};	// @checkbox
	var disclosuresNew2 = {};	// @checkbox
	var checkbox2 = {};	// @checkbox
	var disclosuresNew2 = {};	// @checkbox
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid3.onRowDraw = function dataGrid3_onRowDraw (event)// @startlock
	{// @endlock
		var disclosureStatusVar = event.row.cells[3].value;
		
		if(event.row.cells[3].value == 'New') {
			event.row.cells[3].insideCell.html('<img src="/images/flag_red.png"/>New');
		}else if(event.row.cells[3].value == 'Submitted'){
			event.row.cells[3].insideCell.html('<img src="/images/flag_yellow.png"/>Submitted');
		}else if(disclosureStatusVar.indexOf("Reviewed") != -1){
			event.row.cells[3].insideCell.html('<img src="/images/flag_blue.png"/>Reviewed');
		}else if(disclosureStatusVar.indexOf("Docket") != -1){
			event.row.cells[3].insideCell.html('<img src="/images/flag_green.png"/>Docket');
		}
	};// @lock

	disclosuresQuery.click = function disclosuresQuery_click (event)// @startlock
	{// @endlock
		//$$('disclosuresQueryForm').show();
	};// @lock

	disclosuresMine.click = function disclosuresMine_click (event)// @startlock
	{// @endlock
		sources.disclosures.query('Assoc_Users_D_Initials = :1','MKA')
	};// @lock

	disclosuresNew2.click = function disclosuresNew2_click (event)// @startlock
	{// @endlock
		if($$('disclosuresNew2').getValue()){
				sources.disclosures.query('DisclosureStatus =:1','New');
			}
			else{
				sources.disclosures.all();
			}
	};// @lock

	disclosuresAll.click = function disclosuresAll_click (event)// @startlock
	{// @endlock
		sources.disclosures.all();
		$$('disclosuresNew2').setValue(false);
		
	};// @lock

	checkbox2.click = function checkbox2_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	disclosuresNew2.click = function disclosuresNew2_click (event)// @startlock
	{// @endlock
			if($$('disclosuresNew2').getValue()){
				sources.disclosures.query('DisclosureStatus =:1','New');
			}
			else{
				sources.disclosures.all();
			}
			//disclosureFilter();
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		//$$("containerDisclosureFilter").hide();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid3", "onRowDraw", dataGrid3.onRowDraw, "WAF");
	WAF.addListener("disclosuresQuery", "click", disclosuresQuery.click, "WAF");
	WAF.addListener("disclosuresMine", "click", disclosuresMine.click, "WAF");
	WAF.addListener("disclosuresNew2", "click", disclosuresNew2.click, "WAF");
	WAF.addListener("disclosuresAll", "click", disclosuresAll.click, "WAF");
	WAF.addListener("checkbox2", "click", checkbox2.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock

function disclosureFilter(){
	
}
