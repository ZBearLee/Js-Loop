    //第一个参数为数组的元素，第二个元素为数组的下标  
        let arr =['2','小明',true,'HelloWorld'];
        arr.forEach((i,index)=>{
            i='hi,'+i;
            console.log(index)
            console.log(index,i);
        })
        //  0
        //  0 "hi,2"
        //  1
        //  1 "hi,小明"
        //  2
        //  2 "hi,true"
        //  3
        //  3 "hi,HelloWorld"
