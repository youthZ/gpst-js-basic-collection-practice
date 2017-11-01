'use strict';

module.exports = function countSameElements(collection) {
    
 		 if(collection.length > 0){

				var result=[];

				var length = collection.length;

				var index, indexResult = 0, indexTemp = 0;

				for (index = 0; index < length ; index++)

				{
				    if(collection[index].length > 1){
				        //分割
						if(collection[index].indexOf("-") > 0){
							var temp = collection[index].split("-");

							result = add(result, temp[0], result.length, 0, parseInt(temp[1]));
						}
						if(collection[index].indexOf(":") > 0){
							var temp = collection[index].split(":");
							result = add(result, temp[0], result.length, 0, parseInt(temp[1]));
						}
						if(collection[index].indexOf("[") > 0){
							var temp1 = collection[index].split("[");
							var temp2 = temp1[1].split("]");
							result = add(result, temp1[0], result.length, 0, parseInt(temp2[0]));
						}
				    }else{
				        result = add(result, collection[index], result.length, 0, 1);
				    }
		         }
				return result;

			}
	}
	function add(result, collectionKey, indexResult, indexTemp, count){
		if(indexResult > 0){
			while( indexTemp < indexResult){

				if(collectionKey == result[indexTemp].key){

					result[indexTemp].count += count;

					break;

				}else{

					indexTemp ++;

				}

			}

			if(indexTemp == indexResult){

				result[indexResult] = new Object();

				result[indexResult].key = collectionKey;

				result[indexResult].count = count;

			}	
		}else{
			result[indexResult] = new Object();
			result[indexResult].key = collectionKey;
			result[indexResult].count = count;
		}
		return result;
	}
