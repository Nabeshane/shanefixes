var score = 0;
var scoreStyle: GUIStyle;
function OnGUI () 
{
	GUI.BeginGroup (Rect (Screen.width - 85, 5, 80, 80));
	GUI.Box (Rect (0,0,80,60), "Score");
	GUI.Label (Rect (0, 20, 80, 30), String.Format("{0:0}", score), scoreStyle);
	GUI.EndGroup ();
}
