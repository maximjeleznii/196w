function tabSelect(id) {
    this.location.hash = id;
}

window.addEventListener('hashchange', function() {
    var tabs = ["a-3", "a-4", "a-5"];
    id = this.location.hash.substring(1);
    if(tabs.includes(id)) {
        Array.from(document.getElementsByClassName("nav-button")).forEach(element => {
            if(id+"-btn" == element.id) {
                if(!element.classList.contains("active")) {
                    element.classList.add("active");
                }
            } else {
                if(element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            }
        });
        Array.from(document.getElementsByClassName("tab")).forEach(element => {
            if(id == element.id) {
                if(!element.classList.contains("active")) {
                    element.classList.add("active");
                }
            } else {
                if(element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            }
        });
    }
}, false);