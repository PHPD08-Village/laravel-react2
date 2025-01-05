<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->unsignedBigInteger('uid'); // 使用者 ID
            $table->unsignedBigInteger('proid'); // 使用自訂名稱作為主鍵
            $table->primary('proid'); // 設定主鍵為 'proid'
            $table->string('name'); // 作品名稱
            $table->string('image'); // 作品圖片 URL
            $table->date('completed_at'); // 完成日期
            $table->string('category'); // 作品分類
            $table->timestamps(); // created_at 和 updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}

