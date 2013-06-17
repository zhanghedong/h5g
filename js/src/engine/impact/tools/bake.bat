@echo off

:: Path to impact.js and your game's main .js
SET IMPACT_LIBRARY=engine/impact/impact/impact.js
SET GAME=engine/impact/game/main.js

:: Output file
SET OUTPUT_FILE=game/game.min.js


:: Change CWD to Impact's base dir
cd ../


:: Bake!
::php tools/bake.php %IMPACT_LIBRARY% %GAME% %OUTPUT_FILE%

d:/xampp/php/php  tools/bake.php %IMPACT_LIBRARY% %GAME% %OUTPUT_FILE%

:: If you dont have the php.exe in your PATH uncomment the
:: following line and point it to your php.exe

::c:/php/php.exe tools/bake.php %IMPACT_LIBRARY% %GAME% %OUTPUT_FILE%

pause