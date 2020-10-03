import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
`

export const Header = styled.header`
  height: 15vh;
  min-height: 250px;
  padding: 24px;
  background: #017cba;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: bold;
  }
`

export const Title = styled.h1`
  margin: 32px 0 0 0;
  color: #fff;
`

export const Content = styled.main`
  height: 85vh;
  margin: -100px 16px 25px;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid #e6e6f0;
  background: #fff;
`