      // some函数，遍历数组中是否有符合条件的元素，返回Boolean值
        let arr = ['2', 3, '小明', true, 'HelloWorld'];
        var newstate = arr.some(function (index) {
            return typeof index === 'number';
        })
        console.log(arr, newstate);
        // ["2", 3, "小明", true, "HelloWorld"] true
        //0:"2"
        //1:"3"
        //2:"小明"
        //3:true
        //4:"HelloWorld"
       // length: 5
