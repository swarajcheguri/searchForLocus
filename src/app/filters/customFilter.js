let customFilter=function(){
        return function(dataArray, searchTerm) {
            if (!dataArray || !searchTerm) {
                return;
            }
            else {
                 var term = searchTerm.toLowerCase();
                 return dataArray.filter(function(item){
                    var termInId = item.id.toLowerCase().indexOf(term) > -1;
                    var termInName = item.name.toLowerCase().indexOf(term) > -1;
                    var termInItems=item.items.filter(function(i){return i.toLowerCase().indexOf(term)>-1}).length>0;
                    var termAddress = item.address.toLowerCase().indexOf(term) > -1;
                    var termInPinCode = item.pincode.toLowerCase().indexOf(term) > -1;
                    return termInId || termInName ||termAddress ||termInPinCode|| termInItems;
                 });
            } 
        }    
      

}

export default customFilter;