<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// 資料庫模型，用於與資料庫進行交互
class Data extends Model
{
    use HasFactory;

    protected $fillable = ['data'];
}
