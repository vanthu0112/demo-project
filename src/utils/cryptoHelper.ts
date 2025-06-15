// utils/cryptoHelper.ts
import CryptoJS from "crypto-js";

// get the secret key from environment variables
const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY!;

// Encrypts the text using AES encryption
export function encrypt(text: string): string {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

// Decrypts the encrypted text using AES decryption
export function decrypt(encryptedText: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
