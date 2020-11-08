$(function() {

    $.getScript('src/utils.js');

    $('#login_container').show();
    $('#login_fail').hide();
    $('#login_success').hide();


    $('#log_form').on('submit', function() {
        let email = $('#email_id').val();
        let password = $('#pwd_id').val();

        axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        }).then( response => {
            if(response.data[0] === false) {
                $('#login_container').hide();
                $('#login_fail').show();
            }
            else {
                $('#login_container').hide();
                // $('#login_success').show();
                window.location.href = "./index.html";

                document.cookie = `typeUser=${response.data[1][0].typeUser}`;
                document.cookie = `numPeople=${response.data[1][0].numPeople}`;

                document.cookie = 'isConnected=1';      // NEW

            }
        }).catch( err => {
            console.log(err);
        });
        return false;
    });

});