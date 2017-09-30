
        //  filter函数， 过滤通过条件的元素组成一个新数组， 原数组不变
        let arr = ['2', 3, '小明', true, 'HelloWorld'];
        var newstate = arr.filter(function (index) {

            return typeof index === 'number';
        })
        console.log(arr, newstate)
