import cryptojs from 'crypto-js';
import jsonfile from 'jsonfile';

const secret = 'secret';
export default class Storage {
    constructor(path, encrypt = true) {
        this.path = path;
        this.encrypt = encrypt;
    }

    loadSettings() {
        let obj;
        try {
            obj = jsonfile.readFileSync(this.path);
        } catch (e) {
            obj = {};
        }
        return obj;
    };

    saveSettings(obj) {
        jsonfile.writeFileSync(this.path, obj);
    };

    setKey(key, val) {
        const obj = this.loadSettings();
        obj[key] = val;
        return obj;
    };

    getKey(key) {
        const obj = this.loadSettings();
        return obj[key];
    };

    /**
     * function to encrypt and write value to setting file
     * @param  {string} key    identifier for value
     * @param  {json} value    json formatted value
     */
    write(key, value) {
        let val = JSON.stringify(value);
        if (this.encrypt) {
            const encryptedData = cryptojs.AES.encrypt(val, secret);
            val = encryptedData.toString();
        }

        const obj = this.setKey(key, val);
        this.saveSettings(obj);
    };

    /**
     * function to decrypt and read value to setting file
     * @param  {[string]}   key identifier for value
     * @return {[json]}     json formatted value
     */
    read(key) {
        try {
            const value = this.getKey(key);
            if (!this.encrypt || value === undefined) {
                return JSON.parse(value);
            }

            const bytes = cryptojs.AES.decrypt(value, secret);
            return JSON.parse(bytes.toString(cryptojs.enc.Utf8));
        } catch (e) {
            return undefined;
        }
    };
}
