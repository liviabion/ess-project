import { Button } from '@/components/ui/button'
import  PromotionComponent  from '@/components/promotions/promotionComponent'
import { ModalPromotion, ModalAddPromotion} from '@/components/promotions/promotionComponent'


export default function Home() {
    return (
      <main>
        <ModalPromotion />
        <ModalAddPromotion />
      </main>
    )
  }