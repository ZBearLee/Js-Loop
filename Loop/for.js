 /*         //五行五列
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <= 5; j++) {
                document.write('o')
            }
            document.write('<br>')
        }
 */


/*         //左上角的直角三角形
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <= 6-i; j++) {
                document.write('o')
            }
            document.write('<br>')
        }
         */



      /* //左下角的直角三角形
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <=i; j++) {
                document.write('o')
            }
            document.write('<br>')
        } */

    
        //右上角的直角三角形（这里多了一个for循环是因为前面需要空格，所有该循环负责的就是空出前面的空来。下面同理）
        /* for (var i = 1; i <= 5; i++) {
            for(var k=1;k<i;k++){
                document.write('&nbsp&nbsp')
            }
            for (var j = 1; j <=6-i; j++) {
                document.write('o')
            }
            document.write('<br>')
        }  */


         //左下角的直角三角形
        for (var i = 1; i <= 5; i++) {
            for(var k=1;k<6-i;k++){
                document.write('&nbsp&nbsp')
            }
            for (var j = 1; j <=i; j++) {
                document.write('o')
            }
            document.write('<br>')
        }  
