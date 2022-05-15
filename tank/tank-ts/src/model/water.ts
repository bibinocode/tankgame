import ModelAbstract from './modelAbstract';
import { image } from '../service/image'
export default class extends ModelAbstract implements Model {
  image(): HTMLImageElement {
    return image.get('water')!
  }
  render(): void {
    super.draw()
  }
}