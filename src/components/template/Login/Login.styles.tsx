import styled from 'styled-components'

const Styles = styled.div`
  .container {    
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: var(--soft-grey);
  }
  .page-container {
    background-color: var(--soft-grey);
    margin: 0px auto;
    max-width: 800px;
  }
  .login-container {
    background-color: var(--light-white);
    margin: 0px auto;
    max-width: 360px;
    margin-top: 25%;
    padding: 1px 24px 48px 24px;
  }
  .title-text {    
    text-align: center;
    color: #848484;
  }
`
export default Styles
