import styled from "styled-components/native";

const ContentLogin = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const ContentLogo = styled.View`
  align-items: center;

  width: 100%;
  margin-bottom: 32px;
`

const ContainerEye = styled.View`
  width: 100%;
`;

const Eye = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  bottom: 30px;
`;

export { ContentLogin, ContainerEye, Eye, ContentLogo };
