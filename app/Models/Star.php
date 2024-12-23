<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    use HasFactory;

    // protected $table 是 Laravel Eloquent 模型中的一個屬性，用來明確指定模型所對應的資料庫表
    // 如果你沒有在模型中指定 protected $table，Laravel 將會假設你的表名是模型名稱的複數形式。在你的情況下，Star 模型將會假設對應的是 stars 表
    protected $table = 'star'; // 明確指定表名為 'star'
    protected $primaryKey = 'rid'; // 指定主鍵欄位

    // 在 Laravel Eloquent 模型中，$fillable 屬性用來指定允許批量賦值（mass assignment）的欄位。批量賦值是一個將數組資料直接分配給模型屬性的過程。例如，當你從請求中獲取資料並將其賦值給模型時，只有在 $fillable 列表中的欄位才會被賦值。
    // 只有在 $fillable 屬性中指定的欄位（uid、averating、count）會被賦值，其他欄位會被忽略。這樣可以防止批量賦值漏洞（mass assignment vulnerability），確保僅授權的欄位被填充。
    protected $fillable = [
        // 'rid', // Laravel 會自動管理自動遞增的主鍵欄位，因此不需要將它包括在 protected $fillable 陣列中
        'uid',
        'averating',
        'count',
    ];

    // 每當新增或更新模型實例時，Laravel 會自動更新 created_at 和 updated_at 欄位
    public $timestamps = true; // 確保時間戳記自動管理
}
