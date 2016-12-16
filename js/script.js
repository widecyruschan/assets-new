$(function () {
    
    var course = $("#course");
    var service = $("#service");
    var about = $("#about");
    var header = $("#menu-93");
    header.load("header.html");
    var filename = location.href;
    var filename = filename.substr(filename.lastIndexOf('/') + 1,5);
  console.log(filename);
    if (filename == "" || filename == 'index') {
        workContent();
        init();
    }

    function init() {
        var servDate = [{
            title: '生育檢查 – 淨化基因圖譜 孕育健康後代'
            , link: './bearCheck.html'
            }, {
            title: '臨床基因檢測 – 找出基因密碼 防治隱藏疾病'
            , link: './clinical.html'
            }, {
            title: '身體檢測服務 – 定期檢查身體 生活安心又放心'
            , link: './bodyCheck.html'
            }];
        var courseList = course.children('div');
        var courseMarginLeft = (viewWidth() - 900) / 2;
        console.log( courseMarginLeft );
        var serviceLisr = service.children('div');
        var oAboutTitle = about.children('h2')[0];
        var aboutImg = getByClass(about, 'about1')[0];
        var aboutCom = getByClass(about, 'about2')[0];
        for (var i = 0; i < courseList.length; i++) {
            setStyle(courseList[i], 'transform', 'translate(' + (courseMarginLeft + i * 170) + 'px,0)');
        }
        for (var i = 0; i < serviceLisr.length; i++) {
            setStyle(serviceLisr[i], 'transform', 'translate(' + courseMarginLeft + 'px,0)');
            serviceLisr[i].i = i;
            serviceLisr[i].onclick = function (e) {
                e.preventDefault();
                window.location = servDate[this.i].link;
            }
             serviceLisr[i].onmouseover = function (e) {
               $(this).css({"width":"930px","height":"215px","backgroundSize": "cover"});
                  setStyle(this, 'transform', 'translate(' + (courseMarginLeft-20) + 'px,-40px)');
             }
             serviceLisr[i].onmouseout = function (e) {
               $(this).css({"width":"900px","height":"200px","backgroundSize": "cover"});
                  setStyle(this, 'transform', 'translate(' + (courseMarginLeft) + 'px,0)');
             }
        }
        setStyle(aboutImg, 'transform', 'translate(' + courseMarginLeft + 'px,0)');
        setStyle(oAboutTitle, 'transform', 'translate(' + (courseMarginLeft + 400) + 'px,0)');
        setStyle(aboutCom, 'transform', 'translate(' + (courseMarginLeft + 400) + 'px,0)');
    }

    function loadPage(href) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    function workContent() {
        var data = [{
                img: 'assets/image/Index_icon1.png'
                , text: '了解疾病傾向：除了器官檢查，透過基因分析可以讓你知道基因是否健康，如癌症誘發情況、過敏症、罕見疾病等，從而多加注意生活和飲食習慣，患上疾病的機會便能減低。'
            }, {
                img: 'assets/image/Index_icon2.png'
                , text: '了解身體：透過基因分析，可避免診斷錯誤、吃了不適合自己身體吸收的食物或藥物、或接受不必要的治療。基因檢測幫助我們更了解自己的身體，保持健康體魄之餘，亦可讓醫生分派適當的藥物和治療。'
            }, {
                img: 'assets/image/Index_icon3.png'
                , text: '器官檢查：即使沒有基因病變，很多人隨著環境、生活或飲食習慣會引發器官疾病，如心肺疾病、肝、腎、大腸疾病等。到了30歲時，若有不適便應定期檢查，防患於未然。'
            }, {
                img: 'assets/image/Index_icon4.png'
                , text: '生育前檢查：夫婦計劃生育前，可做身體檢查，避免因性病、卵子或精子不健康導致貽兒發育不全、有先天性疾病或容易夭折等情況。'
            }, {
                img: 'assets/image/Index_icon5.png'
                , text: '盡用天賦：心臟體積、肺體積及容量、肌肉量、關節柔軟度等是影響運動員發揮的主要因素，若知道並利用先天優勢，再配合適當的訓練計劃，便能表現得最好。'
            }
		];
        var courselist = getByClass(course, "courselist");
        for (var i = 0; i < data.length; i++) {
            var oDivParent = document.createElement('div');
            oDivParent.className = 'worksImgParent';
            if (i % 2 == 0) {
                oDivParent.innerHTML = '<div class="worksImg" style="background-position:-' + (i * 160) + 'px top"></div><div class="worksImgMark"><span>' + (data[i].text) + '</span></div>';
            }
            else {
                oDivParent.innerHTML = '<div class="worksImg" style="background-position:-' + (i * 160) + 'px bottom"></div><div class="worksImgMark"><span>' + (data[i].text) + '</span></div>';
            }
            courselist[i].appendChild(oDivParent);
        }
    }

    function viewWidth() {
        return window.innerWidth || document.documentElement.clientWidth;
    }

    function viewHeight() {
        return window.innerHeight || document.documentElement.clientHeight;
    }

    function getByClass(oParent, sClass) {
        var aElem = oParent.children();
        var arr = [];
        for (var i = 0; i < aElem.length; i++) {
            if (aElem[i].className == sClass) {
                arr.push(aElem[i]);
            }
        }
        return arr;
    }

    function setStyle(obj, attr, value) {
        obj.style[attr] = value;
        obj.style['webkit' + attr.substring(0, 1).toUpperCase() + attr.substring(1)] = value;
    }
});