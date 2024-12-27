<?php
// 資料庫遷移（Migration）的代碼
// 遷移功能概述:
// 這個遷移文件用於創建和刪除名為 data 的資料表。
// 遷移是一種管理資料庫架構變更的工具，允許你定義和執行資料庫結構的變更。

// 整體流程




use Illuminate\Database\Migrations\Migration; // 遷移基類，用於創建和管理資料庫遷移
use Illuminate\Database\Schema\Blueprint; // 用於構建資料表結構
use Illuminate\Support\Facades\Schema; //提供了一組操作資料庫結構的方法

return new class extends Migration // 定義了一個匿名類，並立即返回這個類的實例
{
    /**
     * Run the migrations.
     */

    // 定義 up 方法：當你運行 php artisan migrate 時，創建 data 資料表
    public function up(): void
    {
        // 創建一個新的資料表 publish 
        Schema::create('publish', function (Blueprint $table) {
            $table->id(); // 創建一個自增的 id 欄位，作為主鍵 
            $table->string('project_name'); // 創建一個名為 project_name 的字串類型欄位，用於存儲案件名稱 
            $table->timestamp('completion_time'); // 創建一個名為 completion_time 的時間戳欄位，用於存儲案件完成時間 
            $table->decimal('budget', 8, 2); // 創建一個名為 budget 的數字類型欄位，用於存儲案件預算，最多8位數，2位小數 
            $table->string('location'); // 創建一個名為 location 的字串類型欄位，用於存儲地點（遠端或台北市） 
            $table->text('description'); // 創建一個名為 description 的文本類型欄位，用於存儲說明內容 
            $table->string('require_code'); // 創建一個名為 require_code 的字串類型欄位，用於存儲需求語言 
            $table->timestamps(); // 創建 created_at 和 updated_at 兩個時間戳欄位，用於記錄資料的創建和更新時間 });
        });
    }

    /**
     * Reverse the migrations.
     */

    //  定義 down 方法 回滾這次遷移：
    // 當你運行 php artisan migrate:rollback 時，刪除 publish 資料表
    public function down(): void
    {
        Schema::dropIfExists('publish');
    }
};