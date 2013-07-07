#pragma strict
private var fapTools : boolean;

function Update () {
	fapTools = false;
	if (this.transform.position.x > 6 && this.transform.position.x < 8){
		if (this.transform.position.z > 7 && this.transform.position.z < 9){
			 fapTools = true;
			 

		}
	}
}
function OnGUI() {
	if(fapTools){
	if (GUI.Button (new Rect((Screen.width/2)-50, (Screen.height/2), 300, 100), "StartChemial Mix Mini Game")){
		Application.LoadLevel("ChemMixMG");	
		}
	}
}