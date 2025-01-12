<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'userinfo';
    protected $primaryKey = 'uid';

    protected $fillable = [
        'headshot',
        'profile_back_img',
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

    public function publishes()
    {
        return $this->hasMany(Publish::class, 'uid', 'uid');
    }
    
    public function star()
    {
        return $this->hasOne(Star::class, 'uid', 'uid');
    }
    public function projects()
    {
        return $this->hasMany(Projects::class, 'uid');
    }
    // 關聯到收藏的案件
    public function savedcase()
    {
        return $this->hasMany(FavoriteCase::class, 'uid', 'uid');
    }
    // 關聯到收藏的使用者
    public function saveduser()
    {
        return $this->hasMany(FavoriteFreelancer::class, 'user_id', 'uid');
    }
}
