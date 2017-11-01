'use strict';

module.exports = function countSameElements(collection) {
	if(collection.length > 0){

		var result=[];

		var length = collection.length;

		var index, indexResult = 0, indexTemp = 0;

		result[0] = new Object();

		result[0].key = collection[0];

		result[0].count = 1;

		for (index = 1; index < length ; index++)

		{

			while( indexTemp < result.length){

				if(collection[index] == result[indexTemp].key){

					result[indexTemp].count += 1;

					break;

				}else{

					indexTemp ++;

				}

			}

			if(indexTemp == result.length){

				indexResult ++;

				result[indexResult] = new Object();

				result[indexResult].key = collection[index];

				result[indexResult].count = 1;

				indexTemp = 0;

			}

			

		}

		return result;

	}
}

