function palindrome(str) {
	var matcher = /[a-zA-Z0-9]+/gi;
	/* match() is a string method that is used to find matches based on regular expression matching */
	var matches = str.match(matcher);
	/* join() method returns an array as a string */
	var letters = matches.join('');
	/* toLowerCase() method converts a string to lowercase letters */
	var lowerCase = letters.toLowerCase();
	/* split() method splits a string into an array of substrings */
	var anArray = lowerCase.split("");
	/* reverse() method changes the sequence of elements of the given array and returns the reverse sequence */
	var arrayReverse = anArray.reverse();
	var backString = arrayReverse.join('');
	if (lowerCase === backString) {
		return true;
		} else {
		return false;
	}
}

palindrome("eye");