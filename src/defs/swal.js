import swal from 'sweetalert2';

export const DELETING_REQUEST = params => ({
  title: 'Delete this contact?',
  text: `${params}`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  confirmButtonText: 'Delete',
});

export const DELETING_COMPLETE = params => ({
  icon: 'success',
  title: 'Deleted!',
  html: `The contact <br/><b>${params}</b></br> has been deleted`,
});

export const ERROR_MESSAGE = params => ({
  icon: 'error',
  title: 'Error!',
  html: `${params}`,
});

export function sweetAlert(config = {}, params) {
  return swal.fire(config(params));
}

export const show = sweetAlert;

export default {
  sweetAlert,
  show,
  DELETING_REQUEST,
  DELETING_COMPLETE,
  ERROR_MESSAGE,
};
