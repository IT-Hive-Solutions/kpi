$(document).ready(() => {
  // add click event to all public (x)forms
  $(document).on('click', 'a.clonexls', function () {
    el = $(this)
    $.post(
      el.data('url'),
      {
        username: el.data('username'),
        id_string: el.data('id'),
      },
      () => {},
      'script',
    )
    scrollTo(0, 0)
    return false
  })
})
