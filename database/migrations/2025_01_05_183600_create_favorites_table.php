<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoritesTable extends Migration
{
    public function up()
    {
        Schema::create('favorites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pid');
            $table->unsignedBigInteger('uid');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            // 添加外鍵約束
            $table->foreign('pid')->references('pid')->on('publish')->onDelete('cascade');
            $table->foreign('uid')->references('uid')->on('userinfo')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('favorites');
    }
}
