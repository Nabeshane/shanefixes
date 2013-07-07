#pragma strict
 var HoseStart: GameObject;
 var Knob2 : GameObject;
public var hoseCheck : boolean = false;
public var strikeFlint : boolean = false;
public var gasOn : boolean = false;
public var valveOn : boolean = false;
public var flameOn : boolean = false;
public var gasFlow : float = 1.13;
public var airFlow : float = 1.0;
public var hideButtons = true;
var particle : ParticleSystem;

function Start () {
	particle.enableEmission = false;
	////HoseStart = GameObject.CreatePrimitive(Cylinder);
}


function OnGUI(){
if(hideButtons){
if(GUI.Button(new Rect(20, 20, 150, 50), "Connect the hose")){ 
	hoseCheck = true;
	
	HoseStart.transform.position.x =19;
	HoseStart.transform.position.z = 16.5;
	}
if(GUI.Button(new Rect(20, 90, 150, 50), "Turn on gas")){
	if(hoseCheck){
	gasOn = true;
	}
	else{
	Application.LoadLevel("lab");
	}
	}
	if(GUI.Button(new Rect(20, 160,150, 50), "Turn on burner valve")){
	if(gasOn){
	valveOn = true;
	Knob2.transform.Rotate(0,0,-40);
	}
	}
	if(GUI.Button(new Rect(20, 230, 150, 50), "Strike flint(spark)")){
	if(valveOn){
	
	strikeFlint = true;
	}
	}
if(strikeFlint){

	particle.enableEmission = true;
	flameOn = true;
	hideButtons = false;

}
}
else{ if(flameOn){
	GUI.Button(new Rect (20, 20, 100, 50), "Gas");
    GUI.Button(new Rect (20, 90, 100, 50), "Air");
    if(GUI.Button(new Rect (120, 20, 50, 50), "+")){
    particle.startLifetime += 0.1;
    
}
if(GUI.Button(new Rect (190, 20, 50, 50), "-")){
particle.startLifetime -= 0.1;
}
}
}
}