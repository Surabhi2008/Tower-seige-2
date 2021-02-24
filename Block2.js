class Block2
{
		constructor(x,y,w,h)
		{
			var options={
				isStatic:false
              	
				}
			this.x=x;
			this.y=y;
			this.w=w
			this.h=h
			this.Visiblity=255
			this.body=Bodies.rectangle(x, y, w, h , options);
           
			 World.add(world, this.body);
	
		}


		display()
		{

			
			if(this.body.speed<8){
				var angle=this.body.angle
				var groundPos=this.body.position;	
				push()
				translate(groundPos.x, groundPos.y);
				
				//strokeWeight(4);
				fill("darkorange")
				rect(0,0,this.w, this.h);
               
				pop()
			  }
			else{
			  World.remove(world,this.body)
			  push()
			  this.Visiblity=this.Visiblity-5
			  tint(255,this.Visiblity)
			  pop()
			}
				
					
	
			
				
		}
	
	}