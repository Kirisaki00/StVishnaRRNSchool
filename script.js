const carousel=document.getElementById("carousel");
        let currentIndex=0;
        const totalItems=document.querySelectorAll(".teacherCard").length;
        const cardWidth=320;

        function scrollCarousel(direction){
            currentIndex+=direction;
            if(currentIndex<0) currentIndex=totalItems-1;
            if(currentIndex>=totalItems) currentIndex=0;
            carousel.style.transform=`translatex(-$(currentIndex*cardWidth)px)`;
        }
        setInterval(()=>{
            scrollCarousel(1);
        },5000)


        function animateCounter(id,endValue,duration){
            const el=document.getElementById(id);
            let startValue=0;
            let startTime=null;

            function updateCounter(currentTime){
                if(!startTime) startTime=currentTime;
                const progress=currentTime-startTime;
                const rate=progress/duration;
                const currentValue=Math.min(Math.floor(rate*endValue),endValue);
                el.textContent=currentValue.toLocaleString();
                if(currentValue<endValue){
                    requestAnimationFrame(updateCounter);
                }
            }
            requestAnimationFrame(updateCounter);
        }
        animateCounter("studentCounter",5000,2500);
        animateCounter("experienceNumber",15,2500);
        animateCounter("aluminiCounter",2500,2500);
    