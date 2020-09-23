
import { LikeComponent } from './like.component';


let p = new LikeComponent(546, true);
p.OnClick();
console.log(`LikeCount: ${p.firstCount}, IsSelected: ${p.isButtonSelected}`);