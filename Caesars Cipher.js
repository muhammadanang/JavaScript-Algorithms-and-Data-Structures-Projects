function rot13(str) {
	var list_init = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var list_rot = "NOPQRSTUVWXYZABCDEFGHIJKLM";
	
    list_init = list_init.split("");
    list_rot = list_rot.split("");
    
    var result_list = [];
    var indices = 0;
    
    for (var i of str) {
		if (list_init.indexOf(i) !== -1) {
			indices = list_init.indexOf(i);
			result_list.push(list_rot[indices]);
			} else {
			result_list.push(i);
		}
	}
    
    var result = result_list.join("");
	return result;
}

rot13("SERR PBQR PNZC")