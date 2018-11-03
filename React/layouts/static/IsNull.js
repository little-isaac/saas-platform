export function IsNull(x) {
	switch (typeof x) {
		case "object":
			for (var key in x) {
				if (x.hasOwnProperty(key)) return false;
			}
			return true;
			break;
		case "array":
			return x.length <= 0;
			break;
		default:
			return (
				typeof x == "undefined" ||
				x == null ||
				x.toString().trim() == ""
			);
			break;
	}
}