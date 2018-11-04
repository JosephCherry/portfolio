using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class score : MonoBehaviour {

	public float count;
	public float updateCount;
	public Text countText; 

	// Use this for initialization
	void Start () {
		count = 0;
		updateCount = 0;

		
	}
	
	// Update is called once per frame
	void Update () {

		if (count != updateCount) {
			count = updateCount;
			SetCountText ();
		}

	}

	public void SetCountText (){
		Debug.Log ("Counted");
		countText.text = " Score: " + count.ToString(); 
	}
		
}
