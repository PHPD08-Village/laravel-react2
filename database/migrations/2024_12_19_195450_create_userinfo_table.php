<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userinfo', function (Blueprint $table) {
            $table->id();                                      // 自動遞增的ID
            $table->string('profile_picture')->nullable();     // 大頭照URL（可空）
            $table->string('username')->nullable();            // 使用者名稱（可空）
            $table->string('nickname')->nullable();            // 暱稱（可空）
            $table->string('company_name')->nullable();        // 企業名稱（可空）
            $table->string('job_title')->nullable();           // 接案身分（可空）
            $table->string('location')->nullable();            // 居住地（可空）
            $table->string('contact_phone')->nullable();       // 連絡電話（可空）
            $table->boolean('phone_verified')->default(false); // 電話認證狀態（true或false）
            $table->string('email')->unique();                 // 電子信箱
            $table->boolean('email_verified')->default(false); // 電子信箱驗證狀態（true或false）
            $table->string('line_id')->nullable();             // LINE ID（可空）
            $table->enum('login_status', ['online', 'offline'])->default('offline'); // 登入狀態（online或offline）
            $table->boolean('job_status')->default(false);     // 接案狀態（true或false）
            $table->tinyInteger('rating')->unsigned()->default(0)->check('rating >= 1 AND rating <= 5'); // 星數評價（1到5的評價等級）
            $table->string('preferred_location')->nullable();  // 理想接案地區（可空）
            $table->string('job_category')->nullable();        // 接案類別（可空）
            $table->text('accumulated_experience')->nullable();// 累積經驗（可空）
            $table->text('job_experience')->nullable();        // 接案經驗（可空）
            $table->timestamps();                             // 自動生成 created_at 和 updated_at 欄位
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('userinfo');
    }
}

