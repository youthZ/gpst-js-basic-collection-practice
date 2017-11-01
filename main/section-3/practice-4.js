'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
		if(collectionA.length > 0){

				var result=[];

				var length = collectionA.length;

				var index, indexResult = 0, indexTemp = 0;

				for (index = 0; index < length ; index++)

				{
				    if(collectionA[index].length > 1){
				        //分割
						if(collectionA[index].indexOf("-") > 0){
							var temp = collectionA[index].split("-");

							result = add(result, temp[0], result.length, 0, parseInt(temp[1]));
						}
						if(collectionA[index].indexOf(":") > 0){
							var temp = collectionA[index].split(":");
							result = add(result, temp[0], result.length, 0, parseInt(temp[1]));
						}
						if(collectionA[index].indexOf("[") > 0){
							var temp1 = collection[index].split("[");
							var temp2 = temp1[1].split("]");
							result = add(result, temp1[0], result.length, 0, parseInt(temp2[0]));
						}
				    }else{
				        result = add(result, collectionA[index], result.length, 0, 1);
				    }
		         }
				if(result.length > 0 && typeof(objectB)=="object"){
					 var lengthA = result.length;
					 var lengthB = objectB.value.length;
					for(var indexA = 0; indexA < lengthA; indexA++){
						for(var indexB = 0; indexB < lengthB; indexB++){
							if(result[indexA].key == objectB.value[indexB]){
								var count = parseInt(result[indexA].count / 3);
								result[indexA].count -= count;
							}
						}
					}
					return result;
				  } 
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
