
module.exports = async (data) => {
	data = func(data);
	return data;
}

function func(data) {
	for (key in data) {
		if (typeof data[key] == 'string') {
			data[key] = encoding(data[key]);
		} else if (typeof data[key] == 'object') {
			func(data[key]);
		}
	}

	return data;
}

function encoding(str) {
	str = str.toLowerCase();
	let encoded = '';
	const vowels = 'aeiouy';
	const consonants = 'bcdfghjklmnpqrstvwxz';

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			encoded += 'i';
		} else if (consonants.includes(str[i])) {
			encoded += 'b';
		} else {
			encoded += str[i];
		}
	}

	return encoded;
}