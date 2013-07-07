#pragma strict

var beakerIsSnappable : GameObject;
var snappedBeaker : GameObject;

var acidBooleanSnapped : boolean = false ;
var waterBoolean = false;
var baseBoolean = false;

var acidHolder : GameObject;
var waterHolder : GameObject;
var baseHolder : GameObject;

var xSnap;
var ySnap;
var zSnap;

function Start() { 
	acidHolder = GameObject.Find("acidbeaker"); 
	waterHolder = GameObject.Find("waterbeaker");
	baseHolder = GameObject.Find("basebeaker");
	
	xSnap = -3;
	ySnap = 0.1;
	zSnap = -5 ;
}

function OnCollisionEnter(collisionInfo : Collision)  {
var triggerPlatform = this.gameObject; 

	//Debug.Log(collisionInfo.name); // Return what beaker is moved into the trigger zone.
	Debug.Log(this.gameObject);    // Return what collider is hit.
	
	if (triggerPlatform.name == "MixingPlatform1") {
	Debug.Log("True");
		xSnap = -3;
		ySnap = 2;
		zSnap = -5;
	} 
	if (triggerPlatform.name == "MixingPlatform2") {
		xSnap = 3;
		ySnap = 2;
		zSnap = -5;
	}
		
	Debug.Log("The " + collisionInfo + " has entered the area of " + triggerPlatform + ".");
	
	if(snappedBeaker != null) {
		snappedBeaker.GetComponent(DragObject).dragable = true;
	}
	
	snappedBeaker = collisionInfo.gameObject;
	
	collisionInfo.gameObject.GetComponent(DragObject).dragable = false;
	collisionInfo.gameObject.transform.position = Vector3(xSnap, ySnap, zSnap);
	collisionInfo.gameObject.rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY| RigidbodyConstraints.FreezePositionZ;
	collisionInfo.gameObject.rigidbody.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY| RigidbodyConstraints.FreezeRotationZ;
}
   
function ResetWhenFinished () {
	xSnap = -5;
	ySnap = 0.1;
	zSnap = 0;
	
	acidHolder.gameObject.transform.position = Vector3(xSnap, ySnap, zSnap);
	
	xSnap = 0;
	ySnap = 0.1;
	zSnap = 0;
	
	waterHolder.gameObject.transform.position = Vector3(xSnap, ySnap, zSnap);
	
	xSnap = 5;
	ySnap = 0.1;
	zSnap = 0;
	
	baseHolder.gameObject.transform.position = Vector3(xSnap, ySnap, zSnap);
}

function Wait() {
	yield WaitForSeconds (2);	
}

function OnMouseDown() {
	if (snappedBeaker != null) {
		snappedBeaker.GetComponent(DragObject).dragable = true;
		snappedBeaker = null;
	}
}

function OnMouseUp() {

}