       //for用来遍历数组对象
        //for循环，需要知道数组的长度，才能遍历
        var i, myArr = [1, 2, 3];
        for (var i = 0; i < myArr.length; i++) {
            console.log(i + ":" + myArr[i]);
        };
        //0:1
        //1:2
        // 2:3

        var a = new Array("first", "second", "third")
        for (var i = 0; i < a.length; i++) {
            document.write(a[i] + ",");
        }
  