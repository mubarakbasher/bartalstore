import React from 'react'
import styled from 'styled-components'

function ProducTitle(props) {
  return (
    <div>
        <ProducSection>
            <Title>
                <span>{props.title}</span>
                <span> المزيد</span>
            </Title>
            <Cards>

            </Cards>
        </ProducSection>
    </div>
  )
}

const ProducSection = styled.div`

`;

const Title = styled.div`

`;
const Cards = styled.div`

`;

export default ProducTitle