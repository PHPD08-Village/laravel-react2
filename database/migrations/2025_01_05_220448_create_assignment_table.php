<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// 委託
class CreateAssignmentTable extends Migration
{
    public function up()
    {
        Schema::create('assignment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('uid'); // 接案者的用戶ID
            $table->unsignedBigInteger('user_id');     // 委託者的用戶ID
            $table->timestamps();

            // 添加外鍵約束
            $table->foreign('uid')->references('uid')->on('userinfo')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('assignment');
    }
}
