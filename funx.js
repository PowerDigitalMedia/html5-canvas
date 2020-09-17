

function Canvas_DrawCheckeredBackground(can, block_w_int, block_h_int) {



    var ctx = can.getContext("2d");
    var w = can.width;
    var h = can.height;


    var block_w_int = block_w_int || 10; //default block width
    var block_h_int = block_h_int || 10; //default block height

    var nCol = w/block_w_int;
    var nRow = h/block_h_int;
    
    //var nRow = nRow || 8;    // default number of rows
    //var nCol = nCol || 8;    // default number of columns


    w /= nCol;            // width of a block
    h /= nRow;            // height of a block


    for(var i = 0; i < nRow; ++i) 
    {
        for(var j = 0, col = nCol / 2; j < col; ++j) 
        {
            ctx.rect(2 * j * w + (i % 2 ? 0 : w), i * h, w, h);
        }
    }

    
    ctx.fillStyle = '#EBECF1';//'#EDEEF1' /* #EBECF1  #F9F9F9  #EEF3F9   */
    ctx.fill();

}//function
//=========









function Canvas_ColorImage(imgId,hexaColor){


    // create hidden canvas (using image dimensions)
    var imgElement = document.getElementById(imgId);
  
    var canvas = document.createElement("canvas");
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElement,0,0);
    
    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    
    var data = imageData.data;
  
    // convert image to grayscale
    //var rgbColor = hexToRgb(hexaColor);
    var rgbColor = HEX_TO_RGB(hexaColor);
    //console.log(rgbColor);
    
    for(var p = 0, len = data.length; p < len; p+=4) {
        //if(data[p+3] == 0)
        //   continue;
        data[p + 0] = rgbColor.r;
        data[p + 1] = rgbColor.g;
        data[p + 2] = rgbColor.b;
        //data[p + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);

    // replace image source with canvas data
    imgElement.src = canvas.toDataURL();



}//function
//=========












function Canvas_GetElementPosition(obj) {

    var curleft = 0, curtop = 0;
    if(obj.offsetParent) 
    {
        do{
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } 
        while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}






function Canvas_GetEventLocation(element,event){


    var pos = Canvas_GetElementPosition(element);
    

    var x = (event.pageX - pos.x);
    var y = (event.pageY - pos.y);

    var R = {
        x: x,
        y: y
    };

    return R;

}





function Canvas_RgbToHex(r, g, b) {

    if(r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}






function Canvas_DrawImageFromWebUrl(sourceurl){


      var img = new Image();

      img.addEventListener("load", function () {
          // The image can be drawn from any source
          canvas.getContext("2d").drawImage(img, 0, 0, img.width,    img.height, 0, 0, canvas.width, canvas.height);
          
      });

      img.setAttribute("src", sourceurl);
}




