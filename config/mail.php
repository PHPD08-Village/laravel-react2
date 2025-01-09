<?php

return [

    'default' => env('MAIL_MAILER', 'smtp'),

    'mailers' => [

        'gmail' => [
            'transport' => 'smtp',
            'host' => env('MAIL_HOST_GMAIL', 'smtp.gmail.com'),
            'port' => env('MAIL_PORT_GMAIL', 587),
            'encryption' => env('MAIL_ENCRYPTION_GMAIL', 'tls'),
            'username' => env('MAIL_USERNAME_GMAIL'),
            'password' => env('MAIL_PASSWORD_GMAIL'),
            'timeout' => null,
        ],

        'yahoo' => [
            'transport' => 'smtp',
            'host' => env('MAIL_HOST_YAHOO', 'smtp.mail.yahoo.com'),
            'port' => env('MAIL_PORT_YAHOO', 587),
            'encryption' => env('MAIL_ENCRYPTION_YAHOO', 'tls'),
            'username' => env('MAIL_USERNAME_YAHOO'),
            'password' => env('MAIL_PASSWORD_YAHOO'),
            'timeout' => null,
        ],

        'smtp' => [
            'transport' => 'smtp',
            'host' => env('MAIL_HOST', '127.0.0.1'),
            'port' => env('MAIL_PORT', 2525),
            'encryption' => env('MAIL_ENCRYPTION', 'tls'),
            'username' => env('MAIL_USERNAME'),
            'password' => env('MAIL_PASSWORD'),
            'timeout' => null,
            'local_domain' => env('MAIL_EHLO_DOMAIN', parse_url(env('APP_URL', 'http://localhost'), PHP_URL_HOST)),
        ],

        'ses' => [
            'transport' => 'ses',
        ],

        'postmark' => [
            'transport' => 'postmark',
        ],

        'resend' => [
            'transport' => 'resend',
        ],

        'sendmail' => [
            'transport' => 'sendmail',
            'path' => env('MAIL_SENDMAIL_PATH', '/usr/sbin/sendmail -bs -i'),
        ],

        'log' => [
            'transport' => 'log',
            'channel' => env('MAIL_LOG_CHANNEL'),
        ],

        'array' => [
            'transport' => 'array',
        ],

        'failover' => [
            'transport' => 'failover',
            'mailers' => [
                'smtp',
                'log',
            ],
        ],

        'roundrobin' => [
            'transport' => 'roundrobin',
            'mailers' => [
                'ses',
                'postmark',
            ],
        ],

    ],

    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
        'name' => env('MAIL_FROM_NAME', 'Example'),
    ],

];

