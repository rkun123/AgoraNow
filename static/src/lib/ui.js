export default {
    hideLoginmodal: ()=>{
        $('body').removeClass('modal-open'); // 1
        $('.modal-backdrop').remove();       // 2
        $('#loginModal').modal('hide');        // 3
    }
}
