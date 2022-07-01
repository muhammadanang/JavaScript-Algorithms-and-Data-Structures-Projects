function telephoneCheck(str) {
	var pattern = [
		// 555-555-5555
		/^\d{3}-\d{3}-\d{4}$/,
		
		// 1 555-555-5555
		/^1 \d{3}-\d{3}-\d{4}$/,
		
		// 1 (555) 555-5555
		/^1 \(\d{3}\) \d{3}-\d{4}$/,
		
		// 5555555555
		/^\d{10}$/,
		
		// (555)555-5555
		/^\(\d{3}\)\d{3}-\d{4}/,
		
		// 1(555)555-5555
		/^1\(\d{3}\)\d{3}-\d{4}/,
		
		// 1 555 555 5555
		/^1 \d{3} \d{3} \d{4}/
	];
	
    var conditional;
	// return pattern.some((patt) => patt.test(str));
	for (var patt of pattern) {
		conditional = patt.test(str);
		if (conditional === true) {
			return true;
		}
	}
	return false;
}

telephoneCheck("555-555-5555");