MutationObserver = window.MutationObserver || window.WebKitMutationObserver

var observer = new MutationObserver(() => {
    const hidden_elements = document.getElementsByClassName('hidden')
    hidden_elements[1].classList.remove('hidden')
    hidden_elements[1].classList.remove('hidden')

    const old_max_length = 2000
    const new_max_length = 10000
    document.querySelectorAll(`[maxlength="${old_max_length}"]`)[0].maxLength = new_max_length
})

observer.observe(document, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
})

setInterval(() => {
    location.reload()
}, 900000)
