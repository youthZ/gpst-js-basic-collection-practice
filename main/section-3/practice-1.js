'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if(collectionA.length > 0 && typeof(objectB)=="object"){
	 var lengthA = collectionA.length;
	 var lengthB = objectB.value.length;
	for(var indexA = 0; indexA < lengthA; indexA++){
		for(var indexB = 0; indexB < lengthB; indexB++){
			if(collectionA[indexA].key == objectB.value[indexB]){
				collectionA[indexA].count -= 1;
			}
		}
	}
	return collectionA;
  } 
}
