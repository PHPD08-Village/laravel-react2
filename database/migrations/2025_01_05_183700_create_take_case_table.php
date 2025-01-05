<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTakeCaseTable extends Migration
{
    public function up()
    {
        Schema::create('take_case', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('uid');
            $table->unsignedBigInteger('pid');
            $table->timestamps();

            // 添加外鍵約束
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('uid')->references('uid')->on('userinfo')->onDelete('cascade');
            $table->foreign('pid')->references('pid')->on('publish')->onDelete('cascade');

            // 添加關聯
            // user_id 與 users 表 id
            // pid 與 publish 表 pid
            // uid 與 userinfo 表 uid
        });
    }

    public function down()
    {
        Schema::dropIfExists('take_case');
    }
}
