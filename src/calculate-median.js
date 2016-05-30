function calculate_median(arr) {
    var collection_b = [];

    if (arr.length == 1) {

        return 0; //数组长度为1时没有中位数
    }

    else {
        for (var i = 1; i < arr.length; i = i + 2) {      //取出所有第偶数元素
            collection_b.push(arr[i]);
        }


        collection_b.sort(function (a, b) {
            return a > b ? 1 : -1
        });  //对新数组升序排序

        if (collection_b.length % 2 == 0) {//共有偶数个数，中位数取平均值
            return (collection_b[parseInt((collection_b.length / 2)) - 1] + collection_b[parseInt(collection_b.length / 2)]) / 2;
        }
        else
            return collection_b[parseInt(collection_b.length / 2)];
    }

}

module.exports = calculate_median;
