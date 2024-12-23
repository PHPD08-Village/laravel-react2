<?php

use Illuminate\Database\Migrations\Migration; 
use Illuminate\Database\Schema\Blueprint; 
use Illuminate\Support\Facades\Schema; 

class CreatePublishTable extends Migration
{
    /**
     * Run the migrations.
     */


    public function up(): void
    {
        Schema::create('publish', function (Blueprint $table) {
            $table->bigIncrements('pid'); // 自動遞增的pid (bigint(20) UNSIGNED、primary key)
            $table->unsignedBigInteger('uid'); // 添加外鍵欄位 uid
            $table->string('title'); // 添加新欄位 title
            $table->string('contact_name'); // 添加新欄位 contact_name
            $table->timestamp('completion_time'); // 添加完成時間欄位
            $table->decimal('budget', 10, 2); // 添加預算欄位
            $table->string('location'); // 添加地點欄位
            $table->string('phone'); // 添加新欄位 phone
            $table->string('email'); // 添加新欄位 email
            $table->text('details'); // 添加新欄位 details
            $table->string('require_code'); // 添加新欄位 require_code
            $table->timestamps(); // 創建 created_at 和 updated_at 兩個時間戳欄位，用於記錄資料的創建和更新時間 });
        
            // 添加外鍵約束，關聯到 userinfo 表的 uid 欄位 
            $table->foreign('uid')->references('uid')->on('userinfo')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */

    // 當你運行 php artisan migrate:rollback 時，刪除 publish 資料表
    public function down(): void
    {
        // 先移除外鍵約束 
        Schema::table('publish', function (Blueprint $table) { 
            $table->dropForeign(['uid']); 
        });

        // 然後刪除資料表
        Schema::dropIfExists('publish');
    }
};
