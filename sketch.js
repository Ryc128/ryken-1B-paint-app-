//the brackets after some of the notes are just so that those long lines of code can be easily compressed



//strokeweight of bursh
strokew = 1

button_size = 25

screen_sizeX = 1200
screen_sizeY = 600
bg_colour = 255
Yboundery = screen_sizeY/6
Xboundery = screen_sizeX/10



//colour button units
{
button_refreashYcor =(Yboundery/2)
button_refreashXcor = screen_sizeX/18

button_greyYcor = (Yboundery/2) - button_size/2
button_greyXcor = (screen_sizeX/25)*3

button_redYcor = (Yboundery/2) - button_size/2
button_redXcor = (screen_sizeX/25)*4

button_orangeYcor =(Yboundery/2) - button_size/2
button_orangeXcor = (screen_sizeX/25)*5

button_greenYcor = (Yboundery/2) - button_size/2
button_greenXcor = (screen_sizeX/25)*6

button_yellowYcor = (Yboundery/2) - button_size/2
button_yellowXcor = (screen_sizeX/25)*7

button_whiteYcor = (Yboundery/2) - button_size/2
button_whiteXcor = (screen_sizeX/25)*13

button_blueYcor = (Yboundery/2)  - button_size/2
button_blueXcor = (screen_sizeX/25)*8

button_blackYcor =(Yboundery/2) - button_size/2
button_blackXcor = (screen_sizeX/25)*9

button_brownYcor = (Yboundery/2) - button_size/2
button_brownXcor = (screen_sizeX/25)*10
}


//adimin button units
{
toggle_colour_buttonXcor = Yboundery/2
toggle_colour_buttonYcor = (screen_sizeY/12)*3
toggle_strokewidth_Xcor = Yboundery/2
toggle_strokewidth_Ycor = (screen_sizeY/12)*6

button_oneYcor = (Yboundery/2) 
button_oneXcor = (screen_sizeX/15)*9

button_fiveYcor = (Yboundery/2)
button_fiveXcor = (screen_sizeX/15)*10

button_sevenYcor =(Yboundery/2) 
button_sevenXcor = (screen_sizeX/15)*11

button_thirdteenYcor = (Yboundery/2) 
button_thirdteenXcor = (screen_sizeX/15)*12

button_seventeenYcor = (Yboundery/2) 
button_seventeenXcor = (screen_sizeX/15)*13

button_twentythreeYcor = (Yboundery/2) 
button_twentythreeXcor = (screen_sizeX/15)*14

  
one_size = 20
five_size = 28
seven_size = 36
thirdteen_size = 44
seventeen_size = 52
twentythree_size = 60
}






//
//COLOUR BUTTONS
//

//ON OFF switches for colour
{
grey_draw = 0
red_draw = 0
orange_draw = 0
yellow_draw = 0
green_draw = 0
white_draw = 0
blue_draw = 0
black_draw = 0
brown_draw = 0
}


function refreash(){
grey_draw = 0
red_draw = 0
orange_draw = 0
yellow_draw = 0
green_draw = 0
white_draw = 0
blue_draw = 0
black_draw = 0
brown_draw = 0

  
}

