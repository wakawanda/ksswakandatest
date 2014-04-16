
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'disclosures';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var disclosuresDataGrid = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	$$(getHtmlId('disclosuresDataGrid')).onRowDraw = function disclosuresDataGrid_onRowDraw (event)// @startlock
	{// @endlock
		alert('ok');
		
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
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_disclosuresDataGrid", "onRowDraw", disclosuresDataGrid.onRowDraw, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
