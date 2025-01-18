import styled from "styled-components/native";

const HeaderModel = styled.View`
    position: relative;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 16px;
`

export {HeaderModel, BackButton}