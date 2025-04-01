var hamburger;
var closeMenu;
var logo
var transparent
var headerCentr
var menuUl
var flagMenu=false
var mouseOldX=0;
var movingList=[];
var mousePress=false;
let width=window.innerWidth;
let distWidth=100;
//var mouseX=null;
var movingItem={
    x:0,
    mouseOldX:null,
    offsetX: 0,
    mouseIn:false,
    maxWidth: 0,
    item:{},

}
window.addEventListener('load',()=>{
    hamburger=document.getElementsByClassName('nav-header__hamburger-img')[0];
    closeMenu=document.getElementsByClassName('nav-header__close-img')[0];
    logo=document.getElementsByClassName('logo_header')[0];
    transparent=document.getElementsByClassName('header-content__color-transparent-1')[0];
    headerCentr=document.getElementsByClassName('header-center')[0];
    menuUl=document.getElementsByClassName('nav-header__list')[0];
    var list=document.getElementsByClassName('moving-list');
    for (let i=0;i<list.length;i++)
    {
        let itemOne=JSON.parse(JSON.stringify(movingItem));
        itemOne.item=list[i];
        
        //movingList.push({x:0,item:list[i]});
        movingList.push(itemOne);

        console.log(movingList);
    }
    for (let i=0;i<movingList.length;i++)
    {
        movingList[i].item.addEventListener('mouseover',()=>{
            movingList[i].mouseIn=true;
        });
        movingList[i].item.addEventListener('mouseout',()=>{
            movingList[i].mouseIn=false;
        });

        
    }
    //let x=1;
    setInterval(function(){
        let speed=2;
        for (let i=0;i<movingList.length;i++)
        {
            if (movingList[i].x<-movingList[i].maxWidth)
            {
                movingList[i].x+=speed;

                movingList[i].item.style.transform=`translateX(${movingList[i].x}px)`;
            }
            if (movingList[i].x>1)
            {
                movingList[i].x-=speed;

                movingList[i].item.style.transform=`translateX(${movingList[i].x}px)`;
            }
           // movingList[i].item.style.transform=`translateX(${movingList[i].x}px)`;
        }
        // if (mousePress==true)
        // {
        //     console.log("mousePress");
        // }
       
    },10);
    window.addEventListener("touchstart",function(){
        mousePress=true;
        
        for (let i=0;i<movingList.length;i++)
        {
            //if (movingList[i].mouseIn==true)
            {
                //movingList[i].mouseOldX=mouseX//-movingList[i].x;
                //movingList[i].offsetX=movingList[i].mouseOldX-movingList[i].x
                //console.log("mouseOldX="+movingList[i].mouseOldX);
            }
        }
    });
    for (let i=0;i<movingList.length;i++)
    {
        movingList[i].item.addEventListener("touchmove",function(e){
        //mouseX=e.clientX;
        var touchobj = e.changedTouches[0]
        let mouseX = touchobj.pageX //- startX
        if (mouseX-mouseOldX>40)
        {
            mouseOldX = touchobj.pageX
        }
        if (mousePress==true)
        
            
           // if (movingList[i].mouseIn==true)
            {
                //console.log("mouseIN="+i);
                
                {
                    movingList[i].x+=mouseX-mouseOldX//movingList[i].mouseOldX//-movingList[i].offsetX;

                    // if (mouseX-mouseOldX>30)
                    // {
                    //     console.log("mouseX-mouseOldX"+(mouseX-mouseOldX))
                    //     console.log("Old mouseX"+(mouseX))
                    //     console.log("Old mouseOldX"+(mouseOldX))
                    // }
                    // console.log("movingList[i].x"+movingList[i].x)
                }
            }
            let maxWidth=movingList[i].item.clientWidth-width+70;
            movingList[i].maxWidth=maxWidth;
            if (movingList[i].x>=1+distWidth) movingList[i].x=1+distWidth;
            else if (movingList[i].x<=-maxWidth-distWidth) movingList[i].x=-maxWidth-distWidth;
            movingList[i].item.style.transform=`translateX(${movingList[i].x}px)`;
            //console.log("maxWidth: "+maxWidth);
            mouseOldX = touchobj.pageX
        // if (mousePress==true)
        // {
        //     console.log("mouseX="+mouseX);
        // }
        });
    }
    window.addEventListener("touchend",function(e){
        mousePress=false;
        mouseOldX=0;
        mouseX=0;
        console.log("mousePress = false");
    });
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

});
window.addEventListener('resize',(e) => {
    width=window.innerWidth;
    for (let i=0;i<movingList.length;i++)
    {
        movingList[i].x=1;
        movingList[i].item.style.transform=`translateX(${1}px)`;
    }
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