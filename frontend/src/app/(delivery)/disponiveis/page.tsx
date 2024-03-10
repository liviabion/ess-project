'use client'

import { AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ApiDeliveryNotification } from "@/services/deliveryNotification";
import { BanIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const deliveryPersonEmail = 'paula@gmail.com';

export default function AvailablePages() {
  const { toast } = useToast();
  const [deliveries, setDeliveries] = useState<ApiDeliveryNotification.DeliveriesReturn[] | null>(null)

  const getDeliveries = async () => {
    const deliveries = await ApiDeliveryNotification.getAllDeliveries();
    setDeliveries(deliveries.filter(delivery => delivery.status === 'pendente'));
  }

  const handleRequestDelivery = async (id: number) => {
    const response = await ApiDeliveryNotification.requestDelivery(id.toString(), { status: 'solicitada', deliveryPersonEmail });
    if (response.status === null) {
      toast({
        title: 'Erro ao solicitar entrega',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
        duration: 10000,
      });
      return;
    } else if (response.status === 200) {
      toast({
        title: response.data.notification.title,
        description: "Lembre-se de gerenciar a evolução da entrega",
        action: <ToastAction altText="Gerenciar entregas" asChild><Link href="/historico">Gerenciar entregas</Link></ToastAction>,
        variant: 'success',
        duration: 10000,
      });
      getDeliveries();
    }
  }

  useEffect(() => {
    getDeliveries();
  }, []);

  if (!deliveries) {
    return (
      <div className="max-w-7xl space-y-4 flex flex-col items-center justify-center mx-auto my-4 px-4">
        <p className="text-lg text-aury font-semibold text-center">Carregando...</p>
      </div>
    )
  }

  else if (deliveries.length === 0) {
    return (
      <div className="max-w-7xl space-y-4 flex flex-col items-center justify-center mx-auto my-4 px-4">
        <p className="text-lg text-aury font-semibold text-center">Não há entregas pendentes nesse momento</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl space-y-4 flex flex-col items-center justify-center mx-auto my-4 px-4">
      <h1 className="text-2xl font-bold text-aury text-center">
        Entregas disponíveis
      </h1>
      {
        deliveries.map((delivery) => {
          return (
            <Card key={delivery.id} className="w-full border border-aury">
              <CardContent className="space-y-4 p-4">
                <div>
                  <p className="text-2xl font-bold text-aury">Delivery {delivery.id}</p>
                  <p className="text-lg text-aury">{delivery.item.length} itens</p>
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

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="aury">Solicitar entrega</Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>

                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-aury">Confirma que deseja solicitar a entrega {delivery.id}?</AlertDialogTitle>
                      <AlertDialogDescription className="text-aury">
                        Ao solicitar a entrega, você será responsável por entregá-la ao destinatário.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-aury text-aury gap-2">
                        <BanIcon size={24} />
                        Voltar
                      </AlertDialogCancel>
                      <AlertDialogAction className="border-aury bg-aury gap-2" onClick={() => handleRequestDelivery(delivery.id)}>
                        <CheckIcon size={24} />
                        Solicitar
                      </AlertDialogAction>
                    </AlertDialogFooter>

                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          )
        })
      }
    </div>
  )
}