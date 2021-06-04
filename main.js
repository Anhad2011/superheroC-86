    var canvas=new fabric.Canvas("myCanvas");
    avenger_img_width="30";
    avenger_img_height="30";
    player_y=10
    player_x=10
    var avenger="";

    function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        avenger_object="Img";
        avenger_object.scaleToWidth(150);
        avenger_object.scaleToHeight(140);
        avenger_object.set({
    top:player_y,
    left:player_x});
    canvas.add(player_object);

        });
    }

    function new_image(get_image){
        fabric.Image.fromURL("get_image",function(img){
            avenger_img_object="Img";
            avenger_img_object.scaleToWidth(avenger_img_width);
            avenger_img_object.scaleToHeight(avenger_img_height);
            avenger_img_object.set({
                avenger_img_object.set({
        top:player_y,
        left:player_x});
        canvas.add(avenger_img_object);
        
            });
        }

        

              