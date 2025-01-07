<?php
// app/Helpers/EmailHelper.php

namespace App\Helpers;

use Illuminate\Support\Facades\Mail;

class EmailHelper
{
    public static function sendEmail($to, $subject, $body, $mailer = 'smtp')
    {
        $config = config("mail.mailers.{$mailer}");
        config([
            'mail.mailers.smtp.host' => $config['host'],
            'mail.mailers.smtp.port' => $config['port'],
            'mail.mailers.smtp.encryption' => $config['encryption'],
            'mail.mailers.smtp.username' => $config['username'],
            'mail.mailers.smtp.password' => $config['password'],
            'mail.from.address' => env("MAIL_FROM_ADDRESS_" . strtoupper($mailer)),
            'mail.from.name' => env("MAIL_FROM_NAME_" . strtoupper($mailer)),
        ]);

        Mail::raw($body, function ($message) use ($to, $subject) {
            $message->to($to)->subject($subject);
        });
    }
}
