/*
 * This is part of identity_imap plugin
 */

$(function() {
	var $truName = $('.topright .username');
	if ($truName.size() > 0) {
		$sw = $('#plugin-ident_switch-account');
		if ($sw.size() > 0) {
			$sw.prependTo('.topright');
			$truName.hide();
			$('#plugin-ident_switch-account').show();
			console.log("Doing replace.");
		}
	}

	$("INPUT[name='_ident_switch.form.enabled']").change();
	$("SELECT[name='_ident_switch.form.secure']").change();

	plugin_switchIdent_processPreconfig();
});

function plugin_switchIdent_processPreconfig() {
	var disFld = $("INPUT[name='_ident_switch.form.readonly']");
	disFld.parentsUntil("TABLE", "TR").hide();

	var disVal = disFld.val();
	if (disVal > 0) {
		$("INPUT[name='_ident_switch.form.host']").prop("disabled", true);
		$("SELECT[name='_ident_switch.form.secure']").prop("disabled", true);
		$("INPUT[name='_ident_switch.form.port']").prop("disabled", true);
	}
	if (2 == disVal) {
		$("INPUT[name='_ident_switch.form.username']").prop("disabled", true);
	}

}

function plugin_switchIdent_enabled_onChange(e) {
	var $enFld = $("INPUT[name='_ident_switch.form.enabled']");
	$("INPUT[name!='_ident_switch.form.enabled'], SELECT", $enFld.parents("FIELDSET")).prop("disabled", !$enFld.is(":checked"));
	plugin_switchIdent_processPreconfig();
}

function plugin_switchIdent_secure_onChange(e) {
	var $secSel = $("SELECT[name='_ident_switch.form.secure']");
	var $portFld = $("INPUT[name='_ident_switch.form.port']");

	if ('SSL' === $secSel.val().toUpperCase())
		$portFld.attr("placeholder", 993);
	else
		$portFld.attr("placeholder", 143);
}

function plugin_switchIdent_switch(val) {
	console.log(rcmail.env.mailbox);
	rcmail.http_post('plugin.ident_switch.switch', { '_ident-id': val, '_mbox': rcmail.env.mailbox });
}

function  plugin_switchIdent_fixIdent(iid) {
	if (parseInt(iid) > 0)
		$("#_from").val(iid);
}
