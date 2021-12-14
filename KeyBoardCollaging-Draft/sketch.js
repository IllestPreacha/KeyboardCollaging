let song;
let song1;
let result;
counter = 0;
imgs = []; //array to hold photos
slideshow = 0

//Load assets and have an array of 350 items
function preload() {
  poem = loadStrings('assets/poem.txt');
  poem2 = loadStrings('assets/poem2.txt');
  poem3 = loadStrings('assets/poem3.txt');
  french = loadStrings('assets/FrenchPoem.txt')
    for (let i = 0; i < 350; i++) {
    imgs[i] = loadImage(`https://picsum.photos/640/360/?random?sig=${i}`);
  }
}

function setup() {
  song = loadSound('assets/Tidal.mp3');
  song1 = loadSound('assets/#3e021b_01.mp3');
  background(200);
  createCanvas(displayWidth, displayHeight);
  textSize(20)
  textFont('Georgia')
}

function mousePressed() {
    if (second() % 12 > 6){
    background('gold')
  }
    else{
      background('black')
    }
  fill(200,80,220)
  text(random(poem), 40 + random(-70,140), 40, 80, 80);
  fill(200,90,120)
  text(random(poem2), 120, 120, 160 + random(100,160), 160);
  fill(220,100,110)
  text(random(poem3), 200 + random(-70,140), 200, 200, 200);
  fill(80,200,220)
  text(random(poem3), 300, 300, 200 + random(-70,240), 200);
  fill(90,200,120)
  text(random(poem2), 400, 400 + random(-70,140), 160+ random(70,140), 160);
  fill(100,220, 170)
  text(random(poem), 500, 500, 200+ random(70,140), 200);
   fill(80,200,220)
  text(random(poem2), 600, 400, 200, 200+ random(-70,140));
  fill(90,200,120)
  text(random(poem3), 700+ random(-70,140), 300, 160, 160);
  fill(100,220, 170)
  text(random(poem), 700, 100, 200+ random(-70,140), 200);
}

 

let size = 3


function keyTyped(){
  
  
  //TextSize Changer
  
  if(key === 'o')
    {
      textSize(20 + size)
      size ++
    }
  
    if(key === 'p')
    {
      textSize(20 + size)
      size --
    }
  
  
  //reset buttons
  
    if(key === 'r'){
     if (second() % 3 > 1){
     background(0) 
      
    }else {
     background(random(255),random(255),random(255)) 
    }
    }
  
  //Audio Section
  
    if(key === 'b')
     if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
  
     if(key === 'v')
     if (song1.isPlaying()) {
    // .isPlaying() returns a boolean
    song1.stop();
  } else {
    song1.play();
  }
  
  
  //poetic Keys below
  
  if(key === 'q'){
  fill(80,200,220)
  text(random(poem2), 600, random(0,1200), random(200,1000) ,200+ random(-70,140));
  fill(90,200,120)
  text(random(poem3), 700+ random(-70,140), 300, 160, 160);
  fill(100,220, 170)
  text(random(poem), 700, Math.tan(counter), 200+ random(-70,140), 200);
    counter++;
  }
  
  
  if(key ==='w')
    {
  fill(random(50,220),random(100,210),random(40,225))
  text(random(french), 220+ random(-170,540), random(100,100+ height/1.1), random(width/8,width/1.2), 200); 
    }
      
   if(key ==='e')
    {
  fill(random(50,220),random(100,210),random(40,225))
  text(random(poem), 220+ random(-270,540), random(100,100+ height/1.1), random(width/8,width/1.2), 200); 
      
    }
  
  if(key === 'a')
{
   if (second() % 12 > 6){
    background('black')
  }
    else{
      background('#fae')
    }
  fill(200,80,220)
  text(random(french), 40, 40, 80+ random(-70,540), 80);
  fill(200,90,120)
  text(random(french), 120, 120+ random(-70,140), 160, 160);
  fill(220,100,110)
  text(random(french), 220+ random(-70,140), 220, 200+ random(-170,440), 200);
  fill(80,200,220)
  text(random(french), 300, 300+ random(-70,140), 200, 900);
  fill(90,200,120)
  text(random(french), 400+ random(-70,140), 400, 160+ random(-70,140), 760);
  fill(100,220, 170)
  text(random(french), 500+ random(-70,140), 500, 700+ random(-570,140), 1200);
}
  else if (key === 'd'){
  if (second() % 5 > 3){
    background(0)
  }
    else{
      background(255)
      fill("black")
  text(random(poem), 700, 100, 200+ random(-70,140), 200);
  }
    
  fill(200,80,220)
  text(random(french), 40, 40, 80, 80+ random(-70,140));
  fill(200,90,120)
  text(random(poem), 120, 120+ random(-70,140), 160+ random(-70,140), 160);
  fill(220,100,110)
  text(random(poem2), 220+ random(-70,140), 220, 200, 200+ random(-70,140));
  fill(80,200,220)
  text(random(french), 300, 300, 200, 200);
  fill(90,200,120)
  text(random(french), 400, 400+ random(-70,140), 160, 160);
  fill(100,220, 170)
  text(random(poem3), 500+ random(-70,140), 500, 200, 200);
  fill("purple")
  text(random(french), 600, 400+ random(-70,140), 200, 200);
  fill("yellow")
  text(random(french), 700, 300+ random(-70,140), 160, 160);
  fill("white")
  text(random(poem), 700, 100, 200+ random(-70,140), 200);
    
  }  
  
  //save button
  if (key === 's') {
  
  save('ProcJam_Poetry' + counter + '.jpg')
  counter ++;
    
  }
  
  
  //Chaotic Shape Functions below
  
  if(key === 'l'){
    fill(random(100,150),random(15,200),random(22,173))
    rect(counter, counter * 10,second() % 10,second() % 20,35);
    counter++;
  }
  
  if(key === 'j'){
    fill(random(100,150),random(150,200),random(22,255))
    rect(second() % 10,second() % 20,counter, counter * 10,35);
    counter++;
  }
  
   if(key === 'k'){
    fill(random(100,150),random(150,200),random(22,255))
    rect(counter,second() % 10,second() % 20, counter * 10,35);
    counter++;
  }
  
    if(key === 'i'){
    fill(random(100,150),random(150,200),random(22,255))
    rect(second() % 10,counter, counter * 10, second() % 20,counter);
    counter++;
  }

  //photo manipulation
  if(key === 't')
    {
      slideshow = int(random(0,350))
      image(imgs[slideshow], random(0,1000), random(0,1000));
      filter(THRESHOLD); // different photo filters
    }
  
   if(key === 'y')
    {
    
      filter(BLUR, int(random(1,3))); // different photo filters
    }

    if(key === 'u')
    {
      filter(ERODE); // different photo filters
    }

  if(key === "g"){
    slideshow = int(random(0,350))
    image(imgs[slideshow], random(0,1000), random(0,1000));
  }
  
  if(key === "h")
    {
      filter(DILATE)
    }
}


