<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publish extends Model
{
    use HasFactory;

    protected $table = 'publish';
    protected $primaryKey = 'pid';

    protected $fillable = [
        'uid',
        'uid',
        'title',
        'contact_name',
        'completion_time',
        'budget',
        'location',
        'phone',
        'email',
        'details',
        'require_code',
        'click_count',
        'click_count',
        'updated_at',
        'status'
    ];

    protected $hidden = [
        'created_at',
    ];

    public function user()
    {
        return $this->belongsTo(UserInfo::class, 'uid', 'uid');
    }
    // 關聯到收藏的案件
    public function savedcase()
    {
        return $this->hasMany(FavoriteCase::class);
    }

}
