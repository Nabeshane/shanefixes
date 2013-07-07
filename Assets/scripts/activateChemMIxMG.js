#pragma strict
private var crapomatic : boolean;


function Update () {
	crapomatic = false;
	if(this.transform.position.y == 1.18313){
		crapomatic = true;
		Debug.Log("hi");
		}
	}

function OnGUI(){
	if(crapomatic){
		if(GUI.Button(new Rect((Screen.width/2)-50,(Screen.height/2), 300, 100), "Start Chemical Mixing Game")){
		Application.LoadLevel("BunsenBurnerMG");	
		}
	}
}
function OnTriggerEnter(other : Collider) {
	Debug.Log("fap");
}