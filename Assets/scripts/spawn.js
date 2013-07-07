#pragma strict

var ball:GameObject;
var materialArray: Material[];
function Update() {
  if(Input.GetMouseButtonDown(0)) {

	if(Random.Range(0,1) < 1)
	{
	var ballStartPosition = new Vector3(Random.Range(-6,6),8,0);
	var sphere : GameObject =
			Instantiate(ball, ballStartPosition,
								Quaternion.identity);
	sphere.renderer.material = materialArray[Random.Range(0,materialArray.length)];
	sphere.renderer.material.shader = Shader.Find("Diffuse");
	}
	}	
}