/*!
 *
 *rem��������Ӧjavascript
 *@author ·��ƽ 2017/12/24
 *
 */

(function (designWidth, maxWidth) {

    var doc = document, win = window;
    var docEl = doc.documentElement;
    var tid;
    var rootItem, rootStyle;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (!maxWidth) {
            maxWidth = 750;
        }
        ;
        if (width > maxWidth) {
            width = maxWidth;
        }
        //���Ա�������ͬ��ֱ�Ӳ��ü򵥵�rem���㷽��1rem=100px
        var rem = width * 100 / designWidth;
        //����UC��ʼ
        rootStyle = "html{font-size:" + rem + 'px !important}';
        rootItem = document.getElementById('rootsize') || document.createElement("style");
        if (!document.getElementById('rootsize')) {
            document.getElementsByTagName("head")[0].appendChild(rootItem);
            rootItem.id = 'rootsize';
        }
        if (rootItem.styleSheet) {
            rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText = rootStyle)
        } else {
            try {
                rootItem.innerHTML = rootStyle
            } catch (f) {
                rootItem.innerText = rootStyle
            }
        }
        //����UC����
        docEl.style.fontSize = rem + "px";
    };
    refreshRem();
    win.addEventListener("resize", function () {
        clearTimeout(tid); //��ִֹ������
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // ��������˵�ʱ�����¼���
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "14px";
    } else {
        doc.addEventListener("DOMContentLoaded", function (e) {
            doc.body.style.fontSize = "14px";
        }, false);
    }

})(414, 750);

