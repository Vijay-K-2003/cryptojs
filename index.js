const CryptoJS = require('crypto-js');

// MD5 Hashing
var message = "Vijay";
var hash_MD5 = CryptoJS.MD5(message);
console.log(message + "\nhash_MD5-> " + hash_MD5);

// SHA-1 Hashing
var hash_SHA_1 = CryptoJS.SHA1(message);
console.log(message + "\nhash_SHA_1-> " + hash_SHA_1);

// SHA-2 Hashing
var hash_SHA_256 = CryptoJS.SHA256(message);
console.log(message + "\nhash_SHA_256-> " + hash_SHA_256);

var hash_SHA_512 = CryptoJS.SHA512(message);
console.log(message + "\nhash_SHA_512-> " + hash_SHA_512);

var hash_SHA_224 = CryptoJS.SHA224(message);
console.log(message + "\nhash_SHA_224-> " + hash_SHA_224);

var hash_SHA_384 = CryptoJS.SHA384(message);
console.log(message + "\nhash_SHA_384-> " + hash_SHA_384);

// SHA-3 (Keccak[c=2d]) Hashing
var hash_SHA_3 = CryptoJS.SHA3(message);
console.log(message + "\nhash_SHA_3-> " + hash_SHA_3);

var hash_SHA_3_512 = CryptoJS.SHA3(message, { outputLength: 512 });
console.log(message + "\nhash_SHA_3_512-> " + hash_SHA_3_512);

var hash_SHA_3_384 = CryptoJS.SHA3(message, { outputLength: 384 });
console.log(message + "\nhash_SHA_3_384-> " + hash_SHA_3_384);

var hash_SHA_3_256 = CryptoJS.SHA3(message, { outputLength: 256 });
console.log(message + "\nhash_SHA_3_256-> " + hash_SHA_3_256);

var hash_SHA_3_224 = CryptoJS.SHA3(message, { outputLength: 224 });
console.log(message + "\nhash_SHA_3_224-> " + hash_SHA_3_224);

// RIPEMD-160 Hashing
var hash_RIPEMD160 = CryptoJS.RIPEMD160(message);
console.log(message + "\nhash_RIPEMD160-> " + hash_RIPEMD160);

// Converting toString Hex etc.
console.log("hash_SHA_256 To Base64 : " + hash_SHA_256.toString(CryptoJS.enc.Base64));
console.log("hash_SHA_256 To Hex : "+hash_SHA_256.toString(CryptoJS.enc.Hex));
console.log("hash_SHA_256 To Base64url : "+hash_SHA_256.toString(CryptoJS.enc.Base64url));

// Progressive Hashing
var sha256 = CryptoJS.algo.SHA256.create();
sha256.update("Vijay");
sha256.update("J");
sha256.update("K");
var hash_sha256_prog = sha256.finalize();
console.log("hash_sha256 : " + hash_sha256_prog);

// Keyed-hash message authentication codes (HMAC)
var hash_HMAC_MD5 = CryptoJS.HmacMD5("Name", "This is Secret");
console.log("hash_HMAC_MD5 : " + hash_HMAC_MD5);

var hash_HMAC_SHA1 = CryptoJS.HmacSHA1("Name", "This is Secret");
console.log("hash_HMAC_SHA1 : " + hash_HMAC_SHA1);

var hash_HMAC_SHA256 = CryptoJS.HmacSHA256("Name", "This is Secret");
console.log("hash_HMAC_SHA256 : " + hash_HMAC_SHA256);

var hash_HMAC_SHA512 = CryptoJS.HmacSHA512("Name", "This is Secret");
console.log("hash_HMAC_SHA512 : " + hash_HMAC_SHA512);

// Progressive HMAC
var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "This is Secret");
hmac.update("Name");
hmac.update("Middle Name");
hmac.update("Last Name");
var hash_HMAC_Prog = hmac.finalize();
console.log("hash_HMAC_Prog : " + hash_HMAC_Prog);