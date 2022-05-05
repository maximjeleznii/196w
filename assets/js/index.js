window.addEventListener("load", function() {
    id = this.location.hash.substring(1);
    tabAction(id);
});

window.addEventListener('hashchange', function() {
    id = this.location.hash.substring(1);
    tabAction(id);
}, false);

function tabSelect(id) {
    this.location.hash = id;
}

function tabAction(id) {
    const tabs = ["a-3", "a-4", "a-5"];
    if(tabs.includes(id)) {
        document.title = "196W " + id.toUpperCase();
        Array.from(document.getElementsByClassName("nav-button")).forEach(element => {
            if(id + "-btn" == element.id) {
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
}