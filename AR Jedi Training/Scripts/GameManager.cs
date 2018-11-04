using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour {


	public List<GameObject> enemyArray = new List<GameObject> ();
	public GameObject selectedEnemy;
	public bool fireEnemy;
	public float waitTime;

	// Use this for initialization
	void Start () {
		InvokeRepeating ("Triggerenemy", 5f, waitTime);
	}
	
	// Update is called once per frame
	void Update () {
		
		waitTime = Random.Range (1.0f, 10.0f);

		
	}

	public void Triggerenemy (){
		var index = Random.Range (0, enemyArray.Count);
		enemyArray[index].GetComponent<enemyApproach>().isSelected = true;

	}
		
}
