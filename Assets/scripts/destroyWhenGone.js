#pragma strict

function OnBecameInvisible() 
{
	Destroy(this.gameObject);
}