Feature: Notificação de novas entregas
  Como uma pessoa entregadora
  Eu quero ser notificada quando uma nova entrega for solicitada
  Para que eu possa aceitá-la ou rejeitá-la e notificar o usuário

Scenario: Notificação de Nova Entrega para Pessoa Entregadora
  Given o usuário está na página "/disponiveis", apenas com entregas pendentes
  When o usuário clica no botão com texto "Solicitar Entrega" na primeira entrega da lista
  And no modal de confirmação, clica no botão com texto "Solicitar"
  Then deverá aparecer um modal com título "Nova entrega \d+ solicitada" e descrição "Lembre-se de gerenciar a evolução da entrega"

Scenario: Notificação de Entrega em Deslocamento para Pessoa Entregadora
  Given o usuário está na página "/historico", com entregas solicitadas
  When o usuário clica no botão com texto "Atualizar para Deslocamento" na primeira entrega
  And no modal de atualização, clica no botão com texto "Atualizar"
  Then deverá aparecer um pop-up com título "Entrega \d+ em deslocamento" e descrição "Bom trabalho!"

Scenario: Notificação de Entrega Realizada para Pessoa Entregadora
  Given o usuário está na página "/historico", com entregas em deslocamento
  When o usuário clica no botão com texto "Atualizar para Entregue" na primeira entrega com esse status
  And no modal de atualização, clica no botão com título "Atualizar"
  Then deverá aparecer um pop-up com título "Entrega \d+ realizada" e a descrição "Bom trabalho!" 
