import './style.scss'
import config from './config'
import straw from './canvas/straw'
import wall from './canvas/wall'
import { promise } from './service/image'
const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

// 自动加载所有贴图
async function bootstrap() {
  await Promise.all(promise)
  straw.render()
  wall.render()
}
void bootstrap()