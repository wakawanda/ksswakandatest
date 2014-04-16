
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var disclosureGrid = {};	// @dataGrid
	var disclosuresQuery = {};	// @button
	var disclosuresMine = {};	// @checkbox
	var disclosuresNew = {};	// @checkbox
	var disclosuresAll = {};	// @checkbox
	var disclosuresNew = {};	// @checkbox
	var checkbox2 = {};	// @checkbox
	var disclosuresNew = {};	// @checkbox
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock

		$$('disclosureGrid').reduceToSelected();
	};// @lock

	disclosureGrid.onRowDblClick = function disclosureGrid_onRowDblClick (event)// @startlock
	{// @endlock
		$$("disclosureGrid").hide();
		$$("disclosureDetail").show();
	};// @lock

	disclosureGrid.onRowDraw = function disclosureGrid_onRowDraw (event)// @startlock
	{// @endlock
		var disclosureStatusVar = event.row.cells[3].value;
		
		if(disclosureStatusVar != null){
		
		if(event.row.cells[3].value == 'New') {
			event.row.cells[3].insideCell.html('<img src="/images/flag_red.png"/>New');
		}else if(event.row.cells[3].value == 'Submitted'){
			event.row.cells[3].insideCell.html('<img src="/images/flag_yellow.png"/>Submitted');
		}else if(disclosureStatusVar.indexOf("Reviewed") != -1){
			event.row.cells[3].insideCell.html('<img src="/images/flag_blue.png"/>Reviewed');
		}else if(disclosureStatusVar.indexOf("Docket") != -1){
			event.row.cells[3].insideCell.html('<img src="/images/flag_green.png"/>Docket');
		}
	}
	};// @lock

	disclosuresQuery.click = function disclosuresQuery_click (event)// @startlock
	{// @endlock
		//$$('disclosuresQueryForm').show();
	};// @lock

	disclosuresMine.click = function disclosuresMine_click (event)// @startlock
	{// @endlock
		if($$('disclosuresMine').getValue()){
			$$('disclosuresAll').setValue(false);
			sources.disclosures.query('Assoc_Users_D_Initials = :1','MKA');
		}else if($$('disclosuresNew').getValue()){
			sources.disclosures.query('DisclosureStatus =:1','New');
		}else if($$('disclosuresAll').getValue()){
			sources.disclosures.all();
		}
	};// @lock

	disclosuresAll.click = function disclosuresAll_click (event)// @startlock
	{// @endlock
		$$('disclosuresNew').setValue(false);
		$$('disclosuresMine').setValue(false);
		sources.disclosures.all();
		
		
	};// @lock

	checkbox2.click = function checkbox2_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	disclosuresNew.click = function disclosuresNew_click (event)// @startlock
	{// @endlock

			if($$('disclosuresNew').getValue()){
				$$('disclosuresAll').setValue(false);
				
				if($$('disclosuresMine').getValue()){
					sources.disclosures.query("DisclosureStatus ='New' AND Assoc_Users_D_Initials = 'MKA'");
				}else{
					sources.disclosures.query('DisclosureStatus =:1','New');
				}
				
			}
			else{
				if($$('disclosuresMine').getValue()){
					sources.disclosures.query('Assoc_Users_D_Initials = :1','MKA');
				}else{
					sources.disclosures.all();
				}
				
			}
			//disclosureFilter();
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		//$$("containerDisclosureFilter").hide();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("disclosureGrid", "onRowDblClick", disclosureGrid.onRowDblClick, "WAF");
	WAF.addListener("disclosureGrid", "onRowDraw", disclosureGrid.onRowDraw, "WAF");
	WAF.addListener("disclosuresQuery", "click", disclosuresQuery.click, "WAF");
	WAF.addListener("disclosuresMine", "click", disclosuresMine.click, "WAF");
	WAF.addListener("disclosuresNew", "click", disclosuresNew.click, "WAF");
	WAF.addListener("disclosuresAll", "click", disclosuresAll.click, "WAF");
	WAF.addListener("checkbox2", "click", checkbox2.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock

function disclosureFilter(){
	
}
