<?php
/*
 * Localization file for ident_switch plugin
 */
$labels = array();

// Plugin ident_switch
$labels['form.common.caption'] = 'Plugin ident_switch';

// Enabled
$labels['form.common.enabled'] = 'Activer';

// Label
$labels['form.common.label'] = 'Nom à afficher';

// Value in \'Label\' field is too long (32 chars max).
$labels['err.label.long'] = 'La valeur du champ \'Nom à afficher\' est trop longue (32 caractères max).';


// IMAP
$labels['form.imap.caption'] = 'IMAP';

// Server host name
$labels['form.imap.host'] = 'Serveur';

// Secure connection (TLS)
$labels['form.imap.tls'] = 'Connexion sécurisée (TLS)';

// Port
$labels['form.imap.port'] = 'Port';

// Username
$labels['form.imap.username'] = 'Nom d\'utilisateur';

// Password
$labels['form.imap.password'] = 'Mot de passe';

// Value in \'Username\' field of IMAP section is too long (64 chars max).
$labels['err.user.long'] = 'La valeur du champ \'Nom d\'utilisateur\' de la section IMAP est trop longue (64 caractères max).';


// SMTP
$labels['form.smtp.caption'] = 'SMTP';

// Server host name
$labels['form.smtp.host'] = 'Serveur';

// Secure connection (TLS)
$labels['form.smtp.tls'] = 'Connexion sécurisée (TLS)';

// Port
$labels['form.smtp.port'] = 'Port';

// Authorization required
$labels['form.smtp.auth'] = 'Autorisation requise';


// Errors

// Value in \'Server host name\' field is too long (64 chars max).
$labels['err.host.long'] = 'La valeur du champ \'Serveur\' est trop longue (64 caractères max).';

// Value in \'Port\' field must be a number.
$labels['err.port.num'] = 'La valeur du champ \'Port\' doit être un nombre.';

// Value in \'Port\' field must be between 1 and 65535.
$labels['err.port.range'] = 'La valeur du champ \'Port\' doit être comprise entre 1 et 65535.';
