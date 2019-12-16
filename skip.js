
            var count=4;
            var count1=0;
            var x;
                if(count1===1)
                {
                    document.getElementById("skip1").disabled=true;
                }
                else
                {
                    function Getme(){
                    x=count;              
                    document.getElementById("img").src=images[x];
                    }
                    var images=[]
                    images[0]="0.png";
                    images[1]="1.jpg";
                    images[2]="2.jpg";
                    images[3]="3.jpg";
                    images[4]="4.jpg";
                    images[5]="5.jpg";
                    images[6]="6.png";
                    images[7]="7.png";
                }