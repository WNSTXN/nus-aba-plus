const hidden_elements = document.getElementsByClassName('hidden')
hidden_elements[1].classList.remove('hidden')
hidden_elements[1].classList.remove('hidden')

const old_max_length = '2000'
const new_max_length = '10000'
document.querySelectorAll(`[maxlength="${old_max_length}"]`)[0].maxLength = parseInt(new_max_length)
