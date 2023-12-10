import { anu } from 'anu-vue'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app, isClient }) => {
  if (isClient)
    app.use(anu as any, {
    initialTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '180, 100%, 35%',
        },
      },
    },

})
}
