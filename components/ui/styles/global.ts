import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 600;

  margin: 16px auto;
  color: #252525;
`;

const Paragraph = styled.Text`
  font-size: 16px;
  font-weight: 500;

  color: #252525;
`;

const Input = styled.TextInput`
  width: 90%;
  padding: 16px 32px;
  margin: 16px auto;

  font-size: 16px;
  font-weight: 500;
  color: #000;

  border-bottom-width: 1px;
  border-bottom-color: #c7c7c7;
`;
const ButtonSubmit = styled.TouchableOpacity`
  width: 90%;
  margin: 32px auto;
  padding: 18px;

  background: #252525;
  border-radius: 16px;

  font-size: 32px;
  color: #fff;
`;

const LabelButton = styled.Text`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;

  color: #fff;
`;

export { Container, Title, Paragraph, Input, ButtonSubmit, LabelButton };
