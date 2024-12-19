<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publish extends Model
{
    use HasFactory;

    protected $table = 'publish';

    protected $fillable = [
        'title',
        'contact_name',
        'completion_time',
        'budget',
        'location',
        'phone',
        'email',
        'details',
        'require_code',
        'updated_at',
    ];

    protected $hidden = [
        'created_at',
    ];
}
