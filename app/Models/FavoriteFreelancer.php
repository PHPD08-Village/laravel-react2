<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FavoriteFreelancer extends Model
{
    protected $table = 'favorite_freelancer';  // 指定資料表名稱
    protected $fillable = ['user_id', 'taker_id', 'created_at'];

    // 關聯到使用者表
    public function user()
    {
        return $this->belongsTo(UserInfo::class, 'user_id');
    }

}
