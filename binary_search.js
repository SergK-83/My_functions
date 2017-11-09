const binarySearch = (arr, x) => {
	let l = 0;
	let r = arr.length - 1;
	let c;

	while (l <= r) {
		c = Math.floor((l + r) / 2);

		if (x === arr[c]) return c;
		else if (x < arr[c]) r = c - 1;
		else l = c + 1;
	}

	return -1;
}
