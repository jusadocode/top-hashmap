
const HashSet = function() {

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
    
    function set(key) {

        if (has(key)) {
            return; 
        }
        const index = hash(key);
        const bucket = map[index];

        bucket.push(key);


        manageCapacity();
    }

    function manageCapacity() {

        const currFillLevel = (length() / capacity).toFixed(2);

        if (currFillLevel >= loadFactor) {

            const oldMap = map;
            capacity = Math.floor(capacity * 1.5);
            map = new Array(capacity).fill(null).map(() => []);

            for(const bucket of oldMap) {
                for(const key of bucket) {
                    set(key);
                }
            }
        }
    }

    function get(key) {
        const index = hash(key);
        const bucket = map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] === key) {
                return bucket[i];
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
            if (bucket[i] === key) {
                return true;
            }
        }
        
        return false;
    }

    function remove(key) {
        const index = hash(key);
        const bucket = map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] === key) {
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
        return map.flatMap(bucket => bucket);
    }


    function entries() {
        return map.filter(bucket => bucket.length > 0);
    }

    function getCapacity() {
        return capacity;
    }

    return {set, get, has, remove, length, keys, entries, clear, getCapacity};
}

export default HashSet;