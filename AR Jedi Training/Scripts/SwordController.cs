using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwordController : MonoBehaviour {

	public float speed;
	public GameObject target;
	private Animator animator;
	public AudioSource swordUp;
	public AudioSource swordDown;

	// Use this for initialization
	void Start () {
		animator = GetComponent<Animator>();
		
	}
	
	// Update is called once per frame
	void Update () {

		if (Input.GetMouseButtonDown (0)) {
			Debug.Log ("Mouse button pressed");
			animator.SetInteger("DrawSword", 1);
			swordUp.Play();

		} 

		if (Input.GetMouseButtonUp(0)){
			Debug.Log ("Mouse button up");
			animator.SetInteger("DrawSword", 0);
			swordDown.Play();
		}
		
	}


		

}
