if(window.Cbn===undefined){
	window.Cbn = {};
}
if(window.Cbn.columns===undefined){
	Cbn.columns = {};
}
Cbn.columns.formular={
	properties:{
		columnsFormulare: {
			type: Array,
			value: [
				{
					type: 'selection-index',
					caption: '',
					"xls": false,
					"style": "width:20px"
				},
				{
					name: 'name',
					renderAs: 'text',
					caption: 'Kind',
					"xls": "string"
				},
				{
					name: 'buttons',
					type: 'inert',
					renderAs: 'template',
					headStyle: "width: 30px;min-width: 30px;",
					caption: '',
					template: '.buttons',
					"xls": false
				}
			]
		}
	}	
};
