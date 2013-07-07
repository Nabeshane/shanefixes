function OnGUI () {
	if(GUI.Button (Rect (Screen.width-55,Screen.height-65,50,30), "Reset")) // Makes a GUI Button for the user to reset the beakers on the stage.
	{	
		 GameObject.Find("MixingPlatform1").GetComponent(WithinPlane).ResetWhenFinished();
	}
	if(GUI.Button (Rect (Screen.width-55,Screen.height-35,50,30), "Exit")) // Makes a GUI Button which allows the user to quit back to the lab.
	{
		Application.LoadLevel("lab");
	}
}