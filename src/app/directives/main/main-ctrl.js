
let MainCtrl = function ($scope, data, $q, $filter, $sce,$location, $anchorScroll) {
    this.filterText = "";
    this.items = data.pullData();
    this.myclass = "noSelect";

    this.mouseEnter = ($event,item) => {
        if (this.selectedIndex && this.selectedIndex >= 0) {
            this.itemsFiltered[this.selectedIndex].cardStyle = "noSelect";
        }
        
        item.cardStyle = "select";
        this.selectedIndex = this.itemsFiltered.findIndex((i) => {
            return (item.id ==i.id);
        });
    }
    this.selectedIndex = null;

    this.getkeys = (event) => {
        if (event.code === "ArrowDown" || event.code === "ArrowUp") {
            if (!this.selectedIndex) {
                this.selectedIndex = this.itemsFiltered.findIndex((item) => {
                    return (item.cardStyle && (item.cardStyle === "select"));
                });
            }
            if (this.selectedIndex >= 0) {
                this.itemsFiltered[this.selectedIndex].cardStyle = "noSelect";
            }

            if (event.code === "ArrowDown") {
                this.selectedIndex = this.selectedIndex + 1;
            }
            if (event.code === "ArrowUp") {
                this.selectedIndex = this.selectedIndex - 1;
            }
            if (this.selectedIndex >= this.itemsFiltered.length) {
                this.selectedIndex = 0;
            } else if (this.selectedIndex < 0) {
                this.selectedIndex = this.itemsFiltered.length - 1;
            }
            this.itemsFiltered[this.selectedIndex].cardStyle = "select";
            $location.hash(this.itemsFiltered[this.selectedIndex].id);

      
      $anchorScroll();
        }
    }
    this.mouseLeave = ($event,item) => {
        item.cardStyle = "noSelect";
    }
    this.matchingCardContent = (item) => {
        var itemsString = '';
        if (item.items.filter((i) => { return i.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 }).length > 0) {
            itemsString = `<div><span class="matched">${this.filterText}</span> found in items</div>`;
        }
        var retStr = `
<div ><b>${item.id.toString().replace(this.filterText, '<span class="matched">' + this.filterText + '</span>')}</b></div>
        <div >${item.name.toString().replace(this.filterText, '<span class="matched">' + this.filterText + '</span>')}</div>
        ${itemsString}
        <div >${item.address.toString().replace(this.filterText, '<span class="matched">' + this.filterText + '</span>')}</div>
        <div >${item.pincode.toString().replace(this.filterText, '<span class="matched">' + this.filterText + '</span>')}</div>

`;
        return $sce.trustAsHtml(retStr);


    }
}
export default MainCtrl;