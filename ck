[33mcommit 1ac9c1f826654f5327155b73c4ce8096e035dbb6[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmaster[m[33m, [m[1;31mlaravel-react2/master[m[33m)[m
Author: simon-ke <a40515041@gmail.com>
Date:   Sun Dec 22 17:57:23 2024 +0800

    12/22 18

M	app/Http/Controllers/UserInfoController.php
A	database/migrations/2024_12_22_172616_update_userinfo_table.php
M	resources/js/pageslab/Testfree.jsx
M	routes/api.php
M	routes/web.php

[33mcommit 64220b41d80dedbd7aa2c22b799fccbbdf175299[m
Author: simon-ke <a40515041@gmail.com>
Date:   Sat Dec 21 12:46:46 2024 +0800

    12/21 12:46

M	app/Http/Controllers/StarController.php
M	app/Models/Star.php

[33mcommit 523abd92ab4d71972da2860b0186f92705276fc9[m
Author: simon-ke <a40515041@gmail.com>
Date:   Sat Dec 21 02:33:13 2024 +0800

    12/21 02:33更新

D	.env copy
A	app/Events/MessageSent.php
A	app/Http/Controllers/MessageController.php
A	app/Http/Controllers/StarController.php
A	app/Http/Controllers/UserInfoController.php
M	app/Http/Kernel.php
A	app/Http/Middleware/IgnoreCsrfToken.php
A	app/Http/Middleware/VerifyCsrfToken.php
A	app/Models/Message.php
A	app/Models/Star.php
A	app/Models/UserInfo.php
M	composer.json
M	composer.lock
A	config/broadcasting.php
M	config/storage/logs/laravel.log
A	database/migrations/2024_12_20_144704_create_messages_table.php
A	database/migrations/2024_12_20_171725_create_star_table.php
M	package-lock.json
M	package.json
M	public/.htaccess
A	resources/js/components/star_systetm/SSystem.jsx
M	resources/js/components/star_systetm/StarSystem.jsx
A	resources/js/pageslab/TestPostForm.jsx
A	resources/js/pageslab/TestPusher.jsx
A	resources/js/pageslab/TestSystem.jsx
A	resources/js/pageslab/Testuser.jsx
M	resources/js/router/Index.jsx
A	routes/api.php
M	routes/web.php

[33mcommit f65251a83954a7285d1ea262626adb2c9564c4b9[m
Author: simon-ke <a40515041@gmail.com>
Date:   Thu Dec 19 23:41:48 2024 +0800

    第二版

A	.editorconfig
A	.env copy
A	.env.example
A	.gitattributes
A	.gitignore
A	app/Http/Controllers/Controller.php
A	app/Http/Controllers/DataController.php
A	app/Http/Controllers/PublishController.php
A	app/Http/Kernel.php
A	app/Http/Middleware/Cors.php
A	app/Models/Data.php
A	app/Models/Publish.php
A	app/Models/User.php
A	app/Providers/AppServiceProvider.php
A	artisan
A	bootstrap/app.php
A	bootstrap/cache/.gitignore
A	bootstrap/providers.php
A	composer.json
A	composer.lock
A	config/app.php
A	config/auth.php
A	config/cache.php
A	config/database.php
A	config/filesystems.php
A	config/logging.php
A	config/mail.php
A	config/queue.php
A	config/services.php
A	config/session.php
A	config/storage/logs/laravel.log
A	database/.gitignore
A	database/factories/UserFactory.php
A	database/migrations/0001_01_01_000000_create_users_table.php
A	database/migrations/0001_01_01_000001_create_cache_table.php
A	database/migrations/0001_01_01_000002_create_jobs_table.php
A	database/migrations/2024_12_16_034727_create_data_table.php
A	database/migrations/2024_12_17_113033_create_publish_table.php
A	database/migrations/2024_12_18_233608_update_publish_table.php
A	database/migrations/2024_12_19_195450_create_userinfo_table.php
A	database/seeders/DatabaseSeeder.php
A	package-lock.json
A	package.json
A	phpunit.xml
A	postcss.config.js
A	public/.htaccess
A	public/favicon.ico
A	public/img/Alarm.png
A	public/img/Chat Bubble.png
A	public/img/Chat Message.png
A	public/img/Facebook.png
A	public/img/Fire.png
A	public/img/Green Circle.png
A	public/img/Icon.png
A	public/img/Icon/Alarm.png
A	public/img/Icon/Apple Logo.png
A	public/img/Icon/Chat Message.png
A	public/img/Icon/Crown.png
A	public/img/Icon/Download (R).png
A	public/img/Icon/Download(L).png
A	public/img/Icon/Facebook Circled.png
A	public/img/Icon/Facebook-2.png
A	public/img/Icon/Facebook.png
A	public/img/Icon/Fire.png
A	public/img/Icon/Forward.png
A	public/img/Icon/Google.png
A	public/img/Icon/Green Circle.png
A	public/img/Icon/Green_Circle.png
A	public/img/Icon/Icon (R).png
A	public/img/Icon/Icon(L).png
A	public/img/Icon/Instagram-2.png
A	public/img/Icon/Instagram.png
A	public/img/Icon/LINE (G).png
A	public/img/Icon/LINE.png
A	public/img/Icon/LOGO-M.png
A	public/img/Icon/LOGO.png
A	public/img/Icon/Location.png
A	public/img/Icon/Male User.png
A	public/img/Icon/Multiply.png
A	public/img/Icon/New.png
A	public/img/Icon/Search.png
A	public/img/Icon/Star 5.png
A	public/img/Icon/Start.png
A	public/img/Icon/TOP.png
A	public/img/Icon/Tick Box.png
A	public/img/Icon/Time.png
A	public/img/Icon/Upward Arrow.png
A	public/img/Icon/Us Dollar Circled.png
A	public/img/Icon/X.png
A	public/img/Icon/Xbox Menu.png
A	public/img/Icon/line-2.png
A	"public/img/Icon/\345\267\262\346\224\266\350\227\217.png"
A	"public/img/Icon/\346\234\252\346\224\266\350\227\217.png"
A	public/img/Instagram.png
A	public/img/LINE.png
A	public/img/LOGO.png
A	public/img/MAN 1.png
A	public/img/New.png
A	public/img/PL_Icon/C Programming.png
A	public/img/PL_Icon/C Sharp Logo.png
A	public/img/PL_Icon/C++.png
A	public/img/PL_Icon/CSS3.png
A	public/img/PL_Icon/Git.png
A	public/img/PL_Icon/GitHub (W).png
A	public/img/PL_Icon/GitHub.png
A	public/img/PL_Icon/Html 5.png
A	public/img/PL_Icon/JQuery (W).png
A	public/img/PL_Icon/JQuery.png
A	public/img/PL_Icon/Java.png
A	public/img/PL_Icon/JavaScript Logo (Y).png
A	public/img/PL_Icon/JavaScript Logo.png
A	public/img/PL_Icon/Laravel.png
A	public/img/PL_Icon/My Sql.png
A	public/img/PL_Icon/Node Js.png
A	public/img/PL_Icon/PHP Logo.png
A	public/img/PL_Icon/Python.png
A	public/img/PL_Icon/React.png
A	public/img/PL_Icon/Rest API (Q).png
A	public/img/PL_Icon/Rest API.png
A	public/img/PL_Icon/SQL.png
A	public/img/Person/083ab285feae1959eacd9c804923b293.jpg
A	public/img/Person/0d7f27078b090192bb6167582e1d3815.jpg
A	public/img/Person/BOSS 1.png
A	public/img/Person/BOSS.png
A	public/img/Person/Worker.png
A	public/img/Person/f0af053eccfbe3fc956663721b368124.jpg
A	public/img/Red Circle.png
A	public/img/Red.png
A	public/img/Redcircle.png
A	public/img/Search.png
A	public/img/Star 5.png
A	public/img/Tick Box.png
A	public/img/call.png
A	public/img/company1.png
A	public/img/company2.png
A	public/img/company3.png
A	public/img/company4.png
A	public/img/company5.png
A	public/img/hanber.png
A	public/img/hot.png
A	public/img/left.png
A	public/img/leftnext.png
A	public/img/price.png
A	public/img/right.png
A	public/img/rightnext.png
A	public/img/star_system/star-fill.svg
A	public/img/star_system/star-half.svg
A	public/img/star_system/star.svg
A	public/img/toparrow.png
A	public/imgs/Star 4.png
A	public/imgs/VALTWArcane06.jpg
A	public/imgs/VALTWArcane07.jpg
A	public/imgs/VALTWArcane23.jpg
A	public/imgs/bell.png
A	public/imgs/bird.png
A	public/imgs/checked.png
A	public/imgs/eyes.png
A	public/imgs/file.png
A	public/imgs/jinx_face.png
A	public/imgs/laptop-outline.png
A	public/imgs/man.png
A	public/imgs/message.png
A	public/index.php
A	public/robots.txt
A	resources/Jquery/apptextfunction.js
A	resources/Jquery/page1function.js
A	resources/Jquery/page2function.js
A	resources/css/app.css
A	resources/css/detail.css
A	resources/css/extract.css
A	resources/css/freelancer.css
A	resources/css/home_page.css
A	resources/css/owner.css
A	resources/css/personalinfo.css
A	resources/css/publish.css
A	resources/css/star_system.css
A	resources/css/tast.css
A	resources/js/JS or jQuery/publish.js
A	resources/js/JS or jQuery/test.js
A	resources/js/app.jsx
A	resources/js/bootstrap.js
A	resources/js/components/App.jsx
A	resources/js/components/ErrorBoundary.jsx
A	resources/js/components/Footer.jsx
A	resources/js/components/Header.jsx
A	resources/js/components/detail/Container.jsx
A	resources/js/components/detail/Maincontainer.jsx
A	resources/js/components/detail/Space.jsx
A	resources/js/components/freelancer/Container.jsx
A	resources/js/components/freelancer/Maincontainer.jsx
A	resources/js/components/freelancer/Options.jsx
A	resources/js/components/freelancer/Space.jsx
A	resources/js/components/home_page/Banner.jsx
A	resources/js/components/home_page/Container.jsx
A	resources/js/components/home_page/Home.jsx
A	resources/js/components/home_page/Space.jsx
A	resources/js/components/owner/Container.jsx
A	resources/js/components/owner/Maincontainer.jsx
A	resources/js/components/owner/Options.jsx
A	resour