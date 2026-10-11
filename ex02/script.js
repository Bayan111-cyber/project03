var title = document.getElementById("title");/* الحصول على عنصر العنوان باستخدام معرفه */
var message = document.querySelector(".message");/* الحصول على عنصر الرسالة باستخدام الفئة الخاصة به */
var button = document.getElementById("myButton");/* الحصول على عنصر الزر باستخدام معرفه */

button.onclick = function () { /* عندما يضغط المستخدم على الزر، نفذ الكود الموجود بالداخل */
    title.textContent = "Page Changed!";/* تغيير نص العنوان */
    message.textContent = "The text has been changed.";/* تغيير نص الرسالة */
    title.style.color = "blue";/* تغيير لون العنوان */  
    button.classList.add("active");/* إضافة فئة CSS لتغيير مظهر الزر */
};