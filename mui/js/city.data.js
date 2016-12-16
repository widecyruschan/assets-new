var cityData = [{
        value: '香港島'
        , text: '香港島'
        , children: [{
            value: "中西區"
            , text: "中西區"
	}, {
            value: "東區"
            , text: "東區"
	}, {
            value: "南區"
            , text: "南區"
	}, {
            value: "灣仔區"
            , text: "灣仔區"
	}]
}
    , {
        value: '九龍半島'
        , text: '九龍半島'
        , children: [{
            value: "九龍城區"
            , text: "九龍城區"
	}, {
            value: "观塘區"
            , text: "观塘區"
	}, {
            value: "深水埗區"
            , text: "深水埗區"
	}, {
            value: "油尖旺區"
            , text: "油尖旺區"
	}, {
            value: "黃大仙區"
            , text: "黃大仙區"
	}, {
            value: "觀塘區"
            , text: "觀塘區"
	}]
}, {
        value: '新界西'
        , text: '新界西'
        , children: [{
            value: "葵青區"
            , text: "葵青區"
	}, {
            value: "荃灣區"
            , text: "荃灣區"
	}, {
            value: "屯門區"
            , text: "屯門區"
	}, {
            value: "元朗區"
            , text: "元朗區"
	}, {
            value: "離島區"
            , text: "離島區"
	}]
}
    , {
        value: '新界東'
        , text: '新界東'
        , children: [{
            value: "北區"
            , text: "北區"
	}, {
            value: "大埔區"
            , text: "大埔區"
	}, {
            value: "沙田區"
            , text: "沙田區"
	}, {
            value: "西貢區"
            , text: "长治市"
	}]
}];
//(function ($, doc) {
//    $.init();
//    $.ready(function () {
        /*
        //普通示例
        var userPicker = new $.PopPicker();
        userPicker.setData([{
            value: '15-25'
            , text: '15-25'
					}, {
            value: '25-35'
            , text: '25-35'
					}, {
            value: '35-45'
            , text: '35-45'
					}, {
            value: '45以上'
            , text: '45以上'
					}]);
        var showUserPickerButton = doc.getElementById('showUserAge');
       // var UserAge = doc.getElementById('age');
        var userResult = doc.getElementById('userResult');
        //showUserPickerButton.addEventListener('tap', function (event) {
            //userPicker.show(function (items) {
               // UserAge.value = items[0].text;
               // showUserPickerButton.innerText = "你的年齡是:" + UserAge.value;
            //});
       // }, false);
        //-----------------------------------------
        
        */
//        //级联示例
//        var cityPicker = new $.PopPicker({
//            layer: 2
//        });
//        cityPicker.setData(cityData);
//        var showCityPickerButton = doc.getElementById('showCityPicker');
//        var cityResult = doc.getElementById('cityResult');
//         var UserArea = doc.getElementById('area');
//        showCityPickerButton.addEventListener('tap', function (event) {
//            cityPicker.show(function (items) {
//                UserArea.value = items[0].text + " " + items[1].text;
//                showCityPickerButton.innerText = "你居住地區是:" +  UserArea.value;
//                //返回 false 可以阻止选择框的关闭
//                //return false;
//            });
//        }, false);
//        //-----------------------------------------
//    });
//})(mui, document);
//mui.previewImage();

function validateForm() {
    var fName = document.forms["myForm"]["firstName"].value;
    if (fName == "") { alert("請正確填寫您的firstName！");
        return false;
    }
    var lName = document.forms["myForm"]["lastName"].value;
    if (lName == "") { alert("請正確填寫您的lastName！");
        return false;
    }
    var tel = document.forms["myForm"]["tel"].value;
    if (isNaN(document.myForm.tel.value) || document.myForm.tel.value.length != 8) {
        // alert("Please enter correct Phone Number");
        alert("請正確填寫您的電話！");
        return false;
    }
    var Email = document.forms["myForm"]["EmailAdd"].value;
    var atpos = Email.indexOf("@");
    var dotpos = Email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= Email.length) {
        // alert( "Please enter your correct Email!" );
        alert("請正確填寫您的電郵！");
        return false;
    }
//     return false;
}