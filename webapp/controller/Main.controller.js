sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("san.Project1.controller.Main", {
		onInit: function () {

		},
		
		onPressMain: function(){
			
			sap.ui.core.UIComponent.getRouterFor(this).navTo("material");
		}
	});
});