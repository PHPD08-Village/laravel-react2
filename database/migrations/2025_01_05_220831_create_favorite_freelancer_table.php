<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// 收藏接案者
class CreateFavoriteFreelancerTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('favorite_freelancer', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('uid'); // 接案者的用戶ID
            $table->unsignedBigInteger('user_id');     // 收藏者的用戶ID
            $table->timestamps();

            // 添加外鍵約束
            $table->foreign('uid')->references('uid')->on('userinfo')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_freelancer');
    }
};
