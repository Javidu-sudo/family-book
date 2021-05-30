var img = ["dad.jpeg","mom.jpeg","sister.jpeg","brother.jpeg"]
var i = 0
function Photo(){
    document.getElementById("photos").src = img[i]
    i++
    if(i==4){
i=0
    }
}