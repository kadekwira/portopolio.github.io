const scriptURL = 'https://script.google.com/macros/s/AKfycbzjlvNWcXJNXxGnlT5btwkfWPKfMF04U_2dHuXHPdVWsbttC1h2OYIdVs58TBQnIvuwZQ/exec'
const form = document.forms['submit-to-google-sheet']

$(".x").click(()=>{
  $(".alert").toggleClass("d-none")
})


form.addEventListener('submit', e => {

  $(".buttonload").toggleClass('d-none')
  $(".submit").toggleClass('d-none')

  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      $(".buttonload").toggleClass('d-none')
      $(".submit").toggleClass('d-none')
      $(".alert").toggleClass("d-none")
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})

