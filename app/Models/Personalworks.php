<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Personalworks extends Model
{
    use HasFactory;

    protected $table = 'personalworks'; // 明確指定表名為 personalworks
    protected $primaryKey = 'wid'; // 指定主鍵欄位
    // 指定可以批量賦值的欄位
    protected $fillable = [
        'uid',
        'work_title',
        // 'work_image',
        'completion_date',
        'work_category'
    ];

    public function user()
    {
        return $this->belongsTo(UserInfo::class, 'uid', 'uid');
    }
}
