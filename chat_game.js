
        var usr_1_name = prompt('User 1 name: ', "Abhishek");
        if (usr_1_name.length > 0) {
            document.getElementById("user_1_spn").innerHTML = usr_1_name;
        } else {
            document.getElementById("user_1_spn").innerHTML = "User 1";
        }
        var usr_2_name = prompt('User 2 name: ', "Lexi");
        if (usr_2_name.length > 0) {
            document.getElementById("user_2_spn").innerHTML = usr_2_name;
        } else {
            document.getElementById("user_2_spn").innerHTML = "User 2";
        }


        function usr_1() {
            var usr_1_sms = document.getElementById("textarea_of_user_1").value;
            document.getElementById("p_usr_2").innerHTML = usr_1_sms;
            if ((usr_1_sms.length) > 0) {
                if (usr_1_name.length > 0) {
                    document.getElementById("marq_usr_2").innerHTML = "New message from " + usr_1_name + " 🔔";
                } else {
                    document.getElementById("marq_usr_2").innerHTML = "New message from User 1" + " 🔔";
                }
                document.getElementById("marq_usr_2_div").style.backgroundColor = "green";
                document.getElementById("marq_usr_1_div").style.backgroundColor = "dodgerblue";
                document.getElementById("marq_usr_1").innerHTML = "No Notification";
                var x = document.getElementById("myAudio");
        
            x.play();
        

            } else {
                document.getElementById("p_usr_1").innerHTML = "SMS from user_2 will be show here";
                document.getElementById("p_usr_2").innerHTML = "SMS from user_1 will be show here";
            }


        }

        function usr_2() {
            
            var usr_2_sms = document.getElementById("textarea_of_user_2").value;
             
            document.getElementById("p_usr_1").innerHTML = usr_2_sms;
            
            if ((usr_2_sms.length) > 0) {
                if (usr_2_name.length > 0) {
                    document.getElementById("marq_usr_1").innerHTML = "New message from " + usr_2_name + " 🔔";
                } else {
                    document.getElementById("marq_usr_1").innerHTML = "New message from User 2" + " 🔔";
                }
                document.getElementById("marq_usr_1_div").style.backgroundColor = "green";
                document.getElementById("marq_usr_2_div").style.backgroundColor = "dodgerblue";

                document.getElementById("marq_usr_2").innerHTML = "No Notification";
                var y = document.getElementById("myAudio");
        y.play();
                
        
            } else {
                document.getElementById("p_usr_2").innerHTML = "SMS from user_1 will be show here";
                document.getElementById("p_usr_1").innerHTML = "SMS from user_2 will be show here";
            }
          


        }
