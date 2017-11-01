'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if(collectionA.length > 0 && typeof(objectB)=="object"){
	 var lengthA = collectionA.length;
	 var lengthB = objectB.value.length;
	for(var indexA = 0; indexA < lengthA; indexA++){
		for(var indexB = 0; indexB < lengthB; indexB++){
			if(collectionA[indexA].key == objectB.value[indexB]){
				var count = parseInt(collectionA[indexA].count / 3);
				collectionA[indexA].count -= count;
			}
		}
	}
	return collectionA;
  } 
}
