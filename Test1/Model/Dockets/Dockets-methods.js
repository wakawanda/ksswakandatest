﻿model.Dockets.collectionMethods.testColl = function() {	// Add your code here;};model.Dockets.entityMethods.testColl2 = function() {	// Add your code here;};model.Dockets.collectionMethods.orInventors = function(findStr) {	//var currentCol = this;	//var c2Related = ds.Dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1', '*' + findStr + '*');	///var c3 = currentCol.or(c2Related);	//return c3;	var findDocketStr = findStr.substring(0,2) + '-' + findStr.substring(2);		//if($$('docketsRadioGroup').getValue() == 'equals'){			//var c1 = ds.Dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.FirstName == :1 or ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1 or Title = :1 or Abstract = :1 or Docket_Comments = :1 or DocketNumber = :1 or DocketNumber = :2', findStr, findDocketStr);		//}else if($$('docketsRadioGroup').getValue() == 'contains'){			//var c1 = ds.Dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.FirstName == :1 or ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1 or Title == :1 or Abstract == :1 or Docket_Comments == :1 or DocketNumber == :1 or DocketNumber == :2', '*' + findStr +'*', '*' + findDocketStr +'*');		//}else if($$('docketsRadioGroup').getValue() == 'beginswith'){			var c1 = ds.Dockets.query('ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.FirstName == :1 or ID_5_DocketsID_d.Inventor_PeopleID_n_6_ID.LastName == :1 or Title == :1 or Abstract == :1 or Docket_Comments == :1 or DocketNumber == :1 or DocketNumber == :2', findStr +'*', findDocketStr +'*');		//}				return c1;};model.Dockets.collectionMethods.orInventors.scope = "public";model.Dockets.collectionMethods.createGroup = function() {	// Add your code here;};model.Dockets.collectionMethods.createGroup.scope = "public";