using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class buildUpTrigger : MonoBehaviour {

	public AudioSource buildUp;

	// Use this for initialization
	void Start () {
		
	}
	
	void OnTriggerEnter(Collider other){
		Debug.Log ("Triggered");
		buildUp.Play ();
	}
}
