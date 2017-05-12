$(document).ready(function(){
    $('.header__menu-btn').click(function(){
        $('.header__menu').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });


    $('.content__contact-inputMail').inputmask({ mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]", clearIncomplete: true,
        onincomplete: function(){
            $(this).addClass('error').removeClass('active');
        },
        oncomplete: function(){
            $(this).removeClass('error').addClass('active');
        }
    });
    var error_txt = '<em>required to complete</em>';

    $('.req').focusout(function(){
        if($(this).val() != ''){
            $(this).removeClass('error').addClass('active');
            $(this).parent('form__row').find('em').remove();
        }else{
            $(this).addClass('error').removeClass('active');
        }
    });
    $('.content__contact-formBtn').click(function(){
        var this_form = $(this).parents('form');
        var inp_req = $(this).parents('form').find('.req');

        count_error = 0;
        inp_req.each(function(){
            if($(this).val()==''){
                $(this).addClass('error');
                $(this).parent('.parent').append(error_txt);
                count_error += 1;
            }
        });

        if (count_error != 0) {
            return false
        } else{
            this_form.submit();
        }
    });
    // второй вариант валидации ниже

    // var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    // var mail = $('.content__contact-inputMail');
    // mail.blur(function(){
    //     if(mail.val() != ''){
    //         if(mail.val().search(pattern) == 0){
    //             $('#valid').text('thanks');
    //             $('#submit').attr('disabled', false);
    //             mail.removeClass('error').addClass('ok');
    //         }else{
    //             $('#valid').text('please insert correct mail');
    //             $('#submit').attr('disabled', true);
    //             mail.addClass('ok');
    //         }
    //     }else{
    //         $('#valid').text('please insert your e-mail');
    //         mail.addClass('error');
    //         $('#submit').attr('disabled', true);
    //     }
    // });
});