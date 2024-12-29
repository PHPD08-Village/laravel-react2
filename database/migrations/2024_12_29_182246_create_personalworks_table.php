<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalworksTable extends Migration
{
  /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personalworks', function (Blueprint $table) {
            $table->bigIncrements('wid'); // 自動遞增的wid
            $table->string('work_title');  // 作品名稱
            $table->binary('work_image');  // 作品圖片
            $table->date('completion_date');  // 完成日期
            $table->string('work_category');  // 作品類別
            $table->timestamps();  // created_at 和 updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('personalworks');
    }
};
