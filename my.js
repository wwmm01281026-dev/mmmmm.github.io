function sayHello() {
    const messages = [
        "歡迎來到我的自我介紹！",
        "希望有機會一起學習程式！",
        "謝謝你閱讀我的介紹！"
    ];

    const random = Math.floor(Math.random() * messages.length);

    document.getElementById("message").innerHTML = messages[random];
}