/*$(function() {
    //Go to this website "https://isotope.metafizzy.co/filtering.html" and than sroll  to "UI" copy the "var $grid = $('.grid').isotope({" section to create the "Portfoli section Isotope" 
 
   // filter items on button click
   $('.portfolio-btn').on( 'click', 'button', function() {
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({ filter: filterValue });
   });
   var $grid = $('.grid').isotope({
  
 //Go to this website "https://isotope.metafizzy.co/layout.html" and than sroll  to "Responsive layouts" copy the "$('.grid').isotope({" section to create the "Portfoli section Isotope" 
    
     // set itemSelector so .grid-sizer is not used in layout
     itemSelector: '.grid-item',
     percentPosition: true,
     masonry: {
       // use element for option
       columnWidth: '.grid-item'
     }
   }) 
 })*/

var $grid =$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
$('.filter button').on("click", function(){
  var value= $(this).attr('data-name');
  console.log('value',value);
  $grid.isotope({
    filter: value
  });
})

