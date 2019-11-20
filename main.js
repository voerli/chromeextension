var snowflakes = {
    arr: [], // 数组盛放元素
    snowflake: [ //雪花类型
        '❉',
        '❈',
        '*',
        '✲',
        '❀',
        '❃'
    ],
    snowflakeColor: [ //颜色库
        "red",
        "green",
        "#ccc123",
        "#345232",
        "#231111",
        "#ab2322"
    ],
    random: function (num) {
        return Math.floor(Math.random() * num); // 获得一个num-1的整数
    },
    init: function (num) {
        // 最多个数
        this.maxlength = num;
        // 边界
        this.maxWidth = (document.clientWidth || document.body.clientWidth) + 20;
        // 边界
        this.maxHeight = (document.clientHeight || document.body.clientHeight) + 20;
        this.create();
        this.move();
    },
    // 创建
    create: function () {
        var that = this;
        setInterval(function () {
            // 当数组中的数量，比最大数量要小的时候 开始创建
            if (that.arr.length < that.maxlength) {
                var d = document.createElement("div");
                // 内容和 颜色是随机的 颜色和文字库里面的
                d.innerHTML = that.snowflake[that.random(that.snowflake.length)];
                d.style.color = that.snowflakeColor[that.random(that.snowflakeColor.length)];
                d.style.position = "absolute";
                // 位置是随机的 top(0- -99) left (0 - that.maxWidth*2/3-1)
                d.style.left = that.random(that.maxWidth * 2 / 3) + "px";
                d.style.top = -that.random(100) + "px";
                // 速度
                d.vx = 2 + that.random(10);
                d.vy = 3 + that.random(10);
                // 数组添加元素, body 添加元素
                document.body.appendChild(d);
                that.arr.push(d)
            }
        }, 20)
    },
    // 运动
    move: function () {
        var that = this;
        var arr = that.arr;
        setInterval(function () {
            // 循环数组中的每一个元素
            for (var i = 0; i < arr.length; i++) {
                // 替换位置
                arr[i].style.left = arr[i].offsetLeft + arr[i].vx + "px";
                arr[i].style.top = arr[i].offsetTop + arr[i].vy + 'px';
                // 判断边界 删除元素
                if (arr[i].offsetTop >= that.maxHeight || arr[i].offsetLeft >= that.maxWidth) {
                    document.body.removeChild(arr[i]);
                    arr.splice(i, 1);
                }
            }
        }, 30)
    }
}
window.onload = function () {
    snowflakes.init(100);
    document.getElementById('su').value = '橙子一下'
    document.getElementsByClassName('index-logo-src')[0].style.height = "268px"
    document.getElementById('lg').firstElementChild.src = "http://p0.meituan.net/scarlett/2dee6427ed679f826512d18e8c54d80b57544.png";
    document.getElementsByClassName('qrcode-img')[0].style.background = "url(http://p0.meituan.net/scarlett/509d57eb00eae195f2754b26738a9c4671572.gif) no-repeat center";
    document.body.style.overflow = 'hidden';
}