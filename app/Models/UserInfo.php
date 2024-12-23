<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'userinfo';

    protected $fillable = [
        'profile_picture',
        'username',
        'nickname',
        'company_name',
        'job_title',
        'location',
        'contact_phone',
        'phone_verified',
        'email',
        'email_verified',
        'line_id',
        'login_status',
        'job_status',
        'rating',
        'preferred_location',
        'job_category',
        'accumulated_experience',
        'job_experience'
    ];

    protected $casts = [
        'phone_verified' => 'boolean',
        'email_verified' => 'boolean',
        'job_status' => 'boolean',
        'rating' => 'integer',
    ];
}
