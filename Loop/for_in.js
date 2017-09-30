        //for-in 用来遍历非数组对象
          // 除了遍历数组之外，还有遍历对象，常用方法 in
        // for in 遍历需要两个形参 ，index表示数组的下标(可以自定义)，arr表示要遍历的数组  
        var man = { hands: 2, legs: 2, heads: 1 };
        //为所有的对象添加clone方法，即给内置原型(object,Array,function)增加原型属性,该方法很强大，也很危险
        //除了遍历数组之外，还有遍历对象，常用方法 in
        if (typeof Object.prototype.clone === "undefined") {
            Object.prototype.clone = function () { };
        }
        //
        for (var i in man) {
            if (man.hasOwnProperty(i)) { //filter,只输出man的私有属性
                console.log(i, ":", man[i]);
            };
        }
        //输出结果为print hands:2,legs:2,heads:1

        for (var i in man) {//不使用过滤
            console.log(i, ":", man[i]);
        }
        //输出结果为
        //hands : 2 index.html:20
        //legs : 2 index.html:20
        //heads : 1 index.html:20
        //clone : function (){} 
        for (var i in man) {
            if (Object.prototype.hasOwnProperty.call(man, i)) { //过滤
                console.log(i, ":", man[i]);
            }
        }
   //输出结果为print hands:2,legs:2,heads:1
   