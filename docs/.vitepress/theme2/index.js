import ElementPlus from 'element-plus'

// windicss layers
import 'virtual:windi.css'

import VPApp, { globals, NotFound } from '../vitepress'


export default {  
  NotFound,
  Layout: VPApp,
  logo: '/images/element-plus-logo-small.svg',
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
