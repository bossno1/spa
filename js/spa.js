/*jslint  brower: true, continue : true,
devel : true, indent : 2, maxerr : 50,
newap : true, nomen : true, plusplus : true,
regex;p : true, sloppy : true, vars : false, 
white : true
*/
/*blobal $, spa */

var spa = (function (){
    var initModule = function ($container) {
        $container.html(
            '<h1 style="display:inline-block; margin:25px;">'
            + 'hello world!'
            + '</h1>'
        )
    };

    return { initModule: initModule};
}());