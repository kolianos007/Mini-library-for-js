import './lib/lib'
import $ from './lib/lib'

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800)
})

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800)
})

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800)
})

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum Lorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsuLorem ipsu'
  },
  btns: {
    count: 2,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ], 
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Data save')
        }
      ]
    ]
  }
}))

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res))