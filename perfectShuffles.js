function Perfect(len, noisy){
  if(!(this instanceof Perfect)) return new Perfect(len, noisy);
  this.noisy = noisy;
  this.order = this.makeOrder(len);
  this.currentOrder = this.order;
  this.count = 0;
}

Perfect.prototype.makeOrder = function(len){
  var arr = new Array(len);
  for(var i=0; i<len; i++){
    arr[i]=i;
  }
  if(this.noisy)console.log(arr);
  return arr;
}

Perfect.prototype.permute = function(arr){
  var half = arr.length/2 >> 0;
  var newArr = [];
  for(var i=0; i<half; i++){
    newArr.push(arr[i]);
    newArr.push(arr[i+half])
  }
  if(arr.length/2 > half) newArr.push(arr[arr.length-1])
  if(this.noisy)console.log(newArr);
  return newArr;
}

Perfect.prototype.equal = function(a1, a2){
  for(var i=0; i<a1.length; i++){
    if(a1[i] !== a2[i]) return false;
  }
  return true;
}

Perfect.prototype.shuffle = function(){
  this.count++;
  this.currentOrder = this.permute(this.currentOrder);
  if(this.equal(this.currentOrder, this.order)) return this.count;
  return this.shuffle();
}

for(var i=1; i <= 32; i++){ console.log(i, Perfect(i).shuffle())}
