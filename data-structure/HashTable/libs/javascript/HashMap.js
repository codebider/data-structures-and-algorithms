class Item {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}


class HashTable {
    constructor(size) {
        this.size = size;
        this.table = [];
        for (let i = 0; i < size; i++) {
            this.table.push([]);
        }
    }

    hashFunction(key) {
        return key % this.size
    }

    set(key, value) {
        const hashIndex = this.hashFunction(key);
        for (let i = 0; i < this.table[hashIndex].length; i++) {
            const item = this.table[hashIndex][i];
            if (item.key === key) {
                item.value = value;
            }

        }
        this.table[hashIndex].push(new Item(key, value));
    }

    get(key) {
        const hashIndex = this.hashFunction(key);
        for (let i = 0; i < this.table[hashIndex].length; i++) {
            const item = this.table[hashIndex][i];
            if (item.key === key) {
                return item.value;
            }
        }
        throw new Error('Cannot find');
    }

    remove(key) {
        const hashIndex = this.hashFunction(key);
        for (let i = 0; i < this.table[hashIndex].length; i++) {
            const item = this.table[hashIndex][i];
            if (item.key === key) {
                this.table[hashIndex].splice(i, 1);
                return
            }
        }
    }
}

module.exports = HashTable;
