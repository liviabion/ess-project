'use client'

import { AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ApiDeliveryNotification } from "@/services/deliveryNotification";
import { BanIcon, RedoIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deliveryStatusBadge } from "./utils";
import { useDeliveryPerson } from "@/providers/deliveryPerson";
import { ApiSupport } from "@/services/support";

export default function AvailablePages() {
  const { toast } = useToast();
  const { deliveryPerson } = useDeliveryPerson();
  const [deliveries, setDeliveries] = useState<ApiDeliveryNotification.DeliveriesReturn[] | null>(null)

  const getDeliveries = async (deliveryPerson: ApiSupport.DeliveryPerson | null) => {
    const deliveries = await ApiDeliveryNotification.getAllDeliveries();
    setDeliveries(
      deliveries
        .filter(delivery => delivery.deliveryPerson && delivery.deliveryPerson.email === deliveryPerson?.email)
        .reverse()
    );
  }

  const handleRequestDelivery = async (id: number, updatedStatus: string) => {
    const response = await ApiDeliveryNotification.updateDelivery(id.toString(), { status: updatedStatus, deliveryPersonEmail: deliveryPerson?.email });
    if (response.status === null) {
      toast({
        title: 'Erro ao atualizar entrega',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
        duration: 10000,
      });
      return;
    } else if (response.status === 200) {
      toast({
        title: response.data.notification.title,
        description: "Bom trabalho!",
        variant: 'success',
        duration: 10000,
      });
      getDeliveries(deliveryPerson);
    }
  }

  useEffect(() => {
    getDeliveries(deliveryPerson);
  }, [deliveryPerson]);

  return (
    <div className="max-w-7xl space-y-4 flex flex-col items-center justify-center mx-auto my-4 px-4">
      {
        !deliveries ? (
          <p className="text-lg text-aury font-semibold text-center">Carregando...</p>
        ) : deliveries.length === 0 ? (
          <>
            <p className="text-lg text-aury font-semibold text-center">Você não possui entregas, até o momento.</p>
            <Button variant="aury" asChild className="px-5 py-2">
              <Link href="/disponiveis" className="text-xl text-aury font-semibold text-center">Confira entregas disponíveis para você aqui!</Link>
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-aury text-center">
              Seu histórico de entregas
            </h1>
            {
              deliveries.map((delivery) => {
                const { name: statusName, color: backgroundColor, updateToStatus } = deliveryStatusBadge[delivery.status]
                const updateToStatusName = updateToStatus === '' ? null : deliveryStatusBadge[updateToStatus].name;
                return (
                  <Card key={delivery.id} className="w-full border border-aury">
                    <CardContent className="space-y-4 p-4">
                      <div>
                        <div className="flex gap-4 items-center">
                          <p className="text-2xl font-bold text-aury">Delivery {delivery.id}</p>
                          <p className={`text-sm font-semibold px-2 py-1 rounded text-white`} style={{ backgroundColor }}>{statusName}</p>
                        </div>
                        <p className="text-lg text-aury">{delivery.item.length} {delivery.item.length === 1 ? 'item' : 'itens'}</p>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        {
                          delivery.item.map(item => {
                            return (
                              <Card key={item.id} className="w-full border border-aury">
                                <CardContent className="flex items-center justify-start space-x-4 p-4 text-aury">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-sm font-semibold px-2 py-1 rounded bg-aury text-white">{item.category}</p>
                                </CardContent>
                              </Card>
                            )
                          })
                        }
                      </div>

                      {
                        updateToStatusName && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="aury">Atualizar para {updateToStatusName}</Button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>

                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-aury">Confirma que deseja atualizar a entrega {delivery.id} para {updateToStatusName}?</AlertDialogTitle>
                                <AlertDialogDescription className="text-aury">
                                  Ao confirmar, a entrega será atualizada para {updateToStatusName} e você será notificado
                                </AlertDialogDescription>
                              </AlertDialogHeader>

                              <AlertDialogFooter>
                                <AlertDialogCancel className="border-aury text-aury gap-2">
                                  <BanIcon size={24} />
                                  Voltar
                                </AlertDialogCancel>
                                <AlertDialogAction className="border-aury bg-aury gap-2" onClick={() => handleRequestDelivery(delivery.id, updateToStatus)}>
                                  <RedoIcon size={24} />
                                  Atualizar
                                </AlertDialogAction>
                              </AlertDialogFooter>

                            </AlertDialogContent>
                          </AlertDialog>
                        )
                      }

                    </CardContent>
                  </Card>
                )
              })
            }
          </>
        )
      }
    </div>
  )
}