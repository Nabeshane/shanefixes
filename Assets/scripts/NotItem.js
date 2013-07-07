#pragma strict

function onGUI () {
if(Input.GetKeyDown(KeyCode.Mouse0)){
GUI.Label(new Rect((Screen.width/2)-50,(Screen.height/2), 500, 100), "This is not allowed in the lab");
Debug.Log("this is working");
}

}