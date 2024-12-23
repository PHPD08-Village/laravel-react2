<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStarTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('star', function (Blueprint $table) {
            $table->bigIncrements('sid'); // 自動遞增的sid (bigint(20) UNSIGNED、primary key)
            $table->unsignedBigInteger('uid')->nullable(); // 外鍵為 uid 
            $table->decimal('averating', 6, 5)->default(1.00000);
            $table->unsignedInteger('count'); // int(10) UNSIGNED 
            $table->timestamps();  // created_at、updated_at

            // 添加外鍵約束，關聯到 userinfo 表的 uid 欄位 
            $table->foreign('uid')->references('uid')->on('userinfo')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // 先移除正確名稱的外鍵約束
        Schema::table('star', function (Blueprint $table) {
            $table->dropForeign(['uid']); // 使用正確的名稱
        });
    
        // 然後刪除資料表
        Schema::dropIfExists('star');
    }
    
}
