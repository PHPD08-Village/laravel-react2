<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('publish', function (Blueprint $table) {
            $table->enum('status', ['pending', 'active', 'cancelled', 'completed'])
            ->default('pending')
            ->after('details'); // 新增 status 欄位
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('publish', function (Blueprint $table) {
            $table->dropColumn('status'); // 回滾時移除 status 欄位
        });
    }
};
