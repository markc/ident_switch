<?php

/*
 * Preconfigured settings for different mail domains.
 * Appropriate set of values is searched by mapping domain of email (from identity) to array key.
 */
$rcmail_config['ident_switch.preconfig'] = array(

	# Domain part of email address
	'domain.tld' => array(

		# Hostname, use ssl:// or tls:// notation if needed, for no security use imap:// (must always start with scheme).
		# Required.
		'host' => 'imap://mail.domain.tld',

		# Login name, can be 'email' (full address from identity), 'mbox' (only mailbox part).
		# Any other value is threated ad 'not specified' (default).
		'user' => 'email',

		# Are specified settings locked in interface or not.
		# Default - false.
		'readonly' => true
	),

	'another.tld' => array(
		'host' => 'tls://mail.another.tld',
		'user' => 'mbox',
	),
);
