export default {
    hideLoginmodal: ()=>{
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#loginModal').modal('hide');
    },
    hideCreatemodal: ()=>{
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#createModal').modal('hide');
    }
}
