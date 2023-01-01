msg = "[HAPPY HA. HA.] KYU ~";

        msg = " ☆ " + msg; pos = 0;
        function scrollMSG() {
            document.title = msg.substring(pos, msg.length) + msg.substring(0, pos);
            pos++;
            if (pos > msg.length) pos = 0
            window.setTimeout("scrollMSG()", 200);
        }
        scrollMSG();