using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class explosionDestory : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Invoke("DestroyExplosion", 10);
	}
	
	void DestroyExplosion(){
		Destroy (gameObject);
	}
}
