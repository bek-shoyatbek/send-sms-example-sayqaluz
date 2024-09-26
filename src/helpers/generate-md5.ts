import { createHash } from "node:crypto";

export function generateMd5Hash(text: string, algo = 'md5'): string {
    const hashFunc = createHash(algo);
    hashFunc.update(text);
    return hashFunc.digest('hex');
}