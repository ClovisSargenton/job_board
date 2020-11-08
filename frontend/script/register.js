$(function() {
    $('#reg_success').hide();

    $('#companies').hide();

    let typeUser = 0;

    $('[name="is_recruiter"]').on('change', function() {
        if($('[name="is_recruiter"]')[0].checked) {
            typeUser = 0;
            $('#companies').hide();
            $('#companieName_id').removeAttr('required');
        }
        else {
            typeUser = 1;
            $('#companies').show();
            $('#companieName_id').attr('required', 'true'); 
        }
    });

    $('#reg_form').on('submit', function() {
        $('#reg_form').hide();
        $('#reg_success').show();

        let firstName = $('#first_name_id').val();
        let lastName = $('#last_name_id').val();
        let email_string = $('#email_id').val();
        let pwd_string = $('#pwd_id').val();
        let companieName


        if (typeUser == 1) {
            companieName = $('#companieName_id').val();
        }

        axios.post('http://localhost:3000/register', {
            firstName: firstName,
            lastName: lastName,
            email_string: email_string,
            pwd_string: pwd_string,
            typeUser: typeUser,
            companieName: companieName
        }).then( response => {
            console.log(response.data);
        }).catch( err => {
            console.log(err);
        });
        return false;
    });
});