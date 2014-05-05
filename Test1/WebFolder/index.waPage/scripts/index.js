

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var clearGroup = {};	// @button
	var addToGroup = {};	// @button
	var removeGroup = {};	// @button
	var createGroup = {};	// @button
	var restTest = {};	// @button
	var loginBtn = {};	// @button
	var docketsGrid = {};	// @dataGrid
	var showDockets = {};	// @button
	var findByds = {};	// @button
	var findDockets = {};	// @button
	var documentEvent = {};	// @document
	var omitSubsetColl = {};	// @button
	var omitFromDisclosures = {};	// @button
	var addToDisclosures = {};	// @button
	var findInDisclosures = {};	// @button
	var findDisclosures = {};	// @button
	var disclosuresLiveSearch = {};	// @textField
	var showSubset = {};	// @button
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

	clearGroup.click = function clearGroup_click (event)// @startlock
	{// @endlock
		var newGroupName = $$('groupsNewName').getValue();//groupsName
		alert('newGroupName:' + newGroupName);
		var useGroupID = $$('groupsComboBox').getValue();//groupsComboBox
		alert('Group ID:' + useGroupID);
		var groupAction = $$('groupsTypeRadioGroup').getValue();//groupsRadioGroup...newGroup/useGroup
		alert('groupAction:' + groupAction);
		var publicGroup = '';//groupsPublic
		if($$('groupsPublic').getValue()){
			publicGroup = 'True';
		}else{
			publicGroup = 'False';
		}
		alert('publicGroup:' + publicGroup);
		
		var countRows = $$("docketsGrid").countSelected();
		alert('countRows:'+countRows);
		var countColl = $$("docketsGrid").source.length;
		alert('countColl:'+countColl);

		if(countRows != countColl){
			$$('docketsGrid').reduceToSelected(
		
    			{onSuccess: function(event)
       				{// ... handling of query
        				sources.dockets.rest_Dockets('Clear', useGroupID, newGroupName, publicGroup,
    						{onSuccess: function(event)
       							{sources.groups.query('FileID = 9');}});
       				 	}
    			});
		}else{
			sources.dockets.rest_Dockets('Create', useGroupID, newGroupName, publicGroup,
    			{onSuccess: function(event)
       			 {sources.groups.query('FileID = 9');}
    			});
		}
	};// @lock

	addToGroup.click = function addToGroup_click (event)// @startlock
	{// @endlock
		var newGroupName = $$('groupsNewName').getValue();//groupsName
		alert('newGroupName:' + newGroupName);
		var useGroupID = $$('groupsComboBox').getValue();//groupsComboBox
		alert('Group ID:' + useGroupID);
		var groupAction = $$('groupsTypeRadioGroup').getValue();//groupsRadioGroup...newGroup/useGroup
		alert('groupAction:' + groupAction);
		var publicGroup = '';//groupsPublic
		if($$('groupsPublic').getValue()){
			publicGroup = 'True';
		}else{
			publicGroup = 'False';
		}
		alert('publicGroup:' + publicGroup);
		
		var countRows = $$("docketsGrid").countSelected();
		alert('countRows:'+countRows);
		var countColl = $$("docketsGrid").source.length;
		alert('countColl:'+countColl);

		if(countRows != countColl){
			$$('docketsGrid').reduceToSelected(
		
    			{onSuccess: function(event)
       				{// ... handling of query
        				sources.dockets.rest_Dockets('Add', useGroupID, newGroupName, publicGroup,
    						{onSuccess: function(event)
       							{sources.groups.query('FileID = 9');}});
       				 	}
    			});
		}else{
			sources.dockets.rest_Dockets('Create', useGroupID, newGroupName, publicGroup,
    			{onSuccess: function(event)
       			 {sources.groups.query('FileID = 9');}
    			});
		}
	};// @lock

	removeGroup.click = function removeGroup_click (event)// @startlock
	{// @endlock
		//sources.groups.omitSelected( {onSuccess: function(evt) {sources.groups.removeGroup(evt.result);}}, $$("groupsGrid").getSelectedRows());
	sources.groups.removeGroup( {onSuccess: function() {sources.groups.query('FileID = 9');}}, $$("groupsGrid").getSelectedRows());

		
	};// @lock

	createGroup.click = function createGroup_click (event)// @startlock
	{// @endlock
		var newGroupName = $$('groupsNewName').getValue();//groupsName
		alert('newGroupName:' + newGroupName);
		var useGroupID = $$('groupsComboBox').getValue();//groupsComboBox
		alert('Group ID:' + useGroupID);
		var groupAction = $$('groupsTypeRadioGroup').getValue();//groupsRadioGroup...newGroup/useGroup
		alert('groupAction:' + groupAction);
		var publicGroup = '';//groupsPublic
		if($$('groupsPublic').getValue()){
			publicGroup = 'True';
		}else{
			publicGroup = 'False';
		}
		alert('publicGroup:' + publicGroup);
		
		var countRows = $$("docketsGrid").countSelected();
		alert('countRows:'+countRows);
		var countColl = $$("docketsGrid").source.length;
		alert('countColl:'+countColl);

		if(countRows != countColl){
			$$('docketsGrid').reduceToSelected(
		
    			{onSuccess: function(event)
       				{// ... handling of query
        				sources.dockets.rest_Dockets('Create', useGroupID, newGroupName, publicGroup,
    						{onSuccess: function(event)
       							{sources.groups.query('FileID = 9');}});
       				 	}
    			});
		}else{
			sources.dockets.rest_Dockets('Create', useGroupID, newGroupName, publicGroup,
    			{onSuccess: function(event)
       			 {sources.groups.query('FileID = 9');}
    			});
		}
	};// @lock

	restTest.click = function restTest_click (event)// @startlock
	{// @endlock
		sources.dockets.query('Title == *t*',
			{onSuccess:function(event){sources.dockets.rest_Dockets();
			}});
		
	};// @lock

	loginBtn.click = function loginBtn_click (event)// @startlock
	{// @endlock
		//alert($('#loginUser').val());
		var userName = $('#loginUser').val();
		var passWord = $('#loginPW').val();
		
		sources.web_Users.query('Username = :1',
    	{onSuccess: function(event)
        {// ... handling of query
        	var restResult = sources.web_Users.wak_Login(passWord);
			alert(restResult);
        }, params: [userName]// parameters of query
    	}
		);
		
	};// @lock

	docketsGrid.onRowClick = function docketsGrid_onRowClick (event)// @startlock
	{// @endlock
		//alert(sources.dockets.ID);
		//sources.notes_Xref.query('FileID = 9 and RecordID = :1',sources.dockets.ID)
	};// @lock

	showDockets.click = function showDockets_click (event)// @startlock
	{// @endlock
		$$('docketsGrid').reduceToSelected();
	};// @lock

	findByds.click = function findByds_click (event)// @startlock
	{// @endlock
		findStr = $$('dockstsFindStr').getValue();
		findDocketStr = findStr.substring(0,2) + '-' + findStr.substring(2);

		c1 = sources.dockets.orInventors(findStr);
		sources.dockets.setEntityCollection(c1);
	
	};// @lock

	findDockets.click = function findDockets_click (event)// @startlock
	{// @endlock
		findStr = $$('dockstsFindStr').getValue();
		findDocketStr = findStr.substring(0,2) + '-' + findStr.substring(2);
		
		if($$('docketsRadioGroup').getValue() == 'equals'){
			sources.dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.FirstName == :1 or ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1 or Title = :1 or Abstract = :1 or Docket_Comments = :1 or DocketNumber = :1 or DocketNumber = :2', findStr, findDocketStr);
		}else if($$('docketsRadioGroup').getValue() == 'contains'){
			sources.dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.FirstName == :1 or ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1 or Title == :1 or Abstract == :1 or Docket_Comments == :1 or DocketNumber == :1 or DocketNumber == :2', '*' + findStr +'*', '*' + findDocketStr +'*');
		}else if($$('docketsRadioGroup').getValue() == 'beginswith'){
			sources.dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.FirstName == :1 or ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1 or Title == :1 or Abstract == :1 or Docket_Comments == :1 or DocketNumber == :1 or DocketNumber == :2', findStr +'*', findDocketStr +'*');
		}
		
	    //c1 = sources.dockets.orInventors(findStr);
		//sources.dockets.setEntityCollection(c1);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	omitSubsetColl.click = function omitSubsetColl_click (event)// @startlock
	{// @endlock
		//alert('omitSubsetColl');
		//selRows = $$("disclosureGrid").getSelectedRows();
		//alert(selRows);
		
		//newColl = sources.disclosures.omitSelected($$("disclosureGrid").getSelectedRows());
		//sources.disclosures.setEntityCollection(newColl);
		
		sources.disclosures.omitSelected( {onSuccess: function(evt) {sources.disclosures.setEntityCollection(evt.result);}}, $$("disclosureGrid").getSelectedRows());
			
		//sources.disclosures.omitSelected( 
			//{onSuccess: function(evt) {sources.disclosures.setEntityCollection(evt.result);}, 
			// onError: function(event) {alert(event.error[0].message);}}, $$("disclosureGrid").getSelectedRows());
	};// @lock

	omitFromDisclosures.click = function omitFromDisclosures_click (event)// @startlock
	{// @endlock
		var findStr = $$('disclosuresNonLiveSearch').getValue();
		alert(findStr);
	    c1 = sources.disclosures.removeFromColl(findStr);
		sources.disclosures.setEntityCollection(c1);

	};// @lock

	addToDisclosures.click = function addToDisclosures_click (event)// @startlock
	{// @endlock

		alert('addToDisclosures');
		findStr = $$('disclosuresNonLiveSearch').getValue();
		alert(findStr);
	    c1 = source.disclosures.addToCollection(findStr);
		sources.disclosures.setEntityCollection(c1);
	};// @lock

	findInDisclosures.click = function findInDisclosures_click (event)// @startlock
	{// @endlock
		if($$('nonLiveRadioGroup').getValue() == 'equals'){
			sources.disclosures.filterQuery('Title = :1 or Abstract = :2', $$('disclosuresNonLiveSearch').getValue(),  $$('disclosuresNonLiveSearch').getValue());
		}else if($$('nonLiveRadioGroup').getValue() == 'contains'){
			sources.disclosures.filterQuery('Title == :1 or Abstract == :2', '*' + $$('disclosuresNonLiveSearch').getValue() +'*', '*' + $$('disclosuresNonLiveSearch').getValue() +'*');
			//sources.disclosures.query('Title == :1 or Abstract == :2', '*' + $$('disclosuresNonLiveSearch').getValue() +'*', '*' + $$('disclosuresNonLiveSearch').getValue() +'*')
		}else if($$('nonLiveRadioGroup').getValue() == 'beginswith'){
			sources.disclosures.filterQuery('Title == :1 or Abstract == :2', $$('disclosuresNonLiveSearch').getValue() +'*', $$('disclosuresNonLiveSearch').getValue() + '*');
		}
	};// @lock

	findDisclosures.click = function findDisclosures_click (event)// @startlock
	{// @endlock
		if($$('nonLiveRadioGroup').getValue() == 'equals'){
			sources.disclosures.query('Title = :1 or Abstract = :2', $$('disclosuresNonLiveSearch').getValue(),  $$('disclosuresNonLiveSearch').getValue());
		}else if($$('nonLiveRadioGroup').getValue() == 'contains'){
			sources.disclosures.query('Title == :1 or Abstract == :2', '*' + $$('disclosuresNonLiveSearch').getValue() +'*', '*' + $$('disclosuresNonLiveSearch').getValue() +'*');
			//sources.disclosures.query('Title == :1 or Abstract == :2', '*' + $$('disclosuresNonLiveSearch').getValue() +'*', '*' + $$('disclosuresNonLiveSearch').getValue() +'*')
		}else if($$('nonLiveRadioGroup').getValue() == 'beginswith'){
			sources.disclosures.query('Title == :1 or Abstract == :2', $$('disclosuresNonLiveSearch').getValue() + '*', $$('disclosuresNonLiveSearch').getValue() + '*');
		}
		// Add your code here
	};// @lock
	var waitP = 0;
	disclosuresLiveSearch.keyup = function disclosuresLiveSearch_keyup (event)// @startlock
	{// @endlock
		//alert('ok');
		clearTimeout(waitP);
		waitP = setTimeout(function (){
		sources.disclosures.query('Title == :1 or Abstract == :2', '*' + $$('disclosuresLiveSearch').getValue() +'*', '*' + $$('disclosuresLiveSearch').getValue() +'*');
		},1000)
	};// @lock

	showSubset.click = function showSubset_click (event)// @startlock
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
		//alert('ok');
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
	WAF.addListener("clearGroup", "click", clearGroup.click, "WAF");
	WAF.addListener("addToGroup", "click", addToGroup.click, "WAF");
	WAF.addListener("removeGroup", "click", removeGroup.click, "WAF");
	WAF.addListener("createGroup", "click", createGroup.click, "WAF");
	WAF.addListener("restTest", "click", restTest.click, "WAF");
	WAF.addListener("loginBtn", "click", loginBtn.click, "WAF");
	WAF.addListener("docketsGrid", "onRowClick", docketsGrid.onRowClick, "WAF");
	WAF.addListener("showDockets", "click", showDockets.click, "WAF");
	WAF.addListener("findByds", "click", findByds.click, "WAF");
	WAF.addListener("findDockets", "click", findDockets.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("omitSubsetColl", "click", omitSubsetColl.click, "WAF");
	WAF.addListener("omitFromDisclosures", "click", omitFromDisclosures.click, "WAF");
	WAF.addListener("addToDisclosures", "click", addToDisclosures.click, "WAF");
	WAF.addListener("findInDisclosures", "click", findInDisclosures.click, "WAF");
	WAF.addListener("findDisclosures", "click", findDisclosures.click, "WAF");
	WAF.addListener("disclosuresLiveSearch", "keyup", disclosuresLiveSearch.keyup, "WAF");
	WAF.addListener("showSubset", "click", showSubset.click, "WAF");
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
