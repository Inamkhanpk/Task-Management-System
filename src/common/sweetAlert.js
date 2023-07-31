import Swal from 'sweetalert2';


const SweetAlert = (title, text, type) => {
  Swal.fire({
    icon: type,
     title,
    text,
    width:'400',
    customClass: {
        container: '...',
        popup: '...',
        header: '...',
        title: '',
        closeButton: '...',
        icon: '...',
        image: '...',
        htmlContainer: '...',
        input: '...',
        inputLabel: '...',
        validationMessage: '...',
        actions: '...',
        confirmButton: '...',
        denyButton: '...',
        cancelButton: '...',
        loader: '...',
        footer: '....',
        timerProgressBar: '....',
      }

   
  });
};

export default SweetAlert;