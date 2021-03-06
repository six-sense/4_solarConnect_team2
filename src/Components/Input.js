import React from 'react';
import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';

Input.propTypes = {
    value:PropTypes.string,
    setValue:PropTypes.func
}

export default function Input(props){
    const onChangeValue = (e) => {
        props.setValue(e.target.value);
    }
    return(
        <Container>
            <MyInput value={props.value} onChange={onChangeValue} placeholder="숫자와 콤마(,)만 입력하세요."/>
        </Container>
        
    )
}

const Container = styled.div`
    ${({theme}) => theme.flexSet()};
    position:relative;
`
const InputLayout = css`
    background-color: #D9D4CF;
    border-radius:5px;
    border:0;
    padding:20px;
    box-sizing:border-box;
    font-size:17px;
    color:#000;
`;

const MyInput = styled.textarea`
    width:100%;
    height:100px;
    resize:none;
    &:focus {
        outline: none;
        border: 2px solid #7C7877;
    }
    ${InputLayout}
`


