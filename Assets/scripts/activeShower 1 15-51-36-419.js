#pragma strict
public var diabeetus : boolean = false;
var particle : ParticleSystem;
var time : float = 10;
var runTime : float = 10;
var poopflag : boolean = false;

function Start() {
	particle.enableEmission = false;
}

function OnTriggerEnter(collision : Collider){
	diabeetus = true;
}

function OnTriggerExit(collision : Collider) {
 diabeetus = false;
}
function Update(){
if(poopflag){
runTime -= Time.deltaTime;
if(runTime <= 0){
	poopflag = false;	
	particle.enableEmission = false;
}
}
}

function OnGUI() {
	if(diabeetus){
		if(GUI.Button(new Rect((Screen.width/2)-50,(Screen.height/2), 300, 100), "Activate Shower")){
			Debug.Log("fap fap fap fap");
			particle.enableEmission = true;
			poopflag = true;
			runTime = time;
		}
	}
}