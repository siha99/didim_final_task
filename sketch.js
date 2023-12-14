let img1;
let img2;
let imgY0;
let imgY1;
let imgY2;
let imgY3;
let imgY4;
let imgY5;
let imgY6;
let imgY7;
let imgY8;


let imgE0;
let imgE1;
let imgE2;
let imgE2_1;
let imgE3;
let imgE4;
let imgE5;
let imgE6;
let imgE7;
let imgE8;
let imgE9;
let imgE10;
let imgE11;


let homeState = 0;
let ageState = 0; //0: young 1: elder
let yState = 0;
let eState = 0;

let timeStamp_payment = 0;


// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/6IBS5Xtke/';
  
// Video
let video;
let flippedVideo;
// To store the classification
let label = "";


function preload() {
  
  //for youngers
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  imgY0 = loadImage('y0.png');
  imgY1 = loadImage('y1.png');
  imgY2 = loadImage('y2.png');
  imgY3 = loadImage('y3.png');
  imgY4 = loadImage('y4.png');
  imgY5 = loadImage('y5.png');
  imgY6 = loadImage('y6.png');
  imgY7 = loadImage('y7.png');
  imgY8 = loadImage('y8.png');
  //for elders
  imgE0 = loadImage('e0.png');
  imgE1 = loadImage('e1.png');
  imgE2 = loadImage('e2.png');
  imgE3 = loadImage('e3.png');
  imgE4 = loadImage('e4.png');
  imgE5 = loadImage('e5.png');
  imgE6 = loadImage('e6.png');
  imgE7 = loadImage('e7.png');
  imgE8 = loadImage('e8.png');
  imgE9 = loadImage('e9.png');
  imgE10 = loadImage('e10.png');
  imgE11 = loadImage('e11.png');

  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(1000, 1300);
  
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  checkAge();
  if(homeState == 0){
    image(img1, 0, 0,width,height); 
  }else if (homeState == 1){
    image(img2,0,0,width,height);
  }else if (homeState == 2){
    
    if(ageState == 0){
      // for youngers
      if(yState == 0){
        image(imgY0, 0, 0,width,height);
      }else if(yState == 1){
        image(imgY1, 0, 0,width,height);
      }else if (yState == 2) {
        image(imgY2, 0, 0, width, height);
    }else if (yState == 3) {
        image(imgY3, 0, 0, width, height);
    }else if (yState == 4) {
        image(imgY4, 0, 0, width, height);
    }else if (yState == 5) {
        image(imgY5, 0, 0, width, height);
    }else if (yState == 6) {
        image(imgY6, 0, 0, width, height);
    }else if (yState == 7) {
        image(imgY7, 0, 0, width, height);
    }else if (yState == 8) {
        image(imgY8, 0, 0, width, height);
        if(millis() - timeStamp_payment >= 2000){
          yState = 0;
          homeState = 0;
        }
    }

    
    
      
    }else if(ageState == 1){
      // for elders
      if(eState == 0){
        image(imgE0, 0, 0,width,height);
      }else if(eState == 1){
        image(imgE1, 0, 0, width, height);
      }else if(eState == 2){
        image(imgE2, 0, 0, width, height);
      }else if(eState == 3){
        image(imgE3, 0, 0, width, height);
      }else if(eState == 4){
        image(imgE4, 0, 0, width, height);
      }else if(eState == 5){
        image(imgE5, 0, 0, width, height);
      }else if(eState == 6){
        image(imgE6, 0, 0, width, height);
      }else if(eState == 7){
        image(imgE7, 0, 0, width, height);
      }else if(eState == 8){
        image(imgE8, 0, 0, width, height);
      }else if(eState == 9){
        image(imgE9, 0, 0, width, height);
      }else if(eState == 10){
        image(imgE10, 0, 0, width, height);
      }else if(eState == 11){
        image(imgE11, 0, 0, width, height);
        if(millis() - timeStamp_payment >= 2000){
          eState = 0;
          homeState = 0;
        }
      }
    }
  }
  
}

