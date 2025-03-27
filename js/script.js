var hamburger;
var closeMenu;
var logo
var transparent
var headerCentr
var menuUl
var flagMenu=false
window.addEventListener('load',()=>{
    hamburger=document.getElementsByClassName('nav-header__hamburger-img')[0];
    closeMenu=document.getElementsByClassName('nav-header__close-img')[0];
    logo=document.getElementsByClassName('logo_header')[0];
    transparent=document.getElementsByClassName('header-content__color-transparent-1')[0];
    headerCentr=document.getElementsByClassName('header-center')[0];
    menuUl=document.getElementsByClassName('nav-header__list')[0];
    hamburger.addEventListener('click',()=>{
        changeNav(flagMenu);
        flagMenu=true;
        console.log('flagMenu='+flagMenu);
    });
    closeMenu.addEventListener('click',()=>{
        changeNav(flagMenu);
        flagMenu=false;
        console.log('flagMenu='+flagMenu);
    });
    // hamburger.addEventListener('click',()=>{
    //     hamburger.style.display='none';
    //     closeMenu.style.display='block';
    //     logo.style.display='none'
    //     transparent.style.backgroundColor="#222222"
    //     transparent.style.height='100vh'
    //     transparent.style.zIndex='1';
    //     //hamburger.style.zIndex='15';
    //     headerCentr.style.display='none';
        
    //     menuUl.style.display='block';
    //     menuUl.style.flexDirection='column';
    // });
    // closeMenu.addEventListener('click',()=>{
    //     hamburger.style.display='block';
    //     closeMenu.style.display='none';
    //     logo.style.display='block'
    //     transparent.style.backgroundColor="#010101C2"
    //     transparent.style.height='12.4rem'
    //     transparent.style.zIndex='3';
    //     //hamburger.style.zIndex='15';
    //     headerCentr.style.display='block';
    //     //closeMenu.style.zIndex='15';
    //     menuUl.style.display='none';
    //     menuUl.style.flexDirection='row';
    // });
});
window.addEventListener('resize',(e) => {
    let width=window.innerWidth;
    if (width>1024)
    {
        changeNav(true,  true )
        hamburger.style.display='none';
        
    }
    else
    {
        if (flagMenu==false)
        {
            menuUl.style.display='none';
        }
        if (flagMenu==false)
        {

            hamburger.style.display='block';
        }
        else
        {
            closeMenu.style.display='block';
        }

       
    }

});
function changeNav(flag, flagWidth=false)
{

 
    if (flag==false )
    {
    
        hamburger.style.display='none';
        closeMenu.style.display='block';
        logo.style.display='none'
        transparent.style.backgroundColor="#222222"
        transparent.style.height='100vh'
        transparent.style.zIndex='1';
        //hamburger.style.zIndex='15';
        headerCentr.style.display='none';
        menuUl.style.display='block';
        menuUl.style.flexDirection='column';
   
    }
    else if (flag==true || flagWidth==true)
    {
        
        hamburger.style.display='block';
        closeMenu.style.display='none';
        logo.style.display='block'
        transparent.style.backgroundColor="#222222A3"//"#010101C2"
        transparent.style.height='12.4rem'
        transparent.style.zIndex='3';

        headerCentr.style.display='block';
      
        if (flagWidth==false)
        {

            menuUl.style.display='none';
            menuUl.style.flexDirection='row';
        }
        else
        {
            flagMenu=false;
            menuUl.style.display="flex";
            menuUl.style.flexDirection='row';
           
        }
    }

    
     
}