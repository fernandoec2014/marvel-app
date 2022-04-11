import styled from 'styled-components'

const Styles = styled.div`
  .form {
    background: white;
    border: 1px solid var(--soft-grey);
    padding: 0 32px 12px 32px;
  }
  .form-rows {
    padding: 6px 0;
  }
  .form-colum-label,
  .form-colum-input {
    display: inline-block;
    vertical-align: middle;
  }
  .form-colum-label {
    width: 80px;
    margin-right: 16px;
  }
  .form-colum-input {
    width: 500px;
  }

  .form-title-text {
    text-align: center;
    color: #848484;
  }

  .form .form-button-container {
    margin: 12px 0 12px 0;
    text-align: center;
  }

  .form .form-button-container .form-button {
    display: inline-block;
    vertical-align: middle;
  }

  .form .form-button-container .form-button.ml {
    margin-left: 10px;
  }

  .form .form-button-container .form-button.mr {
    margin-right: 10px;
  }
`
export default Styles