//buttons
{
function button_red(){
  fill("red")
  noStroke()
  rect(button_redXcor,button_redYcor,button_size,button_size)
  strokeWeight(strokew)
    if (mouseIsPressed  & mouseX > button_redXcor & mouseY > button_redYcor & mouseX < button_redXcor + button_size & mouseY < button_redYcor + button_size){
    refreash()
    red_draw += 1
    }
  }
function button_grey(){
  fill("grey")
  noStroke()
  rect(button_greyXcor,button_greyYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_greyXcor & mouseY > button_greyYcor & mouseX < button_greyXcor + button_size & mouseY < button_greyYcor + button_size){
    refreash()

    grey_draw += 1
  }
}
function button_orange(){
  fill("orange")
  noStroke()
  rect(button_orangeXcor,button_orangeYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_orangeXcor & mouseY > button_orangeYcor & mouseX < button_orangeXcor + button_size & mouseY < button_orangeYcor + button_size){
    refreash()

    orange_draw += 1
  }
  }
function button_yellow(){
  fill("yellow")
  noStroke()
  rect(button_yellowXcor,button_yellowYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_yellowXcor & mouseY > button_yellowYcor & mouseX < button_yellowXcor + button_size & mouseY < button_yellowYcor + button_size){
    refreash()

    yellow_draw += 1
  }
}
function button_green(){
  fill("green")
  noStroke()
  rect(button_greenXcor,button_greenYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_greenXcor & mouseY > button_greenYcor & mouseX < button_greenXcor + button_size & mouseY < button_greenYcor + button_size){
    refreash()

    green_draw += 1
  }
  }
function button_white(){
  fill("white")
  stroke(0)
  strokeWeight(5)
  rect(button_whiteXcor,button_whiteYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_whiteXcor & mouseY > button_whiteYcor & mouseX < button_whiteXcor + button_size & mouseY < button_whiteYcor + button_size){
    refreash()

    white_draw += 1
  }
  }
function button_blue(){
  fill("blue")
  noStroke()
  rect(button_blueXcor,button_blueYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_blueXcor & mouseY > button_blueYcor & mouseX < button_blueXcor + button_size & mouseY < button_blueYcor + button_size){
    refreash()

    blue_draw += 1
  }
  }
function button_black(){
  fill("black")
  noStroke()
  rect(button_blackXcor,button_blackYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_blackXcor & mouseY > button_blackYcor & mouseX < button_blackXcor + button_size & mouseY < button_blackYcor + button_size){
    refreash()

    black_draw += 1
  }
  }
function button_brown(){
  fill("brown")
  noStroke()
  rect(button_brownXcor,button_brownYcor,button_size,button_size)
  strokeWeight(strokew)
  if (mouseIsPressed  & mouseX > button_brownXcor & mouseY > button_brownYcor & mouseX < button_brownXcor + button_size & mouseY < button_brownYcor + button_size){
    refreash()

    brown_draw += 1
  }
  }
}

