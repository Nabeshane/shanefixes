#pragma strict

private var clicked : boolean = false;

function OnMouseDown() {
	if(clicked){
		Debug.Log("This is working Orlando!");
	Application.LoadLevel("lab");
	}
}

function Update() {
	if(Input.GetKeyDown(KeyCode.Mouse0)){
		clicked = true;
	}
}