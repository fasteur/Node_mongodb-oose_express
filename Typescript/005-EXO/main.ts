class isSelected {
    constructor (private _clickCount : number , private active: boolean) {
        this._clickCount = _clickCount;
        this.active = active; 
    }
    clickFct()  { 
        if (this.active !== true ){
            this._clickCount ++;
            this.active = true; 
        } else {
            this._clickCount --; 
            this.active = false; 
        }
    }
    get clickCount () :number {
        return this._clickCount
    }
}
let number = 20;
let selected = false; 
let select = new isSelected(number, selected)


const container = document.querySelector('.container')
const doc = document.querySelector("#likeButton")
var titre = document.createElement("h3");

let para = document.createElement('p'); 
(<Element>doc).addEventListener('click', function(){
    
    para.innerHTML =''
    if(selected == false ){
        
    
    para.innerHTML=`${select.clickCount}`;
    (<Element>doc).classList.toggle('like');
    (<Element>container).appendChild(para);
    (<Element>container).appendChild((<Element>doc))
    select.clickFct()
    }else {
        para.innerHTML=`${select.clickCount}`;
        (<Element>doc).classList.toggle('like');
        (<Element>container).appendChild(para);
        (<Element>container).appendChild((<Element>doc))
    select.clickFct()
    }
})

