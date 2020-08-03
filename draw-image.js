

function Canvas_DrawImage(){


    
    var canvas = document.getElementById("mycanvas");

    Canvas_DrawCheckeredBackground(canvas);


    
    //===================================
    // sourceurl
    //===================================

    var sourceurl = "data:image/gif;base64,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";





    //===================================
    // new image
    //===================================

    var img = new Image();
    img.addEventListener("load", function () {
        
        // The image can be drawn from any source


        /*
        //ORIGINAL
        canvas.style.width = img.width + "px";
        canvas.style.height = img.height + "px";
        
        canvas.getContext("2d").drawImage(img, 0, 0, img.width,    img.height, 0, 0, canvas.width, canvas.height);
        
        */


        console.log("Drawimage Data..."

            +"\ncanvas.width: "+canvas.width
            +"\ncanvas.height: "+canvas.height
        
            +"\nimg.width: "+img.width
            +"\nimg.height: "+img.height
            
        );



        var img_w = img.width;
        var img_h = img.height;

        


        var mode = 'readjust';
        var imgmod = lib.GetImgObj({

            'call'          :mode,
            'div_width'     :canvas.width,
            'div_height'    :canvas.height,
            'width'         :img.width,
            'height'        :img.height

        })



        var img_w = imgmod['img_width'];
        var img_h = imgmod['img_height'];
        var adjust_obj = imgmod['adjust_obj'];

        var img_x = adjust_obj['left_margin'];
        var img_y = adjust_obj['top_margin'];
    


        if(img_x < 20)
        {

            var mode = 'fill_div';
            var imgmod = lib.GetImgObj({

                'call'          :mode,
                'div_width'     :canvas.width,
                'div_height'    :canvas.height,
                'width'         :img.width,
                'height'        :img.height

            })

            var img_w = imgmod['img_width'];
            var img_h = imgmod['img_height'];
            var adjust_obj = imgmod['adjust_obj'];

            var img_x = adjust_obj['left_margin'];
            var img_y = adjust_obj['top_margin'];

        
        }//if x
        //=====



        console.log("Img Mod Results..."

            +"\nIMG W: "+img_w
            +"\nIMG H: "+img_h
            +"\nADJUST_OBJ: "+JSON.stringify(adjust_obj,null,2)
        );

    
        //==========================================================


        //https://www.w3schools.com/tags/canvas_drawimage.asp

        
        //canvas.getContext("2d").drawImage(img, 0, 0, img_w, img_h, 0, 0, canvas.width, canvas.height);
        canvas.getContext("2d").drawImage(img, img_x, img_y, img_w, img_h);



    });

    img.setAttribute("crossOrigin","anonymous"); 
    img.setAttribute("src", sourceurl);








    //===================================
    // addEventListener ( mousemove )
    //===================================
    
    canvas.addEventListener("mousemove",function(e){
    
        var eventLocation = Canvas_GetEventLocation(this,e);
        var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
        
        // Get the data of the pixel according to the location generate by the getEventLocation function
        var context = this.getContext('2d');
        var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 
    
        // If transparency on the image
        if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0))
        {
            //coord += " (Transparent color detected, cannot be converted to HEX)";
            coord += "<br/>Invalid Color";
            
        }

        
        var rgb = pixelData[0]+","+pixelData[1]+","+pixelData[2];
        var hex = "#" + ("000000" + Canvas_RgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);




        // captures running color

        colorObj['running_color'] = {

            'type':'Extracted',
            'rgb':rgb,
            'hex':hex
        };




        //------------------------------------
        // Draw the color and coordinates.
        //------------------------------------

        var canvcolor = document.getElementById("canvcolor");
        canvcolor.style.backgroundColor = hex;




        //------------------------------------
        // Draw the color and coordinates.
        //------------------------------------

        var canvstatsbox = document.getElementById("canvstatsbox");
        //canvstatsbox.style.backgroundColor = hex;


        var canvstats = document.getElementById("canvstats");
        //canvstats.style.color = textcolor;
        

            var html = '';



            //---------------
            //ORIGINAL
            //---------------

            //html += "RGB: "+rgb;
            //html += "<br/>";
            //html += "HEX: "+hex;
            //html += "<br/>";
            //html += coord;


            //---------------
            //inline
            //---------------

            html += "HEX: "+hex;
            html += "&nbsp;/&nbsp;"; 

            html += "RGB: "+rgb;
            html += "&nbsp;/&nbsp;"; 

            html += "COORD: "+coord;



        canvstats.innerHTML = html;


    
    
    },false);








    //===================================
    // addEventListener ( click )
    //===================================
    
    canvas.addEventListener("click",function(e){
    
        var rc = colorObj['running_color'];
        console.log(JSON.stringify(rc,null,2));
        

    },false);



}//func
//=====