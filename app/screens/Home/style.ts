import styled from "styled-components/native";

const Card = styled.TouchableOpacity`
  width: 90%;
  margin: 8px auto;
  padding: 32px;

  border-radius: 16px;

  background: #252525;
`;

const CardTitle = styled.Text`
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

const CardCode = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: right;
`;

export { Card, CardTitle, CardCode };
