// Copyright (c) 2022, Muhamad Jafar Sidik and contributors
// For license information, please see license.txt

frappe.ui.form.on('Hasil Lab Pramita', {
	// refresh: function(frm) {

	// }
	setup:function(frm){
		
		frm.set_query('lokasi_layanan', function(){
			return {
				filters: {
				   regional: frm.doc.regional,
				}
			}
		})
		
	},
});
