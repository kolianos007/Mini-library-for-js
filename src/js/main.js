import './lib/lib'
import $ from './lib/lib'

// $('.active').on('click', sayHello)
$('button').on('click', function() {
  $('div').eq(2).toggleClass('active')
})

$('div').click(function() {
  console.log($(this).index())
})

// console.log($('div').eq(2).find('.more'))
// console.log($('.some').closest('.findmew').addClass('sdf'))
console.log($('.findme').siblings())

// console.log($('button').html('xyi'))

