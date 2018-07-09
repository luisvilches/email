function mediaQuery(media = "min-width:768px",pixels = 768){
    var query;
    if(media === "max-width" || media === "min-width" || media === "max-height" || media === "min-height" && typeof pixels === "number"){
        query = media + ":" + pixels.toString() + 'px';
    }

    if(window.matchMedia(`(${query})`).matches){
        return true;
    } else {
        return false;
    }
}

function customTag(tagName,fn){
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
    for ( var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}
   
function col2(element){
    var content = element.innerHTML;
    element.style.width = "50%";
    element.style.display = "inline-block";
    element.style.minHeight = "1px";
    element.style.position = "relative";

    window.addEventListener('resize', function(){
        console.log(mediaQuery("max-width",768))
        if(mediaQuery("max-width",768)){
            element.style.width = "100%";
        }
    });

    element.innerHTML = "<td>"+content+"</td>";
} 

function container(element){
    let content = element.innerHTML;
    element.style.marginRight = "auto";
    element.style.marginLeft = "auto";    
    element.style.width = "100%";
    element.innerHTML = "<table><tbody>"+content+"</tbody></table>";
}   

document.addEventListener('DOMContentLoaded', function(){
    customTag("col-2",col2);
    customTag("e-container",container);
})