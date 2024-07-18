
const HashMap = function() {

    // collision handling with an array
    
    const loadFactor = 0.75;
    let capacity = 16;
    let map = new Array(capacity).fill(null).map(() => []);


    function hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
     
        return hashCode;
    }
    
    function set(key, value) {

        const index = hash(key);
        const bucket = map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; 
                return;
            }
        }

        bucket.push([key,value]);

        manageCapacity();
    }

    function manageCapacity() {

        const currFillLevel = (length() / capacity).toFixed(2);

        if (currFillLevel >= loadFactor) {

            const oldMap = map;
            capacity = Math.floor(capacity * 1.5);
            map = new Array(capacity).fill(null).map(() => []);

            for(const bucket of oldMap) {
                for(const [key, value] of bucket) {
                    set(key, value);
                }
            }
        }
    }

    function get(key) {
        const index = hash(key);
        const bucket = map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]; 
            }
        }

        return null;
    }

    function clear() {
        map = new Array(capacity).fill(null).map(() => []);
    }

    function has(key) {
        const index = hash(key);
        const bucket = map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true;
            }
        }
        
        return false;
    }

    function remove(key) {
        const index = hash(key);
        const bucket = map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    function length() {
        return map.reduce((acc, bucket) => acc + bucket.length, 0);
    }

    function keys() {
        return map.flatMap(bucket => bucket.map(entry => entry[0]));
    }

    function values() {
        return map.flatMap(bucket => bucket.map(entry => entry[1]));
    }

    function entries() {
        return map.map(bucket => bucket);
    }

    function getCapacity() {
        return capacity;
    }

    return {set, get, has, remove, length, keys, values, entries, clear, getCapacity};
}

export default HashMap;