'use client'
import React, { useState, useEffect } from 'react';
import { EditDeliveryPersonStyles } from './styles';
import { ApiDeliveryPerson} from '@/services/deliveryPerson';
import { useRouter } from 'next/navigation';

export default function DeliveryPerson() {
  const [nomeValue, setNomeValue] = useState("");
  const [telefoneValue, setTelefoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [statusValue, setstatusValue] = useState("");
  const [ruaValue, setRuaValue] = useState("");
  const [cepValue, setcepValue] = useState("");
  const [cidadeValue, setCidadeValue] = useState("");
  const [bairroValue, setBairroValue] = useState("");
  const [numeroValue, setNumeroValue] = useState("");
  const [estadoValue, setEstadoValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [complementoValue, setComplementoValue] = useState("");
  const [referenciaValue, setReferenciaValue] = useState("");
  const [enderecoOpen, setEnderecoOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [enderecoData, setEnderecoData] = useState({
    postalCode: cepValue,
    street: ruaValue,
    number: numeroValue,
    district: bairroValue,
    state: estadoValue,
    city: cidadeValue,
    complement: complementoValue,
    reference: referenciaValue
  });
  const [editUserData, seteditUserData] = useState({
    name: nomeValue,
    cpf: cpfValue,
    email: emailValue,
    phone: telefoneValue,
    status: statusValue
  });
  const [deliveryPersonCreated, setDeliveryPersonCreated] = useState(false);
  const [updateConfirmOpen, setUpdateConfirmOpen] = useState(false);
  const router = useRouter();
  const cpfUser = localStorage.getItem('cpfValue') || "";
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ApiDeliveryPerson.getExample(cpfUser);
  
        setNomeValue(response.user.name || "");
        setCpfValue(response.user.cpf || "");
        setEmailValue(response.user.email || "");
        setTelefoneValue(response.user.phone || "");
        setstatusValue(response.user.status || "");
        setcepValue(response.address.postalCode || "");
        setRuaValue(response.address.street || "");
        setCidadeValue(response.address.city || "");
        setBairroValue(response.address.district || "");
        setNumeroValue(response.address.number || "");
        setEstadoValue(response.address.state || "");
        setComplementoValue(response.address.complement || "");
        setReferenciaValue(response.address.reference || "");
      } catch (error) {
        console.error("Erro ao obter informações do entregador:", error);
      }
    }
  
    fetchData();
  }, [cpfUser]);

  const toggleEndereco = () => {
    setEnderecoOpen(!enderecoOpen);
  };

  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };



  const handleConfirmYes = async () => {
    toggleConfirm();
    const data = {
      deliveryPersonData: {
        name: nomeValue,
        cpf: cpfValue,
        email: emailValue,
        phone: telefoneValue,
        status: "active"
      },
      addressData: {
 
      }
    };
    try {
      await ApiDeliveryPerson.updateUser(cpfUser, data);
      console.log("Informações enviadas com sucesso!");
      setDeliveryPersonCreated(true);
    } catch (error) {
      console.error("Erro ao enviar informações para o backend:", error);
    }
  };

  const toggleUpdateConfirm = () => {
    setUpdateConfirmOpen(!updateConfirmOpen);
  };

  const handleUpdateButtonClick = () => {
    toggleUpdateConfirm();
  };

  const handleUpdateConfirmYes = async () => {
    try {
      const addressData = {
        postalCode: enderecoData.postalCode || cepValue,
        street: enderecoData.street || ruaValue,
        number: enderecoData.number || numeroValue,
        district: enderecoData.district || bairroValue,
        state: enderecoData.state || ruaValue,
        city: enderecoData.city || cidadeValue,
        complement: enderecoData.complement || complementoValue,
        reference: enderecoData.reference || referenciaValue,
      };

      const data = {
        deliveryPersonData: {
          name: editUserData.name || nomeValue,
          cpf: editUserData.cpf|| cpfValue,
          email: editUserData.email  || emailValue,
          phone: editUserData.phone || telefoneValue,
          status: editUserData.status || statusValue
        },
        addressData,
      };
  
      await ApiDeliveryPerson.updateUser(cpfUser, data);
      await ApiDeliveryPerson.updateAddress(cpfUser, addressData);
      alert("Dados atualizados")
    } catch (error) {
      console.error("Erro ao atualizar informações:", error);
    } finally {
      toggleUpdateConfirm(); 
    }
  };

  return (
    <div style={EditDeliveryPersonStyles.container}>
      <div style={EditDeliveryPersonStyles.navBar}></div>
      <div style={EditDeliveryPersonStyles.titleContainer}>
        <text style={EditDeliveryPersonStyles.title}>Entregadores</text>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <div style={{ flex: 1 }}>
          {/* Nome */}
          <div style={EditDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={editUserData.name}
              onChange={(e) => seteditUserData({...editUserData,name: e.target.value })}
              placeholder={nomeValue ? nomeValue : "Nome"}
              style={EditDeliveryPersonStyles.inputStyle}
              aria-label='nome'
            />
          </div>

          {/* CPF */}
          <div style={EditDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={editUserData.cpf}
              onChange={(e) => seteditUserData({...editUserData, cpf: e.target.value })}
              placeholder={cpfValue ? cpfValue : "CPF"}
              style={EditDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* Telefone */}
          <div style={EditDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={editUserData.phone}
              onChange={(e) => seteditUserData({...editUserData, phone: e.target.value })}
              placeholder={telefoneValue ? telefoneValue : "Telefone"}
              style={EditDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* Email */}
          <div style={EditDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={editUserData.email}
              onChange={(e) => seteditUserData({...editUserData, email: e.target.value })}
              placeholder={emailValue ? emailValue : "Email"}
              style={EditDeliveryPersonStyles.inputStyle}
            />
          </div>
          <div style={EditDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={editUserData.status}
              onChange={(e) => seteditUserData({...editUserData, status: e.target.value })}
              placeholder={statusValue? statusValue : "Status"}
              style={EditDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* Endereço */}
          <div
            style={{ ...EditDeliveryPersonStyles.inputContainer, cursor: 'pointer' }}
            onClick={toggleEndereco}
          >
            <text style={{ fontSize: '16px', color: '#9ca3af' }}>Endereço</text>
          </div>

          {/* Campos de endereço */}
          {enderecoOpen && (
            <div style={{ flexDirection: 'column', width: '400px' }}>
              <input
                type="text"
                value={enderecoData.postalCode}
                onChange={(e) => setEnderecoData({ ...enderecoData, postalCode: e.target.value })}
                placeholder={cepValue ? cepValue : "CEP"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.street}
                onChange={(e) => setEnderecoData({ ...enderecoData, street: e.target.value })}
                placeholder={ruaValue ? ruaValue : "Rua"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.city}
                onChange={(e) => setEnderecoData({ ...enderecoData, city: e.target.value })}
                placeholder={cidadeValue ? cidadeValue : "Cidade"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.district}
                onChange={(e) => setEnderecoData({ ...enderecoData, district: e.target.value })}
                placeholder={bairroValue ? bairroValue : "Bairro"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.number}
                onChange={(e) => setEnderecoData({ ...enderecoData, number: e.target.value })}
                placeholder={numeroValue ? numeroValue : "Número"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.state}
                onChange={(e) => setEnderecoData({ ...enderecoData, state: e.target.value })}
                placeholder={estadoValue ? estadoValue : "Estado"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.complement}
                onChange={(e) => setEnderecoData({ ...enderecoData, complement: e.target.value })}
                placeholder={complementoValue ? complementoValue : "Complemento"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.reference}
                onChange={(e) => setEnderecoData({ ...enderecoData, reference: e.target.value })}
                placeholder={referenciaValue ? referenciaValue : "Referência"}
                style={EditDeliveryPersonStyles.inputStyle}
              />
            </div>
          )}
        </div>
      </div>

      {/* Pop-up de confirmação de adição */}
      {confirmOpen && (
        <div style={EditDeliveryPersonStyles.confirmPopup}>
          <div style={EditDeliveryPersonStyles.confirmPopupInner}>
            <p>Tem certeza que quer adicionar?</p>
            <div>
              <button onClick={toggleConfirm} style={EditDeliveryPersonStyles.confirmButton}>Não</button>
              <button onClick={handleConfirmYes} style={EditDeliveryPersonStyles.confirmButton}>Sim</button>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up de confirmação de atualização */}
      {updateConfirmOpen && (
        <div style={EditDeliveryPersonStyles.confirmPopup}>
          <div style={EditDeliveryPersonStyles.confirmPopupInner}>
            <p>Tem certeza que quer atualizar?</p>
            <div>
              <button onClick={toggleUpdateConfirm} style={EditDeliveryPersonStyles.confirmButtonPopUp}>Não</button>
              <button onClick={handleUpdateConfirmYes} style={EditDeliveryPersonStyles.confirmButtonPopUp}>Sim</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={handleUpdateButtonClick} style={EditDeliveryPersonStyles.confirmButton}>
        Atualizar
      </button>
      
    </div>
  );
}