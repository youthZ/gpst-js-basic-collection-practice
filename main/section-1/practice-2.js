'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  if(collectionA.length > 0 && collectionB.length > 0){
	var result =[];
	var lengthA = collectionA.length;
	var lengthB_row = collectionB.length;
	var lengthB_col = collectionB[0].length;
	var indexA, indexB_row, indexB_col, indexResult=0;
	for(indexA = 0; indexA < lengthA; indexA++){
		for(indexB_row = 0; indexB_row < lengthB_row; indexB_row++){
			for(indexB_col = 0; indexB_col < lengthB_col; indexB_col++){
				if(collectionA[indexA] == collectionB[indexB_row][indexB_col]){
					result[indexResult] = collectionA[indexA];
					indexResult++;
				}
			}
		}
	}
  	return result;
  }
}
