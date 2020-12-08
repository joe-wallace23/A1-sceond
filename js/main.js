// start media footer
$(document).ready(function(){
    $(".accordian .card-header").click(function(){
        //self clicking close
        if($(this).next(".accordian .card-body").hasClass("active")){
            $(this).next(".accordian .card-body").removeClass("active").slideUp()
            $(this).children(".accordian span").removeClass("fa-minus").addClass("fa-plus")
        }
        else
        {

        
         $(".accordian .card  .accordian .card-body").removeClass("active").slideUp()

         $(".accordian .card .accordian .card-header span").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".accordian .card-body").addClass("active").slideDown()
        $(this).children(".accordian span").removeClass("fa-plus").addClass("fa-minus")
        }
    })
})
// End media footer



const form=document.querySelector('#dawn');
const inputName=document.querySelector('#name');
const inputLast=document.querySelector('#last')
const inputComapnyName=document.querySelector('#Company');
const inputEmail=document.querySelector('#email');
const inputJobTitle=document.querySelector('#Job-title');
const inputNumber=document.querySelector('#number');
const inputSlected=document.querySelector('#slected');
const inputfind=document.querySelector('#option');
const inputMessage=document.querySelector('#message');


form.addEventListener('submit', submit);

 function submit(e){
    e.preventDefault()
    {
     inputName.value='';
     inputLast.value='';
     inputComapnyName.value='';
     inputEmail.value='';
     inputJobTitle.value='';
     inputNumber.value='';
     inputSlected.value='';
     inputfind.value='';
     inputMessage.value='';
    }
}

