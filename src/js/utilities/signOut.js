// Declare a function to signOut
import firebase from "firebase";

export const signOut = async () => {
	try {
		await firebase.auth().signOut();
	} catch (e) {
		throw new Error("Error signning out");
	}
};
