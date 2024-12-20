sap.ui.define([
], function(
) {
	"use strict";

	return{
		createProject: function(oBingdingContext){
			const isProgramGenerated = oBingdingContext.getObject().isProgramGenerated
			return isProgramGenerated === 0;
		},

		//{= !${ui>/isEditable} && ${isProgramGenerated} === 1}
		generateProgram: function(oBingdingContext){
			const isEditable = this.getModel("ui").getData().isEditable;
			const isProgramGenerated = oBingdingContext.getObject().isProgramGenerated
			return !isEditable && isProgramGenerated === 1;
		},

		//{= !${isPCLGenerated} && !${ui>/isEditable}}
		generatePCL: function(oBingdingContext){
			const isEditable = this.getModel("ui").getData().isEditable;
			const isPCLGenerated = oBingdingContext.getObject().isPCLGenerated;
			return !isEditable && !isPCLGenerated;
		},
	};
});