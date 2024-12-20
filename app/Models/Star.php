<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    use HasFactory;

    protected $table = 'star';

    protected $fillable = [
        'rid',
        'uid',
        'averating',
        'count',
    ];

    public $timestamps = true; // 確保時間戳記自動管理
}
