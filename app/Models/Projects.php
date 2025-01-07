<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Projects extends Model
{
    use HasFactory;

    // 指定資料表名稱
    protected $table = 'projects';

    // 指定可以批量賦值的欄位
    protected $fillable = [
        'uid',
        'name',
        'collection_id',
        'image',
        'completed_at',
        'category',
    ];

    // 定義與 UserInfo 模型的關聯
    public function UserInfo()
    {
        return $this->belongsTo(UserInfo::class, 'uid');
    }
}
