# 🛵 Gestão de Motos - Mottu Challenge

Aplicativo mobile desenvolvido em **React Native com Expo**, criado para auxiliar a **Mottu** na gestão de motos em pátios, incluindo funcionalidades de cadastro, listagem, busca e gerenciamento de filiais.

---

## 👨‍💻 Integrantes

- **Enzo Prado Soddano** – RM: 557937  
  [GitHub](https://github.com/DerBrasilianer)

- **Lucas Resende Lima** – RM: 556564  
  [GitHub](https://github.com/lucasresendelima)

- **Vinicius Prates Altafini** – RM: 559183  
  [GitHub](https://github.com/vinicius945)

---

## 📱 Sobre o Projeto

Este aplicativo foi desenvolvido para o **Challenge da Mottu**, com o objetivo de criar uma solução prática e funcional que facilite o controle de motos e filiais da empresa.

### Funcionalidades

- Cadastrar, listar e remover **motos**.
- Cadastrar, listar e remover **filiais**.
- Buscar motos por **modelo**, **placa**, **ID** ou **status** (_no pátio_ / _fora do pátio_).
- Visualizar os **integrantes do time** e seus GitHubs.

> Todos os dados são armazenados **localmente** utilizando `AsyncStorage`.

---

## 🚀 Como Rodar o Projeto Localmente

### ✅ Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **Expo CLI**
- **Emulador Android configurado** ou o **aplicativo Expo Go** instalado no celular

### 📦 Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/DerBrasilianer/challenge_mobile_2025.git
   cd challenge_mobile_2025
   ```

2. **Instale as dependências**:
   ```bash
    npm install -g expo-cli

    npm install @react-navigation/native
    expo install react-native-screens react-native-safe-area-context

    npm install @react-navigation/drawer
    expo install react-native-gesture-handler react-native-reanimated

    npm install @react-navigation/bottom-tabs

    expo install @react-native-async-storage/async-storage

    npm install @expo/vector-icons

    npm install --save-dev typescript @types/react @types/react-native

   ```

3. **Execute o projeto com Expo**:
   ```bash
   npx expo start
   ```
   **Execute o projeto na Web**:
   ```bash
   npm install react-dom react-native-web
   npm run web
   ```

5. **Abra no dispositivo ou emulador**:
   - **No celular**: escaneie o QR Code com o app **Expo Go**.
   - **No emulador**: pressione `a` (Android) ou `i` (iOS - somente em Mac).

---

## 🧩 Estrutura de Navegação

O app utiliza o **Drawer Navigator** para organizar as principais telas:

- **Home**
- **Gestão de Motos**  
  (com abas: _Cadastrar_ / _Listar_)
- **Gestão de Filiais**  
  (com abas: _Cadastrar_ / _Listar_)
- **Buscar Moto**
- **Integrantes**

---

## 📁 Tecnologias Utilizadas

- **React Native**
- **Expo**
- **AsyncStorage**
- **React Navigation**
- **TypeScript**
- **FontAwesome5** (ícones)
- **Componentes funcionais com Hooks**

---

## 🧪 Testado em

- Dispositivos **Android** (via Expo Go)
- **Emuladores Android Studio**
