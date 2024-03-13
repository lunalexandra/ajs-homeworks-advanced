
export default function sortObj (data, sort) {
  const arr1 = [];
  const arr2 = [];
  for(let key in data){
    if(sort.includes(key)){
      arr1.push({key: key, value: data[key]});
    } else {
      arr2.push({key: key, value: data[key]});
    }
  }

  arr2.sort((a, b) => a.key > b.key? 1 : -1);
  return [...arr1, ...arr2];
}