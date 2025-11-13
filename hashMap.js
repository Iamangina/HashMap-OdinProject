export function hashMap(initialLoadFactor = 0.75, initialCapacity = 16){
    let capacity = initialCapacity;
    let size = 0;
    let buckets = new Array(capacity);
    
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % capacity;
    } 

    function set(key, value){
        const index = hash(key);
        const bucket = buckets[index];
        if(!bucket){
            buckets[index] = [];
        }
        for(let pair of buckets[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        buckets[index].push([key, value]);
        size++;

        if ((size / capacity) > initialLoadFactor) {
            resize();
        }
    } 

    function get(key){
        const index = hash(key);
        const bucket = buckets[index];
        if(!bucket){
            return null;
        }
        for(let pair of bucket){
            if(pair[0] === key){
                return pair[1];
            }
        } return null;
    }

    function has(key){
        const index = hash(key);
        const bucket = buckets[index];
        if(!bucket){
            return false;
        }
        for(let pair of bucket){
            if(pair[0] === key){
                return true;
            }
        } return false;
    }
    
    function remove(key){
        const index = hash(key);
        const bucket = buckets[index];
        if(!bucket){
            return false;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                size--;
                return true;
            }
        } return false;
    }

    function length(){
        return size;
    }

    function clear(){
        buckets = new Array(capacity);
        size = 0;
    }

    function keys(){
        const result = [];
        for(let bucket of buckets){
            if(bucket){
                for(let pair of bucket){
                    result.push(pair[0]);
                }
            }
        }
        return result;
    }

    function values(){
        const result = [];
        for(let bucket of buckets){
            if(bucket){
                for(let pair of bucket){
                    result.push(pair[1]);
                }
            }
        }
        return result;
    }

    function entries(){
        const result = [];
        for(let bucket of buckets){
            if(bucket){
                for(let pair of bucket){
                    result.push(pair[0], pair[1]);
                }
            } 
        }
        return result;
    }

   function resize() {
    const oldBuckets = buckets;
    capacity *= 2;
    buckets = new Array(capacity);
    size = 0;

    for (let bucket of oldBuckets) {
        if(bucket){
            for (let pair of bucket) {
                set(pair[0], pair[1]);
            }
        }
    }
   }

   function currentLoadFactor() {
    return size / capacity;
    }

    return{
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
        currentLoadFactor
    }

}
