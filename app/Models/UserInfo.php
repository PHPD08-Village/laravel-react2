<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    // 設置模型對應的資料表名稱
    protected $table = 'userinfo';

    // 可以批量賦值的屬性，確保這些字段對應資料表中的欄位
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

    // 屬性轉換，確保在進行 Eloquent 查詢時，自動將屬性值轉換為指定的數據類型
    protected $casts = [
        'phone_verified' => 'boolean',
        'email_verified' => 'boolean',
        'job_status' => 'boolean',
        'rating' => 'integer',
    ];
}
