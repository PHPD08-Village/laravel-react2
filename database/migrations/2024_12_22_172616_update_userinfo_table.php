<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class UpdateUserinfoTable extends Migration
{
    public function up(): void
    {
        // 移除舊的約束條件
        DB::statement('ALTER TABLE userinfo DROP CONSTRAINT IF EXISTS chk_rating');

        // 更新欄位並添加新的約束條件
        Schema::table('userinfo', function (Blueprint $table) {
            $table->tinyInteger('rating')->unsigned()->nullable()->default(null)->change();
        });

        DB::statement('ALTER TABLE userinfo ADD CONSTRAINT chk_rating CHECK (rating IS NULL OR (rating >= 1 AND rating <= 5))');
    }

    public function down(): void
    {
        // 移除新的約束條件
        DB::statement('ALTER TABLE userinfo DROP CONSTRAINT chk_rating');

        // 回滾欄位和約束條件
        Schema::table('userinfo', function (Blueprint $table) {
            $table->tinyInteger('rating')->unsigned()->default(0)->change();
        });

        DB::statement('ALTER TABLE userinfo ADD CONSTRAINT chk_rating CHECK (rating >= 1 AND rating <= 5)');
    }
}
