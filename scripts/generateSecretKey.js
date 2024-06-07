const crypto = require('crypto');

// Generate a random 32-byte buffer
const randomBytes = crypto.randomBytes(32);

// Convert the random bytes to a Base64 string
const secretKey = randomBytes.toString('base64');

console.log('Secret Key:', secretKey);