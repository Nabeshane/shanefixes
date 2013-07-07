#pragma strict
public var crapomatic : boolean = false;

function OnTriggerEnter(collision : Collider) {
	crapomatic = true;
	Debug.Log("fap");
	
	
}
function OnTriggerExit(collision : Collider){
	crapomatic = false;
}

function OnGUI(){
	if(crapomatic){
		if(GUI.Button(new Rect((Screen.width/2)-50,(Screen.height/2), 300, 100), "Start Bunsen Burner Game")){
		Application.LoadLevel("BunsenBurnerMG");	
		}
	}
}