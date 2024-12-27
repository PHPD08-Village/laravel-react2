 <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePublishTable extends Migration
{
    public function up(): void
    {
        Schema::table('publish', function (Blueprint $table) {
            $table->string('title')->after('uid'); // 添加新欄位 title
            $table->string('contact_name')->after('title'); // 添加新欄位 contact_name
            $table->timestamp('completion_time')->after('contact_name'); // 添加完成時間欄位
            $table->decimal('budget', 10, 2)->after('completion_time'); // 添加預算欄位
            $table->string('location')->after('budget'); // 添加地點欄位
            $table->string('phone')->after('location'); // 添加新欄位 phone
            $table->string('email')->after('phone'); // 添加新欄位 email
            $table->text('details')->after('email'); // 添加新欄位 details
            $table->string('require_code')->nullable()->after('details'); // 添加新欄位 require_code
            $table->dropColumn('project_name'); // 刪除 project_name 欄位
            $table->dropColumn('description'); // 刪除 description 欄位
        });
    }

    public function down(): void
    {
        Schema::table('publish', function (Blueprint $table) {
            $table->dropColumn(['title', 'contact_name', 'completion_time', 'budget', 'location', 'phone', 'email', 'details', 'require_code']); // 回滾時刪除新增欄位
            $table->text('description')->after('location'); // 回滾時恢復刪除的欄位
            $table->string('project_name')->after('id'); // 回滾時恢復刪除的欄位
        });
    }
}
