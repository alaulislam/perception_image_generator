function galleryGenerator(imgData,imgName,barSize,count){
console.log(barSize);
    var modalID = "modal"+count;
    var modalTarget = "#modal"+count;
    var saveBtnID = "saveBtn_"+count;
    var modalImageID = "modalImageID_"+count;
    let row = document.getElementById("canvas_images");
          let col = $('<div>').addClass('col-lg-2 col-md-2 mb-2').appendTo(row);
          let modal_fade = $('<div>').addClass('modal fade').attr('id',modalID).attr('tabindex','-1').attr('role','dialog').attr('aria-labelledby','myModalLabel').attr('aria-hidden','true').appendTo(col);
          let modal_dialog = $('<div>').addClass('modal-dialog').attr('role','document').appendTo(modal_fade);
          let modal_content = $('<div>').addClass('modal-content').appendTo(modal_dialog);
          let modal_header = $('<div>').addClass('modal-header no-border').appendTo(modal_content);
          $(modal_header).append($('<h4>', {
            class:"modal-title w-100 text-center",
            text: barSize+"px",
          }));
          let modal_body = $('<div>').addClass('modal-body mb-0 p-0').appendTo(modal_content);
          //let embed_responsive = $('<div>').addClass('embed-responsive embed-responsive-4by3 z-depth-1-half').appendTo(modal_body);

            $('<object />').attr({
                name: imgName,
                id: modalImageID,
                data: imgData,
                type:"image/png",
            }).appendTo($(modal_body));

                 //iframe
        //   $('<iframe />').attr({
        //     src:canvasdata,
        //     class:"embed-responsive-item",
        //   }).appendTo($(embed_responsive));
     
          let modal_footer = $('<div>').addClass('modal-footer justify-content-center').appendTo(modal_content);

          var button_close= $('<button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>');
         // $(modal_footer).append(span);
         $(modal_footer).append($('<span>', {
            class:"mr-4",
            text: imgName
          }));
          $(modal_footer).append(button_close);
          $('<input>').attr({
            class: "btn btn-outline-primary btn-rounded btn-md ml-4",
            type: "button",
            id: saveBtnID,
            value: "Save"
            }).appendTo($(modal_footer));

          $('<img />').attr({
            src: imgData,
            class:"img-fluid z-depth-1",
            width:'200',
            height:'200',
            'data-toggle': 'modal',
            'data-target': modalTarget

          }).appendTo($('<a />').attr({
              id:'canvas_0'
          }).appendTo($(col)));

          $("#"+saveBtnID).click(function(){
            var $this = $(this);
            var id_no = $this.attr('id').slice(-1);
            var nameDL = $("#modalImageID_"+id_no).attr('name');
            var hrefDL = $("#modalImageID_"+id_no).attr('data');
            var a = document.createElement("a");
            a.download = nameDL;
                  a.href = hrefDL;
                  a.click();
          });
     
  };


// var img = document.createElement('img'); 
// img.setAttribute( 'class', 'img-fluid z-depth-1');
// img.src = canvasdata;
// var canvasNo = "canvas_"+count ;
// document.getElementById(canvasNo).appendChild(img); 
// down.innerHTML = "Image Element Added.";  