//actions when the button is pressed\
{
  
function button_red_paint(){

  
  if (red_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("red")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }

}
function button_grey_paint(){

  if (grey_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery &  pmouseY > Yboundery & mouseY > Yboundery){
    stroke("grey")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_orange_paint(){

  if (orange_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("orange")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_yellow_paint(){
  if (yellow_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("yellow")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_green_paint(){
  
  if (green_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("green")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_white_paint(){
  if (white_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("white")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_blue_paint(){
  if (blue_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery &  pmouseY > Yboundery & mouseY > Yboundery){
    stroke("blue")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_brown_paint(){
  if (brown_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("brown")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}
function button_black_paint(){
  
  if (black_draw > 0 & mouseIsPressed & pmouseX > Xboundery & mouseX > Xboundery & pmouseY > Yboundery & mouseY > Yboundery){
    stroke("black")
    strokeWeight(strokew)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
}

}

//compilling of everything
function all_colours_paint(){
  button_grey_paint()
  button_red_paint()
  button_orange_paint()
  button_yellow_paint()
  button_white_paint()
  button_blue_paint()
  button_brown_paint()
  button_black_paint()
  button_green_paint()

}

function all_colours_button(){
  button_green()
  button_black()
  button_brown()
  button_blue()
  button_white()
  button_yellow()
  button_red()
  button_grey()
  button_orange()
}

function refreash_canvas(){
 if (mouseIsPressed  & mouseX > button_refreashXcor & mouseY > button_refreashYcor & mouseX < button_refreashXcor + button_size & mouseY < button_refreashYcor + button_size){
     setup()
}
  
}
function refreash_button(){
  fill(10)
  noStroke()
  circle(button_refreashXcor,button_refreashYcor,button_size)
}


//
//ADMIN BUTTONS
//

//ON OFF switches
toggle_colour_draw = 0
toggle_strokewdith_draw = 0

//admin refreash button
function refreash_admin(){
  one_draw = 0
  five_draw = 0
  seven_draw = 0
  thirdteen_draw = 0
  seventeen_draw = 0
  twentythree_draw = 0
}


//toggle colour button

function toggle_colour_button() { 
noStroke()
rect(toggle_colour_buttonXcor,toggle_colour_buttonYcor,button_size,button_size)
} 

function toggle() {
  if (mouseX > toggle_colour_buttonXcor & mouseX < toggle_colour_buttonXcor + button_size & mouseY > toggle_colour_buttonYcor & mouseY < toggle_colour_buttonYcor + button_size & mouseIsPressed ){
    refreash_admin()

    toggle_colour_draw += 1
  }
}

function toggle_colour_colour(){
  if (toggle_colour_draw > 0){
    all_colours_button()
  }
  
  if (grey_draw > 0){
    fill("grey")
    toggle_colour_button()
  }
  if (red_draw > 0){
    fill("red")
    toggle_colour_button()
  }
  if (orange_draw > 0){
    fill("orange")
    toggle_colour_button()
  }
  if (green_draw > 0){
    fill("green")
    toggle_colour_button()
  }
  if (yellow_draw > 0){
    fill("yellow")
    toggle_colour_button()
  }
  if (white_draw > 0){
    fill("white")
    toggle_colour_button()
  }
  if (blue_draw > 0){
    fill("blue")
    toggle_colour_button()
  }
  if (black_draw > 0){
    fill("black")
    toggle_colour_button()
  }
  if (brown_draw > 0){
    fill("brown")
    toggle_colour_button()
  }  
  
    
    
  
}


//toggle strokewidth button

//width swiches
{
one_draw = 0
five_draw = 0
seven_draw = 0
thirdteen_draw = 0
seventeen_draw = 0
twentythree_draw = 0
}

//wditgh buttons
{
function button_one(){
  fill(0)
  noStroke()
  circle(button_oneXcor,button_oneYcor,one_size)
  }
function button_five(){
  fill(0)
  noStroke()
  circle(button_fiveXcor,button_fiveYcor,five_size)
}
function button_seven(){
  fill(0)
  noStroke()
  circle(button_sevenXcor,button_sevenYcor,seven_size)
  }
function button_thirdteen(){
  fill(0)
  noStroke()
  circle(button_thirdteenXcor,button_thirdteenYcor,thirdteen_size)
}
function button_seventeen(){
  fill(0)
  noStroke()
  circle(button_seventeenXcor,button_seventeenYcor,seventeen_size)
  }
function button_twentythree(){
  fill(0)
  noStroke()
  circle(button_twentythreeXcor,button_twentythreeYcor,twentythree_size)
  }
}



function toggle_strokewidth_button(){
  fill(0)
  noStroke()
  circle(toggle_strokewidth_Xcor + button_size/2,toggle_strokewidth_Ycor,button_size)
  
  
}

function strokechange(){
  if (mouseIsPressed & dist(toggle_strokewidth_Xcor + button_size/2,toggle_strokewidth_Ycor,mouseX,mouseY) < button_size/2){
    refreash_admin()
    
    toggle_strokewdith_draw += 1
  }
}

function toggle_stroke(){
  if (toggle_strokewdith_draw > 0){
    button_one()
    button_five()
    button_seven()
    button_thirdteen()
    button_seventeen()
    button_twentythree()
  
  if (dist(button_oneXcor,button_oneYcor,mouseX,mouseY) < one_size){
    toggle_colour_draw = 0
    one_draw += 1
  }
  if (dist(button_fiveXcor,button_fiveYcor,mouseX,mouseY) < five_size){
    five_draw += 1
  }
  if (dist(button_sevenXcor,button_sevenYcor,mouseX,mouseY) < seven_size){
    seven_draw += 1
  }
  if (dist(button_thirdteenXcor,button_thirdteenYcor,mouseX,mouseY) < thirdteen_size){
    thirdteen_draw += 1
  }  
  if (dist(button_seventeenXcor,button_seventeenYcor,mouseX,mouseY) < seventeen_size){
    seventeen_draw += 1
  }
  if (dist(button_twentythreeXcor,button_twentythreeYcor,mouseX,mouseY) < twentythree_size){
    twentythree_draw += 1
  }  
  
  if (one_draw > 0){
    refreash_admin()
    strokew = 1
  }
  if (five_draw > 0){
    refreash_admin()
    strokew = 5
  }
  if (seven_draw > 0){
    refreash_admin()
    strokew = 7
  }
  if (thirdteen_draw > 0){
    refreash_admin()
    strokew = 13
  }
  if (seventeen_draw > 0){
    refreash_admin()
    strokew = 17
  }
  if (twentythree_draw > 0){
    refreash_admin()
    strokew = 23
  }
  }
}



function texts(){
  textSize(20);
  text('colour button', 0,toggle_colour_buttonYcor - 10);
  textSize(20);
  text('stroke button', 0,toggle_strokewidth_Ycor - 20);
  if (toggle_colour_draw > 0){
  textSize(20);
  text('eraser', (screen_sizeX/25)*13-15
,20);
  }
  textSize(20)
  text("reset button",0,20)
}





function setup() {
  createCanvas(screen_sizeX,screen_sizeY);
  background(bg_colour);
  toggle_strokewidth_button()
  toggle_colour_button
  fill(0)
  rect(0,Yboundery,screen_sizeX,button_size/10)
  rect(Xboundery,0,button_size/10,screen_sizeY)
  


  

  
  
  
  
  
  

}


function draw() {
  texts()
  refreash_button()
  refreash_canvas()
  all_colours_paint()
  strokechange()
  toggle()
  toggle_stroke()
  toggle_colour_button()
  toggle_colour_colour()
  toggle_strokewidth_button()



  

  

  

}