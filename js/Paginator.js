import ListRenderer from "./view/listrenderer.js";

export default class Paginator extends ListRenderer {
    constructor(list, container, itemRenderer, listUpdater, optionList, limitList){
        super(list,container,itemRenderer,listUpdater)
        this.optionList = document.querySelector(optionList)
        this.limitList = document.querySelector(limitList)
        this.length = list.length
        
    }

    createOptions(){
        const limit = this.limitList.value
        const limitLength = Math.ceil(this.length / limit)
        console.log(limitLength);
        for (let i = 1; i < limitLength; i++) {
            this.optionList.insertAdjacentHTML("beforeend",`
            <option value=${i}>${i}</option>
            `)
            // const newlyCreatedOption = this.optionList.lastElementChild
            // newlyCreatedOption.addEventListener("click", (event) => {console.log(event.target.value);})
            
        }
        this.optionList.addEventListener("change",() => {
            
        }
        )

    }

}