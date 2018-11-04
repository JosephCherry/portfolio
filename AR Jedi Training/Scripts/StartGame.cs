using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StartGame : MonoBehaviour {

	public GameObject gameManager;
	public GameObject startText;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {

		if (Input.GetMouseButtonDown (0)){
			gameManager.SetActive(true);
			startText.SetActive(false);

		}
		
	}
}
