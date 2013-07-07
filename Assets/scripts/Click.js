#pragma strict
private var clicked : boolean = false;
function OnMouseDown() {
	if(clicked){
	Application.LoadLevel("ChemMixMG");
	}
}
	function Update () {
	if(Input.GetKeyDown(KeyCode.Mouse0)){
		clicked = true;
	}
}


