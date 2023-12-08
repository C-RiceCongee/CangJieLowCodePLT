import {App} from "vue"
export  async function getComponentsConfig(){
    const modules =  import.meta.glob("./*/component.json");
    const componentsConfigList = []
    for (const path in modules) {
        const res = await modules[path]()
        componentsConfigList.push(res.default)
    }
    return componentsConfigList
}

export  async function registerComponents(App:App<Element>){
    const modules =  import.meta.glob("./*/banner.vue");
    for (const path in modules) {
        const res = await modules[path]()
        console.log(res.default)
        App.component(res.default.__name,res.default)
    }
}