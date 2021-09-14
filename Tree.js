class Tree {
    constructor(){
        this.treeImg=loadImage("images/tree.png")
    }
    display(){
        imageMode(CENTER)
        image(this.treeImg,620,480,450,450)
    }
}