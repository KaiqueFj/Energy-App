import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export const inserirDadosTeste = async () => {
  const energia_residencial = [
    {
      id: "1",
      data: new Date("2024-11-01"),
      consumo: 120,
      custoEstimado: 80,
      dispositivos: [
        { nome: "Ar Condicionado", consumo: 1.5, status: "Ligado" },
        { nome: "Geladeira", consumo: 1.2, status: "Desligado" },
      ],
    },
    {
      id: "2",
      data: new Date("2024-11-02"),
      consumo: 150,
      custoEstimado: 90,
      dispositivos: [
        { nome: "Microondas", consumo: 2.0, status: "Ligado" },
        { nome: "Lâmpada", consumo: 0.5, status: "Desligado" },
      ],
    },
    {
      id: "3",
      data: new Date("2024-11-03"),
      consumo: 100,
      custoEstimado: 70,
      dispositivos: [
        { nome: "Ar Condicionado", consumo: 1.8, status: "Desligado" },
        { nome: "Geladeira", consumo: 1.3, status: "Ligado" },
      ],
    },
  ];

  const geracao_solar = [
    {
      id: "1",
      data: new Date("2024-11-01"),
      geracaoSolar: 120,
      economiaGerada: 40,
      percentualEnergiaSolar: 30,
    },
    {
      id: "2",
      data: new Date("2024-11-02"),
      geracaoSolar: 110,
      economiaGerada: 35,
      percentualEnergiaSolar: 28,
    },
    {
      id: "3",
      data: new Date("2024-11-03"),
      geracaoSolar: 130,
      economiaGerada: 45,
      percentualEnergiaSolar: 32,
    },
  ];

  const historico_energia = [
    {
      id: "1",
      data: new Date("2024-11-01"),
      consumoTotal: 200,
      geracaoSolar: 120,
      custoTotal: 100,
      economiaSolar: 40,
    },
    {
      id: "2",
      data: new Date("2024-11-02"),
      consumoTotal: 220,
      geracaoSolar: 110,
      custoTotal: 110,
      economiaSolar: 45,
    },
    {
      id: "3",
      data: new Date("2024-11-03"),
      consumoTotal: 210,
      geracaoSolar: 130,
      custoTotal: 105,
      economiaSolar: 50,
    },
  ];

  const recomendacoes = [
    {
      id: "1",
      data: new Date("2024-11-01"),
      dicas: [
        "Reduzir o uso de ar-condicionado à noite.",
        "Utilizar mais a luz natural durante o dia.",
      ],
    },
    {
      id: "2",
      data: new Date("2024-11-02"),
      dicas: [
        "Desligar aparelhos quando não estiverem em uso.",
        "Trocar lâmpadas comuns por LED.",
      ],
    },
    {
      id: "3",
      data: new Date("2024-11-03"),
      dicas: [
        "Utilizar timers para controlar o consumo de ar-condicionado.",
        "Revisar isolamento térmico para melhorar a eficiência energética.",
      ],
    },
  ];

  const controle_iot = [
    {
      id: "1",
      dispositivos: [
        { nome: "Ar Condicionado", status: "Ligado", consumoEstimado: 1.5 },
        { nome: "Geladeira", status: "Desligado", consumoEstimado: 1.2 },
      ],
    },
    {
      id: "2",
      dispositivos: [
        { nome: "Lâmpada", status: "Ligado", consumoEstimado: 0.5 },
        { nome: "Televisor", status: "Ligado", consumoEstimado: 1.0 },
      ],
    },
    {
      id: "3",
      dispositivos: [
        { nome: "Microondas", status: "Desligado", consumoEstimado: 2.0 },
        { nome: "Ventilador", status: "Ligado", consumoEstimado: 1.0 },
      ],
    },
  ];

  try {
    // Inserir dados no Firestore
    for (const energia of energia_residencial) {
      await addDoc(collection(db, "energia_residencial"), energia);
    }
    for (const solar of geracao_solar) {
      await addDoc(collection(db, "geracao_solar"), solar);
    }
    for (const historico of historico_energia) {
      await addDoc(collection(db, "historico_energia"), historico);
    }
    for (const recomendacao of recomendacoes) {
      await addDoc(collection(db, "recomendacoes"), recomendacao);
    }
    for (const dispositivo of controle_iot) {
      await addDoc(collection(db, "controle_iot"), dispositivo);
    }
    console.log("Dados inseridos com sucesso!");
  } catch (e) {
    console.error("Erro ao adicionar documentos: ", e);
  }
};
