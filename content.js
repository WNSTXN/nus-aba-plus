MutationObserver = window.MutationObserver || window.WebKitMutationObserver

const old_max_length = 2000
const new_max_length = 10000

var observer = new MutationObserver(() => {
  setInterval(() => {
    injection()
  }, 500)

  setInterval(() => {
    observer.disconnect()
  }, 10000)
})

function injection() {
  for (let element of document.getElementsByClassName('hidden')) {
    if (element.id === '829681c8-0152-c55f-8cd7-065b9125bf04' || element.id === '5deb06ee-6c5e-a776-3dd0-1d8d9cd8b1e5') {
      element.classList.remove('hidden')
    }
  }

  document.querySelectorAll(`[maxlength="${old_max_length}"]`)[0].maxLength = new_max_length
}

observer.observe(document, {
  childList: true,
  attributes: true,
  subtree: true
})
