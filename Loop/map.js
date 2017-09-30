  //   map函数，遍历数组每个元素，并回调操作，需要返回值，返回值组成新的数组，原数组不变
        let arr = ['2', '小明', true, 'HelloWorld'];
        var newstate = arr.map(function (index) {
            index = "map的" + index;
            console.log(index)
            return index;
        })
        console.log("newstate", newstate);
       //   map的2
       //   map.html:17 map的小明
       //   map.html:17 map的true
       //   map.html:17 map的HelloWorld
       //   map.html:20 newstate (4) ["map的2", "map的小明", "map的true", "map的HelloWorld"]