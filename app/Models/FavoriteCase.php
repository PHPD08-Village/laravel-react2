<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FavoriteCase extends Model
{
    protected $table = 'favorite_case';  // 指定資料表名稱
    protected $fillable = ['user_id', 'pid', 'created_at'];

    // 關聯到使用者表
    public function user()
    {
        return $this->belongsTo(UserInfo::class);
    }

    // 關聯到案件表
    public function publish()
    {
        return $this->belongsTo(Publish::class, 'pid', 'pid','click_count');
    }
}
