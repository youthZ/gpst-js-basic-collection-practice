'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
	var result = [];
	if(collectionA.length > 0 && collectionB.length > 0){
	 var indexA = 0;
	 var indexB = 0;
	 var indexResult = 0;
	 var lengthA = collectionA.length;
	 var lengthB = collectionB.length;
	 for (indexA = 0;indexA < lengthA; indexA++){
            for(indexB = 0;indexB < lengthB; indexB++){
		if(collectionA[indexA]==collectionB[indexB]){
			result[indexResult] = collectionA[indexA];
			indexResult++;
                }
            }
	 }
		return result;
	}
	return result;
  
}
