class Food{
    constructor(){
        this.image=loadImage("images/milk.png");
        this.image2=loadImage("images/Food Stock.png");
        this.foodStock=0;
    }

    

updateFoodStock(foodStock){
  this.foodStock=foodStock;
}

deductFood(){
if(this.foodStock>0){
  this.foodStock-=1
}
}

getFoodStock(){
  return this.foodStock;
}

bedroom(){
  background(bedroom,800,500);
}

garden(){
  background(garden,800,500);
}

washroom(){
  background(washroom,800,500);
}

vaccination(){
  background(vaccination,800,500);
}

display(){
  var x=80,y=100;
//console.log(foodStock);
  imageMode(CENTER);
  image(this.image,500,280,70,70);

 if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
      if(i%10===0){
        x=80;
        y+=50;
      }

      image(this.image2,x,y,50,50);
      x+=30;
    }
  }

}



}