function mouseClicked(){
  if(homeState == 0){
    homeState = 1;
  }else if(homeState == 1){
    homeState = 2;
    checkAge();
    
// for youngers
  }else if(homeState == 2){
    if(ageState == 0){
      if(yState == 0 ){
        yState = 1;
      }else if(yState == 1 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 0;
      }else if(yState == 1){
        yState = 2;
      }else if(yState == 2 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 1;
      }else if(yState == 2){
        yState = 3;
      }else if(yState == 3 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 1;
      }else if(yState == 3){
        yState = 4;
      }else if(yState == 4 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 1;
      }else if(yState == 4){
        yState = 5;     
      }else if(yState == 5 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 0;
      }else if(yState == 5){
        yState = 6;
      }else if(yState == 6 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 0;
      }else if(yState == 6){
        yState = 7;
      }else if(yState == 7){
        yState = 8;
        timeStamp_payment = millis();
      }else if(yState == 8 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1057 && mouseY <= 1107){
        yState = 0; 
      }
      
      
// for elders
    }else if(ageState == 1){
      if(eState == 0 && mouseX >= 132 && mouseX <= 332 
               && mouseY >= 311 && mouseY <= 611){
        eState = 1;
      }else if(eState == 1 && mouseX >= 637 && mouseX <= 834 
               && mouseY >= 1008 && mouseY <= 1194){
        eState = 0;
      }else if(eState == 1 && mouseX >= 89 && mouseX <= 289 
               && mouseY >= 266 && mouseY <= 490){
        eState = 2;
      }else if(eState == 2 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; //나가기 버튼
      }else if(eState == 2 && mouseX >= 519 && mouseX <= 711 
               && mouseY >= 761 && mouseY <= 806){
        eState = 10; //기본 구성튼버튼
      }else if(eState == 10 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; //나가기 버튼 
      }else if(eState == 2 && mouseX >= 330 && mouseX <= 490 
               && mouseY >= 458 && mouseY <= 558){
        eState = 3; //음료 추가 버튼
      }else if(eState == 3 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 2; //이전 화면 버튼 
      }else if(eState == 3 && mouseX >= 314 && mouseX <= 514 
               && mouseY >= 360 && mouseY <= 590){
        eState = 4; // 쉐이크 선택 버튼
      }else if(eState == 4 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; //나가기 버튼 
      }else if(eState == 4 && mouseX >= 461 && mouseX <= 489 
               && mouseY >= 408 && mouseY <= 508){
        eState = 2; //쉐이크 취소 버튼
      }else if(eState == 4 && mouseX >= 408 && mouseX <= 602 
               && mouseY >= 569 && mouseY <= 810){
        eState = 5; // 곁들임 추가버튼
      }else if(eState == 5 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 4; //이전 화면 버튼 
      }else if(eState == 5 && mouseX >= 314 && mouseX <= 514 
               && mouseY >= 360 && mouseY <= 590){
        eState = 6; // 곁들임 선택 버튼
      }else if(eState == 6 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; // // 나가기 버튼
      }else if(eState == 6 && mouseX >= 592 && mouseX <= 620 
               && mouseY >= 677  && mouseY <= 705){
        eState = 4; //곁들임 취소 버튼
      }else if(eState == 6 && mouseX >= 256 && mouseX <= 570 
               && mouseY >= 915  && mouseY <= 995){
        eState = 7; // 주문 하러가기 버튼
      }else if(eState == 7 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; //나가기 버튼 
      }else if(eState == 7 && mouseX >= 434 && mouseX <= 750 
               && mouseY >= 888 && mouseY <= 1000){
        eState = 8; //결제하기 버튼 
      }else if(eState == 8 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; // 나가기 버튼 
      }else if(eState == 8 && mouseX >= 434 && mouseX <= 770 
               && mouseY >= 387 && mouseY <= 810){
        eState = 9; //카드 결제 버튼 
      }else if(eState == 8 && mouseX >= 297 && mouseX <= 550 
               && mouseY >= 881 && mouseY <= 980){
        eState = 7 ; //이전 화면버튼 
      }else if(eState == 9 && mouseX >= 150 && mouseX <= 401 
               && mouseY >= 1097 && mouseY <= 1147){
        eState = 1; //나가기 버튼 
      }else if(eState == 9 && mouseX >= 297 && mouseX <= 550 
               && mouseY >= 881 && mouseY <= 980){
        eState = 8; //이전 화면버튼
      }else if(eState == 10 && mouseX >= 256 && mouseX <= 570 
               && mouseY >= 915  && mouseY <= 995){
        eState = 7;
      }else if(eState == 9 && mouseX >= 156 && mouseX <= 656
               && mouseY >= 373 && mouseY <= 730){
        eState = 11;
        timeStamp_payment = millis();
      }
    }
  }
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    ageState = 0;
  }else if(keyCode == RIGHT_ARROW){
    ageState = 1;
  }
}

function checkAge(){

  if(label == 'youngers' && homeState == 0){
    ageState = 0;
    print('youngers');
  }else if(label == 'elders' && homeState == 0){
    ageState = 1;
    print('elders');
  }
  
}


/*
function mouseClicked() {
  if (mouseY >= 0 && mouseY <= 597) {
    currentImage = img2;
  }
  else if (mouseY > 597 && mouseY <= 1195) {
    currentImage = img3;
  }
  
}
*/

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

  // When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

