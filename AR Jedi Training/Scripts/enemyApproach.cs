using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class enemyApproach : MonoBehaviour {

	public GameObject player;
	public float speed;
	private float step;
	public bool isSelected; 
	public GameObject gameManager;
	public GameObject clone; 
	public GameObject spawnPoint;
	public GameObject explosion;
	public GameObject damage;
	public GameObject scoreSystem;


	// Use this for initialization
	void Start () {
		step = speed * Time.deltaTime;
		gameManager.GetComponent<GameManager> ().enemyArray.Add (gameObject);
	}
	
	// Update is called once per frame
	void Update () {
		if (isSelected == true) {
			transform.position = Vector3.MoveTowards (transform.position, player.transform.position, step);
		}
			
	}

	void OnCollisionEnter(Collision collision){
		if (collision.gameObject.tag == "Player") {
			isSelected = false;

			DestoryAndSpawn();
			scoreSystem.GetComponent<score> ().updateCount--;
			StartCoroutine (damageFlash());

		}

		if (collision.gameObject.tag == "Sword") {
			ContactPoint contact = collision.contacts[0];
			Quaternion rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
			Vector3 pos = contact.point;
			Instantiate(explosion, pos, rot);
			isSelected = false;
			DestoryAndSpawn ();
			scoreSystem.GetComponent<score> ().updateCount++;

		}
	}

	void DestoryAndSpawn(){
		gameObject.transform.position = spawnPoint.transform.position;
	}

	IEnumerator damageFlash(){
		damage.SetActive (true);
		player.GetComponent<AudioSource>().Play();
		yield return new WaitForSeconds (0.4f);
		damage.SetActive (false);
	}
		
}
