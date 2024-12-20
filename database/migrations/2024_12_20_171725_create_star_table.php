<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up()
    {
        Schema::create('star', function (Blueprint $table) {
            $table->id('rid'); // bigint(20) UNSIGNED AUTO_INCREMENT 
            $table->unsignedInteger('uid')->nullable();; // int(11) UNSIGNED 
            $table->decimal('averating', 2, 1); // decimal(2,1) 
            $table->unsignedInteger('count'); // int(10) UNSIGNED 
            $table->timestamps();  // created_at、updated_at
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};